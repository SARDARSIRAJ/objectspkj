document.write("<h2>Changing case </h2>");

document.write("<h4>1.Write a program that takes user input. Convert and show the input in capital letters.</h4>");
var a = prompt("Your Name");
var b = a.toUpperCase();
document.write("The original string "+a+" change  in to capital letters "+"<b>"+b+"</b>"+".<br>");
//_____________________________________________________________________________________________________________________________
document.write("<h4>2.Write a program that takes user input. Convert and show the input in title case.</h4>");
var b = prompt("Your Name");
var c = b.split(" ");
for (i=0; i < c.length; i++) {
    c[i] = c[i].charAt(0).toUpperCase() +c[i].slice(1);
}
var d= c.join(" ");
document.write("The original string"+b+" is converted in title cased "+"<b>"+d+"</b>");
//_______________________________________________________________________________________________________________________________
document.write("<h2>Strings: measuring length and extracting parts. </h2>");

document.write("<h4>1. Write a program to take a user input about his favorite mobile phone model. Find and"+"<br>"+" display the length of user input in your browser.</h4>");
var mobile = prompt("Tell me your favorite mobile name!");
var length = mobile.length;
document.write("The length of mobile phone  "+"<b>"+length+"</b>"+"<br>");

document.write("<h4>2. Write a program to display the last character of a user input.</h4>");
var str = prompt("Enter any word!");
var last = str.charAt(str.length - 1);
document.write("The last character of data . "+"<b>"+last+"</b>");

//_____________________________________________________________________________________________________________________________
document.write("<h2>Strings: finding segments</h2>");

document.write("<h4>1. Write a program to find the index of letter “n” in the word “Pakistani” and display"+"<br>"+" the result in your browser.</h4>");
var str = "Pakistani"
var str = str.lastIndexOf("n");
document.write("Index of 'n' is "+"<b>"+str+"</b>"+"<br>"); 

document.write("<h4>2. Write a program to take user input and store username in a variable. If the username "+"<br>"+"contains any special symbol among (@ . , !), prompt the user to enter a valid username.</h4>");
var userName=prompt("Enter your name: ");
var checkValidName = (username) => username.match(/[\@\.\,\!]/)===null;
    if (!checkValidName(userName)){
        alert("please enter a valid username");   
        userName=prompt("Enter your name: ");   
    };
document.write("Valid username is "+"<b>"+userName+"</b>"+"<br>");

document.write("<h4>3. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to "+"<br>"+" count number of occurrences of word “the” in given string.</h4>");
var paragraph = 'The quick brown fox jumps over the lazy dog.';
var count = 0;
for (i=0; i<paragraph.length; i++){
    var ab= paragraph.slice(i,i+3).toLowerCase();
    if(ab==="the"){
        count++; 
    }
}
document.write("The count number of occurrences of word “the” is "+"<b>"+count+"</b>");    

//________________________________________________________________________________________________________________________________
document.write("<h2>Strings: finding a character at a location</h2>");

document.write("<h4>1. Write a program to find the character at 3 rd index in the word “Pakistani” and display the result in your browser.</h4>");
var data= "pakistai";
var idx = data.charAt(2);
document.write("The character at 3rd index of 'pakistani' is "+"<b>"+idx+"</b>");

//________________________________________________________________________________________________________________________________
document.write("<h2>Strings: replacing characters</h2>");

document.write("<h4>1. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.</h4>");
var str = "Hyderabad";
var chg = str.replace("Hyder","Islam");
document.write("Hyderbad"+"<br>");
document.write("The Change word 'Hyder' to 'Islam' . "+chg);

document.write("<h4>2. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.</h4>");

var massage = "'Ali' and 'Sami' are best friends. They play cricket and football together.";
var chg2 = massage.replace(/and/g,"&");
document.write("The initial string: " + massage + "<br>" + "The changed string: " + chg2 + "<br><br>");

//_________________________________________________________________________________________________________________________________________
document.write("<h2>Rounding numbers</h2>");

