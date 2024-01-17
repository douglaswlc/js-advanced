const pessoa = {
  nome: "Douglas",
  idade: 28,
};

function gritar(seiLa) {
  console.log(seiLa, this.nome);
}

gritar("eaiiii"); // aqui da ruim, porque a função não está sobre um contexto de objeto

gritar.call(pessoa, "opaa"); // aqui consegue chamar porque tem um contexto de objeto para execução
gritar.apply(pessoa, ["helloo"]); // aqui a diferença é que os argumentos são passados dentro de um array
