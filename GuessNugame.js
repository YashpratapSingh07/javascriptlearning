const randomnum =parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const gussesslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi =document.querySelector('.lowOrHi');
const startover =document.querySelector('.resultParas');

const p=document.createElement('p');
let prevguess=[];
let numofattem=1;
let playgame =true;
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userinput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }
    else if(guess>100){
        alert('please enter a less than 100');
    }
    else if(guess<1){
        alert('please enter a more than 1');
    }
    else{
        prevguess.push(guess);
        if(numofattem===11){
            displayGuess(guess);
            displayMessage(`Game Over random number was ${randomnum}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}
function checkGuess(guess){
    if(guess===randomnum){
        displayMessage("You Guessed it Right");
        endGame();
    }
    
    else if(guess<randomnum){
        displayMessage("you Guess too low");
    }
    else if(guess>randomnum){
        displayMessage("you Guess too High");
    }

}
function displayGuess(guess){
    userinput.value = '';
    gussesslot.innerHTML += `${guess}, `;
    numofattem++;
    remaining.innerHTML = `${11 - numofattem} `;
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function startGame(){

}
function endGame(){

}