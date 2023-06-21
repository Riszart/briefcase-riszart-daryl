const loadPage = document.querySelector(".page-load")
setTimeout(()=>{
	document.body.style.overflowY = "auto"
	loadPage.style.width = "0vw"
	loadPage.style.transition = "width 0.3s ease-in"
},1000)


document.querySelector('.go-inicio').addEventListener('click', ()=>{
	if(window.location.pathname !== "/"){
		window.open(window.location.origin, "_self")
	}
})

window.addEventListener('popstate', ()=>{
	document.body.style.overflowY = "auto"
	loadPage.style.width = "0vw"
	loadPage.style.transition = "width 0.3s ease-out"
	FunctionExport.openWindow()
})

function changePage(event){
	event.preventDefault()
	const url = this.getAttribute('href')
	// this.style.backgroundColor = `#0080ff`
	// en la funcion flecha this no tiene su propio valor entonces toma el valor del ambito esterior por lo tanto tomo al ambito global
	// por eso usamos function(event)
	if(url === window.location.pathname)return
	document.body.style.overflowY = "hidden"
  loadPage.style.width = "100vw"
  loadPage.style.transition = "width 0.3s ease-in"
	setTimeout(()=>window.location.href = url,1000)
}

window.addEventListener('load', ()=>{
	const links = document.querySelectorAll('a[data-carga-ventana="true"]')
	for (let i = 0; i < links.length; i++){
		links[i].addEventListener('click', changePage)
	}
	let en
	let language = localStorage.getItem('language')
	language === "en" ?en = '/en' :en = ''
	const tittleH1 = document.querySelector(".content-tittle-h1")
	const loadTittlePage = document.querySelector(".load-tittle-page")

	switch(window.location.pathname){
		case `${en}/about`:		//'/public/html/about.html'
			document.querySelector(`.about`).style.background = `#0080ff`
			tittleH1.innerText = "sobre mi"
			loadTittlePage.innerText = "sobre mi"
			break
		case `${en}/skill`:		//'/public/html/skill.html'
			document.querySelector(`.my-skill`).style.background = `#0080ff`
			tittleH1.innerText = "tecnologias de desarrollo"
			loadTittlePage.innerText = "tecnologias de desarrollo"
			break
		case `${en}/portafolio`:		//, '/public/html/portafolio.html'
			document.querySelector(`.work`).style.background = `#0080ff`
			tittleH1.innerText = "proyectos realizados"
			loadTittlePage.innerText = "proyectos realizados"
			break
		case `${en}/contact`:		//, '/public/html/contact.html'
			document.querySelector(`.contact`).style.background = `#0080ff`
			tittleH1.innerText = "contactame"
			loadTittlePage.innerText = "contactame"
			break
		case `${en}/summary`:		//, '/public/html/summary.html'
			document.querySelector(`.CV`).style.background = `#0080ff`
			tittleH1.innerText = "curriculum vitae"
			loadTittlePage.innerText = "curriculum vitae"
			break
	}
})
