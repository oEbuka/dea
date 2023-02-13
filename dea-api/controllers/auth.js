const User = require("../models/user");


exports.signup = async  (req, res) =>{
    const userExits = await User.findOne({email: req.body.email})
    if(userExits) return res.status(403).json({
        error: "Email is taken!" 
    })
    const user = await new User(req.body);
    await user.save();
    res.status(200).json({ user }).json({ message: "Signup success! Please login."});
}