// Testimonials Slider
const commentContainer = document.querySelector(".testimonials__container");
const commentBar = document.querySelector(".testimonials__bar");
const commentItem = document.querySelector(".testimonials__item-grad").offsetWidth;

function rangeValue () {
    commentContainer.style.left = -(commentItem + 29) * commentBar.value + 'px'
}
commentBar.addEventListener('input', rangeValue);

// Pets Carousel
const animalCards = document.querySelectorAll(".pet-card");
const animalImage = document.querySelectorAll(".pet-image");
const animalOrigin = document.querySelectorAll(".pet-origin");
const animalName = document.querySelectorAll(".pet-name");
const animalDiet = document.querySelectorAll(".pet-bonanza");

const pandas = {
    name: "Giant Pandas",
    origin: "Native to Southwest China",
    image: `url(../online-zoo/assets/images/Giant-pandas.jpg)`,
    diet: "../online-zoo/assets/icons/banana-bamboo_icon.svg"
}
const eagles = {
    name: "Eagles",
    origin: "Native to South America",
    image: `url(../online-zoo/assets/images/Eagles.jpg)`,
    diet: "../online-zoo/assets/icons/meet-fish_icon.svg"
}
const gorillas = {
    name: "Gorillas",
    origin: "Native to Congo",
    image: `url(../online-zoo/assets/images/Gorillas.jpg)`,
    diet: "../online-zoo/assets/icons/banana-bamboo_icon.svg"
}
const sloth = {
    name: "Two-toed Sloth",
    origin: "Mesoamerica, South America",
    image: `url(../online-zoo/assets/images/Two-toed-sloth.jpg)`,
    diet: "../online-zoo/assets/icons/banana-bamboo_icon.svg"
}
const cheetahs = {
    name: "Cheetahs",
    origin: "Native to Africa",
    image: `url(../online-zoo/assets/images/Cheetahs.jpg)`,
    diet: "../online-zoo/assets/icons/meet-fish_icon.svg"
}
const penguins = {
    name: "Penguins",
    origin: "Native to Antarctica",
    image: `url(../online-zoo/assets/images/Penguins.jpg)`,
    diet: "../online-zoo/assets/icons/meet-fish_icon.svg"
}
const alligators = {
    name: "Alligators",
    origin: "Native to Southeastern U. S.",
    image: `url(../online-zoo/assets/images/Alligators.jpg)`,
    diet: "../online-zoo/assets/icons/meet-fish_icon.svg"
}

let animalsArray = [pandas, eagles, gorillas, sloth, cheetahs, penguins, alligators]
animalsArray.sort(()=> Math.random()-0.5);

for (let i=0; i <=5; i++) {
animalImage[i].style.backgroundImage = animalsArray[i].image;
animalName[i].textContent = animalsArray[i].name;
animalOrigin[i].textContent = animalsArray[i].origin;
animalDiet[i].src = animalsArray[i].diet;
}

// const wrapper = document.querySelector('.wrapper-container')
const petSection = document.querySelector(".pets");
const petCards = document.querySelector(".pet-cards");
let petCardsRight = document.createElement('div');
petCardsRight.innerHTML = petCards.innerHTML;
petCardsRight.classList.add('pet-cards'), petCardsRight.classList.add('right');
// for (let i=0; i <=5; i++) {

// }
petCards.insertAdjacentElement("afterend", petCardsRight);

let petCardsLeft = document.createElement('div');
petCardsLeft.innerHTML = petCards.innerHTML;
petCardsLeft.classList.add('pet-cards'), petCardsLeft.classList.add('left');
petCards.insertAdjacentElement("beforebegin", petCardsLeft);
// document.body.wrapper.append(one);
// petSection.innerHTML = petCards.innerHTML;

const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const petsContainer = document.querySelector('.pets__container');
let counter = 1;

function moveRight() {
    counter += 1;
    if (counter === 3) counter = 0;
    petsContainer.style.left = -(petsContainer.offsetWidth + 20) * counter + 'px'
}
function moveLeft() {
    counter -= 1;
    if (counter < 0) counter = 2;
    petsContainer.style.left = -(petsContainer.offsetWidth + 20) * counter + 'px'
}
// arrowRight.addEventListener('animationend', () => {
//     arrowRight.addEventListener('click', moveRight);
// })

