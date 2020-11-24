/*
 * @Author: your name
 * @Date: 2020-11-22 21:55:46
 * @LastEditTime: 2020-11-24 21:24:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-js\app.js
 */

const express = require('express');
const app = express();

// Routes
const storesRoute = require("../api/routes/stores");
const ordersRoute = require("../api/routes/orders");

app.use('/stores', storesRoute);
app.use('/orders', ordersRoute);

// Middleware
const { prices, items } = require("../middle");
app.use(prices);

app.get('/', items, prices, (req, res) => {
    res.send( { data: "result" });
});

module.exports = app;

