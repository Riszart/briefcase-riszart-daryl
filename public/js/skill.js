
// console.log('skill')

const contentCourses = document.querySelector('.courses-conteiner')
URL_DATA_COURSE = 'https://gist.githubusercontent.com/Riszart/ff8ec2bd9f5f7e8e61483a6d049246c3/raw/ea168fecb09c5da8fc485066dd5fda161b171206/database-course.json'

window.addEventListener('load', ()=>{
  document.querySelector('#skill-html').addEventListener('click', ()=>loadData('html'))
  document.querySelector('#skill-css').addEventListener('click', ()=>loadData('css'))
  document.querySelector('#skill-js').addEventListener('click', ()=>loadData('javascript'))
  document.querySelector('#skill-pug').addEventListener('click', ()=>loadData('pug'))
  document.querySelector('#skill-sass').addEventListener('click', ()=>loadData('sass'))
  document.querySelector('#skill-node').addEventListener('click', ()=>loadData('node'))
  document.querySelector('#skill-tailwind').addEventListener('click', ()=>loadData('tailwind'))
})

function loadData(name){
  contentCourses.innerText = ""
  fetch(URL_DATA_COURSE)
    .then(response=>{
      return response.json()
    })
    .then(dataCurses=>{
      const positionH2Ttop  = document.querySelector('.title-h2__select').offsetTop
      dataCurses.forEach(course => {
        let value = course.courses.find(element=>element === name)
        if(value){
          const contentArticle = document.createElement('article')
          contentArticle.classList.add('course')
          contentArticle.innerHTML = `
          <div class="course-image">
            <figure>
              <img class="img-course" src="${course.image}" alt="${course.title}">
            </figure>
          </div>
          <div class="course-description">
            <div class="course-name">
              <p class="course-name_percentage">${course.title}</p>
              <span>completed</span>
            </div>
            <div class="course-extra">
              <span class="course-name_rest">${course.coursecareer}</span>
            </div>
          </div>
          `
          contentCourses.append(contentArticle)
        }
      })
      window.scroll({top: positionH2Ttop - 80,behavior: 'smooth'});

    })
    .catch(error=>{
    console.log('Error:', error)
    });
}