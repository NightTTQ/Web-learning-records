let rnum =Math.floor(Math.random()*100)+1;

const guesses = document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const LorH = document.querySelector(".LorH");
const chance=document.querySelector(".chance");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const ResultField=document.querySelector(".ResultField");

let guessCount = 1;
let resetButton;

function checkGuess()
{
    let userGuess=Number(guessField.value);
    chance.textContent=10-guessCount;
    if(guessCount===1)
    {
        guesses.textContent="上次猜的数：";
    }
    guesses.textContent+=userGuess+" ";
    if(userGuess===rnum)
    {
        lastResult.textContent="恭喜你！猜对了！";
        lastResult.style.backgroundColor="green";
        LorH.textContent="";
        setGameOver();
    }
    else if(guessCount===10)
    {
        lastResult.textContent="!!!GAME OVER!!!";
        setGameOver();
    }
    else
    {
        lastResult.textContent="你猜错了！";
        lastResult.style.backgroundColor="red";
        if(userGuess<rnum)
        {
            LorH.textContent="你猜低了！";
        }
        else if(userGuess>rnum)
        {
            LorH.textContent="你猜高了！";
        }
    }
    guessCount++;
    guessField.value="";
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() 
{
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    let node = document.createTextNode("开始新游戏");
    //document.body.appendChild(resetButton);
    resetButton.appendChild(node);

    let parent = document.getElementsByClassName("resultField");
    
    parent[0].appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame()
{
    chance.textContent=10;
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length; i++)
    {
      resetParas[i].textContent = '';
    }

    guesses.textContent="";
    lastResult.textContent="";
    LorH.textContent="";

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    rnum = Math.floor(Math.random() * 100) + 1;
}