document.querySelector(".contact-send").addEventListener("click", ()=>{
  document.querySelector('.content-formulario').classList.add("change-property")
  document.querySelector('.show-navbar').style.display = 'none'
  document.body.style.overflow = "hidden"
})

document.querySelector(".formulario-close").addEventListener("click", ()=>{
  document.querySelector('.content-formulario').classList.remove("change-property")
  setTimeout(()=>{
    document.body.style.overflow = "auto"
    document.querySelector('.show-navbar').style.display = 'grid'
  }, 950)})