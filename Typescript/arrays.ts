//Arryas
//array is collection of data , which can have different data typescript
//arry is an ordered collection
//array is an dynamic in size


let array = [10,20
     ,"java" ,true, null ]
console.log(array[0]);
console.log(array[4]);

// declaration of array

//1. using array literal 
//2.using array constuctor - new array()

//1.  syntax = let arrayName:datatype[] = [value1, vlaue2 ....]

let arr1:number[]=[10,20,30,40,50]
let arr2:(number|string|boolean)[] = [10,"TS",true]
let Arr1 = [10,20,"java" ,true, null ]

console.log(arr1)
console.log(Arr1)

//using the loop to iterate thourhg the elecemt of any array
// traditional for loop 

// lenth - return toal number of elements available inside an array
 console.log(arr1.length)

 // traditonal for loop 
  for (let i=0; i<arr1.length; i++){
   
    console.log(arr1[i])
  }

  // for (let element of arrayname)

  let arr7 = [10,20,30,40,50, "pink","orange","TS"]
   for (let ele of arr7){
    console.log(ele)
   }

   //console.log(********Method of an array******);
   

   
//1. push(ele1, ele2)
let arr8 = [10, 20, 30, 40, 50, "pink"]

console.log(arr8)

arr8.push(100, "JS")

console.log(arr8)

// 2. pop - removes last element from the array 
let lastelement=arr8.pop()
console.log(arr8)
console.log(lastelement)

/// difference between push and unshift in an array?
/// difference between pop and shift in array ?

