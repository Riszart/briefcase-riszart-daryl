//document.body.style.overflow = "hidden"
const start = ()=>{
	setTimeout(()=>{
		let a = document.querySelector(".inicio-back__start")
		a.style.width = "0px"
		a.style.transition = "width 1s ease"
	},1050)
	setTimeout(()=>{document.body.style.overflow = "auto"},2000)
}
start()

function end(){
		let b = document.querySelector(".inicio-back__end")
		b.style.width = "100vw"
		b.style.transition = "width 1s ease"
}
if(window.location.pathname == '/my-portfolio-riszart/'){
	document.querySelector('.logo').src = 'img/riszart-logo-white.webp'	
	document.querySelector('.github').src = 'img/github-icon.svg'
	document.querySelector('.linkeding').src = 'img/linkedin-icon.svg'
	document.querySelector('.twitter').src = 'img/twitter-icon.svg'
	document.querySelector('.facebook').src = 'img/facebook-icon.svg'
}