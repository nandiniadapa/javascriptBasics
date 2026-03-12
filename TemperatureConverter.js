function onClickConverterFToC() {
    debugger;
    cTemperature = parseFloat(document.getElementById("txttemperature").value);
    fTemperature = cTemperature * 1.8 + 32
    document.getElementById("temperatureResult").innerHTML = "result:" + fTemperature + "f"
}