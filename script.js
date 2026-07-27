/* =========================================================
   MALHA — catálogo de camisetas
   Dados + renderização dos cartões-etiqueta
   ========================================================= */

/* --------- CONFIGURAÇÃO RÁPIDA (edite aqui) --------- */
const CONFIG = {
  whatsappNumber: "5548988479786", // troque pelo seu número, formato DDI+DDD+numero, só dígitos
  whatsappMessage: "Oi! Vi o catálogo de camisetas e queria fazer um pedido.",
};

/* --------- mapa de cores nomeadas -> hex aproximado --------- */
const COLOR_MAP = {
  "Azul Marinho": "#1c2b4a",
  "Esmeralda": "#1f4d34",
  "Verde Floresta": "#1f4d34",
  "Verde Escuro": "#1f4d34",
  "Roxo": "#5b2a86",
  "Amarelo": "#f0b429",
  "Azul Oceano": "#7fc4e8",
  "Azul Claro": "#7fc4e8",
  "Bordo": "#5e1a24",
  "Vinho": "#5e1a24",
  "Bandeira": "#0e8a3e",
  "Preto": "#111113",
  "Cinza": "#9a9a9a",
  "Branco": "#f5f3ee",
  "Rosa Claro": "#f2c6d3",
  "Rosa": "#d6216b",
  "Marrom Pardo": "#c1552c",
  "Laranja Telha": "#c1552c",
  "Cappuccino": "#e6d5b8",
  "Mescla": "#a8a8a4",
  "Vermelho Claro": "#c23b2e",
  "Azul": "#1f5fbf",
  "Laranja": "#e8792b",
  "Marrom": "#4a3222",
  "Salmão": "#e8a27e",
  "Militar": "#77816a",
  "Marrom Bronze": "#b9902f",
  "Lilás": "#b9a0d4",
  "Chumbo": "#4a4a4c",
  "Azul Petróleo": "#33495e",
  "Areia": "#d7bd93",
  "Bege": "#d7bd93",
  "Off White Reativo": "#fff3e0",
  "Verde Bandeira": "#0e8a3e",
};

/* transforma "Azul Marinho" -> "azul-marinho" pra montar nome de arquivo */
function slugify(str){
  return str.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
}

/* caminho esperado da foto de cada cor: assets/img/colors/<produto>/<cor>.jpg */
function colorImagePath(productSlug, colorName){
  return `assets/img/colors/${productSlug}/${slugify(colorName)}.jpg`;
}

function swatchBtn(productSlug, name){
  const hex = COLOR_MAP[name] || "#888";
  const img = colorImagePath(productSlug, name);
  return `<button type="button" class="tag-card__swatch" style="background:${hex}" data-title="${name}" data-color="${name}" data-img="${img}" aria-label="Ver cor ${name}"></button>`;
}

/* liga os cliques nas bolinhas de cor à troca de foto do cartão */
function wireColorSwatches(node){
  const photoImg = node.querySelector(".tag-card__photo img");
  const buttons = node.querySelectorAll(".tag-card__swatch");
  buttons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const path = btn.dataset.img;
      const tester = new Image();
      tester.onload = () => {
        buttons.forEach(b=>b.classList.remove("is-active"));
        btn.classList.add("is-active");
        photoImg.style.opacity = 0;
        setTimeout(()=>{ photoImg.src = path; photoImg.style.opacity = 1; }, 140);
      };
      tester.onerror = () => {
        // ainda não existe foto pra essa cor -> avisa sem quebrar nada
        btn.classList.add("tag-card__swatch--missing");
        setTimeout(()=> btn.classList.remove("tag-card__swatch--missing"), 900);
      };
      tester.src = path;
    });
  });
}

/* --------- LINHA BÁSICA --------- */
const SIZES_BASICA_HEAD = ["Tam.", "Compr.", "Larg."];

