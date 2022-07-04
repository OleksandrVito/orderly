const block = document.querySelector('.container');
const audio = document.querySelector('.audio');
const volume = document.querySelector('.volume');
const mute = document.querySelector('.mute');
const congrats = document.querySelector('.congrats');

volume.addEventListener('click', () => {
    mute.style.display = 'inline-block';
    volume.style.display = 'none';
    audio.muted = true;
});
mute.addEventListener('click', () => {
    mute.style.display = 'none';
    volume.style.display = 'inline-block';
    audio.muted = false;
});

const block1 = document.querySelector('#block1');
const block2 = document.querySelector('#block2');
const block3 = document.querySelector('#block3');
const block4 = document.querySelector('#block4');
const block5 = document.querySelector('#block5');
const block6 = document.querySelector('#block6');
const block7 = document.querySelector('#block7');
const block8 = document.querySelector('#block8');
const blocks = [block1, block2, block3, block4, block5, block6, block7, block8];

const block9 = document.querySelector('#block9');

const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');
const card5 = document.querySelector('#card5');
const card6 = document.querySelector('#card6');
const card7 = document.querySelector('#card7');
const card8 = document.querySelector('#card8');
const card9 = document.querySelector('#card9');
const cards = document.querySelectorAll('.card');

let currentCard;
let currentBlock;

function returnCurrentCard() {
    cards.forEach((element) => {
        if (!element.hasChildNodes()) {
            return (currentCard = element);
        }
    });
}

function removeChild() {
    returnCurrentCard();
    currentBlock = this.children[0];
    if (
        (currentCard.id === 'card9' && this.id === 'card8') ||
        (currentCard.id === 'card9' && this.id === 'card6') ||
        (currentCard.id === 'card8' && this.id === 'card7') ||
        (currentCard.id === 'card8' && this.id === 'card9') ||
        (currentCard.id === 'card8' && this.id === 'card5') ||
        (currentCard.id === 'card7' && this.id === 'card8') ||
        (currentCard.id === 'card7' && this.id === 'card4') ||
        (currentCard.id === 'card6' && this.id === 'card5') ||
        (currentCard.id === 'card6' && this.id === 'card9') ||
        (currentCard.id === 'card6' && this.id === 'card3') ||
        (currentCard.id === 'card5' && this.id === 'card4') ||
        (currentCard.id === 'card5' && this.id === 'card6') ||
        (currentCard.id === 'card5' && this.id === 'card8') ||
        (currentCard.id === 'card5' && this.id === 'card2') ||
        (currentCard.id === 'card4' && this.id === 'card5') ||
        (currentCard.id === 'card4' && this.id === 'card7') ||
        (currentCard.id === 'card4' && this.id === 'card1') ||
        (currentCard.id === 'card3' && this.id === 'card6') ||
        (currentCard.id === 'card3' && this.id === 'card2') ||
        (currentCard.id === 'card2' && this.id === 'card3') ||
        (currentCard.id === 'card2' && this.id === 'card5') ||
        (currentCard.id === 'card2' && this.id === 'card1') ||
        (currentCard.id === 'card1' && this.id === 'card2') ||
        (currentCard.id === 'card1' && this.id === 'card4')
    ) {
        audio.play();
        this.removeChild(currentBlock);
        currentCard.appendChild(currentBlock);
        currentCard = this;
        check();
    }
}

card1.addEventListener('click', removeChild);
card2.addEventListener('click', removeChild);
card3.addEventListener('click', removeChild);
card4.addEventListener('click', removeChild);
card5.addEventListener('click', removeChild);
card6.addEventListener('click', removeChild);
card7.addEventListener('click', removeChild);
card8.addEventListener('click', removeChild);
card9.addEventListener('click', removeChild);

let pictureArr = [1, 2, 3, 4, 5];

function randomBlock() {
    if (pictureArr.length === 0) {
        pictureArr = [1, 2, 3, 4, 5];
    }
    let pictureNumber = pictureArr.splice(
        Math.floor(Math.random() * pictureArr.length),
        1
    );

    card9.appendChild(block9);
    block9.style.display = 'block';
    block1.style.background = `url(./${pictureNumber}/1.jpg)`;
    block2.style.background = `url(./${pictureNumber}/2.jpg)`;
    block3.style.background = `url(./${pictureNumber}/3.jpg)`;
    block4.style.background = `url(./${pictureNumber}/4.jpg)`;
    block5.style.background = `url(./${pictureNumber}/5.jpg)`;
    block6.style.background = `url(./${pictureNumber}/6.jpg)`;
    block7.style.background = `url(./${pictureNumber}/7.jpg)`;
    block8.style.background = `url(./${pictureNumber}/8.jpg)`;
    block9.style.background = `url(./${pictureNumber}/9.jpg)`;
    setTimeout(() => {
        for (let i = 0; i < cards.length - 1; i++) {
            let x = blocks.splice(Math.floor(Math.random() * blocks.length), 1);
            cards[i].appendChild(x[0]);
        }
        cards[8].removeChild(block9);
        block9.style.display = 'none';
    }, 2500);
}
randomBlock(1);
function check() {
    if (
        card1.children[0] === block1 &&
        card2.children[0] === block2 &&
        card3.children[0] === block3 &&
        card4.children[0] === block4 &&
        card5.children[0] === block5 &&
        card6.children[0] === block6 &&
        card7.children[0] === block7 &&
        card8.children[0] === block8
    ) {
        setTimeout(() => {
            card9.appendChild(block9);
            block9.style.display = 'block';
        }, 400);

        setTimeout(() => {
            randomBlock();
        }, 2000);
    }
}
