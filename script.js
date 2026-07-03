function celsiusToFahrenheit(c){
    return (c * 9/5) + 32;
}

function fahrenheitToCelsius(f){
    return (f - 32) * 5/9;
}

function convertTemp(){

    let temp = document.getElementById("temp").value;
    let unit = document.getElementById("unit").value;

    if(temp===""){
        alert("Please enter a temperature.");
        return;
    }

    temp = parseFloat(temp);

    let result="";
    let message="";
    let formula="";

    if(unit==="C"){
        let ans = celsiusToFahrenheit(temp);
        result = ans.toFixed(2)+" °F";
        formula = "Formula: (°C × 9/5) + 32";
    }
    else{
        let ans = fahrenheitToCelsius(temp);
        result = ans.toFixed(2)+" °C";
        formula = "Formula: (°F − 32) × 5/9";
    }

    let celsius = unit==="C" ? temp : fahrenheitToCelsius(temp);

    if(celsius < 0){
        message="❄ Freezing Weather";
    }
    else if(celsius <= 20){
        message="🌤 Cool Weather";
    }
    else if(celsius <= 35){
        message="☀ Warm Weather";
    }
    else{
        message="🔥 Very Hot";
    }

    document.getElementById("result").innerHTML="Result: "+result;
    document.getElementById("formula").innerHTML=formula;
    document.getElementById("message").innerHTML=message;
}

function resetFields(){
    document.getElementById("temp").value="";
    document.getElementById("unit").selectedIndex=0;
    document.getElementById("result").innerHTML="";
    document.getElementById("formula").innerHTML="";
    document.getElementById("message").innerHTML="";
}

document.getElementById("temp").addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        convertTemp();
    }
});
