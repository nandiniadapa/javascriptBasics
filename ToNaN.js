// function onClickNaNnumber() {
//     debugger;
//     let decimalValue = document.getElementById("txtDecimalValue").value;
//     let fixNumber = document.getElementById("txtFixnumber").value;
//     decimalValue = parseFloat(decimalValue);
//     if (isNaN(decimalValue)) {
//         document.getElementById("pResult").innerText = "The value is NOT a number (NaN)";
//     } else {
//         let result = decimalValue.toFixed(fixNumber); 
//         document.getElementById("pResult").innerText = "Result: " + result;
//     }
// }


 function onClickIsNaNnumber(){
    debugger;
    var value1=document.getElementById("txtValue1").value;
    var value2=document.getElementById("txtvalue2").value;
    var firstValueisNaN=isNaN(value1);
    var secondValueisNaN=isNaN(value2);
     console.log(firstValueisNaN);
     console.log(secondValueisNaN);  
     if (!iffirstvalueNaN && !secondValueisNaN){
        document.getElementById("pResult").innerHTML=parsInt(firstvalue)+parsInt(secondValue); 

     }
     else{
        document.getElementById("pResult").innerHTML="firstvalue"+secondValue; 

     }  


    }