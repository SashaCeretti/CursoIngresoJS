function mostrar() {
  let precio = 15000;
  let estacion;
  let destino;
  let precioFinal;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        precioFinal = precio + precio * 0.2;
      } else if (destino == "Cataratas" || destino == "Cordoba") {
        precioFinal = precio - precio * 0.1;
      } else if (destino == "Mar del plata") {
        precioFinal = precio - precio * 0.2;
      }
      break;

    case "Verano":
      if (destino == "Mar del plata") {
        precioFinal = precio + precio * 0.2;
      } else if (destino == "Cataratas" || destino == "Cordoba") {
        precioFinal = precio + precio * 0.1;
      } else if (destino == "Bariloche") {
        precioFinal = precio - precio * 0.2;
      }
      break;

    case "Otoño":
    case "Primavera":
      if (destino == "Cordoba") {
        precioFinal = precio;
      } else {
        precioFinal = precio + precio * 0.1;
      }
      break;
  }
  alert("El importe es de $" + precioFinal);
}

//obtencion de los datos
//estacion = document.getElementById().value;
//switch(estacion){
//	case "Verano":
//blablabla...
//	break;
//tomar como referencia la estacion pues asi lo indica el enunciado
//ir probando a medida que escribo pedacitos de codigo, no esperar a que esté todo hecho
// * 1.2 = suma un aumento del 20%
// * 0.8 = resta un descuento del 20%
// * 0.9 = resta un descuento del 10%
// alert final unico, adentro de funcion mostrar() pero afuera de switch

//hacer para la prox= este ejercicio pero al reves, empezar por el destino
