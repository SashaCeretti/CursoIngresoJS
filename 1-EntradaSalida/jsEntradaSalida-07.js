/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultadoSuma;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultadoSuma = numeroUno + numeroDos;

	alert("El resultado de la suma es " + resultadoSuma);

}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultadoResta;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultadoResta = numeroUno - numeroDos;

	alert("El resultado de la resta es " + resultadoResta);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultadoMultiplicacion;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultadoMultiplicacion = numeroUno * numeroDos;

	alert("El resultado de la multiplicación es " + resultadoMultiplicacion);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultadoDivision;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultadoDivision = numeroUno / numeroDos;

	alert("El resultado de la división es " + resultadoDivision);
}

