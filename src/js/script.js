let leng = localStorage.getItem('leng')
document.body.style.overflow = "hidden"
setTimeout(()=>{document.body.style.overflow = "auto"},2000)
const start = ()=>{
	setTimeout(()=>{
		let a = document.querySelector(".inicio-back__start")
		a.style.width = "0px"
		a.style.transition = "width 1s ease"
	},1300)
	setTimeout(()=>{document.body.style.overflow = "auto"},1500)
}
async function end(){
	return new Promise((resolve, reject)=>{
		let b = document.querySelector(".inicio-back__end")
		b.style.width = "100vw"
		b.style.transition = "width 1s ease"
		setTimeout(()=>{resolve()},1000)
	})
}
switch(window.location.pathname){
	case `/riszart-daryl/public/html/${leng}/about.html`, `/public/html/${leng}/about.html`:
		document.querySelector(`.about`).style.background = `#00ff75`
		break
	case `/riszart-daryl/public/html/${leng}/skill.html`, `/public/html/${leng}/skill.html`:
		document.querySelector(`.my-skill`).style.background = `#00ff75`
		break
	case `/riszart-daryl/public/html/${leng}/portafolio.html`, `/public/html/${leng}/portafolio.html`:
		document.querySelector(`.work`).style.background = `#00ff75`
		break
	case `/riszart-daryl/public/html/${leng}/contact.html`, `/public/html/${leng}/contact.html`:
		document.querySelector(`.contact`).style.background = `#00ff75`
		break
}
