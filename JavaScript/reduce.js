const lista = [1, 2, 3, 4, 5];

const somaNumeros = lista.reduce((previous, current) => {
  console.log(current);
  return previous + current;
}, 0);

console.log(somaNumeros);
