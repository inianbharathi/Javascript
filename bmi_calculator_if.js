function bmiCalculator(weight,height){
    var interpretation;
    var heightSquare=Math.pow(height,2);
    var bmi=Math.round((weight/heightSquare)*10)/10;
    if (bmi< 18.5){
    interpretation=  "Your BMI is "+bmi+", so you are underweight.";
    return interpretation;
}
if (bmi>=18.5 && bmi<= 24.9){
    interpretation = "Your BMI is " +bmi+ ", so you have a normal weight.";
    return interpretation;
}

if (bmi>24.9){
    interpretation="Your BMI is "+ bmi+ ", so you are overweight.";
    return interpretation;
}
    
}
bmiCalculator(105,1.8);