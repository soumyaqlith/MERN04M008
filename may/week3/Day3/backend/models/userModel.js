const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true,"kindly fill the fullname"]
    },
    age: Number,
    email: {
        type: String,
        required: true
    },
    password: String,

    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }

    // products:[
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:"Product"
    //     }
    // ]
},
    {
        versionKey: false,
        timestamps: true
    })


const User = mongoose.model("User", userSchema);

module.exports = User


