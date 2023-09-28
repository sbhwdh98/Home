console.log('Welcome to Tic Tac Toe');
let music = new Audio('files/music.mp3');
let ting = new Audio('files/ting.mp3');
let gameover = new Audio('files/gameover.mp3');
let turn='X';
// function to change turn
const changeTurn = ()=>{
    return (turn==='X')?'O':'X';
}
// function to check or a win
const checkWin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,-22,-10,0],
        [3,4,5,-22,  0,0],
        [6,7,8,-22, 10,0],
        [0,3,6,-32,0,90],
        [1,4,7,-22,0,90],
        [2,5,8,-12,0,90],
        [0,4,8,-22,0,45],
        [2,4,6,-22,0,135],
]
    wins.forEach(e => {
        if( (boxtext[e[0]].innerText!=='')&&
            (boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&
            (boxtext[e[1]].innerText===boxtext[e[2]].innerText)    ){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+' won';
            gameover.play();
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px'
            document.querySelector('.line').style.width= '25vw';
            document.querySelector('.line').style.transform= `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
}
// Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            ting.play();
            document.getElementsByClassName('info')[0].innerText='Turn for ' + turn;
            checkWin();
        }
    });
});
// Add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText="";
    });
    document.querySelector('.line').style.width= '0vw';
    document.getElementsByClassName('info')[0].innerText='Turn for ' + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px'
})