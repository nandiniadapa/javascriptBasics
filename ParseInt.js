function onClickParseIntChecker() {
    debugger;
    var result = parseInt(document.getElementById("txtValue").value);
    document.getElementById("pResult").innerHTML = result;
}
  document.getElementById("pDemo").innerHTML = 
  Number.parseInt("-10") + "<br>" +
  Number.parseInt("-10.33") + "<br>" +
  Number.parseInt("10") + "<br>" +
  Number.parseInt("10.33") + "<br>" +
  Number.parseInt("10 6") + "<br>" +  
  Number.parseInt("10 years") + "<br>" +  
  Number.parseInt("years 10");  