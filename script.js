// Array com curiosidades em português
const curiosidades = [
  "O coração de uma baleia azul é do tamanho de um carro pequeno e bate apenas 6 vezes por minuto.",
  "O polvo tem três corações e o sangue azul.",
  "As abelhas podem reconhecer rostos humanos.",
  "Um raio pode aquecer o ar ao seu redor a 30.000°C — mais quente que a superfície do Sol.",
  "O cheiro de chuva é causado por uma bactéria chamada actinomicetos.",
  "Os flamingos são rosados porque comem camarões ricos em pigmentos.",
  "O maior deserto do mundo não é o Saara, mas a Antártida.",
  "Os polvos podem mudar de cor em menos de um segundo para se camuflar.",
  "Uma pessoa média anda o equivalente a 5 voltas ao redor da Terra em toda a sua vida.",
  "O cérebro humano tem cerca de 86 bilhões de neurônios.",
  "O nome 'Google' veio de um erro de grafia da palavra 'googol', que é 10^100.",
  "As formigas podem carregar até 50 vezes o seu próprio peso.",
  "O Monte Everest cresce cerca de 4 milímetros por ano.",
  "Os coalas dormem em média 20 horas por dia.",
  "O som viaja 4,3 vezes mais rápido na água do que no ar.",
  "O emoji de riso com lágrimas 😂 foi eleito a palavra do ano pela Oxford em 2015.",
  "As borboletas provam o sabor das coisas com as patas.",
  "Um dia na Terra está ficando mais longo com o tempo devido à rotação do planeta."
];

// Função para pegar 3 curiosidades aleatórias diferentes
function pegarCuriosidadesAleatorias() {
  // Embaralha o array
  const embaralhado = [...curiosidades].sort(() => Math.random() - 0.5);
  
  // Atribui às cartas
  document.getElementById('curiosidade1').textContent = embaralhado[0];
  document.getElementById('curiosidade2').textContent = embaralhado[1];
  document.getElementById('curiosidade3').textContent = embaralhado[2];
}

// Carrega as curiosidades quando a página abre
window.onload = pegarCuriosidadesAleatorias;