let en
let language = localStorage.getItem('language')
language === "en" ?en = '/en' :en = ''
const tittleH1 = document.querySelector(".content-tittle-h1")
const loadTittlePagEnd = document.querySelector(".load-tittle-page-end")
const loadTittlePagstart = document.querySelector(".load-tittle-page-start")

switch(window.location.pathname){
	case `${en}/about.html`, '/public/html/about.html':
		document.querySelector(`.about`).style.background = `#0080ff`
		tittleH1.innerText = "sobre mi"
		loadTittlePagstart.innerText = loadTittlePagEnd.innerText = "sobre mi"
		break
	case `${en}/skill.html`, '/public/html/skill.html':
		document.querySelector(`.my-skill`).style.background = `#0080ff`
		tittleH1.innerText = "tecnologias de desarrollo"
		loadTittlePagstart.innerText = loadTittlePagEnd.innerText = "tecnologias de desarrollo"
		break
	case `${en}/portafolio.html`, '/public/html/portafolio.html':
		document.querySelector(`.work`).style.background = `#0080ff`
		tittleH1.innerText = "proyectos realizados"
		loadTittlePagstart.innerText = loadTittlePagEnd.innerText = "proyectos realizados"
		break
	case `${en}/contact.html`, '/public/html/contact.html':
		document.querySelector(`.contact`).style.background = `#0080ff`
		tittleH1.innerText = "contactame"
		loadTittlePagstart.innerText = loadTittlePagEnd.innerText = "contactame"
		break
	case `${en}/summary.html`, '/public/html/summary.html':
		document.querySelector(`.CV`).style.background = `#0080ff`
		tittleH1.innerText = "curriculum vitae"
		loadTittlePagstart.innerText = loadTittlePagEnd.innerText = "curriculum vitae"
		break
}
document.querySelector(".about").onclick = ()=>changePage("/about")
document.querySelector(".my-skill").onclick = ()=>changePage("/skill")
document.querySelector(".work").onclick = ()=>changePage("/portafolio")
document.querySelector(".contact").onclick = ()=>changePage("/contact")
document.querySelector(".CV").onclick = ()=>changePage("/summary")
document.querySelector(".go-inicio").onclick = ()=>{
	language === 'es'
		?changePage('/')
		:changePage(`/index.html`)
}

const changePage = async (page)=>{
	console.log(`${en}${page}`)
	console.log(window.location.pathname)
  if(window.location.pathname === `${en}${page}.html`|| window.location.pathname === `/public/html${page}.html`)return
  await end()
	page === `/` || page === `/en/index.html`
		?await sendPage(page)
		:await goPage(page)
	await start(page)
}

const start = async ()=>{
	setTimeout(()=>FunctionExport.openWindow(),1000)
}

async function end(){
	return new Promise((resolve, reject)=>{
		FunctionExport.closeWindow(()=>{resolve('test')})
	})
}
const goPage = async (page)=> {
	location.href = `${window.location.origin}${en}${page}.html`, `_self`	//public/html/
}

const sendPage = async (page)=>{
  window.open(`https://riszartdaryl.netlify.app${en}${page}`, `_self`)
}
start()

