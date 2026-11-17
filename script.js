// ================================================
// Botão "Pick for Me" (sorteia um filme)
// ================================================

// Lista com os nossos filmes (pode mudar os textos!)
const filmes = [
  "🤡 IT (2017): Watch it at night with the lights off!",
  "🔪 Scream (1996): Perfect for a mystery night with friends!",
  "🏚️ Monster House (2006): A spooky movie for the whole family!",
  "🏕️ Friday the 13th (1980): A classic for true horror fans!"
];

const botaoSorteio = document.getElementById("random-btn");
const resultado = document.getElementById("random-result");

botaoSorteio.addEventListener("click", function () {
  // Sorteia um número de 0 até o último filme da lista
  const numero = Math.floor(Math.random() * filmes.length);

  // Mostra o filme sorteado na tela
  resultado.textContent = "Tonight you should watch: " + filmes[numero];
});
