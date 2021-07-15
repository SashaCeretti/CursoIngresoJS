function mostrar() {
  let mes;

  mes = document.getElementById("txtIdMes").value;

  switch (mes) {
    case "Julio":
    case "Agosto":
      alert("Abrigate, hace frío");
      break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
      alert("Falta para el invierno");
      break;
    case "Diciembre":
      alert("Ya pasamos el frío, ahora calor");
      break;
  }

} //evitar en lo posible el default

//dejar el default para los casos en los que no hayamos aclarado 
//ponemos todos los meses y dejamos default por si usuario escribe cualquier cosa 'eso no es un mes'
//el default no hace falta escribirlo siempre a lo ultimo
//si esta a lo ultimo el default no hace falta el break; porque despues esta la llave que cierra el switch