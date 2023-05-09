const FunctionExport = {}
document.body.style.overflow = "hidden"
FunctionExport.closeWindow = function closeWindow(fun){
  document.body.style.overflow = "hidden"
  let b = document.querySelector(".inicio-back__end")
  b.style.width = "100vw"
  b.style.transition = "width 0.3s ease-in"
  setTimeout(fun,500)
}

FunctionExport.openWindow = function openWindow(){
  let a = document.querySelector(".inicio-back__start")
  a.style.width = "0px"
  a.style.transition = "width 0.3s ease-out"
	setTimeout(()=>{document.body.style.overflow = "auto"},500)
}