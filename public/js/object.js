class project{
  constructor({
    img,
    alt,
    url,
    name,
    description,
    programs,
    classIten
  }){
    this.img = img
    this.alt = alt
    this.url = url
    this.name = name
    this.description = description
    this.programs = programs
    this.classIten = classIten
  }
  createElement(){
    const content = document.querySelector(".portafolio__content-li")
    const article = document.createElement("article")
    const divConatiner = document.createElement("div")
    divConatiner.classList.add("content-project__item")
    const divExpand = document.createElement("div")
    divExpand.classList.add("expand-div__float")
    divExpand.innerText = this.description
    article.classList.add(this.classIten)
    const div = document.createElement("div")
    div.addEventListener("click", ()=>{
      this.showItem()
      window.scroll({
        top: 50,
      });
    })
    const img = document.createElement("img")
    img.setAttribute("alt", this.alt)
    img.setAttribute("width", "617px")
    div.appendChild(img)
    img.src = this.img.sm
    const p = document.createElement("p")
    p.classList.add("project-name")
    p.innerText = this.name
    article.append(divConatiner,divExpand)
    divConatiner.append(div,p)
    content.appendChild(article)
  }

  showItem(){
    document.querySelector(".nav-principal").style.display = "none"
    document.querySelector(".container-footer-main").style.display = "none"
    document.querySelector(".show-navbar").style.display = "none"
    document.querySelector(".header-container").style.filter = "blur(4px)"
    document.querySelector(".content-tittle-h1").style.filter = "blur(4px)"

    document.querySelector(".box-float").style.visibility = "visible"
    document.querySelector(".box-float").style.width = "70%"
    document.querySelector(".box-float").style.height = "auto"
    document.querySelector(".box-float").style.borderWidth = "2px"

    document.querySelector(".portafolio").style.filter = "blur(15px)"
    document.querySelector(".img-project").src = this.img.lg
    document.querySelector(".box-float__project-name ").innerText = this.name
    document.querySelector(".box-float__project-description").innerText = this.description
    document.querySelector(".box-float__project-programs").innerText = this.programs
    document.querySelector(".box-float__close").addEventListener("click", ()=>{
      this.closeItem()
      const positionTop = document.querySelector(`.${this.classIten}`).offsetTop
      window.scroll({
        top: positionTop - 150,
      });
    })
    document.querySelector(".go-to-page").onclick = ()=>this.openItem()
    document.querySelector(".go-to-page").innerText = "Ir a la pagina"
  }

  closeItem(){
    const boxFloat = document.querySelector(".box-float")
    // document.querySelector(".box-float").style.visibility = "hidden"
    boxFloat.style.width = "0"
    setTimeout(()=>{
      boxFloat.style.height = "0"
      boxFloat.style.borderWidth = "0"
      document.querySelector(".portafolio").style.filter = "blur(0)"
      document.querySelector(".content-tittle-h1").style.filter = "blur(0)"
      document.querySelector(".img-project").src = ""
      document.querySelector(".box-float__project-name").innerText = "none"
      document.querySelector(".box-float__project-description").innerText = "none"
      document.querySelector(".box-float__project-programs").innerText = "none"
      document.querySelector(".show-navbar").style.display = "grid"
      document.querySelector(".header-container").style.filter = "blur(0)"
    },400)
    document.querySelector(".nav-principal").style.display = "block"
    document.querySelector(".container-footer-main").style.display = "block"

    document.querySelector(".go-to-page").onclick = ()=>{}
    document.querySelector(".go-to-page").innerText = ""
}
  openItem(){
    window.open(this.url, "_blank")
  }
}

const item8 = {
  img: {
    lg: "https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-landing-page-tourism/lg/main-lg.avif",
    sm: "https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-landing-page-tourism/sm/main-sm.png"
  },
  alt: "landing page turismo Peru",
  url: "https://riszart.github.io/landing-page-tourism/",
  name: "desarrollo web de landing page turismo Peru",
  description: "landing page realizado con tailwindcss, poniendo en práctica lo aprendido en los cursos de tailwindcss. Diseño con modo oscuro y claro, direccionando a la página de Wikipedia, correspondiendo a cada opción de lugares turísticos",
  programs: "TailwindCSS JavaScript",
  classIten: "landing-page-turismo-peru"
}
const obj8=  new project(item8)
obj8.createElement()

const item7 = {
  img: {
    lg: "https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-landing-page-food/lg/main-lg.avif",
    sm: "https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-landing-page-food/sm/main-sm.png"
  },
  alt: "desarrollo web de landing page comida del Peru",
  url: "https://riszart.github.io/landing-page-food/",
  name: "landing page comida del Peru",
  description: "landing page realisado con tailwindcss, práctica en la estructuración así como en la parte de construcción con mobile first, agregando funcionalidades con JavaScript, reto del curso de tailwindcss",
  programs: "TailwindCSS JavaScript",
  classIten: "landing-page-comida-del-peru"
}
const obj7=  new project(item7)
obj7.createElement()

