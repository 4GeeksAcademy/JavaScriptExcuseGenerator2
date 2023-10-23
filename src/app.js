/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//import { ModuleFilenameHelpers } from "webpack";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};
function generateExcuse() {
  let who = ["I", "My Mom", "My Dad", "My Gram", "My Gramp"];
  let action = ["broke", "lost", "stole", "ruined"];
  let what = ["my homework", "my computer", "my keyboard", "my phone"];
  let when = ["last night", "this morning", "earlier this week"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
}