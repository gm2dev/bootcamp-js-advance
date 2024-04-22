let contador = 0;

function incrementarContador() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const valorActual = contador;
      console.log(`Valor actual leído: ${valorActual}`);
      setTimeout(() => {
        const nuevoValor = valorActual + 1;
        contador = nuevoValor;
        console.log(`Nuevo valor almacenado: ${nuevoValor}`);
        resolve(); // Resolvemos la promesa una vez completado el incremento
      }, 200); // Retardo antes de escribir
    }, Math.random() * 200);
  });
}

async function incrementarContadorSecuencialmente() {
  await incrementarContador();
  await incrementarContador();
  await incrementarContador();
  await incrementarContador();
  console.log(`Operación finalizada, valor final del contador: ${contador}`);
}

incrementarContadorSecuencialmente();
