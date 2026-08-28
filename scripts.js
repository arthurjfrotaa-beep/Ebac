class Parquimetro {
  constructor(valor) {
    this.valor = valor;
    this.tempo = 0;
    this.troco = 0;
  }

  calcular() {
    if (this.valor < 1) {
      return { sucesso: false, mensagem: 'Valor insuficiente. Insira pelo menos R$ 1,00.' };
    }

    if (this.valor < 1.75) {
      this.tempo = 30;
      this.troco = this.valor - 1;
    } else if (this.valor < 3) {
      this.tempo = 60;
      this.troco = this.valor - 1.75;
    } else {
      this.tempo = 120;
      this.troco = this.valor - 3;
    }

    return { sucesso: true, tempo: this.tempo, troco: this.troco };
  }
}

const valorInput = document.getElementById('valor');
const botao = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function moeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calcularParquimetro() {
  const valor = Number(valorInput.value);

  if (valorInput.value.trim() === '' || Number.isNaN(valor)) {
    resultado.className = 'resultado erro';
    resultado.textContent = 'Digite um valor válido.';
    return;
  }

  const parquimetro = new Parquimetro(valor);
  const dados = parquimetro.calcular();

  if (!dados.sucesso) {
    resultado.className = 'resultado erro';
    resultado.textContent = dados.mensagem;
    return;
  }

  resultado.className = 'resultado sucesso';
  resultado.innerHTML = `<strong>Tempo:</strong> ${dados.tempo} minutos<br><strong>Troco:</strong> ${moeda(dados.troco)}`;
}

botao.addEventListener('click', calcularParquimetro);
valorInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') calcularParquimetro();
});
