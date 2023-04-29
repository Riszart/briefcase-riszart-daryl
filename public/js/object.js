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
      window.scroll({
        top: 50,
      });
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
    document.querySelector(".nav-principal").style.display = "none"
    document.querySelector(".container-footer-main").style.display = "none"

    document.querySelector(".box-float").style.display = "block"
    document.querySelector(".portafolio").style.filter = "blur(15px)"
    document.querySelector(".img-project").src = this.img
    document.querySelector(".box-float__project-name ").innerText = this.name
    document.querySelector(".box-float__project-description").innerText = this.description
    document.querySelector(".box-float__project-programs").innerText = this.programs
    document.querySelector(".box-float__close").addEventListener("click", ()=>{
      this.closeItem()
    })
    document.querySelector(".go-to-page").onclick = ()=>this.openItem()
    document.querySelector(".go-to-page").innerText = "Ir a la pagina"
  }

  closeItem(){
    document.querySelector(".nav-principal").style.display = "block"
    document.querySelector(".container-footer-main").style.display = "block"

    document.querySelector(".box-float").style.display = "none"
    document.querySelector(".portafolio").style.filter = "blur(0)"
    document.querySelector(".img-project").src = ""
    document.querySelector(".box-float__project-name").innerText = "none"
    document.querySelector(".box-float__project-description").innerText = "none"
    document.querySelector(".box-float__project-programs").innerText = "none"
    document.querySelector(".go-to-page").onclick = ()=>{}
    document.querySelector(".go-to-page").innerText = ""
}
  openItem(){
    window.open(this.url, "_blank")
  }
}

const item8 = {
  img: "https://riszart.github.io/briefcase-riszart-daryl/src/img/projects/riszart-github-io-landing-page-tourism.png",
  url: "https://riszart.github.io/landing-page-tourism/",
  name: "landing page turismo Peru",
  description: "landing page realisado con tailwindcss, poniendo en practica lo aprendido en los cursos de tailwindcss. diseño com modo oscuro direccionando a la pagina de wikipedia correspondiendo a cada opsion de lugares turisticos",
  programs: "TailwindCSS JavaScript"
}
const obj8=  new project(item8)
obj8.createElement()

const item7 = {
  img: "https://riszart.github.io/briefcase-riszart-daryl/src/img/projects/riszart-github-io-landing-page-food.png",
  url: "https://riszart.github.io/landing-page-food/",
  name: "landing page comida del Peru",
  description: "landing page realisado con tailwindcss, poniendo en practica lo aprendido en los cursos de tailwindcss. ",
  programs: "TailwindCSS JavaScript"
}
const obj7=  new project(item7)
obj7.createElement()

const item6 = {
  img: "https://riszart.github.io/briefcase-riszart-daryl/src/img/projects/riszart-github-io-api-rest_practice/index.png",
  url: "https://riszart.github.io/api-rest_practice/",
  name: "API-rest con Fetch",
  description: "uso de API-rest con metodo fetch, traer, agregar a favoritos, eliminar de favoritos y agregar una nueva imagen de gato o perro al backend con el uso de FECTH",
  programs: "JavaScript HTML CSS"
}
const obj6=  new project(item6)
obj6.createElement()

const item5 = {
  img: "https://riszart.github.io/briefcase-riszart-daryl/src/img/projects/riszart-github-io-ATM-practice/atm-index.png",
  url: "https://riszart.github.io/ATM-practice/",
  name: "RISZBANK",
  description: "pagina realisada, donde practico lo aprendido con itenacion en funcione y Promise asi como avansando en como comprender para evitar repetir codigo en js, avansando en el entendimiento de preprosesadores: PUG y SASS",
  programs: "HTML CSS PUG SASS JavaScript"
}
const obj5=  new project(item5)
obj5.createElement()

const item4 = {
  img: "https://riszart.github.io/briefcase-riszart-daryl/src/img/projects/riszart-github-io-processors-practice-project/riszart-github-io-processors-practice-project.png",
  url: "https://riszart.github.io/processors-practice-project/",
  name: "page BLACKPINK",
  description: "pagina realisada donde pongo aprueba lo aprendido con preprosesadores como HTML por PUG y CSS por SASS",
  programs: "HTML CSS PUG SASS JavaScript"
}
const obj4=  new project(item4)
obj4.createElement()

const item3 = {
  img: "https://riszart.github.io/briefcase-riszart-daryl/src/img/projects/riszart-github-io-proyecto-game/riszart-github-io-proyecto-game.png",
  url: "https://riszart.github.io/proyecto-game/",
  name: "riszgame",
  description: "pagina realisa usando canvas para poniendo en practica lo aprendido",
  programs: "HTML CSS PUG SASS JavaScript"
}
const obj3=  new project(item3)
obj3.createElement()

const item2 = {
  img: "https://riszart.github.io/briefcase-riszart-daryl/src/img/projects/riszart-github-io-api-rest_practice/riszart-github-io-api-rest_practice.png",
  url: "https://riszart.github.io/frontend-developer-js-practico/",
  name: "shop",
  description: "aplicando el paradigma de objetos, modifique un proyecto que lo realise anteriormente modificandolo, agragando el uso de proprosesadores como PUG para HTML y SASS para CSS, en caso de javscript cambie la logiaca para que funcione con objetos",
  programs: "HTML CSS PUG SASS JavaScript"
}
const obj2=  new project(item2)
obj2.createElement()

const item1 = {
  img: "https://riszart.github.io/briefcase-riszart-daryl/src/img/projects/riszart-github-io-estadistica-math/riszart-github-io-estadistica-math.png",
  url: "https://riszart.github.io/estadistica-math/",
  name: "proyecto de estadistica",
  description: "proyecto de estadisca realisado con canvas de javascript",
  programs: "html, css, javascript"
}
const obj1=  new project(item1)
obj1.createElement()