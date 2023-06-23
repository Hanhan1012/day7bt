//1
 // 2  
 let rgbColorGenerator = () => {
    let rgb = [];
    for (const color of '111') {
       var one = (parseInt(Math.random() * 255));
       var two = (parseInt(Math.random() * 255));
       var three = (parseInt(Math.random() * 255));
       rgb.push(one, two, three);
    }
    return `rgb(${one}, ${two}, ${three})`;
 }
 console.log(rgbColorGenerator());

 // 8  
 let shuffleArray = (arr) => {
    
    let len = arr.length;
    let uniqueRands = [];
    
    while(uniqueRands.length != len) {
       let randomNum = parseInt(Math.random() * len);
       if(uniqueRands.indexOf(randomNum) === -1) uniqueRands.push(randomNum);
    } 
    
    let randomizedArr = [];
    for(const index of uniqueRands) {
       randomizedArr.push(arr[index]);
    }
    return randomizedArr;
 }
 let arr = [1, 23, 34, 32, 2, 1];
 console.log(shuffleArray(arr));
 
 // 9
 function factorial(num) {
    if (num <= 1) return 1;
    else return num * factorial(num-1);
 }
 console.log(factorial(5));
 
 // 10
 let isEmpty = (arg) => !Boolean(arg.length);
 console.log(isEmpty(Array()));
 
 // 11 
 let sum = (...args) => {
    let total = 0;
    for(const elem of args) total += elem;
    return total;
 }
 console.log(sum(2, 34, 23));
 
 // 12 
 let sumOfArrayItems = (arr) => {
   let sum = 0;     
   for(const i of arr) 
     sum += i      
   return sum;
 }
 
 // 13   
 let average = (arr) => {
   return sumOfArrayItems(arr) / arr.length;
 }
 
 // 14   
 let modifyArray = arr => {
    if (arr.length >= 6) {
        for (let i = 0; i < arr.length; i++) {
            if (i = 5) {
                arr.splice(5)
            }
        }
        return arr
    } else {
        return `item not found`
    }
}
 
 // 15  
 let isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0 && num > 1) {
            return `${num} is a prime number`;
        } else {
            return `not a prime number`
        }
    }
}   
 
 
 // 16   
 function areAllUnique(arr) {
   for(let x = 1; x < arr.length; x++) {
     for(let i = 0; i< x; i++) {
       if(arr[x] == arr[i])
         return false;
     }
   } return true;
 }
 
 // 17      
 let SameType = arr => {
   let type = typeof arr[0];
   for(const i of arr) {
     if(type != i)
       return false;      
   }
   return true;
 }
 
 // 18   
 function isValidVariable(varName) {
   let name = /%^#$@**[]/;
   return name.test(varName);
 }
 // 19  
 let getUniqueRands = () => {
   let arr = [];
   for(let i = 0; i<7; i++) {
     let random = Math.ceil(Math.random() * 9);
     
     let isUnique = true;
     for(const x of arr) {
       if(random == x) {
         isUnique = false;
         break;
       }
     }
     if(isUnique) arr.push(random);
   }
   return arr; 
 }
 
 // 20 
 function reverseCountries (arr) {
   let copy = arr.slice(0, arr.length);
   let arr320 = 0;
   for(let i320=arr.length-1; i320>=0; i320--) { 
     arr[arr320] = copy[i320];
     arr320++;
   }
   return arr;
 } 
 