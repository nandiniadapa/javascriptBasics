function onClickParseFloat(){
    debugger;
    var result = parseFloat(document.getElementById("txtValue").value);
    document.getElementById("pResult").innerHTML=result ;
}
   document.getElementById("pDemo").innerHTML = 
  Number.parseFloat("-10") + "<br>" +
  Number.parseFloat("-10.33") + "<br>" +
  Number.parseFloat("10") + "<br>" +
  Number.parseFloat("10.33") + "<br>" +
  Number.parseFloat("10 6") + "<br>" +  
  Number.parseFloat("10 years") + "<br>" +  
  Number.parseFloat("years 10");  