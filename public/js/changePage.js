document.querySelector(".about").onclick = ()=>changePage("about", 'self')
document.querySelector(".my-skill").onclick = ()=>changePage("skill", 'self')
document.querySelector(".work").onclick = ()=>changePage("portafolio", 'self')
//document.querySelector(".contact").onclick = ()=>changePage("contact", 'self')
document.querySelector(".CV").onclick = ()=>changePage("summary", 'self')
document.querySelector(".logo").onclick = ()=>changePage("index", 'self')
document.querySelector(".facebook").onclick = ()=>sendPage("https://www.facebook.com/")
document.querySelector(".twitter").onclick = ()=>sendPage("https://twitter.com/?lang=en")
document.querySelector(".linkeding").onclick = ()=>sendPage("https://www.linkedin.com/")
document.querySelector(".github").onclick = ()=>sendPage("https://github.com/")

let lang = 'en'
const changePage = (page, target)=>{
  if(window.location.pathname !== 'https://riszart.github.io/briefcase-riszart-daryl/public/html/en/index.html'){
    end()
    setTimeout(()=>{window.open(`https://riszart.github.io/briefcase-riszart-daryl/public/html/${lang}/${page}.html`, `_${target}`)}, 1000)
  }





  // if(window.location.pathname == '/public/html/en/index.html'){
  //   goPageLiveServer(page, target)
  // }
  // else if(window.location.pathname == '/my-portfolio-riszart/'){
  //   goPage(page, target)
  // }
  // else{
  //   goPageLiveServer(page, target)
  //   //goPage(page, target)
  // }
}

// const goPage = (page, target)=>{
//   if (page == '/index.html'){
//     setTimeout(()=>{window.open(`${window.location.origin}/my-portfolio-riszart/${page}.html`, `_${target}`)}, 1000)
//   }else{
//     setTimeout(()=>{window.open(`${window.location.origin}/my-portfolio-riszart/html/${page}.html`, `_${target}`)}, 1000)
//   }
// }
// const goPageLiveServer = (page, target)=>{
//   if (page !== '/index.html'){
//     setTimeout(()=>{window.open(`/public/html/en/${page}.html`, `_${target}`)}, 1000)
//   }else{
//     setTimeout(()=>{window.open(page, `_${target}`)}, 1000)
//   }
// }

const sendPage = (page)=>{
  window.open(page, `_blank`)
}