const basicaProducts = [
  {
    name: "Oversized",
    note: "Corte solto, caimento streetwear.",
    img: "assets/img/colors/oversized/preto.jpg",
    priceOld: 109.90, priceNow: 85.90,
    colors: ["Azul Marinho","Bandeira","Verde Escuro","Preto","Roxo","Cinza","Amarelo","Branco","Azul Claro","Rosa Claro","Vinho","Rosa","Laranja Telha","Bege","Mescla","Azul","Vermelho Claro","Laranja"],
    sizes: [["P","76","53"],["M","77","56"],["G","79","58"],["GG","82,5","61"]],
    comp: "100% algodão · fio 30/1 compactado · pré-encolhida no tingimento",
  },
  {
    name: "Camiseta Básica Ribana",
    note: "O modelo clássico, direto ao ponto.",
    img: "assets/img/colors/camiseta-basica-ribana/preto.jpg",
    priceOld: 105.90, priceNow: 79.90,
    colors: ["Preto","Azul Marinho","Cinza","Verde Escuro","Branco","Azul Claro","Bege","Laranja Telha","Laranja","Vermelho Claro","Marrom"],
    sizes: [["P","67","50"],["M","68","52"],["G","71","53"],["GG","74","55"]],
    comp: "100% algodão · fio 30/1 compactado · pré-encolhida no tingimento",
  },
  {
    name: "Baby Look Básica",
    note: "Modelagem feminina, caimento ajustado.",
    img: "assets/img/colors/baby-look-basica/preto.jpg",
    priceOld: 89.90, priceNow: 64.90,
    colors: ["Preto","Marrom","Cinza","Azul Marinho","Branco","Verde Escuro","Rosa Claro","Roxo","Rosa","Amarelo","Bege","Vinho","Azul","Mescla"],
    sizes: [["P","58,5","44"],["M","61","46,5"],["G","64","48,5"],["GG","65","51"]],
    comp: "100% algodão · fio 30/1 compactado · pré-encolhida no tingimento",
  },
  {
    name: "Cropped",
    note: "Comprimento curto, pra usar com saia ou calça alta.",
    img: "assets/img/colors/cropped/azul-marinho.jpg",
    priceOld: 69.90, priceNow: 54.90,
    colors: ["Verde Escuro","Preto","Roxo","Cinza","Amarelo","Branco","Vinho","Rosa Claro","Mescla","Rosa","Vermelho Claro","Bege","Azul Marinho"],
    sizes: [["P","41","45"],["M","43","49"],["G","45","50"],["GG","46","55"]],
    comp: "100% algodão · fio 30/1 compactado · pré-encolhida no tingimento",
  },
];

/* --------- LINHA PREMIUM --------- */
const SIZES_5 = ["PP/P","M","G","GG","XG"]; // colunas padrão quando há 5 valores (P,M,G,GG,XG)
const SIZES_6 = ["PP","P","M","G","GG","XG"]; // quando há 6 valores

