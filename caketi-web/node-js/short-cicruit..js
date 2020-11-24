/*
 * @Author: your name
 * @Date: 2020-11-23 18:51:08
 * @LastEditTime: 2020-11-23 19:07:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-js\short-cicruit..js
 */
const post = {
    author: "cc",
    tiltle: "Logical assignment operators"
};

// Replcaes post.author if post.author is falsy,but always assigns.
post.author = post.author || "YOU";

// Does the same as above,but only assigns if post.author is falsy.
post.author ||= "YOU";

