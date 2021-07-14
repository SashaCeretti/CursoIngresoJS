function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	//si la edad esta dentro del rango de adolescente --> es adolescente

	if(edad >= 13 && edad <= 17)
	{
	alert("La persona es adolescente");
	}

	//si la edad no esta fuera del rango de adolescente --> es adolescente
	
	//if(!(edad<13 || edad>17))
	//{
	//	alert("Es adolescente")
	//}

}