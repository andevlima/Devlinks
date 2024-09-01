function toggleMode() {
  const html = document.documentElement
  // versão não resumida:
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  // vesrão inteligente:
  html.classList.toggle("light")

  // imagem - pegar a tag img
  const img = document.querySelector('#profile img')
  // substituir a imagem
  if (html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }
}
