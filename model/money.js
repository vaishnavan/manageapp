const mongoose = require('mongoose');

const moneySchema = new mongoose.Schema({
    client:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    attendate:{
        type:Date,
        required:true,
    }
})

module.exports = mongoose.model('Money', moneySchema);