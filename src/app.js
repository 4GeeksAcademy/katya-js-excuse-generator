/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["I "];
  let action = ["ate "];
  let what = ["my homework "];
  let when = ["last night "];

  let excuseGenerator = () => {
    let randomwhoInx = Math.floor(Math.random() * who.length);
    let actionInx = Math.floor(Math.random() * action.length);
    let whatInx = Math.floor(Math.random() * what.length);
    let whenInx = Math.floor(Math.random() * when.length);

    return (
      randomwhoInxwho[whoInx] +
      action[actionInx] +
      what[whatInx] +
      when[whenInx]
    );
  };
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};
