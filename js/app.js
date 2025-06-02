// Define a quantidade inicial de ingressos disponíveis por tipo
let ingressos = {
  pista: 100,
  superior: 200,
  inferior: 400,
};

/**
 * Função que executa a compra de ingressos
 */
function comprar() {
  const tipo = document.getElementById("tipo-ingresso").value;
  const qtdSolicitada = parseInt(document.getElementById("qtd").value);

  // Verifica se a quantidade inserida é válida
  if (isNaN(qtdSolicitada) || qtdSolicitada <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  // Verifica se há ingressos suficientes para o tipo selecionado
  if (qtdSolicitada > ingressos[tipo]) {
    alert("Ingressos esgotados ou quantidade solicitada indisponível.");
    return;
  }

  // Atualiza a quantidade disponível
  ingressos[tipo] -= qtdSolicitada;

  // Atualiza a exibição da quantidade restante no HTML
  document.getElementById(`qtd-${tipo}`).textContent = ingressos[tipo];

  // Limpa o campo de quantidade após a compra
  document.getElementById("qtd").value = "";

  // Se a quantidade de ingressos do tipo acabar, avisa o usuário
  if (ingressos[tipo] === 0) {
    alert(`Ingressos para ${tipo} esgotados!`);
  }
}
