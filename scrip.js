function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    //if(html.classList.contains('light')) {
   //     html.classList.remove('light')
   // }
   // else {
   //     html.classList.add('light')
   // }
  
   //pegar tag img
   const img = document.querySelector('#profile img')
   //substiturir a imagem
   if(html.classList.contains('light')) {
    //se tiver light mode , adicionar imagem light
        img.setAttribute('src', './assets/avatar-light.png')
    }
    else {
    //se não tiver adicionar imagem normal
    img.setAttribute('src', './assets/avatar.png')
    }

}