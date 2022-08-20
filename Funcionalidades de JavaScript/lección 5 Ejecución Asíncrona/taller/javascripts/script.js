function parAlazar() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      const number = parseInt(Math.random() * 10);
      if (number % 2 == 0) {
        resolve(number);
      } else {
        reject("Rechazado");
      }
    }, 1000);
  });
  return promise;
}

async function impirmir() {
  try {
    var imp = await parAlazar();
    console.log(imp);
  } catch (error) {
    console.log(error);
  }
}

impirmir();
