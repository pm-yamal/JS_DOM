// 1. Найти элемент <body>
const body = document.body;
console.log(body);

// 2. Создать элемент <header>
const header = document.createElement('header');
header.classList.add('header');
body.appendChild(header);

// header-background
header.style.backgroundColor = '#E5FF76E5';
header.style.height = '900px';

// 3. header-top
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

// Вставить в header-top логотип
// Создание логотипа внутри header-top__logo
const img = document.createElement('img');
img.src = './img/vector.png';
headerTopLogo.appendChild(img);

// 4. Создание навигации header-top__nav
// Создание header-top__nav внутри header-top__row
const headerTopNav = document.createElement('div');
headerTopNav.classList.add('header-top__nav');
headerTopRow.appendChild(headerTopNav);

// Вставить в nav список; Вставить в список элементы с текстом

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


// Создание header-title
const headerTitle = document.createElement('div');
headerTitle.classList.add('header-title');
header.appendChild(headerTitle);

// Создание header-title__name
const headerTitleName = document.createElement('div');
headerTitleName.classList.add('header-title__name');
headerTitle.appendChild(headerTitleName);

const h1 = document.createElement('h1');
headerTitleName.appendChild(h1);
h1.textContent = 'Finally, all your team’s work in one place';

// Создание header-title__text
const headerTitleText = document.createElement('div');
headerTitleText.classList.add('header-title__text');
headerTitle.appendChild(headerTitleText);

const p = document.createElement('p');
headerTitleText.appendChild(p);
p.textContent = 'Increase your team’s speed,collaboration, and alignment by giving everyone an overview of the most important work happening across your company.'

// Создание header-title__buttons
const headerTitleButtons = document.createElement('div');
headerTitleButtons.classList.add('header-title__buttons');
headerTitle.appendChild(headerTitleButtons);

// button-left
const buttonLeft = document.createElement('a');
buttonLeft.classList.add('button');
headerTitleButtons.appendChild(buttonLeft);
buttonLeft.textContent = 'Get started for free';

// button-right
const buttonRight = document.createElement('a');
buttonRight.classList.add('button');
headerTitleButtons.appendChild(buttonRight);
buttonRight.textContent = 'Watch video';

const p1 = document.createElement('p');
headerTitleButtons.append(p1);
p1.textContent = 'No credit card required';

// Создание header-banner
const headerBanner = document.createElement('div');
headerBanner.classList.add('header-banner');
header.appendChild(headerBanner);

const backImg = document.createElement('img');
backImg.src = './img/background-image.png';
headerBanner.appendChild(backImg);
backImg.style.width = '420px';


// Создание header-company
const headerCompany = document.createElement('div');
headerCompany.classList.add('header-company');
header.appendChild(headerCompany);

// Создание main
const main = document.createElement('main');
main.classList.add('main');
body.appendChild(main);
