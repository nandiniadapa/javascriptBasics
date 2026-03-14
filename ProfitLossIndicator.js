function onClickSubmit(){
       debugger;
boxQuantity=parseInt(document.getElementById("txtBoxQuantity").value);
boxCostPrice=parseInt(document.getElementById("txtBoxPrice").value);
labourCost=parseInt(document.getElementById("txtLabourCost").value);
transportCost=parseInt(document.getElementById("txtTransportCost").value);
storageCost=parseInt(document.getElementById("txtStorageCost").value);
perUnitSellingPrice=parseInt(document.getElementById("txtPerUnitSelleingPrice").value);

totalBoxPrice= boxCostPrice+labourCost+transportCost+storageCost;

perUnitCostPrice=totalBoxPrice/boxQuantity;
 if(perUnitSellingPrice-perUnitCostPrice>0){
        document.getElementById("nanduResult").innerHTML="profit";
       }
       if(perUnitSellingPrice-perUnitCostPrice<0){
        document.getElementById("nanduResult").innerHTML="loss";

       }
       if(perUnitSellingPrice-perUnitCostPrice==0){
 document.getElementById("nanduResult").innerHTML="no profit no loss";
       }
    }