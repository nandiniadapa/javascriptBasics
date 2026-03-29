function onClickIFElseConditions() {
    debugger;
    var Number = parseFloat(document.getElementById("txtNumber").value);
    if (Number > 0) {
        document.getElementById("pResult").innerHTML = "The number is positive.";
    } else if (Number < 0) {
        document.getElementById("pResult").innerHTML = "The number is negative.";
    } else {
        document.getElementById("pResult").innerHTML = "The number is equal to 0.";
    }
}