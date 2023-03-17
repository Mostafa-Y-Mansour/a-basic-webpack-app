import "./css/style.css";
import WebpackLogo from "./images/webpack-logo.svg";
console.log("hello world!");

document.querySelector(".root").innerHTML = `
  <img src="${WebpackLogo}" alt="">
  <p>Welcome To Webpack.</p>
`;
