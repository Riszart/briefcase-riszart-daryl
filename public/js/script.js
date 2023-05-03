window.addEventListener('popstate',()=>{
  history.pushState(null, null, window.location.pathname)
  history.pushState(null, null, window.location.pathname)
}, false)
