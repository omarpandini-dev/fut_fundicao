const products = [
  { name: "Câmara", category: "maquinas", label: "Máquinas e equipamentos", image: "imagens-subnichos-futurafundicao/maquinas-e-equipamentos/Camara_new.png" },
  { name: "Carcaça industrial", category: "maquinas", label: "Máquinas e equipamentos", image: "imagens-subnichos-futurafundicao/maquinas-e-equipamentos/Carcaca_new.png" },
  { name: "Carcaça técnica 01", category: "maquinas", label: "Máquinas e equipamentos", image: "imagens-subnichos-futurafundicao/maquinas-e-equipamentos/Carcaca-1_new.png" },
  { name: "Carcaça técnica 02", category: "maquinas", label: "Máquinas e equipamentos", image: "imagens-subnichos-futurafundicao/maquinas-e-equipamentos/Carcaca-2_new.png" },
  { name: "Grelha", category: "maquinas", label: "Máquinas e equipamentos", image: "imagens-subnichos-futurafundicao/maquinas-e-equipamentos/Grelha-1_new.png" },
  { name: "Piastra", category: "maquinas", label: "Máquinas e equipamentos", image: "imagens-subnichos-futurafundicao/maquinas-e-equipamentos/Piastra_new.png" },
  { name: "Bocal", category: "automotiva", label: "Automotivo", image: "imagens-subnichos-futurafundicao/automotiva-leve-e-pesada/Bocal-1_new.png" },
  { name: "Braço de suspensão Ranger", category: "automotiva", label: "Automotivo", image: "imagens-subnichos-futurafundicao/automotiva-leve-e-pesada/Braco-de-Suspensao-da-Ranger_new.png" },
  { name: "Braço do Escort", category: "automotiva", label: "Automotivo", image: "imagens-subnichos-futurafundicao/automotiva-leve-e-pesada/Braco-do-Escort_new.png" },
  { name: "Braço do Peugeot", category: "automotiva", label: "Automotivo", image: "imagens-subnichos-futurafundicao/automotiva-leve-e-pesada/Braco-do-Peugeot-1_new.png" },
  { name: "Carcaça KA33380F", category: "automotiva", label: "Automotivo", image: "imagens-subnichos-futurafundicao/automotiva-leve-e-pesada/Carcaca-KA33380F_new.png" },
  { name: "Engate G fundido", category: "automotiva", label: "Automotivo", image: "imagens-subnichos-futurafundicao/automotiva-leve-e-pesada/Engate-G-Fundido-4_new.png" },
  { name: "Mancal", category: "automotiva", label: "Automotivo", image: "imagens-subnichos-futurafundicao/automotiva-leve-e-pesada/Mancal_new.png" },
  { name: "Mancal de acionamento", category: "automotiva", label: "Automotivo", image: "imagens-subnichos-futurafundicao/automotiva-leve-e-pesada/Mancal-de-Acionamento-1_new.png" },
  { name: "Cremalheira", category: "construcao", label: "Construção civil", image: "imagens-subnichos-futurafundicao/construcao-civil/Cremalheira-1_new.png" },
  { name: "Eixo", category: "construcao", label: "Construção civil", image: "imagens-subnichos-futurafundicao/construcao-civil/Eixo_new.png" },
  { name: "Engrenagem 270", category: "construcao", label: "Construção civil", image: "imagens-subnichos-futurafundicao/construcao-civil/Engrenagem-270_new.png" },
  { name: "Pinhão", category: "construcao", label: "Construção civil", image: "imagens-subnichos-futurafundicao/construcao-civil/Pinhao_new.png" },
  { name: "Pinhão 02", category: "construcao", label: "Construção civil", image: "imagens-subnichos-futurafundicao/construcao-civil/Pinhao-2__new.png" },
  { name: "Roda", category: "construcao", label: "Construção civil", image: "imagens-subnichos-futurafundicao/construcao-civil/Roda-1_new.png" },
  { name: "Gancho olhal", category: "eletroferragem", label: "Eletroferragens", image: "imagens-subnichos-futurafundicao/eletroferragem/Gancho-Olhal-3_new.png" },
  { name: "Isolador", category: "eletroferragem", label: "Eletroferragens", image: "imagens-subnichos-futurafundicao/eletroferragem/Isolador-1_new.png" },
  { name: "Manilha da SAP", category: "eletroferragem", label: "Eletroferragens", image: "imagens-subnichos-futurafundicao/eletroferragem/Manilha-da-Sap_new.png" },
  { name: "Olhal parafuso", category: "eletroferragem", label: "Eletroferragens", image: "imagens-subnichos-futurafundicao/eletroferragem/Olhal-Parafuso-1_new.png" },
  { name: "Porca olhal", category: "eletroferragem", label: "Eletroferragens", image: "imagens-subnichos-futurafundicao/eletroferragem/Porca-Olhal-1_new.png" },
  { name: "Prensa-fio", category: "eletroferragem", label: "Eletroferragens", image: "imagens-subnichos-futurafundicao/eletroferragem/Prensa-Fio_new.png" },
  { name: "Machadinha", category: "ferramentas", label: "Ferramentas", image: "imagens-subnichos-futurafundicao/ferramentas/Machadinha-1_new.png" },
  { name: "Marreta", category: "ferramentas", label: "Ferramentas", image: "imagens-subnichos-futurafundicao/ferramentas/Marreta_new.png" },
  { name: "Martelo", category: "ferramentas", label: "Ferramentas", image: "imagens-subnichos-futurafundicao/ferramentas/Martelo-1_new.png" },
  { name: "Morsa móvel", category: "ferramentas", label: "Ferramentas", image: "imagens-subnichos-futurafundicao/ferramentas/Morsa-Movel-234567810_new.png" },
  { name: "Picareta sem cabo", category: "ferramentas", label: "Ferramentas", image: "imagens-subnichos-futurafundicao/ferramentas/Picareta-Sem-Cabo-PTA-1_new.png" },
  { name: "Carcaça agrícola", category: "agricola", label: "Agrícola", image: "imagens-subnichos-futurafundicao/agricola/Carcaca-3_new.png" },
  { name: "Carcaça dupla engrenagem", category: "agricola", label: "Agrícola", image: "imagens-subnichos-futurafundicao/agricola/Carcaca-Dupla-Engrenagem_new.png" }
];

