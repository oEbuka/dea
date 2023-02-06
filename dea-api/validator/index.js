exports.createPostValidator = (req, res, next) =>{
    //Title 
    req.check('title', "Write a title").notEmpty()
    req.check('title', 'Title must be between 4 to 150 characters').isLength({
        min:4,
        max:150
    });

    //Body
    req.check('body', "Write a body").notEmpty()
    req.check('body', 'Body must be between 4 to 2000 characters').isLength({
        min:4,
        max:2000
    });
    // check for errors 
    const errors = req.validationErrors()
    //if error shows the first as it happens
    if(errors) {
        const firstError = errors.map(() => error.msg)[0]
        return res.status(400).json({error: firstError})
    }
    //proceed to next middleware 
    next();
};