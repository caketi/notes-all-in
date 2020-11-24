/*
 * @Author: your name
 * @Date: 2020-11-24 21:17:58
 * @LastEditTime: 2020-11-24 21:37:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-js\middle.js
 */
const prices = (req, res, next) => {
    console.log("The prices are 20$, 50$ and 100$");
    next(); // if the current middleware function does not end the request-response cycle, it must 
            // call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
};

const items = (req, res, next) => {
    console.log("The orders are Fired rice, chicken and plantain chips");
    next();
};

module.exports = { prices, items };