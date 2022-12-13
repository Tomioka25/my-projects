const burgermenu = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
const darkbg = document.querySelector('.darkbg');
const closeic = document.querySelector('.close-icon');
const anc = document.querySelector('.list');

const corusel = document.querySelector('.n-destination');
const btnleft = document.querySelector('#button-left');
const btnright = document.querySelector('#button-right');

let itemss = document.querySelectorAll('.n-destination .items');
let itemem = document.querySelectorAll('.elips');
let buttonLog = document.querySelector('.login');
let popUp = document.querySelector('.pop-up');
let popUpbg = document.querySelector('.popupbg');

const email = document.querySelector('#username');
const pass = document.querySelector('#password');
const submit = document.querySelector('.popButton');
const account = document.querySelector('#account');

const reg = document.querySelector('.reg');
const toptext =  document.querySelector('.popuptext');
const buttontext =  document.querySelector('.popButton');
const bottext =  document.querySelector('.textbot');
const change =  document.querySelector('.reg');

reg.addEventListener("click", () => {
	document.querySelector('.facebook').classList.toggle('hide');
	document.querySelector('.google').classList.toggle('hide');
	document.querySelector('.lineconteiner').classList.toggle('hide');
	document.querySelector('.forget').classList.toggle('hide');
	document.querySelector('.popconteiner').classList.toggle('sign');
	toptext.innerHTML = (toptext.innerHTML === 'Create account') ? toptext.innerHTML = 'Log in to your account' : toptext.innerHTML = 'Create account';
	buttontext.innerHTML = (buttontext.innerHTML === 'Sign Up') ? buttontext.innerHTML = 'Sing In' : buttontext.innerHTML = 'Sign Up';
	bottext.innerHTML = (bottext.innerHTML === 'Already have an account?') ? bottext.innerHTML = 'Don’t have an account?' : bottext.innerHTML = 'Already have an account?';
	change.innerHTML = (change.innerHTML === 'Log In') ? change.innerHTML = 'Register' : change.innerHTML = 'Log In';
});

buttonLog.addEventListener("click", () => {
	document.body.classList.toggle('lock');
	popUp.classList.toggle('movetop');
	popUpbg.classList.toggle('hidden');
});

popUp.addEventListener('click', (event) => {
	if(event.target.classList.contains('pop-up')){
		document.body.classList.toggle('lock');
		popUp.classList.toggle('movetop');
		popUpbg.classList.toggle('hidden');
	}
})

submit.addEventListener("click", function () {
	alert('Имя Пользователя:' + email.value + ';\n' + 'Пароль: ' + password.value)
});


if (burgermenu) {
        burgermenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        burgermenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        darkbg.classList.toggle('active');
    });
}

closeic.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    burgermenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    darkbg.classList.toggle('active');
});

darkbg.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    burgermenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    darkbg.classList.toggle('active'); 
});

anc.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    burgermenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    darkbg.classList.toggle('active'); 
});

account.addEventListener("click", function (e) {
	document.body.classList.toggle('lock');
	popUp.classList.toggle('movetop');
	popUpbg.classList.toggle('hidden'); 
});

let currentItemem = 0;
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + itemss.length) % itemss.length;
}

function changeCurrentItemem(n) {
	currentItemem = (n + itemem.length) % itemem.length;
}

function hideItem(direction) {
	isEnabled = false;
	itemss[currentItem].classList.add(direction);
	itemss[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function hideItemem(direction) {
	isEnabled = false;
	itemem[currentItemem].classList.add(direction);
	itemem[currentItemem].addEventListener('animationend', function() {
		this.classList.remove('activated', direction);
	});
}

function showItem(direction) {
	itemss[currentItem].classList.add('next', direction);
	itemss[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function showItemem(direction) {
	itemem[currentItemem].classList.add('next', direction);
	itemem[currentItemem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('activated');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function nextItemem(n) {
	hideItemem('to-left');
	changeCurrentItemem(n + 1);
	showItemem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

function previousItemem(n) {
	hideItemem('to-right');
	changeCurrentItemem(n - 1);
	showItemem('from-left');
}

document.querySelector('.arrow.leftt').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
        previousItemem(currentItemem);
	}
});

document.querySelector('.arrow.rightt').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
        nextItemem(currentItemem);
	}
});



