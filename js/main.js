// 1. Найти элемент <body>
const body = document.body;
console.log(body);

// 2. Создать элемент <header>

// Создание элемента div
const headerTop = document.createElement('div');
console.log(headerTop);

// Добавление к элементу div класса header-top
headerTop.classList.add('header-top');

// Добавление элемента div внутрь элемента body
body.appendChild(headerTop);

// Создание container внутри header-top
const container = document.createElement('div');
container.classList.add('container');
headerTop.appendChild(container);

// Создание header-top__row внутри container 
const headerTopRow = document.createElement('div');
headerTopRow.classList.add('header-top__row');
container.appendChild(headerTopRow);

// Создание header-top__logo внутри header-top__row
const headerTopLogo = document.createElement('div');
headerTopLogo.classList.add('header-top__logo');
headerTopRow.appendChild(headerTopLogo);

// Создание header-top__nav внутри header-top__row
const headerTopNav = document.createElement('div');
headerTopNav.classList.add('header-top__nav');
headerTopRow.appendChild(headerTopNav);

// 3. Вставить в <header> картинку

// Создание логотипа внутри header-top__logo
const img = document.createElement('img');
img.src = './img/vector.png';
headerTopLogo.appendChild(img);



// const headerTopNavContent = document.createElement('header-top__nav-content');
// console.log(headerTopNavContent);

// const headerTopNavContentUl = document.createElement('ul');
// console.log(headerTopNavContentUl);

// const headerTopNavContentLi = document.createElement('li');
// console.log(headerTopNavContentLi);