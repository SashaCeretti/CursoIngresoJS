function mostrar() {
  let max;
  let min;
  let numeroRandom;

  max = 10;
  min = 1;

  numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);

  if (numeroRandom > 8) {
    alert("Excelente. Nota: " + numeroRandom);
  } else if (numeroRandom > 3) {
    alert("Aprobó. Nota: " + numeroRandom);
  } else {
    alert("Vamos! La próxima se puede. Nota: " + numeroRandom);
  }
}
