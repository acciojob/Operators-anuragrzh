const calculate = document.getElementById("calculate");
calculate.addEventListener("click", function(){
	const num1 = parseFloat(document.getElementById("num1").value);
	const num2 = parseFloat(document.getElementById("num2").value);
	const operator = document.getElementById("operator").value;

	let result;

	switch(operator){
		case "+":
			result = num1 + num2;
			break;

		case "-":
			result = num1 - num2;
			break;

		case "*":
			result = num1 * num2;
			break;

		case "/":
			if(num2 === 0){
				result = "Error: Division by zero";
			}else{
				result = num1 / num2;
			}
			break;
			
		default:
			result = "Inalid operator"
	}
	
	document.getElementById("result").textContent = result;
	
})

const newTexts = ["Bye", "Good Bye", "To", "Your", "Class"];

document.getElementById("change_text").addEventListener("click", function(){

	const divisions = document.querySelectorAll(".division");
	divisions.forEach((p, index) => {
		p.textContent = newTexts[index];
	});
});
