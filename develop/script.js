// Assignment Code
//variables that make up the password
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var specialChar = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\'', ']', '^', '_', '`', '{', '|', '}', '~'];

function generator(length, charList) {
  var password = "";

  for (var i = 0; i < length; i++) {
    password += charList[Math.floor(Math.random() * (charList.length))];
  }

  return password;
}

// variables thats are included in password by user
function generatePassword() {
  var passLength;
  var includeLower;
  var includeUpper;
  var includeNum;
  var includeSpecial;
  var charList = "";


  // Users password length has to be more than 8 char, less than 128 char. User also has to input a NUMBER as the length. 
  //prompts user for desired length of password
  while (!passLength || passLength < 8 || passLength > 128 || Number.isNaN(passLength)) {
    passLength = parseInt(prompt("How Long Do You Want Your Password To Be?"), "");

    if (Number.isNaN(passLength) && !passLength) {
      alert("C'mon! You're Making My Job Harder! Please Use Numbers!");
    }

    if (passLength < 8 || passLength > 128) {
      alert("Please Choose a Number No More Than 128 or Less Than 8! Try Again!");
    }
  }

  // make the user choose one option in the list
  while (!includeLower && !includeUpper && !includeNum && !includeSpecial) {
    includeLower = confirm("Do You Want Your Password To Have Lowercase Characters In Your Password?");
    includeUpper = confirm("Do You Want Your Password To Have Uppercase Characters In Your Password?");
    includeNum = confirm("Do You Want Your Password To Have Numeric Characters In Your Password?");
    includeSpecial = confirm("Do You Want Your Password To Have Special Characters In Your Password?");

    if (!includeLower && !includeUpper && !includeNum && !includeSpecial)
      alert("To Make Your Password is More Secure You Have To Choose One Option");
  }

  // input charList with user choice
  if (includeLower) {
    charList += lowerCase;
  }

  if (includeUpper) {
    charList += upperCase;
  }

  if (includeNum) {
    charList += numChar;
  }

  if (includeSpecial) {
    charList += specialChar;
  }

  return generator(passLength, charList);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

