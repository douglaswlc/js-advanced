// const lista = [
//   { nome: "Douglas" },
//   { nome: "Suelen" },
//   { nome: "Davi" },
//   { nome: "Widdian" },
// ];

// //console.log(lista.map((e) => e.nome).join(" - "));

// console.log(
//   lista
//     .map((e) => e.nome)
//     .filter((e) => e.startsWith("D"))
//     .join(" - ")
// );

const list = [
  { nome: "Douglas", idade: 28 },
  { nome: "Manu", idade: 25 },
  { nome: "Lucas", idade: 29 },
  { nome: "Widdi", idade: 28 },
];

console.log(list.map((e) => e.idade).join(" ,"));
