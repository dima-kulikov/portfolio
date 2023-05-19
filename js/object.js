const projectList = [
    {
        img: './img/projects/project-01.jpg',
        title: 'Cooperation with the military page',
        desc: 'html, Gulp, Less, JS, Swiper Slider',
        filter: "Commerce",
        git: '',
        site: 'https://dnipro-m.ua/volonteram-zsu/'
    },
    {
        img: './img/projects/project-02.jpg',
        title: 'Delivery and payment page',
        desc: 'html, Gulp, Less, JS',
        filter: "Commerce",
        git: '',
        site: 'https://dnipro-m.ua/dostavka-i-oplata/'
    },
    {
        img: './img/projects/project-03.jpg',
        title: 'Black Friday',
        desc: 'html, Gulp, Less, JS, CSS animation(transition/@keyframes)',
        filter: "Commerce",
        git: 'https://github.com/dima-kulikov/Black-friday-DM',
        site: 'https://dima-kulikov.github.io/Black-friday-DM/build/index.html'
    },
    {
        img: './img/projects/project-04.jpg',
        title: 'Sub Surf',
        desc: 'html, CSS',
        filter: "Landing",
        git: 'https://github.com/dima-kulikov/sub-surf-landing-page',
        site: 'https://dima-kulikov.github.io/sub-surf-landing-page/'
    },
    {
        img: './img/projects/project-05.jpg',
        title: 'Start UP',
        desc: 'html, Gulp, Less, JS',
        filter: "Landing",
        git: 'https://github.com/dima-kulikov/Startup-landing2',
        site: 'https://dima-kulikov.github.io/Startup-landing2/build/index.html'
    },
    {
        img: './img/projects/project-06.jpg',
        title: 'Sport betting',
        desc: 'html, Gulp, JS, CSS animation(transition/@keyframes)',
        filter: "Landing",
        git: 'https://github.com/dima-kulikov/sport-betting',
        site: 'https://dima-kulikov.github.io/sport-betting/build/index.html'
    },
    {
        img: './img/projects/project-07.jpg',
        title: 'Dashboard',
        desc: 'html, Gulp, Less',
        filter: "Different",
        git: 'https://github.com/dima-kulikov/dashboard',
        site: 'https://dima-kulikov.github.io/dashboard/dist/index.html'
    },
    {
        img: './img/projects/project-08.jpg',
        title: 'Mini test',
        desc: 'html, Gulp, Less, JS',
        filter: "Different",
        git: 'https://github.com/dima-kulikov/dashboard',
        site: 'https://dima-kulikov.github.io/knowledge-of-Ukraine/dist/index.html'
    },
    {
        img: './img/projects/project-09.jpg',
        title: 'Car color selection',
        desc: 'html, Gulp, Less, JS -- only PC version',
        filter: "Different",
        git: 'https://github.com/dima-kulikov/car-selection',
        site: 'https://dima-kulikov.github.io/car-selection/build/index.html'
    },
    {
        img: './img/projects/project-10.jpg',
        title: 'Internet earnings',
        desc: 'html, CSS, JS',
        filter: "Commerce",
        git: '',
        site: 'https://rabotu.net/'
    },
    {
        img: './img/projects/project-11.jpg',
        title: 'Mozgi event',
        desc: 'html, Gulp, JS, CSS animation(transition/@keyframes)',
        filter: "Different",
        git: 'https://github.com/dima-kulikov/mozgi',
        site: 'https://dima-kulikov.github.io/mozgi/dist/index.html'
    },
    {
        img: './img/projects/project-12.jpg',
        title: 'Animation / parallax',
        desc: 'html, Gulp, JS, CSS animation(transition/@keyframes)',
        filter: "Different",
        git: 'https://github.com/dima-kulikov/parallax',
        site: 'https://dima-kulikov.github.io/parallax/build/index.html'
    },
    {
        img: './img/projects/project-13.jpg',
        title: 'Product design description',
        desc: 'html, Gulp, JS,Less',
        filter: "Commerce",
        git: '',
        site: 'https://dnipro-m.ua/tovar/akkumulyatornaya-otvertka-csd-36x/'
    },
    {
        img: './img/projects/project-14.jpg',
        title: 'Product design description',
        desc: 'html, Gulp, JS,Less',
        filter: "Commerce",
        git: '',
        site: 'https://dnipro-m.ua/tovar/akkumulyatornaya-shlifmashina-sg-12bc-ultra/'
    },
    {
        img: './img/projects/project-15.jpg',
        title: 'Product design description',
        desc: 'html, Gulp, JS,Less',
        filter: "Commerce",
        git: '',
        site: 'https://dnipro-m.ua/tovar/akkumulyatornaya-batareya-k-shurupovertu-bp-240/'
    },
    {
        img: './img/projects/project-16.jpg',
        title: 'Product design description',
        desc: 'html, Gulp, JS,Less',
        filter: "Commerce",
        git: '',
        site: 'https://dnipro-m.ua/tovar/mojka-vysokogo-davleniya-pw-16b-2021/'
    },
    {
        img: './img/projects/project-17.jpg',
        title: 'React test SPA page',
        desc: 'JSX, React JS, react-router-dom, Sass',
        filter: "React JS",
        git: 'https://github.com/dima-kulikov/car-site-on-react',
        site: 'https://github.com/dima-kulikov/car-site-on-react'
    },
    {
        img: './img/projects/project-18.jpg',
        title: 'Description tshirt',
        desc: 'html, Gulp, JS,Less',
        filter: "Commerce",
        git: 'https://github.com/dima-kulikov/DM-description-tshirt',
        site: 'https://dima-kulikov.github.io/DM-description-tshirt/dist/index.html'
    },
    {
        img: './img/projects/project-19.jpg',
        title: 'Description tshirt',
        desc: 'html, Gulp, JS,Less  -- all links are specially inactive',
        filter: "Commerce",
        git: 'https://github.com/dima-kulikov/foresta',
        site: 'https://dima-kulikov.github.io/foresta/dist/index.html'
    },
    {
         img: './img/projects/project-20.jpg',
        title: 'Shop cart',
        desc: 'JSX, React JS, react-router-dom, Sass',
        filter: "React JS",
        git: 'https://github.com/dima-kulikov/furniture-store-react',
        site: 'https://dima-kulikov.github.io/furniture-store-react/'
    },
    {
         img: './img/projects/project-21.jpg',
        title: 'Intersection Observer',
        desc: 'html, css, js',
        filter: "Different",
        git: 'https://github.com/dima-kulikov/Intersection-Observer',
        site: 'https://dima-kulikov.github.io/Intersection-Observer/'
    },
    {
         img: './img/projects/project-22.jpg',
        title: 'Modern Interior',
        desc: 'JSX, React JS, react-router-dom, Sass',
        filter: "React JS",
        git: 'https://github.com/dima-kulikov/Landing-Modern-Interior--react',
        site: 'https://dima-kulikov.github.io/Landing-Modern-Interior--react/'
    },
    {
        img: './img/projects/project-23.jpg',
       title: 'Simple calculator',
       desc: 'html, css, vue3',
       filter: "VUE 3",
       git: 'https://github.com/dima-kulikov/vue3-calculator',
       site: 'https://dima-kulikov.github.io/vue3-calculator/'
   },
   {
       img: './img/projects/project-24.jpg',
      title: 'To do list',
      desc: 'html, css, vue3',
      filter: "VUE 3",
      git: 'https://github.com/dima-kulikov/vue3-todo-list',
      site: 'https://dima-kulikov.github.io/vue3-todo-list/'
  }
]

export default projectList;