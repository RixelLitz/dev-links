function toggleMode() {
  const html = document.documentElement // pegando o html
  html.classList.toggle("light") // fazendo a troca de temas
  const img = document.querySelector("#profile img") //pegar o seletor da imagem
  if (html.classList.contains("light")) { //se tiver light mode adicionar imagem light
    img.setAttribute("src", "assets/avatar-light.png")
  } else { // se nao tiver em modo light, manter a foto original
    img.setAttribute("src", "assets/avatar.png")
  }
}
