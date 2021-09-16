// Assignment Code
let generateBtn = document.querySelector("#generate");
// setting the characters needed for the generator to variables
let lettersLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let lettersUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numbers = ["0","1","2","3","4","5","6","7","8","9"]
let char = ["!","@","#","$","%","^","&","*","(",")","_","=","+",",","<",">","?","-"]
let password=document.getElementById("password")

function promptCriteria() {
  let length = parseInt (window.prompt("how long"));
  
  if (length < 8){
    window.alert("NEEDS TO BE MORE THAN 8")
  
    return
  }
  if (length > 128){
    window.alert("NEEDS TO BE LESS THAN 128")

    return
  }
  // CHECK IF ITS A NUMBER
  if (Number.isNaN(length)){
    window.alert("PASSWORD LENGTH NEEDS TO BE A NUMBER")
    
    return
  }
  
  var confirmlength = confirm("You want your password to be "+ length + "  characters?")
  var confirmLower = confirm("Are you sure that you want lower CASE")
  var confirmUpper = confirm("Do you want Upper case ")
  var confirmNumber = confirm("do you want numbers")
  var confirmSpecial = confirm("do you want special characters")
 
  var userChoice = {
    length: length,
    confirmLower: confirmLower,
    confirmNumber: confirmNumber,
    
  } 
}

function randomChar(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var characterOut = arr[index];
  return characterOut
}

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
  console.log(finalChoice);
  
}


// prompt where people will enter the the length of their password
// also the password can only have a length between 8-128


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