const premiumProducts = [
  {
    name: "Cropped Regata de Ribana",
    gender: "feminino",
    note: "Ribana de algodão sustentável premium.",
    img: "assets/img/colors/cropped-regata-de-ribana/rosa.jpg",
    price: 79.90,
    colors: ["Azul Oceano","Laranja","Rosa","Militar","Areia","Chumbo"],
    finish: "Tingimento reativo",
    rows: [
      ["Comprimento frente", "35,3","38,0","40,7","43,4"],
      ["½ tórax", "32,6","35,0","37,4","39,8"],
    ],
    head: SIZES_5,
    comp: "100% algodão · 175g/m² · 0% pós-lavagem não torce/não encolhe",
  },
  {
    name: "Cropped Liso",
    gender: "feminino",
    note: "Corte reto com mangas curtas, básico premium.",
    img: "assets/img/colors/cropped-liso/preto.jpg",
    priceOld: 109.90,
    priceNow: 99.90,
    colors: ["Branco","Preto"],
    finish: "Tingimento reativo",
    rows: [
      ["Comprimento frente","41,5","43,5","45,5","47,5"],
      ["½ tórax","44,0","46,0","48,0","51,0"],
      ["Ombro-a-ombro","37,0","39,0","41,0","43,0"],
      ["Comprimento manga","13,5","14,0","14,5","15,0"],
      ["½ abertura barra manga","16,5","17,5","18,5","19,5"],
    ],
    head: SIZES_5,
    comp: "100% algodão · 175g/m² · 0% pós-lavagem não torce/não encolhe",
  },
  {
    name: "Cropped Manga Longa",
    gender: "feminino",
    note: "Manga longa, conjunto com moletom.",
    img: "assets/img/colors/cropped-manga-longa/preto.jpg",
    price: 109.90,
    colors: ["Branco","Preto"],
    finish: "Tingimento reativo",
    rows: [
      ["Comprimento frente","43,5","46,0","48,5","51,0"],
      ["½ tórax","49,0","51,0","53,0","55,0"],
      ["Ombro-a-ombro","40,0","41,0","42,0","43,0"],
      ["Comprimento manga","58,7","60,0","61,3","62,6"],
      ["½ abertura barra manga","7,0","8,0","9,0","10,0"],
    ],
    head: SIZES_5,
    comp: "100% algodão · toque ultra macio · não torce/não encolhe",
  },
  {
    name: "Baby Look",
    gender: "feminino",
    note: "Básica feminina, tingimento reativo (cores vivas).",
    img: "assets/img/colors/baby-look/bordo.jpg",
    price: 105.90,
    colors: ["Esmeralda","Bordo","Cappuccino","Branco","Preto"],
    finish: "Tingimento reativo",
    rows: [
      ["Comprimento frente","59,5","62,0","64,5","67,0"],
      ["½ tórax","44,6","47,0","49,4","51,8"],
      ["Ombro-a-ombro","36,6","39,0","41,4","43,8"],
      ["Comprimento manga","12,0","13,0","14,0","15,0"],
      ["½ abertura barra manga","14,5","15,0","15,5","16,0"],
    ],
    head: SIZES_5,
    comp: "100% algodão · 175g/m² · 0% pós-lavagem não torce/não encolhe",
  },
  {
    name: "Baby Look Estonada",
    gender: "feminino",
    note: "Tingimento estonado, efeito vintage lavado.",
    img: "assets/img/colors/baby-look-estonada/areia.jpg",
    priceOld: 109.90,
    priceNow: 105.90,
    colors: ["Marrom Bronze","Militar","Areia","Lilás","Azul Marinho","Chumbo"],
    finish: "Estonado (pigmento)",
    rows: [
      ["Comprimento frente","59,5","62,0","64,5","67,0"],
      ["½ tórax","44,6","47,0","49,4","51,8"],
      ["Ombro-a-ombro","36,6","39,0","41,4","43,8"],
      ["Comprimento manga","12,0","13,0","14,0","15,0"],
      ["½ abertura barra manga","14,5","15,0","15,5","16,0"],
    ],
    head: SIZES_5,
    comp: "100% algodão · 175g/m² · 0% pós-lavagem não torce/não encolhe",
  },
  {
    name: "Camiseta Algodão Sustentável",
    gender: "masculino",
    note: "Corte atemporal, caimento leve, gola em ribana.",
    img: "assets/img/colors/camiseta-algodao-sustentavel/bordo.jpg",
    priceOld: 135.90,
    priceNow: 124.90,
    colors: ["Off White Reativo","Azul Marinho","Bordo","Branco","Preto"],
    finish: "Tingimento reativo",
    rows: [
      ["Comprimento frente","68,8","71,5","74,2","76,9","79,6"],
      ["½ tórax","52,0","54,0","57,0","60,0","63,0"],
      ["Ombro-a-ombro","42,0","44,0","47,0","50,0","53,0"],
      ["Comprimento manga","19,2","20,5","21,8","23,1","24,4"],
      ["½ abertura barra manga","16,5","17,5","18,5","19,5","20,5"],
    ],
    head: SIZES_6.slice(1), // P,M,G,GG,XG
    comp: "100% algodão · 175g/m² · gola ribana canelada 1x1 pespontada",
  },
  {
    name: "Camiseta Estonada",
    gender: "masculino",
    note: "Tingimento estonado, característica vintage.",
    img: "assets/img/colors/camiseta-estonada/verde-floresta.jpg",
    priceOld: 145.90,
    priceNow: 135.90,
    colors: ["Marrom Bronze","Militar","Areia","Verde Floresta","Marrom Pardo","Azul","Azul Marinho","Roxo","Bordô","Chumbo"],
    finish: "Estonado (pigmento)",
    rows: [
      ["Comprimento frente","68,8","71,5","74,2","76,9","79,6"],
      ["½ tórax","52,0","54,0","57,0","60,0","63,0"],
      ["Ombro-a-ombro","42,0","44,0","47,0","50,0","53,0"],
      ["Comprimento manga","19,2","20,5","21,8","23,1","24,4"],
      ["½ abertura barra manga","16,5","17,5","18,5","19,5","20,5"],
    ],
    head: SIZES_6.slice(1),
    comp: "100% algodão · 175g/m² · gola ribana canelada 1x1 pespontada",
  },
  {
    name: "Oversized Lisa Unissex",
    gender: "unissex",
    note: "Linha streetwear, solta ao corpo, uso unissex.",
    img: "assets/img/colors/oversized-lisa-unissex/preto.jpg",
    priceOld: 155.90,
    priceNow: 135.90,
    colors: ["Cappuccino","Branco","Preto"],
    finish: "Tingimento reativo",
    rows: [
      ["Comprimento frente","67,6","70,3","73,0","75,7","78,4","81,1"],
      ["½ tórax","51,0","54,0","57,0","60,0","63,0","66,0"],
      ["Ombro-a-ombro","45,0","48,0","51,0","54,0","57,0","60,0"],
      ["Comprimento manga","16,4","17,7","19,0","20,3","21,6","22,9"],
      ["½ abertura barra manga","16,0","17,0","18,0","19,0","20,0","21,0"],
    ],
    head: SIZES_6,
    comp: "100% algodão · 175g/m² · gola larga em ribana 1x1 canelada",
  },
  {
    name: "Oversized Estonada",
    gender: "masculino",
    note: "Estonado + modelagem oversized streetwear.",
    img: "assets/img/colors/oversized-estonada/chumbo.jpg",
    priceOld: 165.90, priceNow: 145.90,
    colors: ["Marrom Bronze","Militar","Chumbo"],
    finish: "Estonado (pigmento)",
    rows: [
      ["Comprimento frente","67,6","70,3","73,0","75,7","78,4","81,1"],
      ["½ tórax","51,0","54,0","57,0","60,0","63,0","66,0"],
      ["Ombro-a-ombro","45,0","48,0","51,0","54,0","57,0","60,0"],
      ["Comprimento manga","16,4","17,7","19,0","20,3","21,6","22,9"],
      ["½ abertura barra manga","16,0","17,0","18,0","19,0","20,0","21,0"],
    ],
    head: SIZES_6,
    comp: "100% algodão · 175g/m² · costura de cobertura 2 agulhas, bitola larga",
  },
];

