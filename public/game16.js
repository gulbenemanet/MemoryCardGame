const kart = window.document.getElementById('backk');
const kart1 = window.document.getElementById('backk1');
const kart2 = window.document.getElementById('backk2');
const kart3 = window.document.getElementById('backk3');
const kart4 = window.document.getElementById('backk4');
const kart5 = window.document.getElementById('backk5');
const kart6 = window.document.getElementById('backk6');
const kart7 = window.document.getElementById('backk7');
const kart8 = window.document.getElementById('backk8');
const kart9 = window.document.getElementById('backk9');
const kart10 = window.document.getElementById('backk10');
const kart11 = window.document.getElementById('backk11');
const kart12 = window.document.getElementById('backk12');
const kart13 = window.document.getElementById('backk13');
const kart14 = window.document.getElementById('backk14');
const kart15 = window.document.getElementById('backk15');

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
let silinecekKart8 = document.getElementById('kartlarr8')
let silinecekKart9 = document.getElementById('kartlarr9')
let silinecekKart10 = document.getElementById('kartlarr10')
let silinecekKart11 = document.getElementById('kartlarr11')
let silinecekKart12 = document.getElementById('kartlarr12')
let silinecekKart13 = document.getElementById('kartlarr13')
let silinecekKart14 = document.getElementById('kartlarr14')
let silinecekKart15 = document.getElementById('kartlarr15')

let kartlar = [kart, kart1, kart2, kart3, kart4, kart5, kart6, kart7, kart8, kart9, kart10, kart11, kart12, kart13, kart14, kart15];


let counter = 0;
let moveCount = 0;
let scoreCount = 0;
let matchControl = false;
let ilk, ikinci;
let ciftMi = false;

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
                    silinecekKart.classList.add('match');
                    silinecekKart1.classList.add('match')
                }, 1200)
                bekle();
                scoreCount++;
                score.innerHTML = 'Score: ' + scoreCount;

            } else if ((ilk.id == "backk2" && ikinci.id == "backk3") || (ilk.id == "backk3" && ikinci.id == "backk2")) {
                setTimeout(() => {
                    silinecekKart2.classList.add('match');
                    silinecekKart3.classList.add('match')
                }, 1200)
                bekle();
                scoreCount++;
                score.innerHTML = 'Score: ' + scoreCount;
            } else if ((ilk.id == "backk4" && ikinci.id == "backk5") || ilk.id == "backk5" && ikinci.id == "backk4") {
                setTimeout(() => {
                    silinecekKart4.classList.add('match');
                    silinecekKart5.classList.add('match')
                }, 1200)
                bekle();
                scoreCount++;
                score.innerHTML = 'Score: ' + scoreCount;
            } else if ((ilk.id == "backk6" && ikinci.id == "backk7") || (ilk.id == "backk7" && ikinci.id == "backk6")) {
                setTimeout(() => {
                    silinecekKart6.classList.add('match');
                    silinecekKart7.classList.add('match')
                }, 1200)
                bekle();
                scoreCount++;
                score.innerHTML = 'Score: ' + scoreCount;
            } else if ((ilk.id == "backk8" && ikinci.id == "backk9") || (ilk.id == "backk9" && ikinci.id == "backk8")) {
                setTimeout(() => {
                    silinecekKart8.classList.add('match');
                    silinecekKart9.classList.add('match')
                }, 1200)
                bekle();
                scoreCount++;
                score.innerHTML = 'Score: ' + scoreCount;
            } else if ((ilk.id == "backk10" && ikinci.id == "backk11") || (ilk.id == "backk11" && ikinci.id == "backk10")) {
                setTimeout(() => {
                    silinecekKart10.classList.add('match');
                    silinecekKart11.classList.add('match')
                }, 1200)
                bekle();
                scoreCount++;
                score.innerHTML = 'Score: ' + scoreCount;
            } else if ((ilk.id == "backk12" && ikinci.id == "backk13") || (ilk.id == "backk13" && ikinci.id == "backk12")) {
                setTimeout(() => {
                    silinecekKart12.classList.add('match');
                    silinecekKart13.classList.add('match')
                }, 1200)
                bekle();
                scoreCount++;
                score.innerHTML = 'Score: ' + scoreCount;
            } else if ((ilk.id == "backk14" && ikinci.id == "backk15") || (ilk.id == "backk15" && ikinci.id == "backk14")) {
                setTimeout(() => {
                    silinecekKart14.classList.add('match');
                    silinecekKart15.classList.add('match')
                }, 1200)
                bekle();
                scoreCount++;
                score.innerHTML = 'Score: ' + scoreCount;
            } else kapama();
            counter = 0;

            if (scoreCount == 8) {
                let x = scoreCount * moveCount;
                let point = 6400 / x;
                point = Math.floor((point * 10) / 10)
                setTimeout(() => {
                    //alert("ee")
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