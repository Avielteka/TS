//  ts exreciseים 

// exrecise 1
// function getNumber(){
//   let user:any = document.getElementById("userInput");
// if (user.value>10) {
//     console.log("greater then 10") ; 
    
// }
// else{
//     console.log("less then 10");  
// }
// }
// getNumber()

// exrecise 2
// function getNumberUser(){
//   let user:any = document.getElementById("userInput");
// if (user.value>10) {
//     console.log("greater then 10") ; 
   
    
// } else if(user.value<10){
// console.log("less then 10");

// }else(user.value == 10)
//   console.log("equal to 10");   
// }
// getNumberUser()


// exrecise 4
// function printMinNum(number1:number ,number2:number){
//     return (Math.min(number1,number2)) 
//     }
// printMinNum(3,6)


// exrecise 5
// function printNinNum (num1:number , num2:number , num3:number):number{
//     return Math.min(num1,num2,num3)
// }
// printNinNum(2,4,5)


// exrecise 6
// function printAvg(num1:number,num2:number,num3:number):number{
//     return Math.floor(num1+num2+num3)
// }
// console.log(printAvg(10.8,10,10)) 


// exrecise 7
// function printSum(num1:number,num2:number,num3:number,num4:number):number{
//     return num1+num2+num3+num4
// }
// console.log(printSum(10,10,10,10))

// exrecise 8

// function printMinArray(array:number):number{
//     let minNum = array[0]
//   array.forEach(item => {
//     if(item<minNum){
//         minNum = item
//     }
//   });
// return minNum
// }
// console.log(printMinArray([2,5,1,3,9])) 


// exrecise 9

// function printIntAvg(array:number[]){
//     let sum:number=0 ;
//     for(let i:number=0;i<array.length;i++){
//         sum+=array[i]
//     }
//     return sum/array.length
// }
// console.log(printIntAvg([10,10,10,10,10]))  


// exrecise 10
// function printSumNum(array:number){
//     let sum:number = 0 
//     for(let i:number =0;i<array.length;i++){
//         sum+=array[i]
//     }
//     return sum
// }
// console.log(printSumNum([1,1,1,1])) 


// exrecise 11
// function printSecName(array:string[]){
//     for(let i = 0; i < array.length; i++ ){
//         return array[1]
//     }
// }
// console.log(printSecName(["aviel","ran","daniel","dalia"]))


// exrecise 12
// function printNameCharA(array:string[]){
//     for(let i=0; i < array.length;i++){
//         if(array[i][0]=='A')
//             return array[i]
//     }
// }
// console.log(printNameCharA(['yuda','Aviel','Nati'])) 


// exrecise 13 
// function printEvenNum(array:number[]):number{
//     for (let i of array){
//         if(array[i]%2==0){
//            return  ("there is even number")
//         }     
//     }
//    return "nooo"
// }
// console.log(printEvenNum([1,1,1,9]))


// exrecise 14
// function printDate(date:string):string{
//     const d:string = new Date(date)
//     return d
// }
//  console.log(printDate("6/7/2000") 

// exrecise 15
// function printName(text:string,num:number):any{
//     for (let i=0; i<num; i++) {
//         for (let i=0; i<num; i++) {
//      return   console.log (text)
//     }
//     }
// }
// exrecise 16
// function printValidAge(name:string,age:number):any{
//     if(age>=18){
//         return `wellcome my name is ${name}`
//     }else{
//         return  `no entrey ${name}`
//     }
// }
// console.log(printValidAge("aviel",20))

// exrecise 17
// function printChar(fName:string,lName:string):any{
//     if(fName[0]==lName[0]){
//         return console.log(fName[0]) 
//     }
//     else{
//         console.log(0) 
//     }
//     }

// printChar("Aviel","vigil")

// exrecise 18
// function  printSome(array:any[]):any{
//     switch(array.length){
//           case  0 :
//           return "no data";
         
//           case  1:
//           return "one item";
 
//           case 2:
//           return "tow item"
//       }
//  }
// //  console.log(printSome([1]))


// //exercise 19
// function  printGetNumAndText(nums:number[],text:string):any{
//     switch (text) {
//      case "switch":
//      return nums.reverse();
//      case "toUp":
//      return nums.sort((a, b) => b - a);
//      case "toDown":
//      return nums.sort((a, b) => a-b);
 
//      default:
//          return nums;
//  }
//  }
//  console.log(printGetNumAndText([2,3,1,8,5],"toUp")) 