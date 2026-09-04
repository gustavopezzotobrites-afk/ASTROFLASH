const cards = [
  {
    title: "O que é Astronomia?",
    short: "O que é Astronomia",
    question: "O que é Astronomia?",
    answerTitle: "Astronomia",
    answer: "É a ciência que estuda os corpos celestes, como estrelas, planetas, luas e outros objetos do espaço, além dos fenômenos que acontecem no Universo.",
    image: "01.jpg",
    alt: "Imagem relacionada à Astronomia.",
    caption: "Representação visual do tema Astronomia."
  },
  {
    title: "Modelos Cosmológicos",
    short: "Modelos Cosmológicos",
    question: "O que são modelos cosmológicos?",
    answerTitle: "Modelos Cosmológicos",
    answer: "São representações e explicações usadas para descrever a estrutura, a origem e a evolução do Universo. Ao longo da história, diferentes modelos foram propostos.",
    image: "02.jpg",
    alt: "Ilustração histórica de um modelo cosmológico com a Terra no centro.",
    caption: "Ilustração de um modelo cosmológico histórico."
  },
  {
    title: "O Universo",
    short: "O Universo",
    question: "O que podemos encontrar no Universo?",
    answerTitle: "O Universo",
    answer: "O Universo reúne galáxias, estrelas, planetas, satélites, nebulosas e outros corpos celestes. A Via Láctea é a galáxia onde está o Sistema Solar.",
    image: "03.jpg",
    alt: "Imagem de uma galáxia espiral no espaço.",
    caption: "Exemplo de uma galáxia espiral."
  },
  {
    title: "Sistema Solar",
    short: "Sistema Solar",
    question: "Quais são os principais corpos do Sistema Solar?",
    answerTitle: "Sistema Solar",
    answer: "O Sistema Solar é formado pelo Sol e pelos corpos que orbitam ao seu redor, incluindo os oito planetas: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.",
    image: "04.jpg",
    alt: "Ilustração do Sistema Solar com o Sol e os planetas identificados.",
    caption: "Representação do Sistema Solar."
  },
  {
    title: "Constelações Zodiacais",
    short: "Constelações Zodiacais",
    question: "O que são constelações zodiacais?",
    answerTitle: "Constelações Zodiacais",
    answer: "São constelações associadas à faixa do céu atravessada pelo caminho aparente do Sol ao longo do ano, chamada de eclíptica. Elas estão relacionadas aos signos do zodíaco na tradição astrológica.",
    image: "05.jpg",
    alt: "Representação de constelações zodiacais formadas por estrelas.",
    caption: "Representação das constelações zodiacais."
  },
  {
    title: "Outras Constelações",
    short: "Outras Constelações",
    question: "O que é uma constelação?",
    answerTitle: "Outras Constelações",
    answer: "Uma constelação é uma região do céu definida oficialmente para organizar e identificar estrelas e outros objetos celestes. Exemplos conhecidos incluem Órion, Ursa Maior, Cruzeiro do Sul e Andrômeda.",
    image: "06.jpg",
    alt: "Mapa celeste com várias constelações identificadas.",
    caption: "Mapa de algumas constelações."
  },
  {
    title: "Formação da Terra",
    short: "Formação da Terra",
    question: "Como é a estrutura interna da Terra?",
    answerTitle: "Formação da Terra",
    answer: "A Terra apresenta camadas internas. Na representação, aparecem a crosta, o manto, o núcleo externo e o núcleo interno. A formação do planeta ocorreu há bilhões de anos a partir de material do disco que originou o Sistema Solar.",
    image: "07.jpg",
    alt: "Corte esquemático da Terra mostrando crosta, manto, núcleo externo e núcleo interno.",
    caption: "Representação das camadas internas da Terra."
  },
  {
    title: "Fases da Lua",
    short: "Fases da Lua",
    question: "Por que a Lua apresenta fases?",
    answerTitle: "Fases da Lua",
    answer: "As fases da Lua acontecem porque, enquanto a Lua orbita a Terra, observamos diferentes porções de sua metade iluminada pelo Sol. As principais fases são nova, crescente, cheia e minguante.",
    image: "08.jpg",
    alt: "Diagrama mostrando as principais fases da Lua.",
    caption: "Diagrama das fases da Lua."
  },
  {
    title: "Astronomia e Agricultura",
    short: "Astronomia e Agricultura",
    question: "Como a Astronomia pode se relacionar com a agricultura?",
    answerTitle: "Astronomia e Agricultura",
    answer: "A observação dos ciclos naturais do céu ajudou diferentes sociedades a organizar calendários e épocas de plantio e colheita. Atualmente, conhecimentos sobre ciclos sazonais e observações do ambiente também contribuem para o planejamento agrícola.",
    image: "09.jpg",
    alt: "Trabalhadores realizando atividades em uma plantação.",
    caption: "Agricultura e observação dos ciclos naturais."
  }
];

