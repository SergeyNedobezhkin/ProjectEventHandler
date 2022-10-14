'use strict';
const btn = document.getElementById('btn');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');
const input = document.getElementById('text');
const InputSpan = document.getElementById('text-span');
const square = document.getElementById('square');
const circle = document.getElementById('circle');

const colorTransfer = function (event) {
    square.style.backgroundColor = InputSpan.textContent;
    InputSpan.textContent = event.target.value;
};

const change = function () {
    rangeSpan.textContent = range.value + '%';
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
};
document.getElementById('e_btn').style.display = 'none';
change();

btn.addEventListener("click", colorTransfer);
input.addEventListener("input", colorTransfer);
range.addEventListener("input", change);