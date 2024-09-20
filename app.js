function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 100 + 1);
}

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
  let chute = parseInt(document.querySelector('input').value);
  if (chute === numeroSecreto) {
      exibirTextoNaTela('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
      if (chute > numeroSecreto) {
          exibirTextoNaTela('p', 'O número é menor');
      } else {
          exibirTextoNaTela('p', 'O número é maior');
      }
      tentativas++;
      limparCampo();
  }
}

function limparCampo() {
  let chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true); // Desabilitar o botão de reiniciar novamente
}

document.getElementById('reiniciar').onclick = reiniciarJogo;