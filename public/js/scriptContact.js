document.querySelector('.contact-send').onclick = ()=>changeStateContact()
document.querySelector('.formulario-close').onclick = ()=>changeStateContact()
const navBarContact = document.querySelector('.show-navbar')
const formContact = document.querySelector('.content-formulario')

function changeStateContact(){
  const changeProperty = navSelect.classList.toggle('modified')
  changeProperty ?showModiedContact() :hideModiedContact()
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