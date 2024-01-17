function soma(x) {
  return (y) => {
    return x + y;
  };
}

const somaParcial = soma(5);

console.log(somaParcial(10));
console.log(somaParcial(30));
console.log(somaParcial(90));
console.log(somaParcial(100));
