/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let valueToUseWho = who[Math.floor(Math.random() * who.length)];
  let action = ["ate", "peed", "crushed", "broke"];
  let valueToUseAction = action[Math.floor(Math.random() * action.length)];
  let what = ["my homework", "the keys", "the car"];
  let valueToUseWhat = what[Math.floor(Math.random() * what.length)];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let valueToUseWhen = when[Math.floor(Math.random() * when.length)];
  let excuses = [
    valueToUseWho,
    valueToUseAction,
    valueToUseWhat,
    valueToUseWhen
  ];
  var excuse = "";
  excuses.forEach(element => {
    excuse += element + " ";
  });
  $("#excuse").html = excuse;
};
