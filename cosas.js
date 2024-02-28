let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "imagenes/mario-portada.png") {
    miImage.setAttribute("src", "imagenes/cacahuates");
  } else {
    miImage.setAttribute("src", "imagenes/mario-portada.png");
  }
};
let boton = document.querySelector("button");
let titulo = document.querySelector("h1");
function nombredeusuario(){
  let nombre = prompt("Ingresa nombre de usuario");
if(!nombre){
  nombredeusuario();
}
else{
  localStorage.setItem("nombre", nombre);
  titulo.innerHTML = "Hola " +nombre;
}
}
if(!localStorage.getItem("nombre")){
  nombredeusuario();
}
else{
  let nombreguardado = localStorage.getItem("nombre");
  titulo.textContent = "Hola " +nombreguardado;
}
boton.onclick =function(){
  nombredeusuario();
};
