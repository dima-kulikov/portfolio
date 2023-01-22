import projectList from './object.js';

//код для отрисовки моих работ, рисую список и добавляю циклом
let projects = document.getElementById('projects');
let projectsFilter = document.querySelector('.projects__filter');
const projectFilterItem = document.querySelectorAll('.projects__filter--item');


// функция отрисовывает все блоки
function postAllprojects(obj) {
const allProjectList = obj.map((el) =>{
    let li = document.createElement('li');
    li.classList.add('project');
    let a = document.createElement('a');
    let img = document.createElement('img');
    img.classList.add('project__img');
    img.src = el.img;
    let h3 = document.createElement('h3');
    h3.classList.add('project__title');
    h3.innerHTML = el.title;
    
    li.appendChild(a);
    a.appendChild(img);
    a.appendChild(h3);
    projects.appendChild(li);
})
};

postAllprojects(projectList);


//делаю цыкл навешивания активного класса
function toggleActiveClass(){
    for(let i = 0; i < projectFilterItem.length; i++){
        projectFilterItem[i].classList.remove('projects__filter--item--active');
    }
}

// ставлю слушатель и выбираю что вывести на страницу
projectsFilter.addEventListener('click', (e) => {
    



    if(e.target.innerHTML == 'Landing'){
       let result = projectList.filter(el => el.filter == 'Landing');
       projects.innerHTML = '';
       postAllprojects(result);
       toggleActiveClass()
       e.target.classList.add('projects__filter--item--active')
    }else if(e.target.innerHTML == 'Commerce'){
        let result = projectList.filter(el => el.filter == 'Commerce');
        projects.innerHTML = '';
        postAllprojects(result);
        toggleActiveClass()
        e.target.classList.add('projects__filter--item--active')
     }else if(e.target.innerHTML == 'React JS'){
        let result = projectList.filter(el => el.filter == 'React JS');
        projects.innerHTML = '';
        postAllprojects(result);
        toggleActiveClass()
        e.target.classList.add('projects__filter--item--active')
     }
})
