const mongoose = require("mongoose");
const uuidv1 = require('uuidv1');
const crypto = require("crypto");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now
    },
    update: Date
})

/**
 * Virtual fields are additional fields for a given model.
 * Their values can be set manually or automatically with defined functionality.
 * virtual properties dont get persisted in the db
 */

// virtual field
userSchema.virtual('password')
.set( function(password){
    //create temporary variable called _password
    this._password = password
    //generate a timestamp
    this.salt = uuidv1();
    //encryptPassword()
    this.hashed_password = this.encryptPassword(password)
})
.get(function(){
    return this._password;
})

//methods
userSchema.methods = {
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function(password){
        if(!password) return "";
        try {
            return crypto.createHmac('sha1', this.salt)
                        .update(password)
                        .digest('hex')
        } catch (err){
            return ""
        }
    }
};

module.exports = mongoose.model("user", userSchema);