var header = document.getElementById("encabezado");
var menu = document.getElementById("menu");

var check = document.getElementById("check");

let contador = 0;

window.addEventListener("scroll", function(){
	header.classList.toggle("abajo", window.scrollY> 25);
	menu.classList.toggle("menu__chico", window.scrollY> 25);
})


window.addEventListener('scroll', function(){
	var logo = document.getElementById("logo");
	var fondo = document.getElementById("fondoImagen")
	var value = window.scrollY;
	logo.style.marginTop = value * 1.05 + "px";
	fondo.style.top = value * -0.05 + "px";
})

function normalizado(){
	if (contador == 0){
		header.style.backgroundColor = "var(--color__a1)";
		contador = 1;
	}
	else {
		header.style.removeProperty("background-color");
		contador = 0;
	}
}

check.addEventListener("click", normalizado, true);