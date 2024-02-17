function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()* 25;
    const index = Math.round(randomNumber);


    const alphabet = alphabets[index];
    return alphabet;

}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const value = parseInt(element.innerText);
    return value;
}


function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value

}


function setBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