/* --------- RENDER: cartão-etiqueta --------- */
const tpl = document.getElementById("tagCardTemplate");

function buildBasicaCard(p){
  const node = tpl.content.cloneNode(true);
  const card = node.querySelector(".tag-card");

  node.querySelector(".tag-card__photo img").src = p.img;
  node.querySelector(".tag-card__photo img").alt = `Camiseta ${p.name}`;
  if (p.priceOld && p.priceOld > p.priceNow){
    const pct = Math.round((1 - p.priceNow/p.priceOld) * 100);
    node.querySelector(".tag-card__badge").textContent = `-${pct}%`;
  }
  node.querySelector(".tag-card__name").textContent = p.name;
  node.querySelector(".tag-card__note").textContent = p.note;
  const slug = slugify(p.name);
  node.querySelector(".tag-card__colors").innerHTML = p.colors.map(c=>swatchBtn(slug,c)).join("");

  node.querySelector(".tag-card__price").innerHTML = `
    <span class="old">De R$${p.priceOld.toFixed(2).replace(".",",")}</span>
    <span class="now">R$${p.priceNow.toFixed(2).replace(".",",")}</span>`;

  node.querySelector(".tag-card__face--back h4").textContent = p.name;
  const thead = node.querySelector(".tag-card__table thead");
  const tbody = node.querySelector(".tag-card__table tbody");
  thead.innerHTML = `<tr>${SIZES_BASICA_HEAD.map(h=>`<th>${h}</th>`).join("")}</tr>`;
  tbody.innerHTML = p.sizes.map(row => `<tr>${row.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("");
  node.querySelector(".tag-card__composition").textContent = p.comp;

  node.querySelectorAll(".tag-card__flipbtn").forEach(btn=>{
    btn.addEventListener("click", ()=> card.classList.toggle("is-flipped"));
  });
  wireColorSwatches(node);

  return node;
}

function buildPremiumCard(p){
  const node = tpl.content.cloneNode(true);
  const card = node.querySelector(".tag-card");
  card.dataset.gender = p.gender;

 

  node.querySelector(".tag-card__photo img").src = p.img;
  node.querySelector(".tag-card__photo img").alt = `Camiseta ${p.name}`;
  node.querySelector(".tag-card__badge").textContent = p.finish || "";
  node.querySelector(".tag-card__name").textContent = p.name;
  node.querySelector(".tag-card__note").textContent = p.note;
  const slug = slugify(p.name);
  node.querySelector(".tag-card__colors").innerHTML = p.colors.map(c=>swatchBtn(slug,c)).join("");

  node.querySelector(".tag-card__price").innerHTML = `
    <span class="old">${p.priceOld ? `De R$${p.priceOld.toFixed(2).replace(".",",")}` : "&nbsp;"}</span>
    <span class="now">R$${p.priceNow ? p.priceNow.toFixed(2).replace(".",",") : p.price.toFixed(2).replace(".",",")}</span>`;

  node.querySelector(".tag-card__face--back h4").textContent = p.name;
  const thead = node.querySelector(".tag-card__table thead");
  const tbody = node.querySelector(".tag-card__table tbody");
  thead.innerHTML = `<tr><th>Medida (cm)</th>${p.head.map(h=>`<th>${h}</th>`).join("")}</tr>`;
  tbody.innerHTML = p.rows.map(row => `<tr>${row.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("");
  node.querySelector(".tag-card__composition").textContent = p.comp;

  node.querySelectorAll(".tag-card__flipbtn").forEach(btn=>{
    btn.addEventListener("click", ()=> card.classList.toggle("is-flipped"));
  });
  wireColorSwatches(node);

  return node;
}

/* --------- MOUNT --------- */
const basicaGrid = document.getElementById("basicaGrid");
basicaProducts.forEach(p => basicaGrid.appendChild(buildBasicaCard(p)));

const premiumGrid = document.getElementById("premiumGrid");
premiumProducts.forEach(p => premiumGrid.appendChild(buildPremiumCard(p)));

/* --------- FILTROS (linha premium) --------- */
const filterBtns = document.querySelectorAll(".filter");
filterBtns.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    filterBtns.forEach(b=>b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter;
    premiumGrid.querySelectorAll(".tag-card").forEach(card=>{
      const show = f === "todos" || card.dataset.gender === f;
      card.hidden = !show;
    });
  });
});

