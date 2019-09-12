var input = parseInt(prompt("Which number do you want to give me?"));
function factorial(input){
    var num = 0;
    if(input == 0)
        document.getElementById("output").innerHTML = "Factorial of " + input + "is 1";
    else {
        for(i = 1; i < input; i++){
            num = i * (i + 1);
        }
        document.getElementById("output").innerHTML = "Factorial of " + input + " is " + num;
    }    
}