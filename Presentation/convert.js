function lbConvert(valNum){
    console.log("Hi");
    document.getElementById("kgOutput").innerHTML ="Pounds: " + parseInt(valNum) * 2.2;
}

function kgConvert(valNum){
    console.log("hello");
    document.getElementById("lbOutput").innerHTML ="Kilograms: " + parseInt(valNum) / 2.2;
}