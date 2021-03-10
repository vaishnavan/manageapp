const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const URI = "mongodb+srv://money:Sakthi98@cluster0.xw1jj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(require('./controller/moneyControl'));

app.listen(process.env.PORT || 5000, () => {
    console.log("server connected");
});

mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true}, (err) => {
    if(!err){
        console.log("database connected")
    }else{
        console.log(err);
    }
})