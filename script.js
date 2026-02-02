function mostrar(id) {
  document.querySelectorAll('.conteudo').forEach(c => c.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'textos') atualizarPagina();
}

// SAKURA
setInterval(() => {
  const s = document.createElement('span');
  s.innerText = '🌸';
  s.style.left = Math.random() * window.innerWidth + 'px';
  s.style.animationDuration = (5 + Math.random() * 5) + 's';
  document.getElementById('sakura-container').appendChild(s);
  setTimeout(() => s.remove(), 10000);
}, 300);

// GAMES
function mostrarGame(jogo) {
  const box = document.getElementById('game-texto');
  box.className = 'game-texto';
  if (jogo === 'mine') {
    box.classList.add('minecraft');
    box.innerText = 'Minecraft — construir mundos contigo 💚';
  }
  if (jogo === 'ludo') {
    box.classList.add('ludo');
    box.innerText = 'Ludo — risadas e caos ❤️';
  }
}

// LIVRO
const textosLivro = [
  "Eu sempre te amarei, como o sol ama a alvorada e a lua se entrega à noite.",

  "Como as estrelas pertencem ao céu, assim meu coração pertence a ti.",

  "Nossos destinos foram entrelaçados antes mesmo de sabermos nossos nomes, e nossos corações aprenderam a cantar a mesma canção.",

  "Nossa história foi escrita nas estrelas — um amor sem começo, sem fim, sem razão além de existir.",

  "Mesmo sob as tempestades mais intensas e nas noites mais escuras, prometo amar-te por toda a eternidade e além dela.",

  "Pois tu és a razão do meu sorriso, minha vida, meu amor, meu lar."
];

let paginaAtual = 0;

function atualizarPagina() {
  document.getElementById('pagina-texto').innerText = textosLivro[paginaAtual];
  document.getElementById('numero-pagina').innerText =
    `${paginaAtual + 1}/${textosLivro.length}`;
  document.getElementById('snoop').style.transform = 'rotate(10deg)';
  setTimeout(() => {
    document.getElementById('snoop').style.transform = 'rotate(0deg)';
  }, 300);
}
function proximaPagina() { if (paginaAtual < textosLivro.length-1) { paginaAtual++; atualizarPagina(); } }
function paginaAnterior() { if (paginaAtual > 0) { paginaAtual--; atualizarPagina(); } }

// FILMES
function adicionarFilme() {
  const input = document.getElementById('filmeInput');
  const li = document.createElement('li');
  li.innerText = input.value;
  document.getElementById('listaFilmes').appendChild(li);
  input.value = '';
}

// IMPORTANTE
const etapas = [
  "Tem certeza?",
  "É algo sincero…",
  "Pra você 💕",
  "Eu te amo meu amor ❤️"
];
let etapa = 0;

function avancarImportante() {
  document.getElementById('texto-importante').innerText = etapas[etapa];
  etapa++;
}







