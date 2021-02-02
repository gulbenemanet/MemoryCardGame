const kart = window.document.getElementById('backk');
const kart1 = window.document.getElementById('backk1');
const kart2 = window.document.getElementById('backk2');
const kart3 = window.document.getElementById('backk3');
const kart4 = window.document.getElementById('backk4');
const kart5 = window.document.getElementById('backk5');
const kart6 = window.document.getElementById('backk6');
const kart7 = window.document.getElementById('backk7');

const game = window.document.getElementById('gamee')
const form = window.document.getElementById('myForm')

let silinecekKart = document.getElementById('kartlarr');
let silinecekKart1 = document.getElementById('kartlarr1')
let silinecekKart2 = document.getElementById('kartlarr2')
let silinecekKart3 = document.getElementById('kartlarr3')
let silinecekKart4 = document.getElementById('kartlarr4')
let silinecekKart5 = document.getElementById('kartlarr5')
let silinecekKart6 = document.getElementById('kartlarr6')
let silinecekKart7 = document.getElementById('kartlarr7')

let kartlar = [kart, kart1, kart2, kart3, kart4, kart5, kart6, kart7];


let counter = 0;
let moveCount = 0;
let scoreCount = 0;
let ilk, ikinci;

const move = document.getElementById('cc')
let score = document.getElementById('bb')
const pointX = document.getElementById('dd')
shuffle();
for (let i = 0; i < kartlar.length; i++) {

    kartlar[i].addEventListener('click', () => {
        kartlar[i].classList.add('flip');
        counter++
        moveCount++
        move.innerHTML = 'Move: ' + moveCount;

        if (counter != 2) {
            ilk = kartlar[i];
        }
        if (counter == 2) {
            ikinci = kartlar[i];
            if ((ilk.id == "backk" && ikinci.id == "backk1") || (ilk.id == "backk1" && ikinci.id == "backk")) {
                setTimeout(() => {
                    // silinecekKart.remove();
                    // silinecekKart1.remove();
                    silinecekKart.classList.add('match');
                    silinecekKart1.classList.add('match')
                }, 1200)
                bekle();
                scoreCount++;
                score.innerHTML = 'Score: ' + scoreCount;

            } else if ((ilk.id == "backk2" && ikinci.id == "backk3") || (ilk.id == "backk3" && ikinci.id == "backk2")) {
                setTimeout(() => {
                    // silinecekKart2.remove();
                    // silinecekKart3.remove();
                    silinecekKart2.classList.add('match');
                    silinecekKart3.classList.add('match');
                }, 1200)
                bekle();
                scoreCount++;
                score.innerHTML = 'Score: ' + scoreCount;
            } else if ((ilk.id == "backk4" && ikinci.id == "backk5") || ilk.id == "backk5" && ikinci.id == "backk4") {
                setTimeout(() => {
                    // silinecekKart4.remove();
                    // silinecekKart5.remove();
                    silinecekKart4.classList.add('match');
                    silinecekKart5.classList.add('match');
                }, 1200)
                bekle();
                scoreCount++;
                score.innerHTML = 'Score: ' + scoreCount;
            } else if ((ilk.id == "backk6" && ikinci.id == "backk7") || (ilk.id == "backk7" && ikinci.id == "backk6")) {
                setTimeout(() => {
                    // silinecekKart6.remove();
                    // silinecekKart7.remove();
                    silinecekKart6.classList.add('match');
                    silinecekKart7.classList.add('match')
                }, 1200)
                bekle();
                scoreCount++;
                score.innerHTML = 'Score: ' + scoreCount;
            } else kapama();
            counter = 0;

            if (scoreCount == 4) {
                let x = scoreCount * moveCount;
                let point = 3200 / x;
                point = Math.floor((point * 100) / 100)
                setTimeout(() => {
                    // alert("ee")
                    pointX.innerHTML = 'Your Point: ' + point
                    form.classList.add('denem')
                    document.getElementById('scmvv').classList.add('abcd')
                    document.getElementById('refresh').classList.add('abcd')
                    game.classList.add('abcd')
                }, 1300)

            }
        }
    })
}

function bekle() {
    game.classList.add('disabled')
    setTimeout(() => {
        game.classList.remove('disabled')
    }, 1200)
}

function kapama() {
    setTimeout(() => {
        ilk.classList.remove('flip')
        ikinci.classList.remove('flip')
    }, 1200)
    counter = 0;
    bekle();
}

function shuffle() {
    for (let i = 0; i < kartlar.length; i++) {
        game.appendChild(game.children[Math.random() * i | 0])
    }
}