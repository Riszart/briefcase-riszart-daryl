let link
let langs

if(!localStorage.getItem('lang')){
  localStorage.setItem('lang', 'es')
}

langs = localStorage.getItem('lang')


if(window.location.pathname !== `/public/html/${langs}/summary.html`){
  document.querySelector(".about").onclick = ()=>changePage("about", 'self')
  document.querySelector(".my-skill").onclick = ()=>changePage("skill", 'self')
  document.querySelector(".work").onclick = ()=>changePage("portafolio", 'self')
  document.querySelector(".contact").onclick = ()=>changePage("contact", 'self')
  document.querySelector(".CV").onclick = ()=>changePage("summary", 'self')
  document.querySelector(".facebook").onclick = ()=>sendPage("https://www.facebook.com/vergaracajacuririszart/")
  document.querySelector(".twitter").onclick = ()=>sendPage("https://twitter.com/riszartvc")
  document.querySelector(".linkeding").onclick = ()=>sendPage("https://www.linkedin.com/in/riszart-vergara-cajacuri-71b935214/")
  document.querySelector(".github").onclick = ()=>sendPage("https://github.com/Riszart")

  document.querySelector('.deploy-menu').onclick = ()=>{
    document.querySelector('.nav-principal').style.width = '100%'
    document.querySelector('.nav-principal').style.padding = '20px'
  }
  document.querySelector('.close-icon__nav').onclick = ()=>{
    document.querySelector('.nav-principal').style.width = '0px'
    document.querySelector('.nav-principal').style.padding = '0px'
  }
}
document.querySelector(".logo").onclick = ()=>changePage("index", 'self')

if(window.location.origin === 'https://riszart.github.io'){
  link = window.location.origin + '/briefcase-riszart-daryl'
}else {
  link = window.location.origin
}

const changePage = async (page, target)=>{
  if(window.location.pathname === `/public/html/${langs}/index.html` && page === 'index')return
  await end()
  await goPage(page, target)
}

const goPage = async (page, target)=> {
    window.open(`${link}/public/html/${langs}/${page}.html`, `_${target}`)
}

const sendPage = (page)=>{
  window.open(page, `_blank`)
}