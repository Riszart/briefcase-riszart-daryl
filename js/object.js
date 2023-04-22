class project{
  constructor({
    img,
    url,
    name,
    description,
    programs
  }){
    this.img = img
    this.url = url
    this.name = name
    this.description = description
    this.programs = programs
  }
  createElement(){
    const content = document.querySelector(".portafolio__content-li")
    const article = document.createElement("article")
    article.classList.add("content-project__item")
    const div = document.createElement("div")
    div.addEventListener("click", ()=>{
      this.showItem()
    })
    const img = document.createElement("img")
    div.appendChild(img)
    img.src = this.img
    const p = document.createElement("p")
    p.classList.add("project-name")
    p.innerText = this.name
    article.append(div,p)
    content.appendChild(article)
  }

  showItem(){
    document.querySelector(".header-principal").style.display = "none"
    document.querySelector(".container-footer-main").style.display = "none"

    document.querySelector(".box-float").style.display = "block"
    document.querySelector(".portafolio").style.filter = "blur(15px)"
    document.querySelector(".img-project").src = this.img
    document.querySelector(".box-float__project-name ").innerText = this.name
    document.querySelector(".box-float__project-description").innerText = this.description
    document.querySelector(".box-float__project-programs").innerText = this.programs
    document.querySelector(".box-float__close").addEventListener("click", ()=>this.closeItem())
    const p = document.createElement("p")
    p.classList.add("go-to-page")
    p.innerText = "Ir a la pagina"
    p.addEventListener("click", ()=>this.openItem())
    document.querySelector(".box-float").appendChild(p)
  }

  closeItem(){
    document.querySelector(".header-principal").style.display = "block"
    document.querySelector(".container-footer-main").style.display = "block"

    document.querySelector(".box-float").style.display = "none"
    document.querySelector(".portafolio").style.filter = "blur(0)"
    document.querySelector(".img-project").src = "none"
    document.querySelector(".box-float__project-name").innerText = "none"
    document.querySelector(".box-float__project-description").innerText = "none"
    document.querySelector(".box-float__project-programs").innerText = "none"
}
  openItem(){
    window.open(this.url, "_blank")
  }
}

const item6 = {
  img: "../img/project/api-rest/index.png",
  url: "https://riszart.github.io/api-rest_practice/",
  name: "API-rest con Fetch",
  description: "uso de API-rest con metodo fetch, traer, agregar a favoritos, eliminar de favoritos y agregar una nueva imagen de gato o perro al backend con el uso de FECTH",
  programs: "JavaScript HTML CSS"
}
const obj6=  new project(item6)
obj6.createElement()

const item5 = {
  img: "../img/project/atm/atm-index.png",
  url: "https://riszart.github.io/ATM-practice/",
  name: "RISZBANK",
  description: "pagina realisada, donde practico lo aprendido con itenacion en funcione y Promise asi como avansando en como comprender para evitar repetir codigo en js, avansando en el entendimiento de preprosesadores: PUG y SASS",
  programs: "HTML CSS PUG SASS JavaScript"
}
const obj5=  new project(item5)
obj5.createElement()

const item4 = {
  img: "../img/project/screencapture-riszart-github-io-processors-practice-project-2023-03-03-22_03_59.png",
  url: "https://riszart.github.io/processors-practice-project/",
  name: "page BLACKPINK",
  description: "pagina realisada donde pongo aprueba lo aprendido con preprosesadores como HTML por PUG y CSS por SASS",
  programs: "HTML CSS PUG SASS JavaScript"
}
const obj4=  new project(item4)
obj4.createElement()

const item3 = {
  img: "../img/project/screencapture-riszart-github-io-proyecto-game-2023-03-03-22_03_31.png",
  url: "https://riszart.github.io/proyecto-game/",
  name: "riszgame",
  description: "pagina realisa usando canvas para poniendo en practica lo aprendido",
  programs: "HTML CSS PUG SASS JavaScript"
}
const obj3=  new project(item3)
obj3.createElement()

const item2 = {
  img: "../img/project/screencapture-riszart-github-io-frontend-developer-js-practico-2023-03-03-21_36_40.png",
  url: "https://riszart.github.io/frontend-developer-js-practico/",
  name: "shop",
  description: "aplicando el paradigma de objetos, modifique un proyecto que lo realise anteriormente modificandolo, agragando el uso de proprosesadores como PUG para HTML y SASS para CSS, en caso de javscript cambie la logiaca para que funcione con objetos",
  programs: "HTML CSS PUG SASS JavaScript"
}
const obj2=  new project(item2)
obj2.createElement()

const item1 = {
  img: "../img/project/screencapture-riszart-github-io-estadistica-math-2023-03-03-19_57_59.png",
  url: "https://riszart.github.io/estadistica-math/",
  name: "proyecto de estadistica",
  description: "proyecto de estadisca realisado con canvas de javascript",
  programs: "html, css, javascript"
}
const obj1=  new project(item1)
obj1.createElement()