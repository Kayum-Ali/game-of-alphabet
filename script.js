function play(){
    
    hideElementById('home');
    hideElementById('finalScore');

    setTextElementValueById('currentLife', 10);
    setTextElementValueById('currentScore', 0);



    showElementById('playGround')
    continueGame();
    

}

function hideElementById(elementId){
    const home= document.getElementById(elementId);
    home.classList.add('hidden');

}
function showElementById(elementId){
    const home= document.getElementById(elementId);
    home.classList.remove('hidden');

}



function gameOver(){
    hideElementById('playGround');
    showElementById('finalScore');

    const lastScore = getTextElementValueById('currentScore');
    setTextElementValueById('lastScore', lastScore);

    const currentAlphabet = getElementTextById('currentAlphabet');
    removeBackGroundColorById(currentAlphabet);

}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function continueGame(){

    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackGroundColorById(alphabet);
}

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;

    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const espectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,espectedAlphabet);

    if(playerPressed === espectedAlphabet){
        // score update
        const currentScore = getTextElementValueById('currentScore');
        const updatedScore = currentScore + 2;
        setTextElementValueById('currentScore' , updatedScore);

        // const newScore = currentScore + 2;

        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackGroundColorById(espectedAlphabet);
        continueGame();
    }
    else{
        // step:1 get the current life number
        const currentLife = getTextElementValueById('currentLife');
        const updatedLife = currentLife - 1;
        setTextElementValueById('currentLife' , updatedLife);


        if(updatedLife === 0){
            gameOver();
        }


        // step:2 reduse the life count
        // const newLife = currentLife - 1;

        // step:3 display the update life
        // currentLifeElemet.innerText = newLife
    }

}
document.addEventListener('keyup', handleKeyboardButtonPress);

