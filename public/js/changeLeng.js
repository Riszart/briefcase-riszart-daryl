
if(!localStorage.getItem('language')) localStorage.setItem('language',"es")

function check(){
  let languaje = localStorage.getItem('language')
  if(languaje === 'es'){document.querySelector('#es').checked}
  if(languaje === 'en'){document.querySelector('#en').checked}
  showLang(languaje)
}

document.querySelector('.content-flag__en').onclick = ()=>{changeLanguage('en')}
document.querySelector('.content-flag__es').onclick = ()=>{changeLanguage('es')}

function changeLanguage(lang){
  localStorage.setItem('language',lang)
  check()
  FunctionExport.closeWindow(()=>{location.href = `${window.location.origin}/public/html/${lang}/main.html`})
}

function showLang(country){
  const change = document.querySelector(`.content-flag__${country}`)
  change.style.outline = 'solid 1px #00ff75'
}
check()