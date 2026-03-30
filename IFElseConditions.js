// function onClickIFElseConditions() {
//     debugger;
//     var Number = parseFloat(document.getElementById("txtNumber").value);
//     if (Number > 0) {
//         document.getElementById("pResult").innerHTML = "The number is positive.";
//     } else if (Number < 0) {
//         document.getElementById("pResult").innerHTML = "The number is negative.";
//     } else {
//         document.getElementById("pResult").innerHTML = "The number is zero.";
//     }
// }
function onClickIFElseConditions(){
    debugger;
    var Number=parseInt(document.getElementById("txtNumber").value);
    if((Number%3==0) && (Number%7==0)){
        document.getElementById("pResult").innerHTML="The number is divisible by  3 and 7.";
        console.log("The number is divisible 3 and 7. ");
     }
     else if((Number%3==0) || (Number%7==0)){
        document.getElementById("pResult").innerHTML="The number is divisible by 3 or 7.";
    }
    else{
        document.getElementById("pResult").innerHTML="The number is not divisible by 3 and 7.";
        console.log("The number is not divisible by 3 and 7. "); 
     }
}