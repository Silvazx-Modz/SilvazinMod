// ======================
// ESTADO DA IA
// ======================
let estadoEmocional = "neutro";
let nomeUsuario = "";
let ultimoTema = "";
let ultimaResposta = "";

// ======================
// FUNÇÃO UTIL
// ======================
function escolha(lista) {
  let resposta;
  do {
    resposta = lista[Math.floor(Math.random() * lista.length)];
  } while (resposta === ultimaResposta);
  ultimaResposta = resposta;
  return resposta;
}

// ======================
// IA – GERAR RESPOSTA
// ======================
function gerarResposta(texto) {
  texto = texto.toLowerCase();

  if (texto.includes("meu nome é")) {
    nomeUsuario = texto.split("meu nome é")[1]?.trim();
    return `Prazer, ${nomeUsuario} 🤍 pode falar comigo sempre.`;
  }

  if (texto.includes("triste") || texto.includes("chor")) {
    estadoEmocional = "triste";
    ultimoTema = "triste";
    return escolha([
      "Eu sinto muito… tô aqui com você 🤍",
      "Você não precisa aguentar isso sozinha.",
      "Quer desabafar um pouco mais?"
    ]);
  }

  if (texto.includes("amor") || texto.includes("saudade")) {
    estadoEmocional = "amor";
    ultimoTema = "amor";
    return escolha([
      "Amar assim é bonito, mesmo quando dói 🌸",
      "Saudade mostra o quanto você sente de verdade.",
      "Seu coração é sincero."
    ]);
  }

  if (texto.includes("cansad") || texto.includes("exaust")) {
    estadoEmocional = "cansado";
    return escolha([
      "Descansar também é coragem.",
      "Você já fez o suficiente hoje 🤍",
      "Respira… eu fico aqui com você."
    ]);
  }

  if (ultimoTema === "triste") {
    return escolha([
      "Quer falar mais sobre isso?",
      "Ainda tá doendo?",
      "Pode ir no seu tempo."
    ]);
  }

  const hora = new Date().getHours();
  if (hora >= 22 || hora <= 5) {
    return "A noite pesa mais às vezes… fica aqui comigo 🌙";
  }

  return escolha([
    "Eu tô ouvindo.",
    "Pode falar sem pressa.",
    "Tô aqui com você 🤍"
  ]);
}

// ======================
// CHAT
// ======================
function enviarMensagem() {
  const input = document.getElementById("entrada");
  const texto = input.value.trim();
  if (!texto) return;

  const chat = document.getElementById("chat");
  chat.innerHTML += `<div class="user">${texto}</div>`;
  input.value = "";
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    const digitando = document.createElement("div");
    digitando.className = "bot";
    digitando.innerText = "digitando…";
    chat.appendChild(digitando);
    chat.scrollTop = chat.scrollHeight;

    setTimeout(() => {
      digitando.remove();
      const resposta = gerarResposta(texto);
      chat.innerHTML += `<div class="bot">${resposta}</div>`;
      chat.scrollTop = chat.scrollHeight;
    }, 900);
  }, 400);
}

