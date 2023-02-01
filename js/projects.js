import projectList from './object.js';

//код для отрисовки моих работ, рисую список и добавляю циклом
let projects = document.getElementById('projects');
let projectsFilter = document.querySelector('.projects__filter');
const projectFilterItem = document.querySelectorAll('.projects__filter--item');
let projectModalClose = document.querySelector('.project__modal--close');


// функция отрисовывает все блоки

function postAllprojects(obj) {
const allProjectList = obj.map((el) =>{
    let li = document.createElement('li');
    li.classList.add('project');
   
    // создания модального окна
    let divModal = document.createElement('div');
    divModal.classList.add('project__modal');
    
    let closeModal = document.createElement('div');
    closeModal.classList.add('project__modal--close');


    let imgModal = document.createElement('img');
    imgModal.classList.add('project__modal--img');
    imgModal.src = el.img;

    let pModal = document.createElement('p');
    pModal.innerHTML = el.desc;
   

    let divTwoBtn = document.createElement('div');
    divTwoBtn.classList.add('project__modal--btn');


    if(el.git !== ''){
    let aModalGit = document.createElement('a');
    aModalGit.classList.add('btn-outline');
    aModalGit.href = el.git;
    aModalGit.innerHTML = 'GitHub repo';
    aModalGit.target = "_blank";
    divTwoBtn.appendChild(aModalGit);
}

    let aModalSite = document.createElement('a');
    aModalSite.classList.add('btn-outline');
    aModalSite.href = el.site;
    aModalSite.innerHTML = 'Site online';
    aModalSite.target = "_blank";



    divModal.appendChild(closeModal);
    divModal.appendChild(imgModal);
    divModal.appendChild(pModal);
    
    divTwoBtn.appendChild(aModalSite);
    divModal.appendChild(divTwoBtn);
    
    


    // карточка
    let img = document.createElement('img');
    img.classList.add('project__img');
    img.src = el.img;
    let h3 = document.createElement('h3');
    h3.classList.add('project__title');
    h3.innerHTML = el.title;
    

    
    li.appendChild(divModal);


    
    li.appendChild(img);
    li.appendChild(h3);
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
// фильтрует проэкты по кнопкам
function filterItemBtn(element){
    let result = projectList.filter(el => el.filter == element);
    return result;
}

// ставлю слушатель и выбираю что вывести на страницу
projectsFilter.addEventListener('click', (e) => {

switch (e.target.innerHTML) {
    case 'All projects':
        projects.innerHTML = '';
        postAllprojects(projectList);
        toggleActiveClass();
        e.target.classList.add('projects__filter--item--active');
      break;

    case 'Landing':
        projects.innerHTML = '';
        postAllprojects(filterItemBtn(e.target.innerHTML));
        toggleActiveClass();
        e.target.classList.add('projects__filter--item--active');
    break;

    case 'Commerce':
        projects.innerHTML = '';
        postAllprojects(filterItemBtn(e.target.innerHTML));
        toggleActiveClass();
        e.target.classList.add('projects__filter--item--active');
      break;

    case 'React JS':
        projects.innerHTML = '';
        postAllprojects(filterItemBtn(e.target.innerHTML));
        toggleActiveClass();
        e.target.classList.add('projects__filter--item--active');
      break;

      case 'Different':
        projects.innerHTML = '';
        postAllprojects(filterItemBtn(e.target.innerHTML));
        toggleActiveClass();
        e.target.classList.add('projects__filter--item--active');
      break;

    default:
        break;
  }
});


// слушатель на карточки для открытия модального окна
projects.addEventListener('click', (e) => {

    console.log(e.target)
    if( e.target.classList.contains('project__img')){
        e.target.parentNode.childNodes[0].classList.add('project__modal--open');
    }else if(e.target.classList.contains('project__modal--close')){
        const projectModal = document.querySelectorAll('.project__modal')
        for(let i = 0; i < projectModal.length; i++){
            projectModal[i].classList.remove('project__modal--open')
        }
    }
})

