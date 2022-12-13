// donate amount
const amountInput = document.querySelector('.another-amount');
const amountText = document.querySelectorAll('.amount-text');
const amountItems = document.querySelectorAll('.choose-amount-item');
const inputRadio = document.querySelectorAll('.input-radio');

amountItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      amountInput.value = Number(amountText[index].textContent.slice(1, 5));
    });
});

amountInput.addEventListener('input', () => {
    setInterval(() => {
        if (amountInput.value.length > 4) {
            amountInput.value = amountInput.value.slice(0, 4);
        }

        amountText.forEach((item, index) => {
            amountInput.value === amountText[index].textContent.slice(1, 5) ? inputRadio[index].checked = true : inputRadio[index].checked = false;
        });
    }, 1000);
});

amountInput.value = "100";

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
    }
}


burgerBtn.addEventListener('click', ()=> {
    popupContainer.classList.remove('hidden');
    body.style.overflow = 'hidden';
    popupContent.style.opacity = '1';
    popupContent.style.top = '0%';
})