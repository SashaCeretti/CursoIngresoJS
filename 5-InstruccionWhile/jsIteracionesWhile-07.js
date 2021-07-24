/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
  let numero;
  let acumulador = 0;
  let contador = 0;
  let promedio;
  let respuesta;

  do {
    numero = parseInt(prompt("Ingrese un número:"));
    while (isNaN(numero)) {
      numero = parseInt(prompt("Eso no es un número, ingrese un número:"));
    }

    acumulador = acumulador + numero;

    contador++;

    respuesta = prompt("Desea ingresar otro número? s / n");
  } while (respuesta == "s");

  promedio = acumulador / contador;

  document.getElementById("txtIdSuma").value = acumulador;

  document.getElementById("txtIdPromedio").value = promedio;
}

/*
do(){   //hacé.... mientras.... el do while me permite entrar por lo menos una vez y al final estará la condicion

} while(condicion); SIEMPRE PUNTO Y COMA AL FINAL DEL WHILE DEL DOWHILE

----

for
*/
