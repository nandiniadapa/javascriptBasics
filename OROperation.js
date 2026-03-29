 function onClickOrOperation(){
    debugger;
    var Number= parseFloat(document.getElementById("txtNumber").value)
    if((Number%7!=0) || (Number%11!=0)){
        document.getElementById("pResult").innerHTML="The number is divisible by 7 and 11.";
        console.log("The number is divisible by 7 and 11. ");
 }
}