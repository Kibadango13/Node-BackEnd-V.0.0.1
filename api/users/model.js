const mongoose = require('mongoose');
//var validate = require('mongoose-validator')
const { createHash } =require('../crypt');
const uniqueValidator = require("mongoose-unique-validator");


const schema = new mongoose.Schema({
    name :      {type :  String, required : true},
    email :     {type :  String, required : true, unique: true},
    password  : {type :  String, required : true,select: false}
});




schema.plugin(uniqueValidator); 

schema.pre('save',async function(next){
    const user = this;
    if(!user.isModified('password')){
        return next();
    }
    const hashedPassword  = await createHash(user.password);
    user.password = hashedPassword;
    next();
});


schema.post('save',async function(){
    const user = this;
    user.password = undefined;
})


const User = mongoose.model('User',schema);
module.exports = User;