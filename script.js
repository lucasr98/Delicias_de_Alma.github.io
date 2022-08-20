// HTML GENERAL //

var header = document.getElementById("encabezado");
var menu = document.getElementById("menu");

var check = document.getElementById("check");

let contadorNormalizado = 0;

window.addEventListener("scroll", function(){
	header.classList.toggle("abajo", window.scrollY);
	menu.classList.toggle("menu__chico", window.scrollY);
})


window.addEventListener('scroll', function(){
	var logo = document.getElementById("logo");
	var fondo = document.getElementById("fondoImagen")
	var value = window.scrollY;
	logo.style.marginTop = value * 1.05 + "px";
	fondo.style.top = value * -0.05 + "px";
})

function normalizado(){
	if (contadorNormalizado == 0){
		menu.style.left = "0";
		header.style.backgroundColor = "var(--color__a1)";
		header.style.boxShadow = "0px 0px .5rem 0px rgba(0, 0, 0, .75)";
		contadorNormalizado = 1;
	}
	else {
		menu.style.removeProperty("left");
		header.style.removeProperty("background-color");
		header.style.removeProperty("box-shadow");
		contadorNormalizado = 0;
	}
}

check.addEventListener("click", normalizado, true);



// HTML GENERAL //



// CONTACT //

const name = document.getElementById("contactName"),
email = document.getElementById("contactEmail"),
text = document.getElementById("contactTextArea");

const form = document.getElementById("contactInput");

const warnN = document.getElementById("contactWarningN");
const warnE = document.getElementById("contactWarningE");
const warnT = document.getElementById("contactWarningT");
const warn = document.getElementById("contactWarning");

let contador = 0;

form.addEventListener("submit", e=>{
	let warningN = ""
	let warningE = ""
	let warningT = ""
	let entrar = false
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	warn.innerHTML = ""
	if (name.value.length < 3){
		warningN = "• El nombre no es válido.";
		entrar = true
	}
	if (!regexEmail.test(email.value)){
		warningE = "• El e-mail no es válido.";
		entrar = true
	}
	if (text.value.length < 50){
		warningT = "• El mensaje es muy corto.";
		entrar = true
	}
	if (entrar){
		e.preventDefault()
		warnN.innerHTML = warningN;
		warnE.innerHTML = warningE;
		warnT.innerHTML = warningT;
	}
	else {
		warn.innerHTML = "¡Mensaje enviado!";
	}
})