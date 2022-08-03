window.addEventListener("scroll", function(){
	var header = document.getElementById("encabezado");
	header.classList.toggle("abajo", window.scrollY> 25);
})



let logo = document.getElementById("logo");
let fondo = document.getElementById("fondo")

window.addEventListener('scroll', function(){
	let value = window.scrollY;
	logo.style.marginTop = value * 1.25 + "px";
	fondo.style.backgroundPositionY = value * -.05 + "px";
})