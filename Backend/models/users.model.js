const mongoose=require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({

    fullName:{
        firstName:{
            type:String,
            required:true,
            minlength:[3,"FirstName should be of 3 characters"]
        },
        lastName:{
            type:String,
            minlength:[3,"LastName should be of 3 characters"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    },
    socketId:{
        type:String
    }
})
userSchema.methods.generateAuthToken= function (){
    const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
    return token;
}
userSchema.methods.comparePassword= async function (password){
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword= async function(){
    return await bcrypt.hash(password,10);
}
const UserModel=('User', userSchema)
module.exports= UserModel;