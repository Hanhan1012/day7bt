// 1 
function fullName() {
    console.log("Han Do");
 } fullName();
 // 2 
 function fullName1(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
 } fullName1("Han", "Do");
 
 // 3 
 function addNumbers(a, b) {
    let sum3= a+b
    return sum3;
 } console.log(addNumbers(5, 20));
 
 // 4 
 function areaOfRectangle(length, width) {
    multi4=length*width;
    return multi4
 } console.log(areaOfRectangle(1,3));
 
 // 5
 function perimeterOfRectangle(length, width) {
    c=2*(length+width)
    return c;
 } console.log(perimeterOfRectangle(2, 3));
 
 // 6 
 function volumeOfRectPrism(l, w, h) {
    v6=l*w*h;
    return v6;
 } console.log(volumeOfRectPrism(2, 3, 4));
 
 // 7 
 function areaOfCircle(r) {
    s7=Math.PI * r ** 2;
    return s7;
 } console.log(areaOfCircle(5));
 
 // 8
 function circumOfCircle(r) {
   c8=Math.PI * 2 * r;
    return c8;
 } console.log(circumOfCircle(5));
 
 // 9 
 function densityOfSubstance (m, v) {
   d9=m/v;
    return d9;
 } console.log(densityOfSubstance(2, 3));
 
 // 10 
 function calcSpeed(d, t) {
    sp10=d/t;
    return sp10;
 } console.log(calcSpeed(50,6))
 
 // 11 
 function calcWeight(m) {
    w11=Math.PI ** 2 * m;
    return w11;
 } console.log(calcWeight(60))
 
 // 12 
 function celciusToFahrenheit(c) {
    return (c * (9/5)) + 32;
 } celciusToFahrenheit(39);
 
 // 13
 function calcBMI(w, h) {
    return w/(h*h);
 } 
 let BMI = calcBMI(66, 1.78);
 if (BMI < 18.5) console.log("Underweight");
 else if (BMI < 24.9)   
    console.log("Normal Weight");
 else if (BMI < 29.9) {
    console.log("Overweight");
 } else {
    console.log("Obese")
 }; 
 
 // 14 
 function checkSeason(month) {
    let season;
    
    switch (month.toLowerCase()) {
        case "july":
         case "august":
        case "september":
       
          season = "Autumn";
          break;
    
       case "october":
       case "november":
       case "december":
       
          season = "Winter";
          break;
    
       case "january":
       case "february":
       case "march":
       
          season = "Spring";
    
       case "april":
       case "may":
       case "june":
       
          season = "Summer";
          break;
    }
    return season;
 } console.log(checkSeason("April"));
 
 // 15 

