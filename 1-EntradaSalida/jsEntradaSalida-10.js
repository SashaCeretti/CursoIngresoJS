/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;

	importe = parseFloat(document.getElementById("txtIdImporte").value);

	resultado = importe - importe * 0.25;

	document.getElementById("txtIdResultado").value = resultado.toFixed(2);

}
