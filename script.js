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
  "Azul Marinho": "#1c2b4a", "Verde Escuro": "#1f4d34", "Roxo": "#5b2a86",
  "Amarelo": "#f0b429", "Azul Claro": "#7fc4e8", "Vinho": "#5e1a24",
  "Bandeira": "#0e8a3e", "Preto": "#111113", "Cinza": "#9a9a9a",
  "Branco": "#f5f3ee", "Rosa Claro": "#f2c6d3", "Pink": "#d6216b",
  "Laranja Telha": "#c1552c", "Bege": "#e6d5b8", "Mescla": "#a8a8a4",
  "Vermelho Claro": "#c23b2e", "Azul": "#1f5fbf", "Laranja": "#e8792b",
  "Marrom": "#4a3222", "Salmão": "#e8a27e", "Verde Musgo": "#77816a",
  "Mostarda": "#b9902f", "Lilás": "#b9a0d4", "Chumbo": "#4a4a4c",
  "Azul Petróleo": "#33495e", "Bordô": "#5e1a24", "Areia": "#d7bd93",
  "Verde Bandeira": "#0e8a3e",
};

function swatch(name){
  const hex = COLOR_MAP[name] || "#888";
  return `<span class="tag-card__swatch" style="background:${hex}" data-title="${name}"></span>`;
}

/* --------- LINHA BÁSICA --------- */
const SIZES_BASICA_HEAD = ["Tam.", "Compr.", "Larg."];

const basicaProducts = [
  {
    name: "Oversized",
    note: "Corte solto, caimento streetwear.",
    img: "assets/img/oversized_front_black.jpg",
    priceOld: 90, priceNow: 70,
    colors: ["Azul Marinho","Bandeira","Verde Escuro","Preto","Roxo","Cinza","Amarelo","Branco","Azul Claro","Rosa Claro","Vinho","Pink","Laranja Telha","Bege","Mescla","Azul","Vermelho Claro","Laranja"],
    sizes: [["P","76","53"],["M","77","56"],["G","79","58"],["GG","82,5","61"]],
    comp: "100% algodão · fio 30/1 compactado · pré-encolhida no tingimento",
  },
  {
    name: "Camiseta Básica",
    note: "O modelo clássico, direto ao ponto.",
    img: "assets/img/basica_front_black.jpg",
    priceOld: 80, priceNow: 70,
    colors: ["Preto","Azul Marinho","Cinza","Verde Escuro","Branco","Azul Claro","Bege","Laranja Telha","Laranja","Vermelho Claro","Marrom"],
    sizes: [["P","67","50"],["M","68","52"],["G","71","53"],["GG","74","55"]],
    comp: "100% algodão · fio 30/1 compactado · pré-encolhida no tingimento",
  },
  {
    name: "BabyLook",
    note: "Modelagem feminina, caimento ajustado.",
    img: "assets/img/babylook_front_black.jpg",
    priceOld: 70, priceNow: 60,
    colors: ["Preto","Marrom","Cinza","Azul Marinho","Branco","Verde Escuro","Rosa Claro","Roxo","Pink","Amarelo","Bege","Vinho","Azul","Mescla"],
    sizes: [["P","58,5","44"],["M","61","46,5"],["G","64","48,5"],["GG","65","51"]],
    comp: "100% algodão · fio 30/1 compactado · pré-encolhida no tingimento",
  },
  {
    name: "Cropped",
    note: "Comprimento curto, pra usar com saia ou calça alta.",
    img: "assets/img/cropped_front_black.jpg",
    priceOld: 60, priceNow: 50,
    colors: ["Verde Escuro","Preto","Roxo","Cinza","Amarelo","Branco","Vinho","Rosa Claro","Mescla","Pink","Vermelho Claro","Bege","Azul Marinho"],
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
    img: "assets/img/cropped_regata_vinho.jpg",
    price: 79.90,
    colors: ["Azul Claro","Salmão","Pink","Verde Musgo","Bege","Chumbo"],
    finish: "Reativo",
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
    img: "assets/img/cropped_liso_preto.jpg",
    price: 109.90,
    colors: ["Vinho","Branco","Preto"],
    finish: "Reativo",
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
    img: "assets/img/cropped_manga_longa_preto.jpg",
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
    name: "Baby Look Algodão",
    gender: "feminino",
    note: "Básica feminina, tingimento reativo (cores vivas).",
    img: "assets/img/babylook_algodao_preta.jpg",
    price: 105.90,
    colors: ["Verde Escuro","Vinho","Bege","Branco","Preto"],
    finish: "Reativo",
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
    img: "assets/img/babylook_estonada_roxa.jpg",
    price: 105.90,
    colors: ["Mostarda","Verde Musgo","Bege","Lilás","Azul Marinho","Chumbo"],
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
    img: "assets/img/masculina_algodao_preta.jpg",
    price: 124.90,
    colors: ["Bege","Azul Marinho","Vinho","Branco","Preto"],
    finish: "Reativo",
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
    img: "assets/img/masculina_estonada_verde.jpg",
    price: 124.90,
    colors: ["Mostarda","Verde Musgo","Bege","Verde Escuro","Laranja Telha","Azul","Azul Marinho","Roxo","Bordô","Chumbo"],
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
    img: "assets/img/oversized_lisa_unissex.jpg",
    price: 124.90,
    colors: ["Areia","Branco","Preto"],
    finish: "Reativo",
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
    img: "assets/img/oversized_estonada_cinza.jpg",
    price: 129.90,
    colors: ["Mostarda","Verde Musgo","Chumbo"],
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
  {
    name: "Marmorizada Lisa",
    gender: "masculino",
    note: "Tingimento marmorizado, efeito pedra rústico.",
    img: "assets/img/marmorizada_cinza.jpg",
    price: 129.90,
    colors: ["Chumbo"],
    finish: "Marmorizado",
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
  node.querySelector(".tag-card__colors").innerHTML = p.colors.map(swatch).join("");

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
  node.querySelector(".tag-card__colors").innerHTML = p.colors.map(swatch).join("");

  node.querySelector(".tag-card__price").innerHTML = `
    <span class="old">&nbsp;</span>
    <span class="now">R$${p.price.toFixed(2).replace(".",",")}</span>`;

  node.querySelector(".tag-card__face--back h4").textContent = p.name;
  const thead = node.querySelector(".tag-card__table thead");
  const tbody = node.querySelector(".tag-card__table tbody");
  thead.innerHTML = `<tr><th>Medida (cm)</th>${p.head.map(h=>`<th>${h}</th>`).join("")}</tr>`;
  tbody.innerHTML = p.rows.map(row => `<tr>${row.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("");
  node.querySelector(".tag-card__composition").textContent = p.comp;

  node.querySelectorAll(".tag-card__flipbtn").forEach(btn=>{
    btn.addEventListener("click", ()=> card.classList.toggle("is-flipped"));
  });

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
