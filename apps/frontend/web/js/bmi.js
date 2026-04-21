    // Calculate BMI

const calculateBMI=(height, weight) =>{
    const heightInMeters = height/100;
    const bmi = weight/(heightInMeters * heightInMeters);
return (bmi);
 };



 
const runApp = () => {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    // to ensure user enters height and weight before calculating bmi
    if (!height || !weight) {
        alert("Please enter your height and weight");
        return;
    }

    const bmiResult = calculateBMI(height, weight);

    document.querySelector(".bmi-result").textContent = `Your BMI Result is: ${bmiResult.toFixed(1)}`;

    // Move the scale marker
    const clamped = Math.min(Math.max(bmiResult, 10), 50);
    const pct = ((clamped - 10) / 40) * 100;
    document.getElementById('scale-marker').style.left = pct + '%';
};

//  calculate bmi when the button is clicked
document.getElementById("calculate-bmi").addEventListener("click", runApp);

// BMI cutoffs for Black African, Black Caribbean and other black origin  adults based on NHS guidelines

const Cats = [
    {
       min: 0, max: 18.5, key: "underweight", label: "Underweight", color: 'hsl(210, 68%, 53%)'},
    {
        min: 18.5, max: 22.9, key: "healthy", label: "Healthy", color: 'hsl(120, 68%, 53%)'},
    {
        min: 22.9, max: 27.4, key: "overweight", label: "Overweight", color: 'hsl(60, 68%, 53%)'},
    {
        min:27.4, max: 30, key: "obese", label: "Obese", color: 'hsl(0, 89%, 44%)'},  // 27.5-30
    {
       min: 30,  max: Infinity, key: "morbidly-obese", label: "Morbidly Obese", color: 'hsl(0, 69%, 19%)'},  // >30
];


// Clear inputs and reset scale
const reload = () => {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.querySelector(".bmi-result").textContent = "Your BMI Result:";
    document.getElementById('scale-marker').style.left = "0%";
};
