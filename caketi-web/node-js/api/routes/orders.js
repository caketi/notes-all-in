/*
 * @Author: your name
 * @Date: 2020-11-22 22:25:58
 * @LastEditTime: 2020-11-22 22:35:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-js\api\routes\orders.js
 */
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.status(200).json({
        firstOrder: "Biology Textbook",
        secondOrder: "comic book"
    });
});

router.post('/:storesID', (req, res) => {
    const id = req.params.storesID;
    if (id) {
        res.status(200).json({
            id: req.params.storesID
        });
    }
});

module.exports = router;