"use strict";

window.onload = init;

function init() {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.onclick = submitBtnClicked;
}

function show1() {
  document.getElementById('toppingsBox').style.display = 'none';
}
function show2() {
  document.getElementById('toppingsBox').style.display = 'block';
}


function submitBtnClicked() {
  const inputNumScoops = document.getElementById("inputNumScoops");
  let numScoops = Number(inputNumScoops.value);

  const oneScoop = 2.25
  const addScoop = 1.25
  const taxRate = 0.888

  let basePrice;

  if (numScoops == 1) {
    basePrice = oneScoop;
  }

  if (numScoops >= 1) {
    basePrice = (addScoop * numScoops) + oneScoop;
  }

  let toppings = 0;

  let sprinkles = document.getElementById("checkSprinkles").checked;
  if (sprinkles) {
    toppings += .50;
  }

  let hotFudge = document.getElementById("checkHotFudge").checked;
  if (hotFudge) {
    toppings += 1.25;
  }

  let whippedCream = document.getElementById("checkWhippedCream").checked;
  if (whippedCream) {
    toppings += .25;
  }

  let cherry = document.getElementById("checkCherry").checked;
  if (cherry) {
    toppings += .25;
  }

  const tax = (basePrice + toppings) * taxRate;
  const totalDue = basePrice + toppings + tax;

  const outputBasePrice = document.getElementById("outputBasePrice");
  const outputTaxValue = document.getElementById("outputTaxValue");
  const outputTotalDue = document.getElementById("outputTotalDue");

  outputBasePrice.innerHTML = "$ " + basePrice.toFixed(2);
  outputTaxValue.innerHTML = "$ " + tax.toFixed(2);
  outputTotalDue.innerHTML = "$ " + totalDue.toFixed(2);
}







