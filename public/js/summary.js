const summaryCanvas = document.querySelector(".canvas-summary")
const guia = document.querySelector(".summary-main__inicio")
const ctx = summaryCanvas.getContext("2d")
summaryCanvas.width = innerWidth
summaryCanvas.height = guia.clientHeight
const circleArray = []

let xCenter = 1100
let yCenter = 350

class Canvas{
  constructor({
    xCenter,yCenter,radius,startAngle,endAngle,clockwise
  }){
    this.xCenter = xCenter
    this.yCenter = yCenter
    this.radius = radius
    this.startAngle = startAngle
    this.endAngle = endAngle
    this.clockwise = clockwise
  }
  draw(x,y){
    ctx.beginPath();
    ctx.strokeStyle  = '#00ff7590'
    ctx.lineWidth = 6
    ctx.arc(this.xCenter - global/10,this.yCenter,this.radius,this.startAngle + global/100,this.endAngle  + global/100,this.clockwise);
    ctx.stroke();
    if( block === false){
      global++
      if(global == 0)block = true
    }else if(block === true){
      global--
      if(global == -2000)block = false
    }
    console.log(global)
  }
}
let global = 0
let val = 0
let block = true

for(let i=0; i<10; i++){
  circleArray.push(new Canvas({
    xCenter,
    yCenter,
    radius: 50 + val,
    startAngle: numberRandom(),
    endAngle: numberRandom(),
    clockwise: false
  }))
  val = val + 10
}
function numberRandom(){
  return Number((Math.random()*5 + 1).toFixed(2))
}
  // ctx.beginPath()
  // // ctx.fillStyle = '#101010'
  // ctx.lineWidth = 4
  // // ctx.moveTo(0, 0)
  // // ctx.lineTo(100, 100)
  // // ctx.lineTo(150, 150)
  // ctx.arc(1000,150,50,0*Math.PI,1.6*Math.PI);
  // ctx.closePath()
  // ctx.stroke()
  // ctx.fill()


  // ctx.beginPath();
  // ctx.strokeStyle  = '#00ff75'
  // ctx.lineWidth = 6
  // ctx.arc(1100,350,50, 1*Math.PI, 2.6*Math.PI);
  // ctx.stroke();

function animation(){
  ctx.clearRect(0,0,summaryCanvas.width,summaryCanvas.height)

  for(let item in circleArray){
    circleArray[item].draw(numberRandom(),numberRandom())
  }
  requestAnimationFrame(animation)
}
// animation()
