//1. Given an array of numbers. Write a function to separate odd and even numbers in different
//    arrays.

function getOddEven(arr){
    let odd = [];
    let even = [];
     for(let i=0;i<arr.length;i++){
         if(arr[i]%2===0){
             arr[i]===true
             odd.push(arr[i])
         }else{
             even.push(arr[i])
         } 
     }
          return  [odd , even]
                  
 }
     getOddEven([1,2,3,4,5,6,7,8,9])

// 4. Given an array of numbers. Create an array containing only unique elements.
function returnInArray(array) {
    let res = [];
    for (let i = 0; i <array.length; i++ ) {
        let itExist=false;
        for (let j=0; j<res.length; j++) {
            if (array[i]===res[j]) {
                itExist = true;   
            }
        }
        if (itExist!== true) {
            res.push(array[i]);
        }
    }
    return res;
}
returnInArray([1,1,5,2,3,1,2,4,5,2,7,9]);


    //5.Given a string and symbols. Change first symbol by the second one in the string. 
    
function symbolString(str){
    let res = str.replace(/t/gs,'w')
    
          return res 
}
symbolString('The results are not recorded yet' )
