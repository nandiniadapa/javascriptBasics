function onClickPowerChecker(){
    debugger;
    var value=document.getElementById("txtValue").value;
    var power=document.getElementById("txtPower").value;
    document.getElementById("pResult").innerHTML=Math.pow(power,value);
}