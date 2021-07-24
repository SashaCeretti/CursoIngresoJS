/* EJERCICIO 8 DE WHILE
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

//EL TRABAJO MAS IMPORTANTE PARA UN PROGRAMADOR: ENTENDER EL ENUNCIADO
//Y ESCRIBIR LA ESTRATEGIA EN LENGUAJE HUMANO,
//Y RECIEN DESPUES ESCRIBIR EL CODIGO EN LENGUAJE MAQUINA

function mostrar()
{
	//declaro variables
	let numero;
	let respuesta;
	let acumuladorPositivo = 0; //porque sumamos, es para empezar, cualquier número más 0 da ese número
	let acumuladorNegativo = 1; //porque multiplicamos, es para empezar, cualquier número por 1 da ese número
	let flag = 0;
	
	//tengo que generar un bucle del tipo mientras el usuario quiera(do-while)
	//cosas que se tienen que hacer dentro del bucle (o sea mientras el usuario quiera)
	//dentro del bucle: pido un numero, valido que sea numero, analizo el signo del numero

	do{
		numero = parseInt(prompt("Ingrese un número positivo o negativo"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Eso no es número, ingrese número positivo o negativo"));
		}

		if (numero >= 0){
			
			//si el numero es positivo lo sumo a los demas de positivos
			acumuladorPositivo = acumuladorPositivo + numero;

		}
		else{
			flag = 1; //uso un flag con distinto valor para saber si flujo de programa entró acá
			//si es negativo lo multiplico con los demas negativos
			acumuladorNegativo = acumuladorNegativo * numero;
		}

		respuesta = prompt("Desea ingresar otro número? s / n")

	}while(respuesta == "s");

	if(!flag){
		acumuladorNegativo = 0;
	}

	//afuera del bucle: despues de que el usuario no quiere ingresar mas valores
	//muestro los resultados
	document.getElementById("txtIdSuma").value = acumuladorPositivo;
	document.getElementById("txtIdProducto").value = acumuladorNegatitivo;

	//flag = 0
	//entonces !flag sería no cero

}
