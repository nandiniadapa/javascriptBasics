function onClickPowerChecker(){
    debugger;
    var Value=document.getElementById("txtValue").value;
    var power=document.getElementById("txtPower").value;
    document.getElementById("pResult").innerHTML= Math.pow ( power,Value);


}
