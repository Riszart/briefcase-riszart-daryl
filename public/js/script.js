let leng = localStorage.getItem('leng')

switch(window.location.pathname){
	case `https://riszartdaryl.netlify.app/${leng}/about.html`, `https://riszartdaryl.netlify.app/about.html` :
		document.querySelector(`.about`).style.background = `#00ff75`
		break
	case `https://riszartdaryl.netlify.app/${leng}/skill.html`, `https://riszartdaryl.netlify.app/skill.html`:
		document.querySelector(`.my-skill`).style.background = `#00ff75`
		break
	case `https://riszartdaryl.netlify.app/${leng}/portafolio.html`, `https://riszartdaryl.netlify.app/portafolio.html`:
		document.querySelector(`.work`).style.background = `#00ff75`
		break
	case `https://riszartdaryl.netlify.app/${leng}/contact.html`, `https://riszartdaryl.netlify.app/contact.html`:
		document.querySelector(`.contact`).style.background = `#00ff75`
		break
}