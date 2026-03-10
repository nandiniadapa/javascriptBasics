function onClickProfitorLoss(){
        debugger;
       costPrice= parseInt(document.getElementById("txtCostPrice").value);
       sellingPrice= parseInt(document.getElementById("txtSellingPrice").value);
       if(sellingPrice-costPrice>0){
        document.getElementById("pResult").innerHTML="profit";
       }
       if(sellingPrice-costPrice<0){
        document.getElementById("pResult").innerHTML="loss";

       }
       if(sellingPrice-costPrice==0){
 document.getElementById("pResult").innerHTML="no profit no loss";
       }
    }