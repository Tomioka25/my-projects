import ancientsData from "./data/ancients.js";
import ancients from "./assets/Ancients/index.js"
import blueCardsDat from "./data/mythicCards/blue/index.js"
import brownCardsDat from "./data/mythicCards/brown/index.js"
import greenCardsDat from "./data/mythicCards/green/index.js"

const mixButton = document.querySelector('.mix-button');
const ancient = document.querySelectorAll('.azathoth');
const ancientConteiner = document.querySelector('.ancient-conteiner')
const firstBlue = document.querySelector('.first-three')
const firstBrown = document.querySelector('.first-two')
const firstGreen = document.querySelector('.first-one')
const secondBlue = document.querySelector('.second-three')
const secondBrown = document.querySelector('.second-two')
const secondGreen = document.querySelector('.second-one')
const thirdBlue = document.querySelector('.third-three')
const thirdBrown = document.querySelector('.third-two')
const thirdGreen = document.querySelector('.third-one')
const cardBack = document.querySelector('.backside');
const cardFace = document.querySelector('.main-side');
const deckContainer = document.querySelector('.deck-conteiner');
const deckTracker = document.querySelector('.deck-tracker');
const difficultyContainer = document.querySelector('.difficulty-conteiner');
const cardSides = document.querySelector('.card__sides');
const difficultyItem = document.querySelectorAll('.difficulty');
const restartBtn = document.querySelector('.retry')
const normal = document.querySelector('.medium')
let i = 0, anc, disabled = true;

function setActive(e) {
    ancient.forEach(function(a) {
        a.style.transition = '0.6s';
        if (a.classList.contains('active')) {
            a.classList.remove('active')
        }
    })
    if (!e.target.classList.contains('ancient-conteiner')) {
        e.target.classList.add('active')
    }
    i = 0
    ancient.forEach(function(e) {
        if (e.classList.contains('active')) {
            anc = i
        }
        i+=1;
    })
}

mixButton.addEventListener('click', mixCards)

