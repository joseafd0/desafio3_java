// PIMERA PARTE
const Elemento1 = document.getElementById("div1");
const Elemento2 = document.getElementById("div2");
const Elemento3 = document.getElementById("div3");
const Elemento4 = document.getElementById("div4");

Elemento1.addEventListener("click", function () {
  Elemento1.style.backgroundColor = "black";
});

Elemento2.addEventListener("click", function () {
  Elemento2.style.backgroundColor = "black";
});

Elemento3.addEventListener("click", function () {
  Elemento3.style.backgroundColor = "black";
});

Elemento4.addEventListener("click", function () {
  Elemento4.style.backgroundColor = "black";
});

// SEGUNDA PARTE
const ElementoKey1 = document.getElementById("key");
const nuevoElemento = document.querySelector("#nuevo-Div-interno");

const nuevoDiv1 = `<div
id="key-escondido" style="width: 200px; height: 200px; background-color: purple"
></div>`;

const nuevoDiv2 = `<div
id="key-escondido" style="width: 200px; height: 200px; background-color: gray"
></div>`;

const nuevoDiv3 = `<div
id="key-escondido" style="width: 200px; height: 200px; background-color: brown"
></div>`;

const agregaElemento = () => {
  nuevoElemento.innerHTML = nuevoDiv;
};

var colorDivKey1 = "";

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "a") {
    colorDivKey1 = "pink";
  } else if (event.key.toLowerCase() === "s") {
    colorDivKey1 = "orange";
  } else if (event.key.toLowerCase() === "d") {
    colorDivKey1 = "cyan";
  } else if (event.key.toLowerCase() === "q") {
    nuevoElemento.innerHTML = nuevoDiv1;
  } else if (event.key.toLowerCase() === "w") {
    nuevoElemento.innerHTML = nuevoDiv2;
  } else if (event.key.toLowerCase() === "e") {
    nuevoElemento.innerHTML = nuevoDiv3;
  } else {
    colorDivKey1 = "white";
  }
  cambiarColor1(colorDivKey1);
});

const cambiarColor1 = (color) => (ElementoKey1.style.backgroundColor = color);


