let displayResult = document.querySelector("#result");
let getResult = document.querySelector("#calculate");

getResult.addEventListener("click", function () {
    console.log("clicked");
    displayResult.innerText = showResult();
});

function showResult() {
    let none = document.querySelector("#num1").value;
    let ntwo = document.querySelector("#num2").value;
    let operatorr = document.querySelector("#operator").value;

    // Validate input numbers
    let one = parseFloat(none);
    let two = parseFloat(ntwo);

    // Check for invalid inputs
    if (isNaN(one) || isNaN(two)) {
        alert("Please enter valid numbers.");
        return "";
    }

    // Check for operator selection
    if (operatorr === "select") {
        alert("Please choose an operator.");
        return "";
    }

    // Perform operation based on operator
    if (operatorr === "+") {
        return one + two;
    } else if (operatorr === "-") {
        return one - two;
    } else if (operatorr === "*") {
        return one * two;
    } else if (operatorr === "/") {
        if (two === 0) {
            alert("Division by zero is not allowed.");
            return "";
        }
        return one / two;
    } else {
        alert("Invalid operator.");
        return "";
    }
}
let text=document.querySelector("#change_text")

text.addEventListener("click", function () { 
    console.log("clicked");
   textChange();
});
function textChange(){
	let changeText=document.querySelector(".division")
	 changeText.innerHTML = "Bye <br>Good&nbspBye<br>To<br>Your<br>Class"
}
