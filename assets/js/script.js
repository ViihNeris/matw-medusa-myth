const ILUSTRATION_MYTH = document.querySelector(".ilustration");
const TIT_V1 = "Medusa e a Família Górgona";
const TIT_V2 = "Atena e sua Sacerdotisa";
const TIT_V3 = "A Lástima de Medusa";
const CURRENT_TIT_MYTH = document.querySelector(".tit-myth");
const CURRENT_MYTH = document.querySelectorAll(".p");
const MYTH_VERSION = document.querySelector(".about-version");
const NULL_MYTH = document.querySelector(".null-myth");

const BTN_V1 = document.getElementById("version-1");
const BTN_V2 = document.getElementById("version-2");
const BTN_V3 = document.getElementById("version-3");

const NAVIGATION = document.querySelector('.btn-1 a[href^="#"]');
const NAVIGATION_2 = document.querySelector('.btn-2 a[href^="#"]');
const NAVIGATION_3 = document.querySelector('.btn-3 a[href^="#"]');
const MENU_HISTORY = document.querySelector('.history a[href^="#"]');
const MENU_CURIOSITIES = document.querySelector('.curiosities a[href^="#"]');
const MENU_ABOUT = document.querySelector('.about-dev a[href^="#"]');

const MYTH_1 = [
  (paragraph1 = `Medusa era uma górgona que possuía duas irmãs imortais: Esteno e Euríale.`),
  (paragraph2 = `Medusa e suas irmãs são consideradas uma versão tardia do mito. Eram filhas de Fórcis, o 'Grisalho', e Ceto, antigas divindades marinhas.`),
  (paragraph3 = `Nesta versão, Medusa já nasceu como uma criatura representada por uma mulher com serpentes no lugar dos cabelos, presas de bronze e asas de ouro. Existe uma variação dos mitos gregos que aponta que apenas Medusa tinha essa aparência, enquanto outras versões contam que todas as górgonas eram monstruosas. `),
  (paragraph4 = `Simbolicamente, Medusa era trágica, solitária e figura uma mulher incapaz de amar e ser amada.`),
];

const MYTH_2 = [
  (paragraph1 = `Como a mais bela sacerdotisa do templo da deusa Atena, Medusa era uma belíssima ninfa devota (em nada semelhante à popular figura horrenda, a qual é atrelada).`),
  (paragraph2 = `Em algumas versões ela já era a criatura mítica, contudo, ainda não tinha sido amaldiçoada.`),
  (paragraph3 = `Encantava a todos ao seu redor, com seus lindos cabelos, pele macia e olhos brilhantes. Tais características teriam despertado a ira de Atena, que ficou com ciúme da atenção que lhe era dada.`),
  (paragraph4 = `Movida pela inveja, Atena removeu o "excesso de vaidade" contida em Medusa: Transformou seus longos cabelos em serpentes e sua pele delicada em escamas. Como um infortúnio a mais, lançou-lhe a última maldição: Aqueles que contemplassem o brilho de seus olhos, transformariam-se em pedra diante deles.`),
];
const MYTH_3 = [
  (paragraph1 = `Medusa era a única mortal da família e respeitava os ensinamentos de Atena se mantendo virgem e casta para continuar a exercer o sacerdócio. Porém sua beleza atraía homens de muitas cidades, que iam ao templo, não para levar oferendas, mas para observá-la — o que acabava enfurecendo Atena.`),
  (paragraph2 = `Poseidon sabia que as sacerdotisas de Atena deveriam ser puras, mas isso não o impedia de cortejar a bela Medusa, que se esquivava constantemente. Cansado das negativas, o deus dos mares decidiu violar a sacerdotisa dentro do templo em frente à estátua de Atena que, furiosa, optou por castigá-la — uma grande injustiça. Pela violação de seu templo, Atena transformou Medusa num terrível monstro. Seus cabelos viraram serpentes, seu corpo criou escamas e os dentes foram transformados em presas de javali. E o pior: a maldição determinava que todos os que olhassem para ela virariam pedra, o que condenou Medusa a uma terrível solidão.`),
  (paragraph3 = `Expulsas do templo, Medusa e suas irmãs se refugiaram em uma caverna no extremo oriente da Grécia, onde podiam viver sem maiores conflitos — até que os guerreiros da  Grécia passaram a visitar o local para confrontá-la e tomar sua cabeça como arma. Um deles foi Perseu, jovem semideus obrigado pelo rei da ilha Cícade a decapitar o monstro — caso não o fizesse, sua mãe seria violada pelo rei. Assim, Medusa, que já havia sido violentada e amaldiçoada, foi decapitada.`),
  (paragraph4 = `Perseu, tido como herói, usou a cabeça da górgona morta como arma contra seus inimigos (uma vez que cabeça ainda petrificava as pessoas que a olhassem fixamente). Depois, a entregou à Atena, que a fixou no escudo, transformando-o no poderoso escudo aeges.`),
];

