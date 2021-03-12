const express = require('express');
const router = express.Router();
const Month = require('../model/monthly');

router.post('/monthadd', (req, res) => {
    const month = new Month({
        monthName:req.body.monthName,
        amountEarn:req.body.amountEarn,
        year:req.body.year
    })
    month.save()
    .then((data) => {
        res.json(data);
    })
})

router.get('/allmonth', (req,res) => {
    Month.find()
    .then((data) => {
        res.json(data);
    });
});

module.exports = router;
