/*let userInput = prompt("Write a palindrome word or phrase");

function reverse(parolaAlContrario) {
    let reverseWord = [];

    for ( let i = parolaAlContrario.length-1; i >= 0; i--){
        reverseWord += parolaAlContrario[i];
    }

    return reverseWord;

}                                              

console.log(reverse(userInput));*/

let userInput = parseInt(prompt("Choose a number between 1 to 5"));


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(min(1),  max(6))