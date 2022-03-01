let userInput = prompt("Write a palindrome word or phrase");
// let userInputToArr = userInput.split('');
// userInput.reverse();
// console.log(userInput);
// userInput = userInput.replace(/\s/g, '');
// let arrayString = userInput.split('');

// arrayString = arrayString.reverse();
// let parolaInvertita = arrayString.join('');

// if(userInput === parolaInvertita){

//     console.log("La stringa è palindroma");

// }
// else{

//     console.log("La stringa non è palindroma");

// }

function reverse(parolaAlContrario) {
    let reverseWord = [];

    for ( let i = parolaAlContrario.length-1; i >= 0; i--){
        reverseWord.push(parolaAlContrario[i]);
    }

    return reverseWord;

}                                              

console.log(userInput.reverse())