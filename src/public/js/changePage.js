document.querySelector(".about").addEventListener("click", ()=>changePage("about", 'self'))
document.querySelector(".my-skill").addEventListener("click", ()=>changePage("skill", 'self'))
document.querySelector(".work").addEventListener("click", ()=>changePage("portafolio", 'self'))
//document.querySelector(".contact").addEventListener("click", ()=>changePage("contact", 'self'))
document.querySelector(".CV").addEventListener("click", ()=>changePage("summary", 'self'))
document.querySelector(".logo").addEventListener("click", ()=>changePage("/index.html", 'self'))
document.querySelector(".facebook").addEventListener("click", ()=>sendPage("https://www.facebook.com/"))
document.querySelector(".twitter").addEventListener("click", ()=>sendPage("https://twitter.com/?lang=en"))
document.querySelector(".linkeding").addEventListener("click", ()=>sendPage("https://www.linkedin.com/"))
document.querySelector(".github").addEventListener("click", ()=>sendPage("https://github.com/"))

let lang = 'en'
console.log(window.location.pathname)
const changePage = (page, target)=>{
	end()
  if(window.location.pathname == '/public/html/en/index.html'){
    goPageLiveServer(page, target)
  }
  else if(window.location.pathname == '/my-portfolio-riszart/'){
    goPage(page, target)
  }
  else{
    goPageLiveServer(page, target)
    //goPage(page, target)
  }
}

const goPage = (page, target)=>{
  if (page == '/index.html'){
    setTimeout(()=>{window.open(`${window.location.origin}/my-portfolio-riszart/${page}.html`, `_${target}`)}, 1000)
  }else{
    setTimeout(()=>{window.open(`${window.location.origin}/my-portfolio-riszart/html/${page}.html`, `_${target}`)}, 1000)
  }
}
const goPageLiveServer = (page, target)=>{
  if (page !== '/index.html'){
    setTimeout(()=>{window.open(`/public/html/en/${page}.html`, `_${target}`)}, 1000)
  }else{
    setTimeout(()=>{window.open(page, `_${target}`)}, 1000)
  }
}

const sendPage = (page)=>{
  window.open(page, `_blank`)
}