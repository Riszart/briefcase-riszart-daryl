document.body.style.overflow = "hidden"
setTimeout(()=>{document.body.style.overflow = "auto"},2000)
const start = ()=>{
	setTimeout(()=>{
		let a = document.querySelector(".inicio-back__start")
		a.style.width = "0px"
		a.style.transition = "width 1s ease"
	},1050)
	setTimeout(()=>{document.body.style.overflow = "auto"},2000)
}
start()

async function end(){
	return new Promise((resolve, reject)=>{
		let b = document.querySelector(".inicio-back__end")
		b.style.width = "100vw"
		b.style.transition = "width 1s ease"
		setTimeout(()=>{resolve()},1000)
		setTimeout(()=>{b.style.width = "0";},1250)
	})
}
switch(window.location.pathname){
	case '/briefcase-riszart-daryl/public/html/en/about.html', '/public/html/en/about.html':
		document.querySelector('.about').style.background = '#00ff75'
		break
	case '/briefcase-riszart-daryl/public/html/en/skill.html', '/public/html/en/skill.html':
		document.querySelector('.my-skill').style.background = '#00ff75'
		break
	case '/briefcase-riszart-daryl/public/html/en/portafolio.html', '/public/html/en/portafolio.html':
		document.querySelector('.work').style.background = '#00ff75'
		break
	case '/briefcase-riszart-daryl/public/html/en/contact.html', '/public/html/en/contact.html':
		document.querySelector('.contact').style.background = '#00ff75'
		break
}