/* --------- NAV: tabs de linha (scroll + estado ativo) --------- */
const navTabs = document.querySelectorAll(".nav__tab");
navTabs.forEach(tab=>{
  tab.addEventListener("click", ()=>{
    const target = document.getElementById(tab.dataset.target);
    target.scrollIntoView({ behavior:"smooth", block:"start" });
  });
});
document.querySelectorAll("[data-scrollto]").forEach(el=>{
  el.addEventListener("click", (e)=>{
    e.preventDefault();
    document.getElementById(el.dataset.scrollto).scrollIntoView({behavior:"smooth", block:"start"});
  });
});

const sections = ["basica","premium"].map(id=>document.getElementById(id));
const setActiveTabFor = (id) => navTabs.forEach(t=>{
  const active = t.dataset.target === id;
  t.classList.toggle("is-active", active);
  t.setAttribute("aria-selected", active);
});
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if (entry.isIntersecting) setActiveTabFor(entry.target.id);
  });
}, { rootMargin: "-40% 0px -50% 0px" });
sections.forEach(s => observer.observe(s));

/* --------- WHATSAPP LINKS --------- */
const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
document.getElementById("navWhats").href = waLink;
document.getElementById("contactWhats").href = waLink;

/* --------- MOBILE BURGER (mostra/some tabs em telas pequenas) --------- */
const burger = document.getElementById("burger");
const navTabsWrap = document.querySelector(".nav__tabs");
burger?.addEventListener("click", ()=>{
  navTabsWrap.style.display = navTabsWrap.style.display === "flex" ? "none" : "flex";
});

/* --------- PROCESSO: liga/desliga o placeholder "vídeo em breve" --------- */
document.querySelectorAll(".process__media").forEach(box=>{
  const video = box.querySelector("video");
  if (!video) return;
  const markHasVideo = () => box.classList.add("has-video");
  const markNoVideo = () => box.classList.remove("has-video");
  video.addEventListener("loadeddata", markHasVideo);
  video.addEventListener("error", markNoVideo);
  // se o arquivo não existir, o próprio <source> dispara "error" no elemento pai
  video.querySelectorAll("source").forEach(src=>{
    src.addEventListener("error", markNoVideo);
  });
  // tenta dar play (autoplay já cobre a maioria dos navegadores, isso é reforço)
  video.play?.().catch(()=>{});
});
