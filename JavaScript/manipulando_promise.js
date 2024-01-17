const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "tarefas.csv");

const promessaDeLeituraDoArquivo = fs.promises.readFile(filePath);

promessaDeLeituraDoArquivo
  .then((arquivo) => {
    arquivo.toString("utf8");
  })
  .then((textoDoArquivo) => {
    textoDoArquivo.split("\n").slice(1);
  })
  .then((linhasSemOCabecalho) => {
    linhasSemOCabecalho.map((linha) => {
      const [nome, feito] = linha.split(" - ");
      return {
        nome,
        feito: feito.trim() === "true",
      }
        .then((listaDeTarefas) => console.log(listaDeTarefas))
        .catch((error) => console.log("Deu bom não", error));
    });
  });
