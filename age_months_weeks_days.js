function ageCalculator(age){
var remAgedays=((90*365)-(age*365));
var remAgeMonths=((90*12)-(age*12));
var remAgeWeeks=((90*52)-(age*52));
  console.log("You have "+remAgedays+ " days, "
              +remAgeWeeks+" weeks, and "+remAgeMonths+" months left.")

}
ageCalculator(51);
