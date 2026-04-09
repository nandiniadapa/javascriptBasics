function onClickAndOperation(){
    debugger;
     var Number= parseFloat(document.getElementById("txtNumber").value);
     if((Number%3==0) && (Number%5==0)){
        document.getElementById("pResult").innerHTML="The number is divisible by  3 and 5.";
        console.log("The number is divisible 3 and 5. ");
     }else{
      
        document.getElementById("pResult").innerHTML="The number is not divisible by 3 and 5.";
        console.log("The number is not divisible by 3 and 5. ");
     }
 }
