// Assignment Code
let generateBtn = document.querySelector("#generate");
// setting the characters needed for the generator to variables
let letters = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let char = "!@#$%^&*()_=+[]\{}|<>?/;':-"


//
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
