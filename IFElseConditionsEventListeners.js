document.getElementById("btnNumber").addEventListener("click",function(){
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
});