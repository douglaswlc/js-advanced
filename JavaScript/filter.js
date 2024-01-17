const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const listaNumerosPares = lista.filter((element) => {
  return element % 2 === 2;
});

console.log(listaNumerosPares);
