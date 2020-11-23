/*
 * @Author: your name
 * @Date: 2020-11-22 21:57:27
 * @LastEditTime: 2020-11-23 18:39:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-js\server.js
 */
const http = require('http');
const port = 3000;
const app = require('./app/app');

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on ${ port }

                    `);
});