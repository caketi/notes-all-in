/*
 * @Author: your name
 * @Date: 2020-11-22 21:55:46
 * @LastEditTime: 2020-11-22 22:36:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-js\app.js
 */

const express = require('express');
const app = express();

const storesRoute = require('./api/routes/stores');
const ordersRoute = require('./api/routes/orders');

module.exports = app;