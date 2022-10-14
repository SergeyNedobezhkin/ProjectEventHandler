'use strict';

const btn = document.getElementById('btn');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');
const circle = document.getElementById('circle');
const text = document.getElementById('text');
const textSpan = document.getElementById('text-span');

let textSpanColor;
let rangeSpanVallue;

document.getElementById('e_btn').style.display = 'none';
const textLogger = function (event) {
    textSpanColor = textSpan.textContent = event.target.value;
};

btn.addEventListener("click", function () {
    document.getElementById('square').style.backgroundColor = textSpanColor;
});

const rangeLogger = function (event) {
    rangeSpanVallue = rangeSpan.textContent = event.target.value;
    console.dir(event.type);
    if (event.type === "input") {
        circleLogger();
    }
};

const circleLogger = function () {
    circle.style.width = rangeSpanVallue + "%";
    circle.style.height = rangeSpanVallue + "%";
};

text.addEventListener('input', textLogger);
range.addEventListener('input', rangeLogger);
circle.addEventListener('input', circleLogger);

