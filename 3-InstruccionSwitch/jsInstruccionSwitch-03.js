function mostrar() {
  let mes;

  mes = document.getElementById("txtIdMes").value;

  switch (mes) {
    case "Febrero":
      alert("Este mes no tiene más de 29 días");
      break;

    default:
      alert("Este mes tiene más de 30 días");
      break;
  }
} //uso default porque ya tengo las opciones dadas, estoy en un Select; si escribe el usuario, escribir todo
