//1.)Do the below programs in anonymous function & IIFE

//a.)Print odd numbers in an array

    (function () {
        let array=[3,5,4,24,4,3,6,7,324,654,45,34,6543];
        for(var i of array){
            if(i%2 != 0){
                console.log(i);
            }
        }
    });

//b.)Convert all the strings to title caps in a string array
    (function () {
        let array=["dish","bike","hihi","road","title"];
        for(var i of array){
            console.log(i.charAt(0).toUpperCase()+ i.slice(1));
        }
    });

//c.)Sum of all numbers in an array
(function () {
    let array=[3,5,4,24,4,3,6,7,324,654,45,34,6543];
    array.reduce((a, b) => a + b, 0)
});

//d.)Return all the prime numbers in an array

(function () {
    let array=[3,5,4,24,4,3,6,7,324,654,45,34,6543];
    array = array.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      
      console.log(array);
});

//e.)Return all the palindromes in an array

(function () {
    let array=["sdas","dd","zsdf","gfddfg"];
    array = array.filter((str) => {
            var p = str.split("").reverse().join("");
            return p === str ? true : false;
    });
      
      console.log(array);
});

//f.)Return median of two sorted arrays of same size
let array1=[3,5,4,24];
let array2=[7,324,654,45,34,6543];

let arr= array1.concat(array2);
    var length = arr.length;

    if(length%2 == 0){
       let mid = length/2;
       let result = (arr[mid-1]+arr[mid])/2;
       return result;
    }else{
       let mid = (length-1)/2;
       return arr[mid];
    }


//g.)Remove duplicates from an array
var arr = ["apple", "bannana", "orange", "apple", "orange"];

arr = arr.filter( function( item, index, inputArray ) {
    return inputArray.indexOf(item) == index;
});


//3.Do the below programs in arrow functions
//a.)Print odd numbers in an array
result => () {
    let array=[3,5,4,24,4,3,6,7,324,654,45,34,6543];
    array.filter( function( item ) {
        return item%2 !== 0;
    });
};

//b.)Convert all the strings to title caps in a string array
result => () {
    let array=["dish","bike","hihi","road","title"];
    array.filter( function( item ) {
        return item.charAt(0).toUpperCase()+ item.slice(1)
    });
};

//c.)Sum of all numbers in an array
reult => () {
    let array=[3,5,4,24,4,3,6,7,324,654,45,34,6543];
    array.reduce((a, b) => a + b, 0)
};

//d.)Return all the prime numbers in an array
let array=[3,5,4,24,4,3,6,7,324,654,45,34,6543];
abc => (array) {
    array = array.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      
};

//e.)Return all the palindromes in an array

abc=> () {
    let array=["sdas","dd","zsdf","gfddfg"];
    array = array.filter((str) => {
            var p = str.split("").reverse().join("");
            return p === str ? true : false;
    });
      
};