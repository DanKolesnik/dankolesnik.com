"use strict";
var slider = document.getElementById("myRange");
var output = document.getElementById("height");
let rost = (output.innerHTML = slider.value) / 100;
let rostTwo;
slider.oninput = function () {
  return (rostTwo = output.innerHTML = this.value);
};
console.log(rostTwo);
let weight = document.querySelector("#weight").textContent;
let age = document.querySelector("#age").textContent;
// +weight
document.querySelector("#weightPlus").addEventListener("click", function () {
  weight++;
  console.log(weight);
  document.querySelector("#weight").textContent = weight;
});
document.querySelector("#weightMinus").addEventListener("click", function () {
  weight--;
  console.log(weight);
  document.querySelector("#weight").textContent = weight;
});
document.querySelector("#agePlus").addEventListener("click", function () {
  age++;
  console.log(age);
  document.querySelector("#age").textContent = age;
});
document.querySelector("#ageMinus").addEventListener("click", function () {
  age--;
  console.log(age);
  document.querySelector("#age").textContent = age;
});

document.querySelector(".calculate").addEventListener("click", function () {
  let bmi = (weight * 10000) / (rostTwo * rostTwo);
  var result = bmi.toFixed(2);
  console.log(result);
  alert(`Your BMI is ${result}`);
});
