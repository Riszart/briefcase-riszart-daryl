const URL_DATA_PROJECTS = 'https://gist.githubusercontent.com/Riszart/b981c4925c007f6a25c29e88b0ca1466/raw/3903316187d4e9580deb62e1c4eab9dcb0935385/projects-portfolio.json'

fetch(URL_DATA_PROJECTS)
  .then(response=>response.json())
  .then(projectsData=>{projectsData.forEach(project =>new Project(project).createElement())})
  .catch(error=>{console.log(error)})

class Project{
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
      window.scroll({top: 50});
    })
    const img = document.createElement("img")
    img.setAttribute("alt", this.alt)
    img.setAttribute("width", "617px")
    img.setAttribute("height", "210px")
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
    document.querySelector(".show-navbar").style.display = "none"
    document.querySelector(".header-container").style.filter = "blur(4px)"
    document.querySelector(".content-tittle-h1").style.filter = "blur(4px)"

    document.querySelector(".box-float").style.visibility = "visible"
    document.querySelector(".box-float").style.width = "70vw"
    document.querySelector(".box-float").style.height = "auto"
    document.querySelector(".box-float").style.borderWidth = "2px"

    document.querySelector(".portafolio").style.filter = "blur(15px)"
    const img = document.querySelector(".img-project")
    img.src = this.img.lg
    img.height = ""
    document.querySelector(".box-float__project-name ").innerText = this.name
    document.querySelector(".box-float__project-description").innerText = this.description
    document.querySelector(".box-float__project-programs").innerText = this.programs
    document.querySelector(".box-float__close").onclick = ()=>{this.closeItem()}
    document.body.addEventListener("keydown", (event)=>{if(event.code === "Escape")this.closeItem()})
    document.querySelector(".go-to-page").onclick = ()=>this.openItem()
    document.querySelector(".go-to-page").innerText = "Ir a la pagina"
  }

  closeItem(){
    setTimeout(()=>{
      const positionTop = document.querySelector(`.${this.classIten}`).offsetTop
      window.scroll({top: positionTop - 150})
      boxFloat.style.height = "0"
      boxFloat.style.borderWidth = "0"
      document.querySelector(".portafolio").style.filter = "blur(0)"
      document.querySelector(".content-tittle-h1").style.filter = "blur(0)"
      const img = document.querySelector(".img-project")
      img.src = ""
      img.height = "0px"
      document.querySelector(".box-float__project-name").innerText = "none"
      document.querySelector(".box-float__project-description").innerText = "none"
      document.querySelector(".box-float__project-programs").innerText = "none"
      document.querySelector(".show-navbar").style.display = "grid"
      document.querySelector(".header-container").style.filter = "blur(0)"
    },400)
    const boxFloat = document.querySelector(".box-float")
    boxFloat.style.width = "0"
    document.querySelector(".nav-principal").style.display = "block"
    document.querySelector(".go-to-page").innerText = ""
}
  openItem(){
    window.open(this.url, "_blank")
  }
}