const grid = document.querySelector("#product-grid");
const loadMore = document.querySelector("#load-more");
const countLabel = document.querySelector("#portfolio-count");
const filterButtons = [...document.querySelectorAll(".filter-button")];
let activeFilter = "todos";
let visibleLimit = 8;

function filteredProducts() {
  return activeFilter === "todos" ? products : products.filter(product => product.category === activeFilter);
}

function renderProducts() {
  const filtered = filteredProducts();
  const visible = filtered.slice(0, visibleLimit);
  grid.innerHTML = visible.map((product, index) => `
    <figure class="product-card" tabindex="0" role="button" aria-label="Ampliar ${product.name}" data-index="${products.indexOf(product)}" style="animation-delay:${Math.min(index * 35, 280)}ms">
      <div class="product-image"><img src="${product.image}" alt="${product.name}" width="1452" height="1083" loading="lazy"><span class="product-open" aria-hidden="true">↗</span></div>
      <figcaption><span>${product.label}</span><strong>${product.name}</strong></figcaption>
    </figure>`).join("");
  loadMore.hidden = visible.length >= filtered.length;
  countLabel.textContent = `Exibindo ${visible.length} de ${filtered.length} ${filtered.length === 1 ? "solução" : "soluções"}`;
}

function setFilter(filter) {
  activeFilter = filter;
  visibleLimit = filter === "todos" ? 8 : 6;
  filterButtons.forEach(button => button.classList.toggle("active", button.dataset.filter === filter));
  renderProducts();
}

filterButtons.forEach(button => button.addEventListener("click", () => setFilter(button.dataset.filter)));
loadMore.addEventListener("click", () => { visibleLimit += 8; renderProducts(); });
document.querySelectorAll("[data-filter-link]").forEach(link => link.addEventListener("click", () => setFilter(link.dataset.filterLink)));

const modal = document.querySelector("#product-modal");
const modalImage = modal.querySelector("img");
const modalCategory = modal.querySelector("div span");
const modalTitle = modal.querySelector("h3");
function openProduct(index) {
  const product = products[index];
  modalImage.src = product.image; modalImage.alt = product.name;
  modalCategory.textContent = product.label; modalTitle.textContent = product.name;
  modal.showModal();
}
grid.addEventListener("click", event => { const card = event.target.closest(".product-card"); if (card) openProduct(Number(card.dataset.index)); });
grid.addEventListener("keydown", event => { if ((event.key === "Enter" || event.key === " ") && event.target.matches(".product-card")) { event.preventDefault(); openProduct(Number(event.target.dataset.index)); } });
modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", event => { if (event.target === modal) modal.close(); });

const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open)); mainNav.classList.toggle("open", open); document.body.classList.toggle("menu-open", open);
});
mainNav.addEventListener("click", event => { if (event.target.matches("a")) { menuButton.setAttribute("aria-expanded", "false"); mainNav.classList.remove("open"); document.body.classList.remove("menu-open"); } });

const header = document.querySelector(".site-header");
const progress = document.querySelector(".scroll-progress span");
function updateScroll() {
  header.classList.toggle("scrolled", scrollY > 30);
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
}
addEventListener("scroll", updateScroll, { passive: true }); updateScroll();

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
}), { threshold: .12, rootMargin: "0px 0px -40px" });
document.querySelectorAll(".reveal").forEach(element => { element.style.setProperty("--delay", `${element.dataset.delay || 0}ms`); revealObserver.observe(element); });

const finePointer = matchMedia("(pointer:fine)").matches;
if (finePointer) {
  const glow = document.querySelector(".cursor-glow");
  addEventListener("pointermove", event => { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; }, { passive: true });
  document.querySelectorAll(".tilt-card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const rotateX = ((event.clientY - rect.top) / rect.height - .5) * -3;
      const rotateY = ((event.clientX - rect.left) / rect.width - .5) * 3;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();
renderProducts();
