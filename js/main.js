// 1. Найти элемент <body>
const body = document.body;

// css стили body
body.style.padding = '0px';
body.style.margin = '0px';
body.style.border = 'none';
body.style.boxSizing = 'border-box';

// 2. Создать элемент <header>
const header = document.createElement('header');
header.classList.add('header');
body.appendChild(header);

// css стили header
header.style.position = 'relative';
header.style.width = 'auto';
header.style.paddingTop = '16px';
header.style.paddingBottom = '48px';
header.style.backgroundColor = '#E5FF76E5';

// 3. header-top
// Создание элемента div
const headerTop = document.createElement('div');

// Добавление к элементу div класса header-top
headerTop.classList.add('header-top');

// Добавление элемента div внутрь элемента body
header.appendChild(headerTop);

// css свойства header-top
headerTop.style.marginBottom = '80px';

// Создание containerTop внутри header-top
const containerTop = document.createElement('div');
containerTop.classList.add('container');
headerTop.appendChild(containerTop);

// css свойства containerTop
containerTop.style.width = '1425px';
containerTop.style.marginLeft = 'auto';
containerTop.style.marginRight = 'auto';
containerTop.style.paddingLeft = '48px';
containerTop.style.paddingRight = '48px';

// Создание header-top__row внутри container 
const headerTopRow = document.createElement('div');
headerTopRow.classList.add('header-top__row');
containerTop.appendChild(headerTopRow);

// css стили header-top__row
headerTopRow.style.alignItems = 'center';

// Создание header-top__logo внутри header-top__row
const headerTopLogo = document.createElement('div');
headerTopLogo.classList.add('header-top__logo');
headerTopRow.appendChild(headerTopLogo);

// Вставить в header-top логотип
// Создание логотипа внутри header-top__logo
const img = document.createElement('img');
img.src = './img/vector.png';
headerTopLogo.appendChild(img);

// Создание навигации header-top__nav
// Создание header-top__nav внутри header-top__row
const headerTopNav = document.createElement('div');
headerTopNav.classList.add('header-top__nav');
headerTopRow.appendChild(headerTopNav);

// Вставить в nav список; Вставить в список элементы с текстом
// Создание списка
const ul = document.createElement('ul');
ul.classList.add('nav-list');
headerTopNav.appendChild(ul);

// css свойства ul
ul.style.fontFamily = 'Inter, sans-serif';
ul.style.display = 'flex';
ul.style.columnGap = '40px';
ul.style.listStyle = 'none';
ul.style.fontWeight = '400';
ul.style.fontSize = '17.1px';
ul.style.lineHeight = '1.36';
ul.style.color = '#242424';
ul.style.alignItems = 'center';
ul.style.cursor = 'pointer';

const li1 = document.createElement('li');
li1.classList.add('nav-list__item');
ul.appendChild(li1);
li1.textContent = 'Guides';

const li2 = document.createElement('li');
li2.classList.add('nav-list__item');
ul.appendChild(li2);
li2.textContent = 'Features';

const li3 = document.createElement('li');
li3.classList.add('nav-list__item');
ul.appendChild(li3);
li3.textContent = 'Pricing';

const li4 = document.createElement('li');
li4.classList.add('nav-list__item');
ul.appendChild(li4);
li4.textContent = 'Support';

const li5 = document.createElement('li');
li5.classList.add('nav-list__item');
ul.appendChild(li5);
li5.textContent = 'Changelog';

const li6 = document.createElement('li');
li6.classList.add('nav-list__item');
ul.appendChild(li6);
li6.textContent = 'Sign in';

const li7 = document.createElement('button');
li7.classList.add('nav-list__item');
ul.appendChild(li7);
li7.textContent = 'Sign up';

