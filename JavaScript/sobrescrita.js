const pessoa = {
  idade: 20,
};

const douglas = {
  nome: "Douglas",
  idade: 28,
  __proto__: pessoa,
};

console.log(douglas.idade);

// o JS trás o valor que está dentro do objeto que estamos invocando, se ele tá mais perto é ele que vem e não o que está fora
