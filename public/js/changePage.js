let language = localStorage.getItem('language')

switch(window.location.pathname){
	case `/${language}/about.html`:
		document.querySelector(`.about`).style.background = `#00ff75`
		break
	case `/${language}/skill.html`:
		document.querySelector(`.my-skill`).style.background = `#00ff75`
		break
	case `/${language}/portafolio.html`:
		document.querySelector(`.work`).style.background = `#00ff75`
		break
	case `/${language}/contact.html`:
		document.querySelector(`.contact`).style.background = `#00ff75`
		break
}
document.querySelector(".about").onclick = ()=>changePage("about", '_self')
document.querySelector(".my-skill").onclick = ()=>changePage("skill", '_self')
document.querySelector(".work").onclick = ()=>changePage("portafolio", '_self')
document.querySelector(".contact").onclick = ()=>changePage("contact", '_self')
document.querySelector(".CV").onclick = ()=>changePage("summary", '_self')
document.querySelector(".facebook").onclick = ()=>sendPage("https://www.facebook.com/vergaracajacuririszart/", `_blank`)
document.querySelector(".twitter").onclick = ()=>sendPage("https://twitter.com/riszartvc", `_blank`)
document.querySelector(".linkeding").onclick = ()=>sendPage("https://www.linkedin.com/in/riszart-vergara-cajacuri-71b935214/", `_blank`)
document.querySelector(".github").onclick = ()=>sendPage("https://github.com/Riszart", `_blank`)
document.querySelector(".go-inicio").onclick = ()=>{
	language === 'es'
		?changePage('https://riszartdaryl.netlify.app/', `_self`)
		:changePage(`https://riszartdaryl.netlify.app/en/index.html`,`_self`)
}

const changePage = async (page, target)=>{
  // if(window.location.pathname === `/${language}/main.html` && page === 'main')return
  await end()
	page === `https://riszartdaryl.netlify.app/` || page === `https://riszartdaryl.netlify.app/en/index.html`
  ?await sendPage(page, target)
	:await goPage(page, target)
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
  location.href = `${window.location.origin}/es/${page}.html`, `${target}`	//public/html/
}

const sendPage = async (page, target)=>{
  window.open(page, target)
}

start()