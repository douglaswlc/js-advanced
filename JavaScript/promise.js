const numeroQualquer = new Promise((resolve, reject) => {
  setTimeout(() => {
    const numero = parseInt(Math.random() * 100);
    resolve(numero);
  }, 2000);
});

console.log("Aparece ai!");

numeroQualquer
  .then((value) => {
    console.log(value);
    return value + 100;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finalizou");
  });
