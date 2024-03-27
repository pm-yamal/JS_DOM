// 1. Найти элемент <body>
const bodyElement = document.body;
console.log(bodyElement);

const lastChild = bodyElement.lastChild;
console.log(lastChild);

// 2. Создать элемент <header>
const header = document.createElement('header');
console.log(header);

// 3. Вставить в <header> картинку
const headerTop = document.createElement('header-top');
console.log(headerTop);

const container = document.createElement('container');
console.log(container);

const headerTopRow = document.createElement('header-top__row');
console.log(headerTopRow);

const headerTopLogo = document.createElement('header-top__logo');
console.log(headerTopLogo);

const headerTopNav = document.createElement('header-top__nav');
console.log(headerTopNav);

const headerTopNavContent = document.createElement('header-top__nav-content');
console.log(headerTopNavContent);

const headerTopNavContentUl = document.createElement('ul');
console.log(headerTopNavContentUl);

const headerTopNavContentLi = document.createElement('li');
console.log(headerTopNavContentLi);