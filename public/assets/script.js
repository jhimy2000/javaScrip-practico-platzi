const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const pid = document.getElementById("parra");
const input = document.querySelector("input");
console.log(input.value);
console.log({ h1, p, parrafito, parra, input });
h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";
h1.classList.add("rojo");
h1.classList.remove("verde");
input.value = "456";
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://static.platzi.com/static/images/conf/logo_black@2x.png"
);
console.log(img);
parra.innerHTML = "";
parra.appendChild(img);
