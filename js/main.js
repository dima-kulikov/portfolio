

const btnDarkMode = document.querySelector('.dark-mode-btn');
const body = document.querySelector('body');



// проверка темной темы в системных настройках
if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    btnDarkMode.classList.add('dark-mode-btn--active');
    body.classList.add('dark');
}



//  проверка темы в локалсторедж
if(localStorage.getItem('darkMode') == 'dark'){
    btnDarkMode.classList.add('dark-mode-btn--active');
    body.classList.add('dark');
}
else if(localStorage.getItem('darkMode') == 'light'){
    btnDarkMode.classList.remove('dark-mode-btn--active');
    body.classList.remove('dark');
}



// если меняются системные настроуки, меняем тему
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event)=> {
       const newColorScheme = event.matches ? 'dark' : 'light';

       if(newColorScheme == "dark"){
            btnDarkMode.classList.add('dark-mode-btn--active');
            body.classList.add('dark');
            localStorage.setItem('darkMode', 'dark');
       }else{
            btnDarkMode.classList.remove('dark-mode-btn--active');
            body.classList.remove('dark');
            localStorage.setItem('darkMode', 'light');
       }
})

// Включение ночного режима и запись режима в локалСторедж
btnDarkMode.onclick = () => {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = body.classList.toggle('dark');

    if(isDark) {
        localStorage.setItem('darkMode', 'dark');
    }else {
        localStorage.setItem('darkMode', 'light');
    }
};

