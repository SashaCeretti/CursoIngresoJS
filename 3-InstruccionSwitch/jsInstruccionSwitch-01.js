function mostrar() {
  let mes;

  mes = document.getElementById("txtIdMes").value;

  switch (mes) {
    case "Enero":
      alert("Que comiences bien el año");
      break;
    case "Marzo":
      alert("A clases");
      break;
    case "Julio":
      alert("Se vienen vacaciones");
      break;
    case "Diciembre":
      alert("Felices fiestas");
      break;
  }
}
