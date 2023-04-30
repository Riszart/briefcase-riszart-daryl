let lengs = very()
document.querySelector('.change-leng').value = lengs

function very(){
  if(!localStorage.getItem('leng')) localStorage.setItem('leng',"en")
  return localStorage.getItem('leng')
}

document.querySelector('.change-leng').addEventListener('change', ()=>{
  localStorage.setItem('leng', document.querySelector('.change-leng').value)
  window.open(`https://riszart-daryl.netlify.app/${lengs}/main.html`,'_self')
})