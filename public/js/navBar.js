const navSelect = document.querySelector('.nav-principal')
const mainBody = document.querySelector('.portafolio')
mainBody.style.width = `${window.innerWidth - 200}px`
document.querySelector('.show-navbar').onclick = ()=>changeState()
function changeState(){
  const changeState = navSelect.classList.toggle('modified')
  changeState ?hideModied() :showModied()
  const show = document.querySelector('.click-element')
  show.classList.toggle('clicked')
}
function showModied(){
  window.screen.width > 786
    ?navSelect.style.width = '200px'
    :navSelect.style.width = '100vw'
  navSelect.style.padding = '20px 20px'
  navSelect.style.visibility = 'visible' 
}
function hideModied(){
  navSelect.style.width = '0px'
  navSelect.style.padding = '20px 0px'
  navSelect.style.visibility = 'hidden'
}  