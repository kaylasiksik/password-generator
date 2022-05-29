// Assignment code here

// define the characters the password can contain 


// declare variables for DOM elements 
const charCount = document.getElementById("charCount")
const form = document.getElementById("criteriaForm")
const upperIncl = document.getElementById("upperBool")
const lowerIncl = document.getElementById("lowerBool")
const numIncl = document.getElementById("numBool")
const symbolIncl = document.getElementById("symbolBool")

// add event listeners
charCount.addEventListener("input")
form.addEventListener("submit", e => {
  e.preventDefault()
  const charCount = charCount.value
  const upperBool = upperIncl.checked 
  const lowerBool = lowerIncl.checked 
  const numBool = numIncl.checked 
  const symbolBool = symbolIncl.checked 
  const password = generatePassword(charCount, upperBool, lowerBool, numBool, symbolBool)
})


// function to generate a password 
function generatePassword(charCount, upperBool, lowerBool, symbolBool) {
  // code 
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// EXAMPLE 
/*

const generate = document.querySelector('#generate');
var upperBool, lowerBoolean, lower, upper;

var upper = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
];


var lower = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h'
];



function init() {
    upperBool = confirm("Do you want UPPERCASE letters in your password? Select 'Ok' for Yes, or 'Cancel' for No.")

    lowerBool = confirm("Do you want LOWERCASE letters in your password? Select 'Ok' for Yes, or 'Cancel' for No.")

    numBool = confirm("Do you want NUMBERS in your password? Select 'Ok' for Yes, or 'Cancel' for No.")

    symbolBool = confirm("Do you want SYMBOLS in your password? Select 'Ok' for Yes, or 'Cancel' for No.")
/*
    if (upperBool === false && lowerBool === false && numBool === false && symbolBool === false) {
        alert('You must select at least one character type to generate a password.');
         init();
    }

    if (lowerBool === true) {
      lowerText = (lower[Math.floor(Math.random() * 4)]);
    } 
    
    if (upperBool === true) {
      upperText = (upper[Math.floor(Math.random() * 4)]);
    }
    
    if (numBool === true) {
      numText = (num[Math.floor(Math.random() * 4)]);
    }

    if (symbolBool === true) {
      symbolText = (symbol[Math.floor(Math.random() * 4)]);
    }

}


function writePswd() {
    init();

    var pwdText = document.querySelector('#pwd')

    if(upperText !== undefined && lowerText === undefined){
      abcText.innerHTML = upper;


    } else if(upperText === undefined && lowerText !== undefined) {
      abcText.innerHTML = lower;

    } else if(numText === ) {
      numText.innerHTML = 

    }


    else {
        nameText.innerHTML = firstName.concat(' ').concat(lastName);
    }

}

generate.addEventListener('click', writeName) 

if uppercase = TRUE  
  if lowercase && num && symbols = TRUE (A, Aa, Aa1, Aa#, Aa1#, A1#, A1, A#) -> include all
  else if lowercase && num == TRUE (Aa1, Aa1#) -> include all except symbols
  else if lowercase && symbols == TRUE (Aa1#) -> include all except num
  else if num && symbols == TRUE (A1#, A1, A#) -> include all except lowercase 
  else if num == TRUE (A1) -> include uppercase and num only 
  else if symbols == TRUE (A#) -> include uppercase and symbols only
  else {
    uppercase letters only
  }

else if uppercase == FALSE && lowercase == TRUE (a, a1, a#, a1#)
  if lowercase && num && symbols == TRUE -> include all lowercase (a1, a#, a1#) 
  else if lowercase && num == TRUE -> a1 only
  else if lowercase && symbols == true 
  else {
    lowercase letters only 
  }

else if uppercase == FALSE && lowercase == FALSE (1#, 1, #)
  if num && symbols == TRUE -> (1#)
  else if num == TRUE && symbols == FALSE -> (1)
  else {
    symbols only
  }

else {
  window.alert("You must select at least one character type to generate a password.")
}
_______________



}

*/
