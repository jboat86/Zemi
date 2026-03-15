

const calculateBMI=(height, weight) =>{
    const heightInMeters = height/100;
    const bmi = weight/(heightInMeters * heightInMeters);
return (bmi);
 };
 
const runApp = () => {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const bmiResult = calculateBMI(height, weight);
    document.querySelector(".bmi-result").textContent = `Your BMI Result is: ${bmiResult.toFixed(1)}`;

}

//  calculate bmi when the button is clicked
document.getElementById("calculate-bmi").addEventListener("click", runApp);
