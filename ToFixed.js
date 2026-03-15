function onClickFixednumber(){
    debugger;
     decimalValue=Number(document.getElementById("txtDecimalnumber").value);
     fixedValue=Number(document.getElementById("txtFixnumber").value);
     document.getElementById("pResult").innerHTML=decimalValue.toFixed(fixedValue)
}