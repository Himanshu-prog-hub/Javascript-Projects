const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
let score = document.querySelector('#score');
const timeleft = document.querySelector('#time-left');



let result = 0;
let currenttime = 30;

//1

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');


    hitposition =  randomPosition.id;

}


///2

square.forEach(id => {
    id.addEventListener('mouseup',()=> {
        if(id.id === hitposition)
        {
            result=result+1;
            score.textContent=result;
        }
    })
})



//3
function moveMole() {
    let timer = null;
    timer = setInterval(randomSquare,400);
}


moveMole();

//4

function countDown()
{
    currenttime--
    timeleft.textContent=currenttime;

    if(currenttime == 0)
    {
        clearInterval(timer);
        alert('Gmae over! Your score is '+result);
    }
}


//5

let timer = setInterval(countDown,1000);
