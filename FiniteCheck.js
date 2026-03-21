function onclickfinitecheck(){
    debugger;
  var inputValue=document.getElementById("txtinput").value;
  var numericValue=parseInt(inputValue);
  divisionresult=Infinity/(numericValue);
   var result=isFinite(divisionresult);

   document.getElementById("pResult").innerHTML="Is the Value Finite"+ result;

}