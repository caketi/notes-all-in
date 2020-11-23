/*
 * @Author: your name
 * @Date: 2020-11-22 22:25:48
 * @LastEditTime: 2020-11-22 22:35:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-js\api\routes\stores.js
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        maths: "macmillan",
        english: "textbook"
    });
});

router.post('/', (req, res) => {
    res.status(200).json({
        pysiscs: "kkk",
        chemistry: "textbook"
    });
});

router.post('/:storesID', (req, res) => {
    const id = req.param.storesID;
    if (id) {
        res.status(200).json({
            id: req.params.storesID
        });
    }
});

module.exports = router;