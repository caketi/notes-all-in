/*
 * @Author: your name
 * @Date: 2020-11-10 22:13:46
 * @LastEditTime: 2020-11-12 00:40:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \caketi\caketi-javascript\learn-js\obj-compare.js
 */
const obj1 = { 'a': 1 };
console.log(' obj1: ', obj1); //use universal console utils alt+shift+l to quickly console variables.
const obj2 = { 'a': 1 };

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));


const _ = require('lodash');
console.log(_.isEqual(obj1, obj2));