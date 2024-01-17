// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }

// Pessoa.prototype.falar = function () {
//   console.log(`Meu nome é ${this.nome}`);
// };

// const douglas = new Pessoa("Douglas", 28);

///////////////////// São a mesma coisa ////////////////////

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const douglas = new Pessoa("Douglas", 28);

douglas.falar();