const item6 = {
  img: {
    lg: "https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-api-rest_practice/lg/index.avif",
    sm: "https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-api-rest_practice/sm/main-sm.png"
  },
  alt: "desarrollo web de agregar y eliminar gatos o perros",
  url: "https://riszart.github.io/api-rest_practice/",
  name: "API-rest con Fetch",
  description: "Uso de API-rest con método fetch, traer, agregar a favoritos, eliminar de favoritos y agregar una nueva imagen de gato o perro al backend con el uso de FECTH",
  programs: "JavaScript HTML CSS",
  classIten: "api-rest-con-fetch"
}
const obj6=  new project(item6)
obj6.createElement()

const item5 = {
  img: {
    lg: "https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-ATM-practice/lg/atm-index.avif",
    sm:"https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-ATM-practice/sm/main-sm.png"
  },
  alt: "desarrollo web de cajero automatica",
  url: "https://riszart.github.io/ATM-practice/",
  name: "RISZBANK",
  description: "Página realizada, donde practico lo aprendido con iteración de funciones y Promise así como avanzando en como comprender para evitar repetir código en JS, avanzando en el entendimiento de preprocesadores: PUG y SASS",
  programs: "HTML CSS PUG SASS JavaScript",
  classIten: "riszbank"
}
const obj5=  new project(item5)
obj5.createElement()

const item4 = {
  img: {
    lg: "https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-processors-practice-project/lg/main-lg.avif",
    sm:"https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-processors-practice-project/sm/main-sm.png"
  },
  alt: "desarrollo web de pagina del grupo blackpink",
  url: "https://riszart.github.io/processors-practice-project/",
  name: "page BLACKPINK",
  description: "Página realizada con preprocesadores, HTML por PUG y CSS por SASS, donde pongo a prueba lo aprendido para el mejor entendimiento de curso, así como independientemente realizándolo solo con consola, comprendiendo mejor su funcionamiento.",
  programs: "HTML CSS PUG SASS JavaScript",
  classIten: "page-blackpink"
}
const obj4=  new project(item4)
obj4.createElement()

const item3 = {
  img: {
    lg:"https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-proyecto-game/lg/main-lg.avif",
    sm:"https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-proyecto-game/sm/main-sm.png"
  },
  alt: "desarrollo web de un juego riszgame",
  url: "https://riszart.github.io/proyecto-game/",
  name: "riszgame",
  description: "Proyecto juego, donde se ve el uso de canvas y las diferentes formas de mejorarlo con transiciones y la corrupción con imágenes i/o emojis para mejora la interfaz así como el funcionamiento del juego",
  programs: "HTML CSS PUG SASS JavaScript",
  classIten: "riszgame"
}
const obj3=  new project(item3)
obj3.createElement()

const item2 = {
  img: {
    lg:"https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-frontend-developer-js-practico/lg/main-lg.avif",
    sm:"https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-frontend-developer-js-practico/sm/main-sm.png"
  },
  alt: "desarrollo web tienda en linea como practica",
  url: "https://riszart.github.io/frontend-developer-js-practico/",
  name: "proyecto de tienda online basico",
  description: "desarrollo de un e-commerce y el funcionamiento (...), - proyecto mejorado, aplicando el paradigma de objetos, modificándolo y agregándole el uso de preprocesadores como PUG para HTML y SASS para CSS, en caso de JavaScript cambie la lógica para que funcione con objetos. y se agregó la función de agregar nuevos productos",
  programs: "HTML CSS PUG SASS JavaScript",
  classIten: "shop"
}
const obj2=  new project(item2)
obj2.createElement()

const item1 = {
  img: {
    lg:"https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-estadistica-math/lg/main-lg.avif",
    sm:"https://riszart.github.io/briefcase-riszart-daryl/public/img/projects/riszart-github-io-estadistica-math/sm/main-sm.png"
  },
  alt: "desarrollo web de estadistica de reduccion de ingresos",
  url: "https://riszart.github.io/estadistica-math/",
  name: "proyecto de estadistica",
  description: "Proyecto realizado para la comprensión de funcionamiento de objetos y arrays así como introducción a canvas, aplicando matemática para funciones lógicas quedaran resultados y poder mostrarlo en estadística, así como el uso de objetos para reutilizar funciones de otros archivos JavaScript. ",
  programs: "html, css, javascript",
  classIten: "proyecto-de-estadistica"
}
const obj1=  new project(item1)
obj1.createElement()