const express = require('express');
const router = express.Router();
const Money = require('../model/money');

router.post('/', (req, res) => {
    const money = new Money({
        client:req.body.client,
        desc:req.body.desc,
        amount:req.body.amount,
        attendate:req.body.attendate,
    })
    money.save()
    .then((data) =>{
        res.json(data);
    })
})

router.get('/allmoney', (req,res) => {
    Money.find()
    .then((data)=>{
        res.json(data);
    })
})

module.exports = router;