let i = 0;

function deployAnimation() {
  MYTH_VERSION.classList.remove("out-anima");
  MYTH_VERSION.classList.add("in-anima");
}

function removeAnimation() {
  setTimeout(function () {
    MYTH_VERSION.classList.remove("in-anima");
    MYTH_VERSION.classList.add("out-anima");
  }, 1200);
}

function updateTitMyth(currentTit) {
  CURRENT_TIT_MYTH.innerText = currentTit;
}

function updateIlustrationMyth(currentIlus) {
  ILUSTRATION_MYTH.src = currentIlus;
}

function updateParagraphs(currentMyth) {
  currentMyth.forEach((e) => {
    CURRENT_MYTH[i].innerText = e;
    console.log(e);
    i++;
  });
  i = 0;
}

function verifyParagraphs() {
  if (CURRENT_MYTH[0].innerText !== "") NULL_MYTH.style.display = "none";
}

function changeMythToV1(e) {
  deployAnimation();
  setTimeout(function () {
    updateIlustrationMyth("./assets/imgs/medusa-v1.png");
    updateTitMyth(TIT_V1);
    updateParagraphs(MYTH_1);
    verifyParagraphs();
  }, 1200);
  removeAnimation();
}
function changeMythToV2(e) {
  deployAnimation();
  setTimeout(function () {
    updateIlustrationMyth("./assets/imgs/atenas-medusa.png");
    updateTitMyth(TIT_V2);
    updateParagraphs(MYTH_2);
    verifyParagraphs();
  }, 1200);
  removeAnimation();
}

function changeMythToV3(e) {
  deployAnimation();
  setTimeout(function () {
    updateIlustrationMyth("./assets/imgs/mito3_inj.png");
    updateTitMyth(TIT_V3);
    updateParagraphs(MYTH_3);
    verifyParagraphs();
  }, 1200);
  removeAnimation();
}

function smoothScroll(e) {
  e.preventDefault();
  const ID = NAVIGATION.getAttribute("href");
  const TO = document.querySelector(ID).offsetTop;

  window.scroll({
    top: TO - 80,
    behavior: "smooth",
  });
}

function smoothScrollChoices(e) {
  e.preventDefault();
  const SECTION_HIST = MENU_HISTORY.getAttribute("href");
  const TO_SECTION_1 = document.querySelector(SECTION_HIST).offsetTop;

  window.scroll({
    top: TO_SECTION_1 - 100,
    behavior: "smooth",
  });
  console.log(TO_SECTION_1);
}

function smoothScrollCuriosities(e) {
  e.preventDefault();
  const SECTION_CURIOS = MENU_CURIOSITIES.getAttribute("href");
  const TO_SECTION_2 = document.querySelector(SECTION_CURIOS).offsetTop;

  window.scroll({
    top: TO_SECTION_2 - 80,
    behavior: "smooth",
  });
  console.log(TO_SECTION_2);
}

function smoothScrollAboutDev(e) {
  e.preventDefault();
  const SECTION_ABOUT = MENU_ABOUT.getAttribute("href");
  const TO_SECTION_3 = document.querySelector(SECTION_ABOUT).offsetTop;

  window.scroll({
    top: TO_SECTION_3 * 2.5,
    behavior: "smooth",
  });
}

function setListeners() {
  BTN_V1.addEventListener("click", changeMythToV1);
  BTN_V2.addEventListener("click", changeMythToV2);
  BTN_V3.addEventListener("click", changeMythToV3);
  NAVIGATION.addEventListener("click", smoothScroll);
  NAVIGATION_2.addEventListener("click", smoothScroll);
  NAVIGATION_3.addEventListener("click", smoothScroll);
  MENU_HISTORY.addEventListener("click", smoothScrollChoices);
  MENU_CURIOSITIES.addEventListener("click", smoothScrollCuriosities);
  MENU_ABOUT.addEventListener("click", smoothScrollAboutDev);
}

function initPage() {
  setListeners();
  verifyParagraphs();
}

initPage();