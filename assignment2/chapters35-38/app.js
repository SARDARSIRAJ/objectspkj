// 1. Write a function that displays current date & time in your
// browser.
document.write("<h2>Date</h2>");

function myDate(){
    var currentDate = new Date()
    document.write(currentDate + "<br><br>")
}
myDate();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
document.write("<h2>Greeting</h2>")

function greeting(fname, lname){
    document.write("Hello " + fname + ' ' + lname + "<br><br>");
}
greeting("siraj", "ahmed");

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers
document.write("<h2>Sum </h2>")

function add(num1, num2){
    document.write(num1 + num2 + "<br><br>");
}
add(5,6);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
document.write("<h2>Calculator</h2>")

function calculator(num1, num2, operation){
    if(operation === "+"){
        document.write(num1 + num2 + "<br>");
    }
    else if(operation === "-"){
        document.write(num1-num2 + "<br>"); 
    }
    else if(operation === "*"){
        document.write(num1*num2+ "<br>"); 
    }
    else if(operation === "/"){
        document.write(num1/num2+ "<br>"); 
    }
}

calculator(5,2,"+");
calculator(5,2,"-");
calculator(5,2,"*");
calculator(5,2,"/");

// 5. Write a function that squares its argument.
document.write("<h2>Square</h2>");
function square(num1){
    document.write(num1 ** 2 + "<br>")
}
square(4);

// 6. Write a function that computes factorial of a number.
document.write("<h2>Factorial</h2>");
function factorial(n){
    var answer = 1;
    if(n == 0 || n == 1){
        document.write(1 + "<br>");
    }
    else{
        for(var i = n; i >= 1; i--){
            answer = answer * i;
          }
          document.write(answer + "<br>");
    }
}
factorial(5);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
document.write("<h2>Count to a range</h2>");
function counting(num, range){
    for(var i = num; i<=range; i++){
        document.write(i + "<br>");
    }
}
counting(1,10);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2.
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
document.write("<h2>Hypotenuse Calculator</h2>");
function calculateHypotenuse(base, perpendicular){
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
    function calculateSquare(para1){
        return para1**2
    }
    document.write("Hypotenuse: " + hypotenuse + "<br>");
}
calculateHypotenuse(2,4);

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
document.write("<h2>Area of rectangle</h2>");
function areaOfRectangle(width, height){
    var area = width * height;
    document.write("Area of Rectangle: " + area + "<br>");
}
areaOfRectangle(w,h);
var w = parseInt(prompt("Enter width of the rectangle: "));
var h = parseInt(prompt("Enter height of the rectangle: "));


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
document.write("<h2>Palindrom Check</h2>");
function checkPalindrome(string) {
    var len = string.length;
    for (var i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            document.write('It is not a palindrome' + "<br>");
         }
     }
    document.write('It is a palindrome' + "<br>");
}   
var string = prompt('Enter a string: ');
checkPalindrome(string);

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
document.write("<h2>Title Cased string</h2>");
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
 }
 var titleCased = titleCase("the quick brown fox");
document.write("<b>The Original String: </b>" + "the quick brown fox" + "<br>" + "<b>The Converted string:</b> " + titleCased);

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
document.write("<h2>Longest word in a string</h2>");
function longestWordCheck(string){
    var strSplit = string.split(' ');
    var longestWord = 0;
    var word;
    for(var i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){
        longestWord = strSplit[i].length;
        word = strSplit[i]
        }
      }
    document.write("The longest word in the string is: " + word + "<br><br>");
}
longestWordCheck("Web Development Tutorial");

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
document.write("<h2>Counting of a character in a string</h2>");
function count2(string, char){
    var count2=0;
    for(i=0; i<string.length; i++){
        if(char === string[i]){
            count2+=1;
        }
    }
    document.write("The character '" + char + "' occurs " + count2 + " times in the string<br><br>");
}
count2("JSResourceS.com", "o");
