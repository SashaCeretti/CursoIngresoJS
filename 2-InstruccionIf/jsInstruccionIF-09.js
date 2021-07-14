function mostrar() {
  let max = 10;
  let min = 1;

  let numero = Math.floor(Math.random() * (max - min + 1) + min);

  console.log(numero);

  //si yo ya sé que max es 10 y min es 1, reemplazo directamente por los valores

  //let numero = Math.floor(Math.random() * (10 - 1 + 1) + 1);

  //simplifico más

  //let numero = Math.floor(Math.random() * 10 + 1);

  //console.log(numero);
}
