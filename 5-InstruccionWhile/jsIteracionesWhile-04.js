/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/

function mostrar()
{
	//declaro variables
	let numero;

	//pido datos
	numero = parseInt(prompt("Ingrese un número de 0 a 9"));

	while(!(numero >= 0 && numero <= 9)){

		numero = parseInt(prompt("Intente nuevamente ingresar número entre 0 y 9"));

	}

	document.getElementById("txtIdNumero").value = numero;
	
}//FIN DE LA FUNCIÓN

//OJOO SI PEDIMOS DATOS STRINGS ''NUMEROS'' NO OLVIDAR PARSEINT !!!! el prompt no precisa .value OJO !!