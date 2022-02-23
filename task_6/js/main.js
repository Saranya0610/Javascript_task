var num1 = parseInt(prompt('Enter the first number '));
var num2 = parseInt(prompt('Enter the second number '));

var sum = num1 + num2;
document.write(`The sum of ${num1} and ${num2} is ${sum}`);
if (sum > 50) {

    alert("the value is greater than 50");
}
else if (sum < 50) {

    alert("The value is lesser than 50 ");
}
else {
    alert("The  value is equal to 50");
}
