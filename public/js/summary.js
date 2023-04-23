document.body.style.overflow = "hidden"
setTimeout(()=>{document.body.style.overflow = "auto"},2000)

start()
function start(){
	setTimeout(()=>{
		let a = document.querySelector(".inicio-back__start")
		a.style.width = "0px"
		a.style.transition = "width 1s ease"
	},1000)
}
function end(){
		let b = document.querySelector(".inicio-back__end")
		b.style.width = "100vw"
		b.style.transition = "width 1s ease"
}
