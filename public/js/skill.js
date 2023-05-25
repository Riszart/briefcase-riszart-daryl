const contentCourses = document.querySelector('.courses-conteiner')
API_REST = 'https://gist.githubusercontent.com/Riszart/ff8ec2bd9f5f7e8e61483a6d049246c3/raw/9934b50c2d19e58cacb731ca8dfaf00dcedbe999/database-course.json'

document.querySelector('#skill-html').onclick = ()=>loadData('html')
document.querySelector('#skill-css').onclick = ()=>loadData('css')
document.querySelector('#skill-js').onclick = ()=>loadData('javascript')
document.querySelector('#skill-pug').onclick = ()=>loadData('pug')
document.querySelector('#skill-sass').onclick = ()=>loadData('sass')
document.querySelector('#skill-node').onclick = ()=>loadData('node')
document.querySelector('#skill-tailwind').onclick = ()=>loadData('tailwind')

function loadData(name){
  contentCourses.innerText = ""
  fetch(API_REST)
    .then(response=>{
      return response.json()
    })
    .then(dataCurses=>{
      dataCurses.forEach(course => {
        let value = course.courses.find(element=>element === name)
        if(value){
          console.log(course.courses[name])
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
              <span>100%</span>
            </div>
            <div class="course-extra">
              <span class="course-name_rest">${course.coursecareer}</span>
            </div>
          </div>
          `
          contentCourses.append(contentArticle)
        }
      });
    })
    .catch(error=>{
    console.log('Error:', error)
    });
}
loadData('javascript')
