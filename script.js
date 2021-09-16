// Assignment Code
let generateBtn = document.querySelector("#generate");

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
