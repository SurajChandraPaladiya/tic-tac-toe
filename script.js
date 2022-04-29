let bgMusic = new Audio('win1.mp3');
let musicTurn = new Audio('woosho.mp3');

let isWins = false;

let turn = "X";

// function for changing turn
const changeTurn = ()=>{
    return turn ==="X"? "0" : "X";
}

// Function for checking for a win
const checkWin = ()=>{
    let getBoxes = document.getElementsByClassName('gameText');

    let wins = [
        [0, 1, 2, 0, 2.5, 5],
        [3, 4, 5, 0, 2.5, 15],
        [6, 7, 8, 0, 2.5, 25],
        [0, 3, 6, 90, 15, 7.5],
        [1, 4, 7, 90, 15, -2.5],
        [2, 5, 8, 90, 15, -12.5],
        [0, 4, 8, 45, 12.5, 8.8],
        [2, 4, 6, 135, 7.5, -12.5],
    ]

    wins.forEach(e=>{
        if( (getBoxes[e[0]].innerText === getBoxes[e[1]].innerText) && (getBoxes[e[2]].innerText === getBoxes[e[1]].innerText) && (getBoxes[e[0]].innerText !=='') ){
            document.querySelector('.info').innerText = getBoxes[e[0]].innerText + " Won!!";
            document.querySelector('.line').style.transform = `rotate(${e[3]}deg) translate(${e[4]}vw, ${e[5]}vw)`;
            document.querySelector('.line').style.width = `25vw`;
            isWins = true;
        }
    })
}


// Game logic

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    // bgMusic.play();
    let boxText = element.querySelector(".gameText");

    element.addEventListener('click', ()=>{
        if(boxText.innerText==="")
        boxText.innerText = turn;
        turn = changeTurn();
        musicTurn.play();
        checkWin();

        if(!isWins){
            document.querySelector(".info").innerText = "Turn for " + turn;
        }

        if(isWins){
            document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width = '200px';
            bgMusic.play();
        }

    })
})

// Reset Button

let reset = document.getElementById("reset");

reset.addEventListener('click', ()=>{
    let textBoxes = document.getElementsByClassName('gameText');
    Array.from(textBoxes).forEach(e =>{
        e.innerText = '';
    })

    document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width = '0';
    turn = "X";
    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector('.line').style.width = `0`;


    isWins = false;
    bgMusic.pause();

})