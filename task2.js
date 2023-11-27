   //alert box
   var currentTime = new Date();
   var currentHour = currentTime.getHours();

   var greeting;
   if (currentHour < 12) {
     greeting = "Good morning!";
   } else if (currentHour < 18) {
     greeting = "Good afternoon!";
   } else {
     greeting = "Good evening!";
   }
 
   alert(greeting);
   
   //color change button
var colors = ["red", "green", "blue", "salmon", "purple"];
var currentIndex = 0;
var button = document.getElementById("colorButton");

function changeColor() {
    button.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

    //Calculator
function addNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        document.getElementById("result").textContent = "Result: " + sum;
    } else {
        document.getElementById("result").textContent = "Invalid input. Please enter valid numbers.";
    }
}
