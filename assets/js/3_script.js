//ORIGINAL
// function pintar() {
//   ele.style.backgroundColor = "yellow";
// }

// const ele = document.getElementById("ele1");

// ele.addEventListener("click", pintar);

//EJERCICIO 2: Modifica la función para que reciba el elemento clickeado
// const ele = document.getElementById("ele1");

// function pintar(ele) {
//   ele.style.backgroundColor = "yellow";
// }

// ele.addEventListener("click", function () {
//   pintar(ele);
// });

//EJERCICIO 3: Modifica el código anterior para poder pasarle un color como argumento a la función pintar.
const ele = document.getElementById("ele1");

function pintar(ele, color='green') {
  ele.style.backgroundColor = color;
}

ele.addEventListener("click", function () {
  pintar(ele, 'yellow');
});
