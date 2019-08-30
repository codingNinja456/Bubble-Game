let bubbles = document.querySelector('#bubbles');
let timers = document.querySelector('#timer');
let guess = document.querySelector('#guess');
let scores = document.querySelector('#score');

function makeBubbles(){
    for(let i = 0; i<161; i++ ){
        let random = Math.floor(Math.random()*10)
        bubbles.innerHTML += `<div class="bubble">${ random} </div>`;
    }
}
let timer = 30;
let score = 0;

function runtimer(){
    setInterval(function(){  
        if(timer>0){
            timer--;
          timers  .textContent = timer;
        }
        else{
            bubbles.innerHTML = `<h1 class = 'center'> Game Over,Score:${score}</h1>`
        }
    },1000 )
}

function getGuessNumber(){
    let random = Math.floor(Math.random()*10);
    guess.textContent = random;
    
}
getGuessNumber();
runtimer();
makeBubbles();
 
bubbles.addEventListener('click', function(event){
    let clicked = Number(event.target.textContent);
    if(guess.textContent == clicked){
        score = score + 10;
        scores.textContent = score;
        console.log('right');
        bubbles.innerHTML = '';
        makeBubbles();
        getGuessNumber();
    }
})












