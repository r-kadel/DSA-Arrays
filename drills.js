//2 - 3
// function main(){
//   Array.SIZE_RATIO = 3;

//   let arr = new Array();

//   arr.push(3);
//   arr.push(5);
//   arr.push(15);
//   arr.push(19);
//   arr.push(45);
//   arr.push(10);
//   console.log(arr);

//   arr.pop()
//   arr.pop()
//   arr.pop()
//   console.log(arr)
// }

//5 

// function URLify(str) {
//   return str.split(' ').join('%20');
// }

// // 6

// function filtering(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] < 5) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return arr
// }

// 7 

// function findMaxSum(arr) {
//   let sum = 0;
//   let maxSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if (sum > maxSum) {
//         maxSum = sum;
//       }
//     }
//   }

//   return maxSum;
// }


// 8 

// function merge(arr1, arr2) {
//   let ptr1 = 0;
//   let ptr2 = 0;
//   let result = [];

//   while (arr1[ptr1] && arr2[ptr2]) {
//     if (arr1[ptr1] <= arr2[ptr2]) {
//       result.push(arr1[ptr1]);
//       ptr1++;
//     } else {
//       result.push(arr2[ptr2]);
//       ptr2++;
//     }
//   }

//   if (arr1[ptr1]) {
//     result = result.concat(arr1.slice(ptr1));
//   } else if (arr2[ptr2]) {
//     result = result.concat(arr2.slice(ptr2));
//   }

//   return result;
// }

/// 9

// function removeChars(str, remover) {
//   let result  ='';
//   let filteredArr = [];

//   for (let i = 0; i < remover.length; i++) {
//     filteredArr.push(remover[i]);
//   }

//   for (let j = 0; j < str.length; j++) {
//     if (!filteredArr.includes(str[j].toLowerCase())) {
//       result += str[j];
//     }
//   }
//   return result;
// }

// 10 
// function products(arr) {
//   const maxProduct = arr.reduce((acc, val) => {
//     acc *= val;
//     return acc;
//   });
  
//   return arr.map(num => maxProduct / num);
// }

