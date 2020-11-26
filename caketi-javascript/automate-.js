/*
 * @Author: your name
 * @Date: 2020-11-26 20:20:13
 * @LastEditTime: 2020-11-26 21:57:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \undefinedd:\caketi\notes\caketi-javascript\automate-.js
 */
const fs = require("fs");
const path = require("path");

const folder = fs.readdirSync(path.join(__dirname, "project-img"));

const projects = folder.map((name) => {
    const number = +name.split("-")[0]; // "10" -> 10 string to number
    const projectName = name.replace(".png", "").split("-").
                                    slice(1).join("-");

    return { number, projectName };
});

console.log(projects);


// [ { number: 10, projectName: '1000-100' } ]
