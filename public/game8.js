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

function open() {
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
            silinecekKart3.classList.add('match');
        }, 1200)
        bekle();
        scoreCount++;
        score.innerHTML = 'Score: ' + scoreCount;
    } else if ((ilk.id == "backk4" && ikinci.id == "backk5") || ilk.id == "backk5" && ikinci.id == "backk4") {
        setTimeout(() => {
            silinecekKart4.classList.add('match');
            silinecekKart5.classList.add('match');
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
    } else kapama();
    counter = 0;
}

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
            open();
        }
        if (scoreCount == 4) {
            let x = scoreCount * moveCount;
            let point = 3200 / x;
            point = Math.floor((point * 100) / 100)
            setTimeout(() => {
                pointX.innerHTML = 'Your Point: ' + point
                form.classList.add('denem')
                document.getElementById('scmvv').classList.add('abcd')
                document.getElementById('refresh').classList.add('abcd')
                document.getElementById('speak').classList.add('abcd')
                game.classList.add('abcd')
            }, 1300)
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

/////////////////////////////////////////////////

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var numbers = ['first', 'second', 'third', 'forth', 'fifth', 'sixth', 'brown', 'seventh', 'eighth']
var grammar = '#JSGF V1.0; grammar numbers; public <statement> = ' + numbers.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');

let speak = document.getElementById('speak')
speak.addEventListener('click', () => {
    //console.log("oki");
    recognition.start();
    console.log('Ready to receive a command.');
})

let f = document.body.children;
let y = f[4].children;
let of = y[0].children;
let of1 = y[1].children;
let of2 = y[2].children;
let of3 = y[3].children;
let of4 = y[4].children;
let of5 = y[5].children;
let of6 = y[6].children;
let of7 = y[7].children;
//console.log(of[1].id);
const kart00 = window.document.getElementById(of[1].id);
const kart01 = window.document.getElementById(of1[1].id);
const kart02 = window.document.getElementById(of2[1].id);
const kart03 = window.document.getElementById(of3[1].id);
const kart04 = window.document.getElementById(of4[1].id);
const kart05 = window.document.getElementById(of5[1].id);
const kart06 = window.document.getElementById(of6[1].id);
const kart07 = window.document.getElementById(of7[1].id);

recognition.onresult = function(event) {
    var numbers = event.results[0][0].transcript;
    diagnostic.textContent = 'Result received: ' + numbers + '.';
    console.log('Confidence: ' + event.results[0][0]);
    if (numbers == 'first') {
        kart00.classList.add('flip')
        counter++
        moveCount++
        move.innerHTML = 'Move: ' + moveCount;
        if (counter != 2) {
            ilk = kart00;
        }
        if (counter == 2) {
            ikinci = kart00;
            open();
        }
    } else if ((numbers == 'second')) {
        kart01.classList.add('flip')
        counter++
        moveCount++
        move.innerHTML = 'Move: ' + moveCount;
        if (counter != 2) {
            ilk = kart01;
        }
        if (counter == 2) {
            ikinci = kart01;
            open();
        }
    } else if (numbers == 'third') {
        kart02.classList.add('flip')
        counter++
        moveCount++
        move.innerHTML = 'Move: ' + moveCount;
        if (counter != 2) {
            ilk = kart02;
        }
        if (counter == 2) {
            ikinci = kart02;
            open();
        }
    } else if (numbers == 'forth') {
        kart03.classList.add('flip')
        counter++
        moveCount++
        move.innerHTML = 'Move: ' + moveCount;
        if (counter != 2) {
            ilk = kart03;
        }
        if (counter == 2) {
            ikinci = kart03;
            open();
        }
    } else if (numbers == 'fifth') {
        kart04.classList.add('flip')
        counter++
        moveCount++
        move.innerHTML = 'Move: ' + moveCount;
        if (counter != 2) {
            ilk = kart04;
        }
        if (counter == 2) {
            ikinci = kart04;
            open();
        }
    } else if (numbers == 'sixth') {
        kart05.classList.add('flip')
        counter++
        moveCount++
        move.innerHTML = 'Move: ' + moveCount;
        if (counter != 2) {
            ilk = kart05;
        }
        if (counter == 2) {
            ikinci = kart05;
            open();
        }
    } else if (numbers == 'seventh') {
        kart06.classList.add('flip')
        counter++
        moveCount++
        move.innerHTML = 'Move: ' + moveCount;
        if (counter != 2) {
            ilk = kart06;
        }
        if (counter == 2) {
            ikinci = kart06;
            open();
        }
    } else if (numbers == 'eight') {
        kart07.classList.add('flip')
        counter++
        moveCount++
        move.innerHTML = 'Move: ' + moveCount;
        if (counter != 2) {
            ilk = kart07;
        }
        if (counter == 2) {
            ikinci = kart07;
            open();
        }
    }
}

recognition.onspeechend = function() {
    recognition.stop();
}

recognition.onnomatch = function(event) {
    diagnostic.textContent = 'I didnt recognise that command.';
}

recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}