function mostrar() {
  let destino;

  destino = document.getElementById("txtIdDestino").value;

  switch (destino) {
    case "Bariloche":
      alert("Es el oeste");
      break;

    case "Cataratas":
      alert("Es el norte");
      break;

    case "Mar del plata":
      alert("Es el este");
      break;

    case "Ushuaia":
      alert("Es el sur");
      break;
  }
}
