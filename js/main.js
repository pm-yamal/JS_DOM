// 1. Найти элемент <body>
const body = document.body;
console.log(body);

// 2. Создать элемент <header>
const header = document.createElement('header');
header.classList.add('header');
body.appendChild(header);

header.style.backgroundColor = '#E5FF76E5';
header.style.height = '900px';

const backImg = document.createElement('img');
backImg.src = './img/background-image.png';
header.appendChild(backImg);
backImg.style.width = '700px';


// Создание элемента div
const headerTop = document.createElement('div');
console.log(headerTop);

// Добавление к элементу div класса header-top
headerTop.classList.add('header-top');

// Добавление элемента div внутрь элемента body
header.appendChild(headerTop);

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

// 3. Вставить в <header> картинку

// Создание логотипа внутри header-top__logo
const img = document.createElement('img');
img.src = './img/vector.png';
headerTopLogo.appendChild(img);

// 4. Создать nav

// Создание header-top__nav внутри header-top__row
const headerTopNav = document.createElement('div');
headerTopNav.classList.add('header-top__nav');
headerTopRow.appendChild(headerTopNav);


// 5. Вставить в nav список; 6. Вставить в список элементы с текстом

// Создание списка
const ul = `
    <ul>
        <li>Guides</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Support</li>
        <li>Changelog</li>
        <li>Sign in</li>
        <li>Sign up</li>
    </ul> 
`;

// Перемещение списка в header-top__nav
headerTopNav.innerHTML = ul;

const ul1 = document.createElement('ul');
ul1.classList.add('list');
headerTopRow.appendChild(ul1);
// ul1.style.display = 'flex';

const li1 = document.createElement('li');
li1.classList.add('list-item');
ul1.appendChild(li1);
li1.textContent = 'Guides';

const li2 = document.createElement('li');
li2.classList.add('list-item');
ul1.appendChild(li2);
li2.textContent = 'Features';

const li3 = document.createElement('li');
li3.classList.add('list-item');
ul1.appendChild(li3);
li3.textContent = 'Pricing';

const li4 = document.createElement('li');
li4.classList.add('list-item');
ul1.appendChild(li4);
li4.textContent = 'Support';

const li5 = document.createElement('li');
li5.classList.add('list-item');
ul1.appendChild(li5);
li5.textContent = 'Changelog';

const li6 = document.createElement('li');
li6.classList.add('list-item');
ul1.appendChild(li6);
li6.textContent = 'Sign in';

const li7 = document.createElement('li');
li7.classList.add('list-item');
ul1.appendChild(li7);
li7.textContent = 'Sign up';

// Flex header-top__row
headerTopRow.style.display = 'flex';
headerTopRow.style.justifyContent = 'space-between';



// const headerTopNavContent = document.createElement('header-top__nav-content');
// console.log(headerTopNavContent);

// const headerTopNavContentUl = document.createElement('ul');
// console.log(headerTopNavContentUl);

// const headerTopNavContentLi = document.createElement('li');
// console.log(headerTopNavContentLi);