const canvas = document.getElementById("content-index")
const ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight
const polygonArray = []
console.log(polygonArray)

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
      //clearInterval(a)
      // this.x = this.x-0.5
      // this.y = this.y-0.5
    }else{
      this.color = '#000'
      this.radio = radioGeneral -5
      this.apothem = caclApothem(this.radio)
    }
  }
  updateUnit(){
    let a
    // if(this.x > 0){
    // console.log('dentro',this.x)

    //   clearInterval(a)
    //   setInterval(()=>{
    //     this.x = this.x-1
    //   },100)
    // }else{
    // console.log('otro',this.x)

    //   clearInterval(a) 
    //   setInterval(()=>{
    //     this.x = this.x+1
    //   },100)
    // }
    
    this.color = '#0080ff'
    // this.radio = radioGeneral 
    // this.apothem = caclApothem(this.radio)

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
init(radioGeneral)


function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height)

  for(let i in polygonArray){
    polygonArray[i].draw()
    polygonArray[i].update()
  }
  requestAnimationFrame(animate)
}

//   for(let i in polygonArray){
//     polygonArray[i].draw()
//     polygonArray[i].updateUnit()
//   }
// let a = setInterval(()=>{

//   // polygonArray[Number(Math.random()*170).toFixed(0)].draw()
// },500)

animate()















































// function aaaaa(){
//   const canvas = document.getElementById("content-index")
//   const ctx = canvas.getContext('2d')
//   canvas.width = innerWidth
//   canvas.height = innerHeight
//   const PolygonArray = []

//   const mouse = {
//     x: null,
//     y: null,
//     radius: 150
//   }

//   window.addEventListener('mousemove',(event)=>{
//     mouse.x = event.x
//     mouse.y = event.y
//   })
//   ctx.fillStyle = 'red'
//   ctx.font = '30px Verdana'
//   ctx.fillText('A',0,0)
//   //ctx.fillRect(300,300,100,100)
//   const data = ctx.getImageData(0,0,100,100)
//   console.log(data)
//   class Particle{
//     constructor(x,y){
//       this.x = x 
//       this.y = y
//       this.size = 3
//       this.baseX = this.x
//       this.baseY = this.y
//       this.density = (Math.random() * 30)+1

//     }
//     draw(){
//       ctx.fillStyle = 'red'
//       ctx.beginPath()
//       ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
//       ctx.closePath()
//       ctx.fill()
//     }
//     update(){
//       let dx = mouse.x - this.x
//       let dy = mouse.y - this.y
//       let distance = Math.sqrt(dx*dx+dy*dy)
//       if (distance < 100){
//         this.size = 10
//       }else{
//         this.size = 3
//       }
//     }
//   }
//   function init(){
//     particleArray = []
//     for(let i = 0; i< 500; i++){
//       let x = Math.random()*canvas.width
//       let y = Math.random()*canvas.height
//       particleArray.push(new Particle(x,y))
//     }
//     // particleArray.push(new Particle(150,200))
//     // particleArray.push(new Particle(50,50))
//   }
//   init()
//   console.log(particleArray)
//   function animate(){
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     for(let i = 0 ;i<particleArray.length;i++){
//       particleArray[i].draw()
//       particleArray[i].update()
//     }
//     requestAnimationFrame(animate)
//   }
//   animate()
// }
// aaaaa()