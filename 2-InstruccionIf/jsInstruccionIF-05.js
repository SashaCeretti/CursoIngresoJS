function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 13 || edad > 17)
	{
	alert("La persona no es adolescente");
	}

	//pensarlo a la inversa

	//if(!(edad>=13 && edad<=17))
	//{
	//	alert("No es adolescente");
	//}

}