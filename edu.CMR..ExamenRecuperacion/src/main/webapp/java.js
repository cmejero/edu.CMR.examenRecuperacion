
let palabra;
let palabraOculta=[]
let letra= [];
let separar;
let historial = [];
let intentos = 0;
let arrayPalabra = []
let fechaInicio;
let fechaFin;

let escritura =document.getElementById("escribir");

function introducirPalabra(){
	
	palabra= prompt("introduzca la palabra secreta");
	
	arrayPalabra =palabra.split("")
	let caracter = "*";
	for(let i = 0 ; i < arrayPalabra.length; i++){
		
		i = caracter 
		palabraOculta.push(i)
	}
	
	console.log(arrayPalabra)
	console.log(palabra)
	
}


function introducirLetra(){
	
	fechaInicio = new Date();
	
	let pedirLetra = prompt("Introduzca una letra");
	
	
	if(!Number(pedirLetra) && pedirLetra.length == 1 && intentos <= 5){
		
		letra.push(pedirLetra)
		
		fechaFin = new Date()
				
	}
	else{
		alert("Opcion introducida incorrectamente")
		intentos ++;
		fechaFin = fechaFin = new Date()
	}
	
	 
	
	
	//fechaActual.getMinutes + "." + fechaActual.getSeconds
	escritura.innerHTML += ("<tr><td>"+ palabra + "</td><td>" + intentos + "</td><td>" + fechaFin.getMinutes() + "."+  fechaFin.getSeconds() + "</td></tr>")
	
	
	
	
	 
	
}
function tiempo(){
	let fechaHoy = new Date()
	document.getElementById("fechaH").innerHTML = (fechaHoy.getDate() +"/" + (fechaHoy.getMonth() +1) + "/" + fechaHoy.getFullYear())
	
}


