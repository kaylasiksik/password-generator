// Assignment code here

// define the characters the password can contain 


// declare variables for DOM elements 
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("charCount");
const form = document.getElementById("criteriaForm");
const upperEl = document.getElementById("upperBool");
const lowerEl = document.getElementById("lowerBool");
const numEl = document.getElementById("numBool");
const symbolEl = document.getElementById("symbolBool");

const generateEl = document.getElementById("generate")

// random values 
const randomFunc = {
	lower: getRandLower,
	upper: getRandUpper,
	number: getRandNumber,
	symbol: getRandSymbol
}
// add event listeners

generate.addEventListener("click", () => {
  const charCount = lengthEl.value
  const upperBool = upperEl.checked 
  const lowerBool = lowerEl.checked 
  const numBool = numEl.checked 
  const symbolBool = symbolEl.checked 
  resultEl.innerText = generatePassword(lowerBool, upperBool, numBool, symbolBool, charCount)
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = "";
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

function getRandLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}










// Get references to the #generate element
//var generate = document.querySelector("#generate");
/*
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
