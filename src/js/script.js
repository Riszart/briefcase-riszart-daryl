let leng = localStorage.getItem('leng')

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