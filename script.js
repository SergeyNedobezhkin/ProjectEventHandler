'use strict';
const btn = document.getElementById('btn');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');
const input = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');

const colorTransfer = function () {
    square.style.backgroundColor = input.value;
};

const change = function () {
    rangeSpan.textContent = range.value + '%';
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
};

document.getElementById('e_btn').style.display = 'none';
change();

btn.addEventListener("click", colorTransfer);
range.addEventListener("input", change);