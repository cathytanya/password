// Assignment Code
let generateBtn = document.querySelector("#generate");
// setting the characters needed for the generator to variables
let lettersLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let lettersUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numbers = ["0","1","2","3","4","5","6","7","8","9"]
let char = ["!","@","#","$","%","^","&","*","(",")","_","=","+",",","<",">","?","-"]


// this function is used to prompt the needed things
function promptCriteria() {
  let length = parseInt (window.prompt("How many characters do you need for your password?"));
  // if statement when for when the length entered is less than 8
  // prompt telling you a message
  if (length < 8){
    window.alert("NEEDS TO BE MORE THAN 8")  
    return
  }
    // if statement when for when the length entered is more than 128
  // prompted
  if (length > 128){
    window.alert("NEEDS TO BE LESS THAN 128")
    return
  }
  // CHECK IF ITS A NUMBER
  if (Number.isNaN(length)){
    window.alert("PASSWORD LENGTH NEEDS TO BE A NUMBER")
    return
  }
  
  // the person will be confirming if they want the password to generate will be the length the user wants
  var confirmlength = confirm("Are you sure that you want your password to be "+ length + "  characters long?")
  // this is where the pop up questions for the password will come from
  var confirmLower = confirm("Do you want lower case letters")
  var confirmUpper = confirm("Do you want upper case letters?")
  var confirmNumber = confirm("Do you want numbers?")
  var confirmSpecial = confirm("do you want special characters")
 
  // userChoice will become a dictinary for the following variables 
  let userChoice = {
    length: length,
    confirmLower: confirmLower,
    confirmUpper: confirmUpper,
    confirmNumber: confirmNumber,
    confirmNumber: confirmNumber,
    confirmSpecial: confirmSpecial    
  } 
  return userChoice
}
// an array will be passing through this function to choose a character from the arrays 
function randomChar(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var characterOut = arr[index];
  return characterOut
}
// this function would be choosing which character it wants
// concat is taking the variable adding which ever array the user wishes to use
function generatePassword(){
  var finalChoice = []
  let choice = promptCriteria()
  if (choice.confirmLower){
    finalChoice = finalChoice.concat(lettersLower);    
  }
  if (choice.confirmUpper){
    finalChoice = finalChoice.concat(lettersUpper);    
  }
  if (choice.confirmNumber){
    finalChoice = finalChoice.concat(numbers);    
  }
  if (choice.confirmSpecial){
    finalChoice = finalChoice.concat(char);    
  }
 
  //array for finalpassword
  let finalPassword =[]
  // for loop with user length choice.length
  for (let index = 0; index < choice.length; index++) {
    finalPassword.push(randomChar(finalChoice))
  }
  
  // the array is being converted into a string
  let passwordFinal = finalPassword.join('');
  console.log(passwordFinal)
  return passwordFinal
  //return the final password
  // document.getElementById("passwordFinal").value = passwordFinal;
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  return
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

