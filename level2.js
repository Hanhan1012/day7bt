//1
let solveLinEquation = function(a,b,c)
{}
// 2: solve quardratic equation      
let solveQuadEquation = function(a, b, c) {
    let delta = Math.pow(b,2) - 4*a*c;
    
    let x1 = (-b+Math.pow(delta, 0.5))/(2*a);
    let x2 = (-b-Math.pow(delta, 0.5))/(2*a);
    
    return [x1, x2]; 
  }
  console.log(solveQuadEquation(2, -7, 3));
  
  // 3 
  let printArray = function(arr33) {
     for(const value of arr33) {
        console.log(value);
     } 
  } 
  printArray(Array(5).fill(5));
  
  // 4 

    let day = new Date();
    
    let date = day.getDate();
    let month = day.getMonth();
    let year = day.getFullYear();
    let hour = day.getHours();
    let mins = day.getMinutes();
    
    function format(a) {
        if (a < 10) {
         console.log(`0 ${a}`);
        } else  {
          console.log(`a`)}
        } 
      
        console.log(`${date}/${month}/${year} ${format.hour}:${format.mins}`);
     

 // 5 
  function swapValues(a, b) {
     return [b, a];
  }
  let x = 3; 
  let y = 4; 
  console.log(swapValues(x, y));
  
  // 6 
  function reverseArray (arr) {
  
    let Arr36 = [];
    for (let i36 = 0; i36 < arr.length; i36++) {
        Arr36.unshift(arr[i36]);
    }
    console.log(Arr36);
}

  // 7 
  function capitalizeArray (arr) {
    let arr37 = [];
    for(const item of arr) {
      arr37.push(item.toUpperCase());
    }
    
    return arr37;
  }
  
  /*
  // 8  
  function addItem (arr, item){
    return arr.push(item);  
  } 
  console.log(addItem())
  */
  // 9
  
  let removeItem = (arr, index) => {
    arr.splice(index, 1);
    return arr;
  }
  
  // 10   
  function sumOfNumbers(num) {
    if(num == 0){ 
    return 0;
    }else{
      return num + sumOfNumbers(num-1);
  }
  
}console.log(sumOfNumbers(1,2,3,4))
  // 11 
  function sumOfOdds(num) {
    let oddsum=0;
    if(num%2 !==0){
      oddsum+=num
    }
    return oddsum;}
    console.log(sumOfNumbers(56))
  
  // 12 

  function sumOfEven(num) {
    let evensum=0;
    if(num%2 === 0){
      evensum+=num
    }
    return evensum;
  }
  console.log(sumOfEven(56))
  //13
  evenAndOdds = (num) => {
    let odd = 0;
    let even = 0;
    for (let i313 = 0; i313 <= num; i313++) {
        if (i313 % 2 === 0) {
            even++
        } else if (i313 % 2 !== 0) {
            odd++
        }
    }
    return `the number of odds are ${odd} \n the number of even are ${even}`
}
  // 14 
  let sumOfNums = (...args) => {
    let sum314 = 0;
    for(const x of args) {
      sum314 += x;
    }
    return sum314;
  }
  
  // 15 
  function randomUserIp () {
    let a315 = parseInt(Math.random() * 255);
    let b315 = parseInt(Math.random() * 255);
    return `${a315}.${b315}`;
  }
  
  // 16 
  // 17 random hex number gen     
  // 18
  const characters318 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  function  userIdGenerator(length){
  let result318 = '';
  const charactersLength318 = characters318.length;
  for (let i318=0;i318<length;i318++)
  {
    result318 += characters318.charAt(Math.floor(Math.random() * charactersLength318));
  }
  return result318;
  }
  
  console.log(userIdGenerator(7));

  