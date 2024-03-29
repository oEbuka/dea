const User = require("../models/user");
require("dotenv").config();
const jwt =  require("jsonwebtoken");
var { expressjwt: expressJwt } = require("express-jwt");
//const { expressjwt: jwt } = require("express-jwt"); this is the solution that has worked for most but as you can see above ive already assigned jwt to jsonwebtoken


exports.signup = async  (req, res) =>{
    const userExits = await User.findOne({email: req.body.email})
    if(userExits) return res.status(403).json({
        error: "Email is taken!" 
    })
    const user = await new User(req.body);
    await user.save();
    res.status(200).json({ message: "Signup success! Please login."});
};

exports.signin = (req, res) => {
    //find the user based on email
    const { email, password } = req.body
    User.findOne({email}, (err, user) => {
        // is err or no user
        if(err || !user){
            return res.status(401).json({
                error: "User with that email does not exist. Please sign in."
            })
        }
        // is user is found make sure the email and password match
        // create an authentication method in model then use here
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: "Email and password does not match"
            })
        }
        //generate a token with user id and secret
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
        //presist the token as  't' in cookie with expiry date
        res.cookie("t", token, {expire: new Date() + 9999})
        // return response with user and token to frontend client
        const { _id, name, email } = user;
        return res.json({ token, user: { _id, email, name}});
    });
  
};

exports.signout = (req, res) => {
    res.clearCookie("t");
    return res.json({ message: "signout success!"});
};

exports.requireSignin = expressJwt({
    // if the token is valid , express jwt appends the verified users id
    //in an auth key to the request object
    algorithms: ['HS256'],
    secret : process.env.JWT_SECRET,
    userProperty: "auth"
});
