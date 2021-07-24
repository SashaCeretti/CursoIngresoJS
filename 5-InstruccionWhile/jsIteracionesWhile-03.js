/*al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar()
{
	let clave;

	//pido dato
	clave = prompt("Ingrese la clave: ");

	//mientras el dato sea invalido, lo informo y lo vuelvo a pedir
	while(clave != "utn750"){ //tengo que poner una condicion que sea verdadera cuando el dato sea invalido

	clave = prompt("Clave incorrecta. Reingrese la clave: ");
	}

	alert("Clave correcta");

	
}//FIN DE LA FUNCIÓN
