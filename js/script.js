const links = document.querySelectorAll(".header-menu a")

function ativarLink(link) {
  const url = location.href
  const href = link.href
  if (url.includes(href)) {
    link.classList.add('ativo')
  }
}

links.forEach(ativarLink)

const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro) {
  const element = document.getElementById(parametro)
  if (element) {
    element.checked = true;
  } 
}

parametros.forEach(ativarProduto)

const perguntas = document.querySelectorAll("dt")

function eventoPerguntas(dt) {
  dt.addEventListener("click", () => {
    dt.parentElement.classList.toggle("ativa")
  })
}

perguntas.forEach(eventoPerguntas)

const galeria = document.querySelectorAll(".bicicleta-imagens img")
const galeriaContainer = document.querySelector(".bicicleta-imagens")

function trocarImagem(event) {
  const img = event.currentTarget
  const media = matchMedia('(min-width: 1000px)').matches
  if (media) {
    galeriaContainer.prepend(img)
  }
}

function eventoGaleria(img) {
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventoGaleria)

// Animação

if(window.SimpleAnime) {
  new SimpleAnime()
}
