function multiply(){
    var num = document.getElementById("num").value;
    var output = "";
    console.log(num);
    for(i = 1; i <= num; i++){
        output += (i + "*" + 10 + "=" + i * 10 + " " + "<br/>");
    }
    document.getElementById("output").innerHTML = output;
}