if(window.location.pathname !== '/public/html/en/summary.html'){
  document.querySelector(".about").onclick = ()=>changePage("about", 'self')
  document.querySelector(".my-skill").onclick = ()=>changePage("skill", 'self')
  document.querySelector(".work").onclick = ()=>changePage("portafolio", 'self')
  document.querySelector(".contact").onclick = ()=>changePage("contact", 'self')
  document.querySelector(".CV").onclick = ()=>changePage("summary", 'self')
  document.querySelector(".facebook").onclick = ()=>sendPage("https://www.facebook.com/")
  document.querySelector(".twitter").onclick = ()=>sendPage("https://twitter.com/?lang=en")
  document.querySelector(".linkeding").onclick = ()=>sendPage("https://www.linkedin.com/")
  document.querySelector(".github").onclick = ()=>sendPage("https://github.com/")
}
document.querySelector(".logo").onclick = ()=>changePage("index", 'self')

let lang = 'en'
let link
if(window.location.origin === 'https://riszart.github.io'){
  link = window.location.origin + '/briefcase-riszart-daryl'
}else {
  link = window.location.origin
}

const changePage = async (page, target)=>{
  if(window.location.pathname === `/public/html/en/index.html` && page === 'index')return
  await end()
  await goPage(page, target)
}

const goPage = async (page, target)=> {
    window.open(`${link}/public/html/${lang}/${page}.html`, `_${target}`)
}

const sendPage = (page)=>{
  window.open(page, `_blank`)
}