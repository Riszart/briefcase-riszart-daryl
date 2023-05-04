let en
let language = localStorage.getItem('language')
language === "en" ?en = '/en' :en = ''

switch(window.location.pathname){
	case `${en}/about.html`:
		document.querySelector(`.about`).style.background = `#00ff75`
		break
	case `${en}/skill.html`:
		document.querySelector(`.my-skill`).style.background = `#00ff75`
		break
	case `${en}/portafolio.html`:
		document.querySelector(`.work`).style.background = `#00ff75`
		break
	case `${en}/contact.html`:
		document.querySelector(`.contact`).style.background = `#00ff75`
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
  if(window.location.pathname === `${en}${page}`)return
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
	location.href = `${window.location.origin}/public/html${en}${page}.html`, `_self`	//public/html/
}

const sendPage = async (page)=>{
  window.open(`https://riszartdaryl.netlify.app${en}${page}`, `_self`)
}
start()