petsContainer.style.left = -(petsContainer.offsetWidth + 20) * counter + 'px'
arrowRight.addEventListener('click', moveRight);
arrowLeft.addEventListener('click', moveLeft);

const petesCards = document.querySelectorAll(".pet-cards .right");
console.log(petesCards)
// for (let i = 0; i <= 2; i++) {
//     if (petsCards[i].classList.contains('right')) {
//         console.log("hi")
//         animalCards[3].style.order = '1', animalCards[0].style.order = '4', animalCards[1].style.order = '2', animalCards[2].style.order = '5';
//     }
// }

const petsCards = document.querySelector(".right");
console.log(petsCards)

if (petsCards.classList.contains('right')) {
    console.log("hi")
    animalCards[3].style.order = '1', animalCards[0].style.order = '4', animalCards[1].style.order = '2', animalCards[2].style.order = '5';
}

// burger menu

const burgerBtn = document.querySelector('.burger');
const popupContainer = document.querySelector(".popup-background");
const popupContent = document.querySelector('.popup__container');
const body = document.querySelector('body');
const crossPopup = document.querySelector('close-popup');
const listPopup = document.querySelector('.popup-list');

popupContainer.addEventListener('click', closePopup);

function closePopup(e) {
    if (e.target.classList.contains('close-popup') || e.target.classList.contains('header-list-text-popup') || e.target.classList.contains('popup-background')) {
        popupContainer.classList.add('hidden');
        body.style.overflow = 'auto';
        popupContent.style.opacity = '0';
        popupContent.style.top = '-100%';
        popupItem.style.opacity = '0', popupItem.style.visibility = 'hidden';
        testimonialsContainer.addEventListener('click', showPopup)
        testimonialsItem.forEach(function(event) {
            if (event.classList.contains('popup-active')) {
                event.classList.remove('popup-active');
            }
        })
    }
}


burgerBtn.addEventListener('click', ()=> {
    popupContainer.classList.remove('hidden');
    body.style.overflow = 'hidden';
    popupContent.style.opacity = '1';
    popupContent.style.top = '0%';
})

// testimonials popup

const testimonialsContainer = document.querySelector('.testimonials__container');
const testimonialsItem = document.querySelectorAll('.testimonials__screen');
const testimonialsIcon = document.querySelectorAll('.testimonials__icon');
const testimonialsName = document.querySelectorAll('.name');
const testimonialsLocation = document.querySelectorAll('.location');
const testimonialsComment = document.querySelectorAll('.testimonials__comment');
const popupItem = document.getElementById('testimonials__item-grad-popup');
const popupIcon = document.getElementById('testimonials__icon-popup');
const popupName = document.getElementById('name-popup');
const popupLocation = document.getElementById('location-popup');
const popupComment = document.getElementById('testimonials__comment-popup');

// resIcon.style.backgroundImage = itemicon[i].style.backgroundImage
if (window.screen.width <= 750) testimonialsContainer.addEventListener('click', showPopup)

window.onresize = resizeWindow;
function resizeWindow() {
    if (window.screen.width <= 750) testimonialsContainer.addEventListener('click', showPopup)
}


function showPopup(e) {
    if (!e.target.classList.contains(testimonialsContainer)) {
        e.target.classList.add('popup-active')
        testimonialsContainer.removeEventListener('click', showPopup)
        let i = 0, num = 0;
        testimonialsItem.forEach(function(event) {
            if (event.classList.contains('popup-active')) {
                console.log(i);
                num = i;
            }
            i++;
        })
        popupItem.style.opacity = '1', popupItem.style.visibility = 'visible';
        popupContainer.classList.remove('hidden');

        popupIcon.style.backgroundImage = testimonialsIcon[num+1].style.backgroundImage;
        popupName.textContent = testimonialsName[num+1].textContent;
        popupLocation.textContent = testimonialsLocation[num+1].textContent;
        popupComment.textContent = testimonialsComment[num+1].textContent;
    }
}
