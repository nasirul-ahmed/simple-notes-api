
// function luckySeven(arr){
//     if(arr.length < 3){
//         return "not posible";
//     }
//     for(let i=2; i< arr.length; i++ ){
//         if(arr[i]+arr[i-1]+arr[i-2] ===7){
//             return true;
//         }
//      }
//      return false;
    
// }

// console.log(luckySeven([1,0]));


// -----------------------------------\

// Find missing number
// function findMissing(){
//     var arr =[2,5,1,4,9,6,3,7]
//     var upB= 9;
//     var loB= 1;
//     var sum = 0;
//     for(let i=0;i<arr.length; i++){
//         sum += arr[i];
        
//     }

//     var upperLimitSum = (upB * (upB+1)/2);
//     var lowerLimitSum = (loB * (loB-1)/2);

//     console.log((upperLimitSum-lowerLimitSum)-sum);

// }

// findMissing();


// Deep Copy;

var obj1 = {
    fname: "Nasir",
    lname: "Ahmed"
}

var obj2 = {...obj1};

//assigning value to new obj2;

obj2.fname="rihaan";

console.log(obj1);
console.log(obj2);

