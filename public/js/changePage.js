let language = localStorage.getItem('language')

switch(window.location.pathname){
	case `https://riszartdaryl.netlify.app/${language}/about.html`:
		document.querySelector(`.about`).style.background = `#00ff75`
		break
	case `https://riszartdaryl.netlify.app/${language}/skill.html`:
		document.querySelector(`.my-skill`).style.background = `#00ff75`
		break
	case `https://riszartdaryl.netlify.app/${language}/portafolio.html`:
		document.querySelector(`.work`).style.background = `#00ff75`
		break
	case `https://riszartdaryl.netlify.app/${language}/contact.html`:
		document.querySelector(`.contact`).style.background = `#00ff75`
		break
}
document.querySelector(".about").onclick = ()=>changePage("about", 'self')
document.querySelector(".my-skill").onclick = ()=>changePage("skill", 'self')
document.querySelector(".work").onclick = ()=>changePage("portafolio", 'self')
document.querySelector(".contact").onclick = ()=>changePage("contact", 'self')
document.querySelector(".CV").onclick = ()=>changePage("summary", 'self')
document.querySelector(".facebook").onclick = ()=>sendPage("https://www.facebook.com/vergaracajacuririszart/")
document.querySelector(".twitter").onclick = ()=>sendPage("https://twitter.com/riszartvc")
document.querySelector(".linkeding").onclick = ()=>sendPage("https://www.linkedin.com/in/riszart-vergara-cajacuri-71b935214/")
document.querySelector(".github").onclick = ()=>sendPage("https://github.com/Riszart")

const changePage = async (page, target)=>{
  if(window.location.pathname === `/${language}/main.html` && page === 'main')return
  await end()
  await goPage(page, target)
}

const start = ()=>{
	setTimeout(()=>FunctionExport.openWindow(),1000)
}

async function end(blocked){
	return new Promise((resolve, reject)=>{
			FunctionExport.closeWindow(()=>{resolve('test')})
	})
}
const goPage = async (page, target)=> {
  location.href = `${window.location.origin}/es/${page}.html`, `_${target}`	//public/html/
}

const sendPage = (page)=>{
  window.open(page, `_blank`)
}

start()