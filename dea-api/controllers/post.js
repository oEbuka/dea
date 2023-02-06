const Post = require ('../models/post')

exports.getPosts = (req, res) => {
    res.json({
        posts:[
            { title: 'Firstpost' },{ title: 'Second post'}
        ]
    });
};

exports.createPost = (req, res) =>{
    const post = new Post(req.body);
    //console.log("CREATING POST ", post)
    post.save().then(result => {
        res.status(200).json({
            post: result
        });
    });
};