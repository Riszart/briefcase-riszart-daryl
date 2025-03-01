const loadPage = document.querySelector(".page-load")

hideLoad()

function changePage(event){
	event.preventDefault()
	const url = this.getAttribute('href')
	// this.style.backgroundColor = `#0080ff`
	// en la funcion flecha this no tiene su propio valor entonces toma el valor del ambito esterior por lo tanto tomo al ambito global
	// por eso usamos function(event)
	if(url === window.location.pathname)return
	history.pushState({page:url},"",url)
	showLoad()
	setTimeout(()=>window.location.href = url,500)
}

window.addEventListener("popstate",()=>{
	showLoad()
	setTimeout(()=>location.reload(),500)
})

window.addEventListener('load', ()=>{
	const links = document.querySelectorAll('a[data-carga-ventana="true"]')
	for (let i = 0; i < links.length; i++){
		links[i].addEventListener('click', changePage)
	}
	const tittleH1 = document.querySelector(".content-tittle-h1")
	const loadTittlePage = document.querySelector(".load-tittle-page")

	switch(window.location.pathname){
		case `/about`:
		case'/public/html/about.html':
			setStyle('about',tittleH1,loadTittlePage)
			break
		case `/skill`:
		case '/public/html/skill.html':
			setStyle('my-skill',tittleH1,loadTittlePage)
			break
		case `/portafolio`:
		case '/public/html/portafolio.html':
			setStyle('work',tittleH1,loadTittlePage)
			break
		case `/contact`:
		case '/public/html/contact.html':
			setStyle('contact',tittleH1,loadTittlePage)
			break
		case `/summary`:
		case '/public/html/summary.html':
			setStyle('CV',tittleH1,loadTittlePage)
			break
	}
})

document.querySelector('.go-inicio').addEventListener('click', ()=>{
	if(window.location.pathname !== "/"){
		window.open(window.location.origin, "_self")
	}
})
// ----------------------------------------------------------------------------
function setStyle(value,tittleH1,loadTittlePage){
	document.querySelector(`.${value}`).style.background = `#0080ff`
	tittleH1.innerText = value
	loadTittlePage.innerText = value
}

function showLoad(){
	document.body.style.overflowY = "hidden"
  loadPage.style.width = "100vw"
  loadPage.style.transition = "width 0.3s ease-in"
}
function hideLoad(){
	setTimeout(() => {
		document.body.style.overflowY = "auto"
		loadPage.style.width = "0vw"
		loadPage.style.transition = "width 0.3s ease-out"
	}, 1000)
}