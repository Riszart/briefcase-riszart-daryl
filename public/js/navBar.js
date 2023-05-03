const navSelect = document.querySelector('.nav-principal')
// document.querySelector('.deploy-nav').onclick = ()=>changeState()
document.querySelector('.show-navbar').onclick = ()=>changeState()
// document.querySelector('.deploy-menu').onclick = ()=>changeState()
//document.querySelector('.close-icon__nav').onclick = ()=>changeState()

function changeState(){
  const changeState = navSelect.classList.toggle('modified')
  changeState
    ?showModied()
    :hideModied()
}

function showModied(){
  window.screen.width > 786
    ?document.querySelector('.nav-principal').style.width = '200px'
    :document.querySelector('.nav-principal').style.width = '100vw'

  document.querySelector('.nav-principal').style.padding = '20px 20px'
  document.querySelector('.nav-principal').style.visibility = 'visible' 
}
function hideModied(){
  document.querySelector('.nav-principal').style.width = '0px'
  document.querySelector('.nav-principal').style.padding = '20px 0px'
  document.querySelector('.nav-principal').style.visibility = 'hidden'
  // document.querySelector('.show-navbar > div ::before').style.left = '0px'

}  

hideModied()