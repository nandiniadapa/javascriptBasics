function onclickFinitecheck(){
    debugger;
  var inputValue=document.getElementById("txtinput").value;
  var numericValue=parsInt(inputValue);
  divisionresult=1/(numericValue);
   var result=IsFinite/(divisionresult);

   document.getElementById("pResult").innerHTML="Is the Value Finite"+result;

}