//Alejandro Moreno Camacho
'use strict';

let num = Math.round(Math.random() * 100 +1);
let cont = 0;
let p;

function pedir(){
	let x = prompt("Inserta valor entre 1 y 100");
	return x;
}

do {
	p = pedir();
	if(num < p)
		console.log("El número que has elegido es mayor");
	else if(num > p)	
		console.log("El número que has elegido es menor");
	
	cont++;
}while (num != p);

document.write("Has acertado");
document.write("<br>Lo has intentado " + cont + " veces");
