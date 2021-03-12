const mongoose = require('mongoose');

const monthlySchema = new mongoose.Schema({
    monthName:{
        type:String,
        required:true,
    },
    amountEarn:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('Month', monthlySchema);