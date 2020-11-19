/*
 * @Author: your name
 * @Date: 2020-11-10 22:26:10
 * @LastEditTime: 2020-11-10 22:31:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \caketi\caketi-javascript\learn-js\async-keyword.js
 */
function cc() {
    console.log("c");
}
const promise = async() => {
    cc();
    console.log("what happened?");
    return 42;
};
promise().then((result) => console.log(result)); //42
//Using the 'async' keyword transforms the return-value of the function itself into a Promise.