function mostrar() {
  let mes;

  mes = document.getElementById("txtIdMes").value;

  switch (mes) {
    case "Julio":
    case "Agosto":
      alert("Abrigate, hace frío");
      break;
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
      alert("Falta para el invierno");
      break;
    case "Diciembre":
    case "Enero":
    case "Febrero":
      alert("Ya pasamos el frío, ahora calor");
      break;
  }
}