function mixCards() {
    mixButton.classList.add('hidden')
    deckTracker.classList.remove('hidden')
    cardSides.classList.remove('hidden')
    const blueCount = ancientsData[anc].firstStage.blueCards + ancientsData[anc].secondStage.blueCards + ancientsData[anc].thirdStage.blueCards
    const greenCount = ancientsData[anc].firstStage.greenCards + ancientsData[anc].secondStage.greenCards + ancientsData[anc].thirdStage.greenCards
    const brownCount = ancientsData[anc].firstStage.brownCards + ancientsData[anc].secondStage.brownCards + ancientsData[anc].thirdStage.brownCards
        difficultyItem.forEach(function(a) {
            if (a.classList.contains('very-easy') && a.classList.contains('activated')) {
                blueCardsDataReduced.splice(blueCount)
                brownCardsDataReduced.splice(brownCount)
                greenCardsDataReduced.splice(greenCount)
            }
            if (a.classList.contains('very-hard') && a.classList.contains('activated')) {
                blueCardsDataReduced.splice(blueCount)
                brownCardsDataReduced.splice(brownCount)
                greenCardsDataReduced.splice(greenCount)
            }
        })
    let blueCardsData = blueCardsDataReduced.concat();
    let brownCardsData = brownCardsDataReduced.concat();
    let greenCardsData = greenCardsDataReduced.concat();
    blueCardsData.sort(()=> Math.random()-0.5)
    brownCardsData.sort(()=> Math.random()-0.5)
    greenCardsData.sort(()=> Math.random()-0.5)
    firstBlue.textContent = ancientsData[anc].firstStage.blueCards
    firstBrown.textContent = ancientsData[anc].firstStage.brownCards
    firstGreen.textContent = ancientsData[anc].firstStage.greenCards
    secondBlue.textContent = ancientsData[anc].secondStage.blueCards
    secondBrown.textContent = ancientsData[anc].secondStage.brownCards
    secondGreen.textContent = ancientsData[anc].secondStage.greenCards
    thirdBlue.textContent = ancientsData[anc].thirdStage.blueCards
    thirdBrown.textContent = ancientsData[anc].thirdStage.brownCards
    thirdGreen.textContent = ancientsData[anc].thirdStage.greenCards

    cardBack.addEventListener('click', setCard)

    let sortArray = [], firstStageArray = [], secondStageArray = [], thirdStageArray = []

    function stageOneSort() {
        for (let c = 0; c < ancientsData[anc].firstStage.blueCards; c++) {
            firstStageArray.push(blueCardsData[0])
            blueCardsData.shift()
        }
        for (let c = 0; c < ancientsData[anc].firstStage.greenCards; c++) {
            firstStageArray.push(greenCardsData[0])
            greenCardsData.shift()
        }
        for (let c = 0; c < ancientsData[anc].firstStage.brownCards; c++) {
            firstStageArray.push(brownCardsData[0])
            brownCardsData.shift()
        }
        firstStageArray.sort(()=> Math.random()-0.5)
    }

    function stageTwoSort() {
        for (let c = 0; c < ancientsData[anc].secondStage.blueCards; c++) {
            secondStageArray.push(blueCardsData[0])
            blueCardsData.shift()
        }
        for (let c = 0; c < ancientsData[anc].secondStage.greenCards; c++) {
            secondStageArray.push(greenCardsData[0])
            greenCardsData.shift()
        }
        for (let c = 0; c < ancientsData[anc].secondStage.brownCards; c++) {
            secondStageArray.push(brownCardsData[0])
            brownCardsData.shift()
        }
        secondStageArray.sort(()=> Math.random()-0.5)
    }

    function stageThreeSort() {
        for (let c = 0; c < ancientsData[anc].thirdStage.blueCards; c++) {
            thirdStageArray.push(blueCardsData[0])
            blueCardsData.shift()
        }
        for (let c = 0; c < ancientsData[anc].thirdStage.greenCards; c++) {
            thirdStageArray.push(greenCardsData[0])
            greenCardsData.shift()
        }
        for (let c = 0; c < ancientsData[anc].thirdStage.brownCards; c++) {
            thirdStageArray.push(brownCardsData[0])
            brownCardsData.shift()
        }
        thirdStageArray.sort(()=> Math.random()-0.5)
    }

    function stagesSort() {
        stageOneSort()
        stageTwoSort()
        stageThreeSort()
    }
    stagesSort()

    function setCard() {
        if (firstStageArray.length != '0') {
            const img = new Image();
            img.src = `${firstStageArray[firstStageArray.length-1].cardFace}`;
            img.onload = () => {
                cardFace.style.backgroundImage = `url(${img.src})`;
            };
            cardFace.classList.remove('hidden')
            let lastElement = firstStageArray.pop()
            if (lastElement.color === 'blue') {
                firstBlue.textContent -= 1
            }
            if (lastElement.color === 'green') {
                firstGreen.textContent -= 1
            }
            if (lastElement.color === 'brown') {
                firstBrown.textContent -= 1
            }
            if (firstStageArray.length == '0') {
                return
            }
        }
        if (secondStageArray.length != '0' && firstStageArray.length == '0') {
            const img = new Image();
            img.src = `${secondStageArray[secondStageArray.length-1].cardFace}`;
            img.onload = () => {
                cardFace.style.backgroundImage = `url(${img.src})`;
            };
            let lastElement = secondStageArray.pop()
            if (lastElement.color === 'blue') {
                secondBlue.textContent -= 1
            }
            if (lastElement.color === 'green') {
                secondGreen.textContent -= 1
            }
            if (lastElement.color === 'brown') {
                secondBrown.textContent -= 1
            }
            if (secondStageArray.length == '0') {
                return
            }
        }
        if (thirdStageArray.length != '0' && secondStageArray.length == '0') {
            const img = new Image();
            img.src = `${thirdStageArray[thirdStageArray.length-1].cardFace}`;
            img.onload = () => {
                cardFace.style.backgroundImage = `url(${img.src})`;
            };
            let lastElement = thirdStageArray.pop()
            if (lastElement.color === 'blue') {
                thirdBlue.textContent -= 1
            }
            if (lastElement.color === 'green') {
                thirdGreen.textContent -= 1
            }
            if (lastElement.color === 'brown') {
                thirdBrown.textContent -= 1
            }
        }
        if (firstStageArray.length == '0' && secondStageArray.length == '0' && thirdStageArray.length == '0') {
            cardFace.classList.add('hidden')
            restartBtn.classList.add('siu')
            cardBack.removeEventListener('click', setCard)
        }
    }


}

    ancientConteiner.addEventListener('click', setActive)
    difficultyContainer.addEventListener('click', setDifficulty)

    restartBtn.addEventListener('click', function() {
        restartBtn.classList.toggle('siu')
        mixButton.classList.remove('hidden')
        deckTracker.classList.toggle('hidden')
        cardSides.classList.toggle('hidden')
        deckContainer.classList.toggle('hidden')
    })

    let blueCardsDataReduced, greenCardsDataReduced, brownCardsDataReduced

    function setDifficulty(e) {
        if (e.target.classList.contains('difficulty')) {
            deckContainer.classList.remove('hidden')
        }
        difficultyItem.forEach(function(a) {
            if (a.classList.contains('activated')) {
                a.classList.remove('activated')
            }
        })
        if (!e.target.classList.contains('difficulty-conteiner') && !e.target.classList.contains('choose')) {
            e.target.classList.add('activated')
        }
        if (e.target.classList.contains('very-easy')) {
            let blueCardsDataPreReduced = blueCardsDat.filter(e =>e.difficulty !== 'hard' && e.difficulty !== 'normal')
            blueCardsDataReduced = blueCardsDataPreReduced.concat(blueCardsDat.filter(e =>e.difficulty == 'normal'))
            let greenCardsDataPreReduced = greenCardsDat.filter(e =>e.difficulty !== 'hard' && e.difficulty !== 'normal')
            greenCardsDataReduced = greenCardsDataPreReduced.concat(greenCardsDat.filter(e =>e.difficulty == 'normal'))
            let brownCardsDataPreReduced = brownCardsDat.filter(e =>e.difficulty !== 'hard' && e.difficulty !== 'normal')
            brownCardsDataReduced = brownCardsDataPreReduced.concat(brownCardsDat.filter(e =>e.difficulty == 'normal'))
        }
        if (e.target.classList.contains('easy')) {
            blueCardsDataReduced = blueCardsDat.filter(e =>e.difficulty !== 'hard')
            greenCardsDataReduced = greenCardsDat.filter(e =>e.difficulty !== 'hard')
            brownCardsDataReduced = brownCardsDat.filter(e =>e.difficulty !== 'hard')
        }
        if (e.target.classList.contains('medium')) {
            blueCardsDataReduced = blueCardsDat.concat()
            greenCardsDataReduced = greenCardsDat.concat()
            brownCardsDataReduced = brownCardsDat.concat()
        }
        if (e.target.classList.contains('hard')) {
            blueCardsDataReduced = blueCardsDat.filter(e =>e.difficulty !== 'easy')
            greenCardsDataReduced = greenCardsDat.filter(e =>e.difficulty !== 'easy')
            brownCardsDataReduced = brownCardsDat.filter(e =>e.difficulty !== 'easy')
        }
        if (e.target.classList.contains('very-hard')) {
            let blueCardsDataPreReduced = blueCardsDat.filter(e =>e.difficulty !== 'easy' && e.difficulty !== 'normal')
            blueCardsDataReduced = blueCardsDataPreReduced.concat(blueCardsDat.filter(e =>e.difficulty == 'normal'))
            let greenCardsDataPreReduced = greenCardsDat.filter(e =>e.difficulty !== 'easy' && e.difficulty !== 'normal')
            greenCardsDataReduced = greenCardsDataPreReduced.concat(greenCardsDat.filter(e =>e.difficulty == 'normal'))
            let brownCardsDataPreReduced = brownCardsDat.filter(e =>e.difficulty !== 'easy' && e.difficulty !== 'normal')
            brownCardsDataReduced = brownCardsDataPreReduced.concat(brownCardsDat.filter(e =>e.difficulty == 'normal'))
        }
    }

