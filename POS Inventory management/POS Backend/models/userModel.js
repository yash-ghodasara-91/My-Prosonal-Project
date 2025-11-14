const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name : {
        Types : String,
        required : true,
    },
    
    email : {
        Types : String,
        required : true,
        validate: {
            validator: function (v) {
                return /\s+@\s+\.\s+/.test(v);
            },
            message : "Email must be in valid format!"
        }
    },

    phone : {
        Types : Number,
        required : true,
         validate: {
            validator: function (v) {
                return /\d{10}/.test(v);
            },
            message : "Phone number must be a 10-digit number!"
        }
    },

    password : {
        Types : String,
        required : true,
    },

     role : {
        Types : String,
        required : true,
    }
}, {timestamps : true})

module.exports = mongoose.model("User", userSchema);