let current = 0;
let score = 0;
let flipped = false;

const $ = (id) => document.getElementById(id);
const flashcard = $("flashcard");

function renderTopics() {
  const grid = $("topicGrid");
  grid.innerHTML = "";
  cards.forEach((card, index) => {
    const button = document.createElement("button");
    button.className = "topic-button" + (index === current ? " active" : "");
    button.type = "button";
    button.innerHTML = `<span>FLASHCARD ${String(index + 1).padStart(2, "0")}</span>${card.short}`;
    button.addEventListener("click", () => {
      current = index;
      flipped = false;
      render();
    });
    grid.appendChild(button);
  });
}

function render() {
  const card = cards[current];
  $("categoryLabel").textContent = `Tema ${current + 1} de ${cards.length}`;
  $("card-title").textContent = card.title;
  $("question").textContent = card.question;
  $("answerTitle").textContent = card.answerTitle;
  $("answer").textContent = card.answer;
  $("topicImage").src = card.image;
  $("topicImage").alt = card.alt;
  $("imageCaption").textContent = card.caption;
  $("frontNumber").textContent = String(current + 1).padStart(2, "0");
  $("backNumber").textContent = String(current + 1).padStart(2, "0");
  $("progress").textContent = `${current + 1}/${cards.length}`;
  $("score").textContent = score;
  flashcard.classList.toggle("flipped", flipped);
  flashcard.setAttribute("aria-pressed", String(flipped));
  renderTopics();
}

function flipCard() {
  flipped = !flipped;
  render();
}

function changeCard(direction) {
  current = (current + direction + cards.length) % cards.length;
  flipped = false;
  render();
}

flashcard.addEventListener("click", flipCard);
flashcard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    flipCard();
  }
});

$("reveal").addEventListener("click", flipCard);
$("previous").addEventListener("click", () => changeCard(-1));
$("next").addEventListener("click", () => changeCard(1));

$("correct").addEventListener("click", () => {
  score++;
  $("score").textContent = score;
});
$("wrong").addEventListener("click", () => {
  score = Math.max(0, score - 1);
  $("score").textContent = score;
});

let fontScale = 1;
$("fontIncrease").addEventListener("click", () => {
  fontScale = Math.min(1.35, +(fontScale + 0.1).toFixed(2));
  document.documentElement.style.setProperty("--font-scale", fontScale);
});
$("fontDecrease").addEventListener("click", () => {
  fontScale = Math.max(0.85, +(fontScale - 0.1).toFixed(2));
  document.documentElement.style.setProperty("--font-scale", fontScale);
});

$("contrastToggle").addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
  const on = document.body.classList.contains("high-contrast");
  $("contrastToggle").setAttribute("aria-pressed", String(on));
});

$("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const on = document.body.classList.contains("dark");
  $("darkToggle").setAttribute("aria-pressed", String(on));
});

let utterance;
function speak(text) {
  if (!("speechSynthesis" in window)) {
    alert("A leitura por voz não está disponível neste navegador.");
    return;
  }
  window.speechSynthesis.cancel();
  utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "pt-BR";
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}
$("readCard").addEventListener("click", () => {
  const card = cards[current];
  speak(`${card.title}. Pergunta: ${card.question}. Resposta: ${card.answer}`);
});
$("readPage").addEventListener("click", () => {
  speak(document.querySelector("main").innerText);
});
$("stopReading").addEventListener("click", () => {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
});

render();
