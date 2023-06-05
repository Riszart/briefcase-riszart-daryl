document.querySelector('.contact-send').onclick = ()=>changeStateContact()
document.querySelector('.formulario-close').onclick = ()=>changeStateContact()
const navBarContact = document.querySelector('.show-navbar')
const formContact = document.querySelector('.content-formulario')
document.body.addEventListener("keydown", event=>{
  if(event.code === "Escape"){
    formContact.classList.remove('modified')
    hideModiedContact()}
})

function changeStateContact(){
  let changeProperty = formContact.classList.toggle('modified')
  changeProperty ?showModiedContact() :hideModiedContact()
  // console.log(changeProperty)
}

function showModiedContact(){
  formContact.style.height = '100%'
  document.body.style.overflow = "hidden"
  navBarContact.style.display = 'none'
}
function hideModiedContact(){
  formContact.style.height = '0'
  setTimeout(()=>{
    navBarContact.style.display = 'grid'
    document.body.style.overflow = "auto"
  }, 1200)
}  