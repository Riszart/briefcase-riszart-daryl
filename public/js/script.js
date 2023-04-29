let lang = localStorage.getItem('lang')
document.body.style.overflow = "hidden"
setTimeout(()=>{document.body.style.overflow = "auto"},2000)
const start = ()=>{
	setTimeout(()=>{
		let a = document.querySelector(".inicio-back__start")
		a.style.width = "0px"
		a.style.transition = "width 1s ease"
	},1350)
	setTimeout(()=>{document.body.style.overflow = "auto"},2000)
}
start()

async function end(){
	return new Promise((resolve, reject)=>{
		let b = document.querySelector(".inicio-back__end")
		b.style.width = "100vw"
		b.style.transition = "width 1s ease"
		setTimeout(()=>{resolve()},1500)
		setTimeout(()=>{b.style.width = "0";},1550)
	})
}
switch(window.location.pathname){
	case `/briefcase-riszart-daryl/public/html/${lang}/about.html`, `/public/html/${lang}/about.html`:
		document.querySelector(`.about`).style.background = `#00ff75`
		break
	case `/briefcase-riszart-daryl/public/html/${lang}/skill.html`, `/public/html/${lang}/skill.html`:
		document.querySelector(`.my-skill`).style.background = `#00ff75`
		break
	case `/briefcase-riszart-daryl/public/html/${lang}/portafolio.html`, `/public/html/${lang}/portafolio.html`:
		document.querySelector(`.work`).style.background = `#00ff75`
		break
	case `/briefcase-riszart-daryl/public/html/${lang}/contact.html`, `/public/html/${lang}/contact.html`:
		document.querySelector(`.contact`).style.background = `#00ff75`
		break
}
