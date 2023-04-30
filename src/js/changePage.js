let language = localStorage.getItem('leng')

if(window.location.pathname !== `/riszart-daryl/public/html/${language}/summary.html`){
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
document.querySelector(".logo").onclick = ()=>changePage("main", 'self')

end(true)

const changePage = async (page, target)=>{
  if(window.location.pathname === `/${language}/main.html` && page === 'main')return
  await end(false)
    .then(goPage(page, target))
    .catch(start())
}

const goPage = (page, target)=> {
  window.open(`https://riszart-daryl.netlify.app/${language}/${page}.html`, `_${target}`)
}

const sendPage = (page)=>{
  window.open(page, `_blank`)
}