document.getElementById('sortear').addEventListener('click', function () {
  const min = parseInt(document.querySelector('.input-min').value);
  const max = parseInt(document.querySelector('.input-max').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(min) || isNaN(max)) {
    resultado.textContent = 'Digite dois números válidos.';
    return;
  }

  if (min >= max) {
    resultado.textContent = 'O número mínimo deve ser menor que o máximo.';
    return;
  }

  const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
  resultado.textContent = `Número sorteado: ${numeroSorteado}`;
});
