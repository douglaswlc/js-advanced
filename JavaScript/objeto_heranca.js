const pessoa = {
  genero: "masculino",
};

const douglas = {
  nome: "Douglas",
  idade: 28,
  __proto__: pessoa,
};

console.log(douglas.genero);

// orientação á protótipo: um objeto onde o objeto douglas no exemplo está se baseando. O objeto douglas extende ao pessoa.
// OBJETO É UMA CADEIA DINAMICA DE CHAVE E VALOOOOR !!!
