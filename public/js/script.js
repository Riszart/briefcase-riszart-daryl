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