// css стили li7
li7.style.fontFamily = 'Inter, sans-serif';
li7.style.paddingLeft = '24px';
li7.style.paddingRight = '24px';
li7.style.paddingTop = '10px';
li7.style.paddingBottom = '10px';
li7.style.backgroundColor = '#242424';
li7.style.borderRadius = '50px';
li7.style.fontWeight = '400';
li7.style.fontSize = '17.1px';
li7.style.lineHeight = '1.36';
li7.style.color = '#F0F0F0';
li7.style.cursor = 'pointer';

// Flex header-top__row
headerTopRow.style.display = 'flex';
headerTopRow.style.justifyContent = 'space-between';

// 4. Создание header-title
const headerTitle = document.createElement('div');
headerTitle.classList.add('header-title');
header.appendChild(headerTitle);

// css свойства header-title
header.style.textAlign = 'center';

// containerTitle внутри header-title
const containerTitle = document.createElement('div');
containerTitle.classList.add('container');
headerTitle.appendChild(containerTitle);

// css свойства containerTitle
containerTitle.style.width = '1425px';
containerTitle.style.marginLeft = 'auto';
containerTitle.style.marginRight = 'auto';
containerTitle.style.paddingLeft = '48px';
containerTitle.style.paddingRight = '48px';

// Создание header-title__name
const headerTitleName = document.createElement('div');
headerTitleName.classList.add('header-title__name');
containerTitle.appendChild(headerTitleName);

// css стили header-title__name
headerTitleName.style.paddingLeft = '100px';
headerTitleName.style.paddingRight = '100px';
headerTitleName.style.marginBottom = '24px';

// Создание h1
const h1 = document.createElement('h1');
headerTitleName.appendChild(h1);
h1.textContent = 'Finally, all your team’s work in one place';

// css стили h1
h1.style.padding = '0px';
h1.style.margin = '0px';
h1.style.fontFamily = 'Helvetica Neue, sans-serif';
h1.style.fontWeight = '700';
h1.style.fontSize = '101.1px';
h1.style.lineHeight = '1';
h1.style.letterSpacing = '-2.5px';

// Создание header-title__text
const headerTitleText = document.createElement('div');
headerTitleText.classList.add('header-title__text');
containerTitle.appendChild(headerTitleText);

// css стили header-title__text
headerTitleText.style.paddingLeft = '300px';
headerTitleText.style.paddingRight = '300px';
headerTitleText.style.marginBottom = '48px';

// Создание параграфа p
const p = document.createElement('p');
headerTitleText.appendChild(p);
p.textContent = 'Increase your team’s speed,collaboration, and alignment by giving everyone an overview of the most important work happening across your company.'

// css стили параграфа p
p.style.margin = '0px';
p.style.padding = '0px';
p.style.fontFamily = 'Inter, sans-serif';
p.style.fontWeight = '400';
p.style.fontSize = '24px';
p.style.lineHeight = '1.4';
p.style.letterSpacing = '-0.1px'; 
p.style.color = 'rgba(91, 100, 54, 0.85)';

// Создание header-title__buttons
const headerTitleButtons = document.createElement('div');
headerTitleButtons.classList.add('header-title__buttons');
containerTitle.appendChild(headerTitleButtons);

// css стили header-title__buttons
headerTitleButtons.style.marginBottom = '16px';

// button-left
const buttonLeft = document.createElement('button');
buttonLeft.classList.add('button');
headerTitleButtons.appendChild(buttonLeft);
buttonLeft.textContent = 'Get started for free';

// css стили button-left
buttonLeft.style.paddingTop = '20px';
buttonLeft.style.paddingBottom = '20px';
buttonLeft.style.paddingLeft = '41px';
buttonLeft.style.paddingRight = '41px';
buttonLeft.style.marginRight = '16px';
buttonLeft.style.fontFamily = 'Inter, sans-serif';
buttonLeft.style.fontWeight = '500';
buttonLeft.style.fontSize = '19.3px';
buttonLeft.style.lineHeight = '1.35';
buttonLeft.style.color = 'rgba(255, 255, 255, 1)';
buttonLeft.style.backgroundColor = 'rgba(31, 25, 225, 1)';
buttonLeft.style.borderRadius = '50px';
buttonLeft.style.cursor = 'pointer';

