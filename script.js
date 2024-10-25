function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mod adc a imagem light
    img.setAttribute("src", "./assets/avatar.jpg")
  } else {
    // se tiver sem light mod manter imagem normal
    img.setAttribute("src", "./assets/avatar.jpg")
  }
}
