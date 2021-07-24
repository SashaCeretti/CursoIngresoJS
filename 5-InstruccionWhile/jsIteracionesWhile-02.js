/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/

function mostrar()
{
	let contador = 11;
	 
	let mensaje = "";

	while (contador > 1){
		contador--
		mensaje = mensaje + contador + " ";
	}

	alert(mensaje);

}