// button-right
const buttonRight = document.createElement('button');
buttonRight.classList.add('button');
headerTitleButtons.appendChild(buttonRight);
buttonRight.textContent = 'Watch video';

// css стили button-right
buttonRight.style.paddingTop = '20px';
buttonRight.style.paddingBottom = '20px';
buttonRight.style.paddingLeft = '41px';
buttonRight.style.paddingRight = '41px';
buttonRight.style.fontFamily = 'Inter, sans-serif';
buttonRight.style.fontWeight = '500';
buttonRight.style.fontSize = '19.3px';
buttonRight.style.lineHeight = '1.35';
buttonRight.style.color = 'rgba(36, 36, 36, 1)';
buttonRight.style.backgroundColor = 'rgba(229, 255, 118, 0.9)';
buttonRight.style.borderRadius = '50px';
buttonRight.style.border = '1px solid rgba(198, 223, 93, 1)';
buttonRight.style.cursor = 'pointer';

// Создание p1
const p1 = document.createElement('p');
containerTitle.append(p1);
p1.textContent = 'No credit card required';

// css стили p1
p1.style.marginTop = '0px';
p1.style.marginBottom = '96px';
p1.style.padding = '0px';
p1.style.fontFamily = 'Inter, sans-serif';
p1.style.fontWeight = '400';
p1.style.fontSize = '15.4px';
p1.style.lineHeight = '1.5';
p1.style.color = 'rgba(91, 100, 54, 1)';

// 5. Создание header-banner
const headerBanner = document.createElement('div');
headerBanner.classList.add('header-banner');
header.appendChild(headerBanner);

// css стили header-banner
headerBanner.style.marginBottom = '100px';

// Создание containerBanner внутри header-banner
const containerBanner = document.createElement('div');
containerBanner.classList.add('container');
headerBanner.appendChild(containerBanner);

// css свойства containerBanner
containerBanner.style.width = '1425px';
containerBanner.style.marginLeft = 'auto';
containerBanner.style.marginRight = 'auto';
containerBanner.style.paddingLeft = '48px';
containerBanner.style.paddingRight = '48px';

// background-image
const backImg = document.createElement('img');
backImg.src = './img/background-image.png';
containerBanner.appendChild(backImg);
backImg.style.width = 'auto';
backImg.style.height = '740px';
backImg.style.paddingLeft = '112px';
backImg.style.paddingRight = '112px';

// 6. Создание header-company
const headerCompany = document.createElement('div');
headerCompany.classList.add('header-company');
header.appendChild(headerCompany);

// Создание containerCompany внутри header-company
const containerCompany = document.createElement('div');
containerCompany.classList.add('container');
headerCompany.appendChild(containerCompany);

// css свойства containerCompany
containerCompany.style.width = '1425px';
containerCompany.style.marginLeft = 'auto';
containerCompany.style.marginRight = 'auto';
containerCompany.style.paddingLeft = '48px';
containerCompany.style.paddingRight = '48px';

// Создание header-company__name
const headerCompanyName = document.createElement('div');
headerCompanyName.classList.add('header-company__name');
containerCompany.appendChild(headerCompanyName);

// Создание h2
const h2 = document.createElement('h2');
headerCompanyName.appendChild(h2);
h2.textContent = 'YOU’RE IN GOOD COMPANY';

// css стили h2
h2.style.marginBottom = '48px';
h2.style.fontFamily = 'Inter, sans-serif';
h2.style.fontWeight = '400';
h2.style.fontSize = '16.9px';
h2.style.lineHeight = '0.95';
h2.style.letterSpacing = '2px'; 
h2.style.color = 'rgba(91, 100, 54, 1)';