window.addEventListener("scroll", function(){
	var header = document.getElementById("encabezado");
	header.classList.toggle("abajo", window.scrollY> 25);
})



let logo = document.getElementById("logo");
let fondo = document.getElementById("fondoImagen")

window.addEventListener('scroll', function(){
	let value = window.scrollY;
	logo.style.marginTop = value * 1.05 + "px";
	fondo.style.top = value * -0.05 + "px";
})