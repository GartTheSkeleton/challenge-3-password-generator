// Assignment Code
var generateBtn = document.querySelector("#generate");
const charactersLowercase = "abcdefghijklmnopqrstuvwxyz";
const charactersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charactersNumbers = "1234567890";
const charactersSpecial = "?!@#$%^&*()<>{}~|_-.:;+=,";

// Write password to the #password input
function writePassword() {
  //run the function to generate a password
  var password = generatePassword();

  //target the password text area
  var passwordText = document.querySelector("#password");
  //write the password to the text area
  passwordText.value = password;

}

function generatePassword() {
  
  //ask user for the desired password length
  var passwordLength = window.prompt("How long would you like your Password to be? NOTE: Your password must be no fewer than 8 characters long and no longer than 128 characters long.",12);
  //convert that string to an interget
  var passwordLengthInt = parseInt(passwordLength);
  //check to make sure the given length is valid
  if (passwordLengthInt >= 8 && passwordLengthInt <= 128) {
    window.alert("Your Password will be " + passwordLengthInt + " characters in length.");
  } else {
    window.alert("Length is not valid. Please try agin.");
    return;
  }
  //set the criteria for the password
  var passwordCriteriaLowercase = window.confirm("Should your Password contain lowercase letters?");
  var passwordCriteriaUppercase = window.confirm("Should your Password contain uppercase letters?");
  var passwordCriteriaNumbers = window.confirm("Should your Password contain numbers?");
  var passwordCriteriaSpecial = window.confirm("Should your Password contain special characters?");
  //verify that the password has at least one criteria
  if ((passwordCriteriaLowercase == false) && (passwordCriteriaNumbers == false) && (passwordCriteriaSpecial == false) && (passwordCriteriaUppercase == false))
    {
    window.alert("Password must contain at least one type of character. Please try again.");
    return;
    }
  //set the variable containing the pool of possible characters for the password to an empty string
  var characters = "";
  //check which criteria are desired and add those characters to the pool
  if (passwordCriteriaLowercase === true) {
    characters += charactersLowercase;
  }
  if (passwordCriteriaUppercase === true) {
    characters += charactersUppercase;
  }
  if (passwordCriteriaNumbers === true) {
    characters += charactersNumbers;
  }
  if (passwordCriteriaSpecial === true) {
    characters += charactersSpecial;
  }
  //set the resulting password to an empty string
  var result = "";
  //find the length of the pool of characters
  var charactersLength = characters.length;
  //choose each character for the password
  for (var x = 0; x < passwordLengthInt; x++) {
    result += characters.charAt(Math.random()*charactersLength);
  }
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
