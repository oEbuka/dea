exports.getPosts = (req, res) => {
    res.json({
        posts:[
            { title: 'Firstpost' },{ title: 'Second post'}
        ]
    });
};
