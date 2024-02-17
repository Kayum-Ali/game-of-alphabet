function play(){
    const home= document.getElementById('home');
    home.classList.add('hidden');

    const playGround = document.getElementById('playGround');
    playGround.classList.remove('hidden')
    continueGame();
    

}

function continueGame(){

    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackGroundColorById(alphabet);
}

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const espectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,espectedAlphabet);

    if(playerPressed === espectedAlphabet){
        console.log('you are win');
    }

}
document.addEventListener('keyup', handleKeyboardButtonPress)

