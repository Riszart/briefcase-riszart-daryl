const canvas = document.getElementById("content-index")
const ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight
const polygonArray = []

const radioGeneral = 40

let count = 10

const mouse = {
  x: null,
  y: null,
  radius: 150
}

window.addEventListener('mousemove',(event)=>{
  mouse.x = event.x
  mouse.y = event.y
})

class Polygon{
  constructor(radio,x,y,apothem,color){
    this.x = x
    this.y = y
    this.radio = radio
    this.apothem = apothem
    this.color = color
  }
  draw(){
    ctx.beginPath() 
    ctx.fillStyle = '#000'
    ctx.lineWidth = 10
    ctx.moveTo(this.x-this.radio, this.y)
    ctx.lineTo(this.x-this.radio/2, this.y-this.apothem)
    ctx.lineTo(this.x+this.radio/2,  this.y-this.apothem)
    ctx.lineTo(this.x+this.radio, this.y)
    ctx.lineTo(this.x+this.radio/2, this.y+this.apothem)
    ctx.lineTo(this.x-this.radio/2, this.y+this.apothem)
    ctx.lineTo(this.x-this.radio, this.y)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle = this.color
    ctx.fill()
  }
  update(){
    let dx = mouse.x - this.x
    let dy = mouse.y - this.y
    let distance = Math.sqrt(dx*dx+dy*dy) // hipotenusa para hallar del punto central del poligono al punto del mouse
    if (distance <= radioGeneral){
      this.radio = 20
      this.apothem = caclApothem(this.radio)
      this.color = '#00ff75'

    }else{
      this.color = '#000'
      this.radio = radioGeneral -5
      this.apothem = caclApothem(this.radio)
    }
  }
  updateUnit(){
    let a
    this.color = '#0080ff'
  }
}

function caclApothem(radio){
  return Number(Math.sqrt((radio*radio - (radio/2)*(radio/2))).toFixed(2))
}

function init(radio){
  let indice = 0
  let apothem = caclApothem(radio)

  let file = window.innerWidth / (radio*2 + 60)
  let rows = (Math.sign(file)*file)
  let fileColum = window.innerHeight / (radio*2 - 1)
  let columns = (Math.sign(fileColum)*fileColum)
  
  //--- poligonos pocision inpar ---
  let iterationInpar = 0
  for(let i = 0; i<rows+1; i++){
    
    let x = Number(((radio)*iterationInpar+(indice*20)).toFixed(2))
    let count = 0
    iterationInpar = iterationInpar +3
    let iterationInpar2 = 1
    for(let a=0; a<columns; a++){
      let y = Number((apothem*iterationInpar2+(count*10)).toFixed(2))
      polygonArray.push(new Polygon(radio,x,y,apothem))
      count++
      iterationInpar2 = iterationInpar2 +2
    }
    indice++
  }
  //--- poligonos pocision par ---
  let iterationPar = 1
  for(let i = 0; i<rows; i++){
    let x = Number(((radio+(radio/2))*iterationPar + (iterationPar*10)).toFixed(2))
    let count = -5
    iterationPar = iterationPar +2
    let iterationPar2 = 0
    for(let a=0; a<columns+1; a++){
      let y = Number((apothem*iterationPar2 +(count)).toFixed(2))
      polygonArray.push(new Polygon(radio,x,y,apothem))
      count = count + 10
      iterationPar2 = iterationPar2 + 2
    }
  }
}
window.addEventListener('DOMContentLoaded', ()=>init(radioGeneral))

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height)

  for(let i in polygonArray){
    polygonArray[i].draw()
    polygonArray[i].update()
  }
  requestAnimationFrame(animate)
}
window.addEventListener("load", animate)

function interval(state){
  return new Promise(resolve=>{
    const contentTitle = document.querySelector('.title-h2-index')
    contentTitle.style.top = '400px'
    if(state === "start"){
      setTimeout(()=>{
        window.innerWidth < 768
          ?contentTitle.style.height = "160px"
          :contentTitle.style.height = "250px"
        setTimeout(resolve,500)
      },1500)
    } 
    if(state === "end"){
      contentTitle.style.left = `-${(contentTitle.clientWidth/2+5)}px`
      setTimeout(resolve,3000)
    }
  })  
}

function showMsm(stringText){
  return new Promise((resolve)=>{
    const textH3 = document.querySelector('.write-h3')
    let text = stringText.split('')
    let letter = addLetter(text)
    let textWidth = text.length
    let count = 0
    let inter = setInterval(()=>{
      count++
      let letterSatate = letter.next().value
      let textshow = document.createTextNode(letterSatate)
      textH3.appendChild(textshow)
      if(count == textWidth){
        clearInterval(inter)
        setTimeout(resolve,350)
      }
    },50)
  })
}

function removeMsm(){
  return new Promise((resolve)=>{
    const textH3 = document.querySelector('.write-h3')
    let inter = setInterval(()=>{
      let text = textH3.innerText
      let remove = text.length - 1
      let removeLetter = text.substring(0,remove)
      textH3.innerText = removeLetter
      if(remove == 0){
        clearInterval(inter)
        resolve()
      }
    },50)
  })
}

function* addLetter(letter){
  for(let value of letter){
    yield value
  }
}

async function moveScreen(){
  const textNode = {
    1:"Javascript",
    2:"CSS",
    3:"SASS",
    4:"HTML",
    5:"PUG",
    6:"TailwindCSS",
  } 
  await interval("start")
  for(let element in textNode){
    await showMsm(textNode[element])
    await removeMsm()
  }
  await showMsm("Freelance")
  await interval("end")
  document.querySelector('.title-h2-index').style.display = 'none'
  if(window.innerWidth > 775)navSelect.classList.add('modified');showModied()
}
window.addEventListener("load", moveScreen)