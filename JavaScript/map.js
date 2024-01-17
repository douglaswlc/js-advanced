class Pessoa {
  constructor(nome) {
    this.name = nome;
  }
}

const lista = [
  new Pessoa("Douglas"),
  new Pessoa("Suelen"),
  new Pessoa("Matheus"),
  new Pessoa("Pedrita"),
];

const nomeString = lista.map((element) => element.name);

const nomeHtml = lista.map((element) => {
  return `<li>${element.name}</li>`;
});

console.log(nomeHtml);
