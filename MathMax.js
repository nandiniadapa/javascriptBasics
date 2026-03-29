function onClickMaxDigits() {
    debugger;
    var Digits = document.getElementById("txtDigits").value
    var value1 = Math.random() * Math.pow(10, Digits);
    var value2 = Math.random() * Math.pow(10, Digits);
    var value3 = Math.random() * Math.pow(10, Digits);
    var value4 = Math.random() * Math.pow(10, Digits);
    var value5 = Math.random() * Math.pow(10, Digits);
    var maxDigits = Math.max(value1, value2, value3, value4, value5);
    document.getElementById("pResult").innerHTML =Math.trunc(maxDigits)
}
