document.querySelector('.go-inicio').addEventListener('click', ()=>{
	if(window.location.pathname !== "/"){
		window.open(window.location.origin, "_self")
	}
})

window.addEventListener('popstate', ()=>{
	FunctionExport.openWindow()
})

function changePage(event){
	event.preventDefault()
	const url = this.getAttribute('href')
	// this.style.backgroundColor = `#0080ff`
	// en la funcion flecha this no tiene su propio valor entonces toma el valor del ambito esterior por lo tanto tomo al ambito global
	// por eso usamos function(event)
	if(url === window.location.pathname){
		return
	}
	FunctionExport.closeWindow()
	setTimeout(()=>{
		window.location.href = url
	},1000)
}

setTimeout(()=>{
	FunctionExport.openWindow()
},500)

window.addEventListener('load', ()=>{
	const links = document.querySelectorAll('a[data-carga-ventana="true"]')
	for (let i = 0; i < links.length; i++){
		links[i].addEventListener('click', changePage)
	}
	let en
	let language = localStorage.getItem('language')
	language === "en" ?en = '/en' :en = ''
	const tittleH1 = document.querySelector(".content-tittle-h1")
	const loadTittlePagEnd = document.querySelector(".load-tittle-page-end")
	const loadTittlePagstart = document.querySelector(".load-tittle-page-start")

	switch(window.location.pathname){
		case `${en}/about`:		//'/public/html/about.html'
			document.querySelector(`.about`).style.background = `#0080ff`
			tittleH1.innerText = "sobre mi"
			loadTittlePagstart.innerText = loadTittlePagEnd.innerText = "sobre mi"
			break
		case `${en}/skill`:		//'/public/html/skill.html'
			document.querySelector(`.my-skill`).style.background = `#0080ff`
			tittleH1.innerText = "tecnologias de desarrollo"
			loadTittlePagstart.innerText = loadTittlePagEnd.innerText = "tecnologias de desarrollo"
			break
		case `${en}/portafolio`:		//, '/public/html/portafolio.html'
			document.querySelector(`.work`).style.background = `#0080ff`
			tittleH1.innerText = "proyectos realizados"
			loadTittlePagstart.innerText = loadTittlePagEnd.innerText = "proyectos realizados"
			break
		case `${en}/contact`:		//, '/public/html/contact.html'
			document.querySelector(`.contact`).style.background = `#0080ff`
			tittleH1.innerText = "contactame"
			loadTittlePagstart.innerText = loadTittlePagEnd.innerText = "contactame"
			break
		case `${en}/summary`:		//, '/public/html/summary.html'
			document.querySelector(`.CV`).style.background = `#0080ff`
			tittleH1.innerText = "curriculum vitae"
			loadTittlePagstart.innerText = loadTittlePagEnd.innerText = "curriculum vitae"
			break
	}
})
