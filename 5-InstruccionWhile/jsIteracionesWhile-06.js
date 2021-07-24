//APLICAR VALIDACION EN EJERCICIOS

function mostrar()
{
	let contador = 0;
	let numero;
	let acumulador = 0;
	let promedio;

	while(contador < 5){  

		numero = parseInt(prompt("Ingrese un número: "));
		while(isNaN(numero)){
			numero =parseInt(prompt("Eso no es un número. Ingrese nuevamente un número: ")); //ojo esto! que esté!
		}

		acumulador = acumulador + numero;

		contador++; //esto es sinonimo de contador = contador + 1

	}

	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;

	document.getElementById("txtIdPromedio").value = promedio;

}