// Assignment Code
let generateBtn = document.querySelector("#generate");
// setting the characters needed for the generator to variables
let lettersLower = "abcdefghijklmnopqrstuvwxyz"
let lettersUpper = "ABCDEFGHIJKLMNOPQRSTUV"
let numbers = "0123456789"
let char = "!@#$%^&*()_=+[]\{}|<>?/;':-"
let password=document.getElementById("password")


// prompt where people will enter the the length of their password
// also the password can only have a length between 8-128

function promptCriteria() { 
  alert("Which criteria does your passwork need. Select the following options:") 
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
