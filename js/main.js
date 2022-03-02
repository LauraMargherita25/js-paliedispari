/*let userInput = prompt("Write a palindrome word or phrase");

function reverse(parolaAlContrario) {
    let reverseWord = [];

    for ( let i = parolaAlContrario.length-1; i >= 0; i--){
        reverseWord += parolaAlContrario[i];
    }

    return reverseWord;

}                                              

console.log(reverse(userInput));*/





// chiedere all'utente una parola
// determinare se la parola è palindroma con una funzione
// word isPalindrome -->true or false

/*const userInput = prompt("Write a palindrome word or phrase");

function isPalindrome(word) {
    
    let reversedWord  = ""; 
    
    for(let i = 0; i < word.length; i++){
        reversedWord = word[i] + reversedWord;
        // console.log(reversedWord);
    }
    console.log(reversedWord)
    
    if(word == reversedWord){
        return true;
    } else {
        return false;
    }

}
console.log(userInput)

if(isPalindrome(userInput)){
    console.log("palindrome");
} else {
    console.log("not palindrome");
}*/





/*let userInput = parseInt(prompt("Choose a number between 1 to 5"));


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}*/

// chiedere all'utente pari o dispari
// chiedere all'utente un numero tra 1 e 5
// generare un numero random tra 1 e 5 con funzione getRandom(min, max) ---> numeroRandom
// sommare input utente con numero random
// determinare se somma è pari o dispari isEven(number) ---> true or false
// determiniamo chi ha vinto

const userEvenOrOdd = prompt("Even or odd?").toLocaleLowerCase();

const userNum = parseInt(prompt("Choose a number between 1 to 5"));
console.log(userNum);

const randomNum = getRandomBetween(1, 5);

const sum = userNum + randomNum;

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(randomNum);
console.log(sum);

let result

function isEven(number){
    if (number % 2 == 0){
        return true;
    } else {
        return false;
    }
}

if(isEven(sum)){
    result = "even";
} else {
    result = "odd";
}
console.log(result);

if (userEvenOrOdd == result){
    console.log ("You Win!");
} else {
    console.log("Try again!");
}