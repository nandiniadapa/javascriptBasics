function onClickGenerateRandom(){
    debugger;
    var sizeNumber= Number(document.getElementById("txtInput" ).value);
    var randomNumber= Math.round(math.random()* Math.pow(10,sizeNumber));
    document.getElementById("pResult").innerHTML="Random Number" + randomNumber
}