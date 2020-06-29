import "../css/index.css";
// import "../css/2.less";
import img from "../image/2.jpg";
let greeter = require("./greeter.js");
let divs = document.getElementById("box");
let  fn = ()=>{
    console.log(90);
}
fn();
let a = 100;
console.log(a);
let b = 300;
console.log(b);
let str = `<img src="${img}"></img>`
document.body.innerHTML = str;
// document.body.appendChild(greeter());