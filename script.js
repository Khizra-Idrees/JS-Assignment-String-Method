// String Manipulation Assignments

document.write("Assignment 1: String Validation");
document.write("</br>");
document.write("</br>");

// Write a JavaScript function named `checkCapital` that takes a string as input and checks if the provided string is in capital letters. Your function should return "Your string is valid" if the input string is entirely in uppercase; otherwise, it should return "Your string is not valid."

function checkCapital(para){
    if (para === para.toUpperCase()) {
        return "Your String is valid";
    }

    else{
        return "Your String is not valid";
    }
}

let result1 = checkCapital("hello");
console.log(result1);
document.write(result1);

document.write("</br>");

let result2 = checkCapital("HELLO");
console.log(result2);
document.write(result2);

document.write("</br>");
document.write("</br>");

document.write("Assignment 2: Minimum Length Checker");
document.write("</br>");
document.write("</br>");

// Write a JavaScript function named `checkMinLength` that takes a string as input. The function should check if the length of the input string is less than 8 characters. If the length is less than 8, it should print or return a message stating, "Input should be greater than 8 characters."

function checkMinLength(string){
    if(string.length < 8){
        return "Input should be greater than 8 characters.";
    }
    else{
        return "Valid Input";
    }
}

let result3 = checkMinLength("Hello");
console.log(result3);
document.write(result3);

document.write("</br>");

let result4 = checkMinLength("Hello hii");
console.log(result4);
document.write(result4);

document.write("</br>");
document.write("</br>");

document.write("Assignment 3: String Index Assignment")
document.write("</br>");
document.write("</br>");

// Write a JavaScript script that creates a string and assigns different characters to individual indices. After the assignment, print or log the resulting string. Observe whether the string changes or not. If it does not change, provide an explanation of why the string remains the same.

let string = ["hello" , 56 , true , {once : "drink" , twice : 78 , thrice : "work"} , undefined]
console.log(string[4]);
document.write(string[2]);
console.log(string[3]);

document.write("</br>");
document.write("</br>");

document.write("Assignment 4: Word Presence Checker")

document.write("</br>");

// Write a JavaScript function named `checkWordPresence` that takes two parameters: a string and a target word. The function should check if the target word is present in the input string. If the target word is found, the function should return "Word found in the string"; otherwise, it should return "Word not found in the string."

function checkWordPresence(string , targetword){
    if (string.includes(targetword)) {
        return "Word found in the string";
    }
    else{
        return "Word not found in the string.";
    }
}

let result5 = checkWordPresence("This is world" , "world");
console.log(result5);
document.write(result5);

document.write("</br>");

let result6 = checkWordPresence("This is string" , "world");
console.log(result6);
document.write(result6);

document.write("</br>");
document.write("</br>");

document.write("Assignment 5: String Slicing and Substring Extraction")
document.write("</br>");
document.write("</br>");

// Write a JavaScript script that creates a string and uses both the `slice` and `substring` methods to extract a portion of that string. Store the extracted substring in another variable. Additionally, experiment with negative indices in both methods to observe the behavior.

document.write("*SLICE METHOD*");
document.write("</br>");

let string1 = "JavaScript is Programming Language";
let result7 = string1.slice(5 , 22);
console.log(result7); 
document.write(result7);

document.write("</br>");
document.write("</br>");

document.write("*SUBSTRING METHOD*");
document.write("</br>");

let string2 = "Programming Language";
let result8 = string2.substring(5 , 17);
console.log(result8); 
document.write(result8);

document.write("</br>");
document.write("</br>");

document.write("Assignment 6: Character and Word Checker Function");
document.write("</br>");

// Write a JavaScript function named `checkCharactersAndWords` that takes a string as input. The function should perform the following tasks:

// 1. Count and return the total number of characters in the string.
// 2. Count and return the total number of words in the string. (Assume words are separated by spaces)



function checkCharactersAndWords() {
    var string3 = "Hello World";
    var charCount = string3.length;
    var wordsCount = string3.split(" ").length;
    console.log(string3);
    console.log("Characters Are " + charCount);
    console.log("Words Are " + wordsCount);

    document.write(string3);
    document.write("</br>");

    document.write("Characters Are " + charCount);
    document.write("</br>");
    
    document.write("Words Are " + wordsCount);
  }
  
  checkCharactersAndWords();