document.write("<h4>1. Write a program that takes a positive integer from user & display the following in your browser.</h4>");
var input1 = parseFloat(prompt("Enter a positive integer ."));
document.write("<b>a</b> "+"The number is "+input1+"<br>");
document.write("<b>b</b> "+"The round off value of the input is : "+Math.round(input1)+"<br>");
document.write("<b>c</b> "+"The floor value of the input is : "+Math.floor(input1)+"<br>");
document.write("<b>d</b> "+"The ceil value of the input is : "+Math.ceil(input1)+"<br>");

document.write("<h4>2. Write a program that takes a negative floating point number from user & display the following in your browser.</h4>");
var input2 = parseFloat(prompt("Enter a negative integer ."));
document.write("<b>a</b> "+"The number is "+input2+"<br>");
document.write("<b>b</b> "+"The round off value of the input is : "+Math.round(input2)+"<br>");
document.write("<b>c</b> "+"The floor value of the input is : "+Math.floor(input2)+"<br>");
document.write("<b>d</b> "+"The ceil value of the input is : "+Math.ceil(input2)+"<br>");
//_______________________________________________________________________________________________________________________________________________
document.write("<h2>Generating random numbers</h2>");

document.write("<h4>1. Write a program that simulates a dice using random() method of JS Math class. Display " + "<br>" + " the value of dice in your browser.</h4>");
var dice = parseFloat(Math.ceil(Math.random() * 6));
document.write("The value of dice is " + dice);

document.write("<h4>2. Write a program that simulates a coin toss using random() method of JS Math class. " + "<br>" + " Display the value of coin in your browser.(2 = Heads and 1 = Tails).</h4>");
var toss = parseFloat(Math.ceil(Math.random() * 2));
if (toss === 2) {
    document.write("The side of coin is " + "<b>Heads</b>")
}
else if (toss === 1) {
    document.write("The side of coin is " + "<b>Tails</b>")
}

document.write("<h4>3. Write a program that stores a random secret number from 1 to 10 in a variable. " + "<br>" + " Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.</h4>")
var secret = Math.ceil(Math.random() * 10);
var input3 = parseInt(prompt("Enter any number to guess the secret number."));
if (input3 === secret) {
    document.write("Congratulations! You guessed the secret number correctly!")
}
else if (input3 !== secret){
    document.write("Try again to find secret number. 'Thanks'")
}

//_____________________________________________________________________________________________________________________________________
document.write("<h2>Converting strings to integers and decimals</h2>");

document.write("<h4>1. Write a program that asks the user about his weight. Parse the user input and " + "<br>" + "display his weight in your browser.Possible user inputs can be:</h4>");
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
var value = parseFloat(prompt("Enter the weight."));
document.write("The weight is "+"<b>"+value+"</b>");

//__________________________________________________________________________________________________________________________________________
document.write("<h2>Converting strings to numbers, numbers to strings</h2>");

document.write("<h4>1. Write a program that converts a string “472” to a number 472. "+"<br>"+"Display the values & types in your browser.Hint: (use typeof())</h4>");
var input4 = parseFloat(prompt("Enter any number."));
document.write("The unconverted input is "+input4+" and its type is  "+typeof input4)

document.write("<h4>2. Write a program that converts the variable num to string."+"<br>"+"var num = 35.36 ;Remove the dot to display “3536” display in your browser.</h4>");
var convert= input4.toString();
document.write("The input convert is "+"<b>"+convert+"</b>"+" and its type is  "+"<b>"+typeof convert+"</b>");

//______________________________________________________________________________________________________________________________________________
document.write("<h2>Controlling the length of decimals</h2>");

document.write("<h4>1. Write a program to control the length of decimals to 2.var percentage = 30 / 45 * 100; -> 66.66666666666666.</h4>");
var per= (30/45)*100;
document.write("Output is "+per+"<br>");
var fixdec=per.toFixed(2);
document.write("The output change to 2 decimal ."+fixdec);