// ======================
// NAVEGAÇÃO
// ======================
function mostrar(id) {
  document.querySelectorAll(".conteudo").forEach(c => c.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if (id === "textos") atualizarPagina();

  // 🎵 tocar música ao abrir carta
  if (id === "cartinha fofa") {
    iniciarMusicaSuave();
    iniciarDigitacao();
  }
}

// ======================
// 💌 DIGITAÇÃO NA CARTA
// ======================
const textoCarta = `oi rany, te escrevo essa carta com todo amor. nao sou bom com carta, entao releva.

bom dia, 14 agora. no caso, hoje fazem exatos 7 meses que a gente se conhece...

(continua seu texto aqui se quiser completo)`; // pode colar o texto completo depois

function iniciarDigitacao() {
  const elemento = document.querySelector("#cartinha\\ fofa p");
  if (!elemento) return;

  let i = 0;
  elemento.innerHTML = "";

  function digitar() {
    if (i < textoCarta.length) {
      elemento.innerHTML += textoCarta.charAt(i);
      i++;
      setTimeout(digitar, 25);
    }
  }

  digitar();
}

// ======================
// 🎵 MÚSICA COM FADE
// ======================
function iniciarMusicaSuave() {
  const musica = document.getElementById("musicaDeclaracao");
  if (!musica) return;

  musica.volume = 0;
  musica.play().catch(() => {});

  let volume = 0;
  const fade = setInterval(() => {
    if (volume < 0.6) {
      volume += 0.02;
      musica.volume = volume;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

// botão manual ainda funciona
function toggleMusica() {
  const musica = document.getElementById("musicaDeclaracao");

  if (musica.paused) {
    musica.play().catch(() => {});
  } else {
    musica.pause();
  }
}

// ======================
// LIVRO MEDIEVAL
// ======================
const textosLivro = [
  "Eu sempre amarei você, como o sol ama a alvorada.",
  "Como a lua ama a noite e as estrelas pertencem ao céu.",
  "Nossos destinos foram entrelaçados antes mesmo do tempo.",
  "Mesmo nas tempestades mais intensas, eu ficarei.",
  "Por toda a eternidade… você é meu lar."
];

let paginaAtual = 0;

function atualizarPagina() {
  document.getElementById("pagina-texto").innerText = textosLivro[paginaAtual];
  document.getElementById("numero-pagina").innerText =
    `${paginaAtual + 1}/${textosLivro.length}`;

  const snoop = document.getElementById("snoop");
  snoop.style.transform = "rotate(10deg)";
  setTimeout(() => snoop.style.transform = "rotate(0deg)", 300);
}

function proximaPagina() {
  if (paginaAtual < textosLivro.length - 1) {
    paginaAtual++;
    atualizarPagina();
  }
}

function paginaAnterior() {
  if (paginaAtual > 0) {
    paginaAtual--;
    atualizarPagina();
  }
}

// ======================
// GAMES
// ======================
function mostrarGame(jogo) {
  const box = document.getElementById("game-texto");
  box.className = "game-texto";

  if (jogo === "mine") {
    box.classList.add("minecraft");
    box.innerText = "Minecraft — construir mundos juntos 💚";
  }

  if (jogo === "ludo") {
    box.classList.add("ludo");
    box.innerText = "Ludo — risadas e caos ❤️";
  }
}

// ======================
// FILMES
// ======================
function adicionarFilme() {
  const input = document.getElementById("filmeInput");
  if (!input.value) return;
  const li = document.createElement("li");
  li.innerText = input.value;
  document.getElementById("listaFilmes").appendChild(li);
  input.value = "";
}

// ======================
// IMPORTANTE ❤️
const etapas = [
  "Tem certeza que quer ver?",
  "É algo sincero…",
  "Pra você 💕",
  "Eu te amo meu amor ❤️"
];

let etapa = 0;

function avancarImportante() {
  if (etapa < etapas.length) {
    document.getElementById("texto-importante").innerText = etapas[etapa];
    etapa++;
  }
}

// ======================
// LUZ NO MOUSE ✨
// ======================
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});
// ======================
// 🎥 PARALLAX 3D
// ======================
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;

  const container = document.querySelector(".container");
  if (container) {
    container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }

  // mantém efeito de luz também
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

// volta ao normal quando tira o mouse
document.addEventListener("mouseleave", () => {
  const container = document.querySelector(".container");
  if (container) {
    container.style.transform = "rotateY(0deg) rotateX(0deg)";
  }
});


// ======================
// 💌 FINAL SURPRESA
// ======================
let tempoNoSite = 0;

setInterval(() => {
  tempoNoSite++;

  if (tempoNoSite === 30) { // 30 segundos
    mostrarFinal();
  }
}, 1000);

function mostrarFinal() {
  if (document.getElementById("final-surpresa")) return;

  const div = document.createElement("div");
  div.id = "final-surpresa";
  div.innerHTML = `
    <div class="final-box">
      <h2>💌</h2>
      <p>eu fiz tudo isso por você…</p>
    </div>
  `;

  document.body.appendChild(div);

  setTimeout(() => {
    div.classList.add("ativo");
  }, 100);
}







