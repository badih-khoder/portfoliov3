const { Schema, model } = require('mongoose');



const user = new Schema ({
    userName :{
        type : String,
        required : true
    },
    email : {
        type: String,
        required: true
    },
    password:{
       type: String,
       required: true
    }
})

const users = model('users', user);
module.exports = users;