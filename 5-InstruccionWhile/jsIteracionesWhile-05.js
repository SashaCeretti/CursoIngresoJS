/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("Ingrese F o M");

	while(!(sexo == "F" || sexo == "M" || sexo == "f" || sexo == "m")){

		sexo = prompt("Intente nuevamente. Ingrese F o M");
	}

	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN