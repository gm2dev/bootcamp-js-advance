let contador = 0;

function incrementarContador() {
  // Simulando una operación asincrónica con un retardo aleatorio
  setTimeout(() => {
    const valorActual = contador;
    console.log(`Valor actual leído: ${valorActual}`);
    setTimeout(() => {
      // Agregamos otro setTimeout para exagerar el desfase
      const nuevoValor = valorActual + 1;
      contador = nuevoValor;
      console.log(`Nuevo valor almacenado: ${nuevoValor}`);
    }, 200); // Retardo antes de escribir
  }, Math.random() * 200);
}

// Llamamos a incrementarContador dos veces casi al mismo tiempo
incrementarContador();
incrementarContador();
console.log(`Operación finalizada, valor final del contador: ${contador}`);
