// function isLGSeven(){
//     let myValue = 10;
// substraction= myValue-7;
// console.log(substraction);
//     if(myValue < 7 ===0){
//         return "larger";
//     }
//    else if(myValue > 7===0){
//     return "smaller";
//     }
// }
// const myOutput = isLGSeven()
// console.log(myOutput);

function isLGSeven(number) {
    let result = number - 7;
    
    if (result < number) {
      return result;
    } else if (result > 7) {
      return result * 2;
    } else {
      return result;
    }
  }
  
  const inputNumber =  6;
  const output = isLGSeven(inputNumber);
  console.log("Total result:",output);
  