// let arr=[1,2,3,4,5]
// let sum=0;
// for(let ele of arr){
//     sum+=ele
// }
// console.log(sum)

// let arr= [15, 7, 22, 3, 9];
// let max=arr[0]
// let min=arr[0]
// for(let ele of arr){
//     if(ele>max){
//         max=ele
//     }
//     if(ele<min){
//         min=ele
//     }
// }
// console.log(max+" "+min)



// let arr = [10, 21, 34, 55, 60];
// let count=0;
// for(let ele of arr){
//     if(ele%2==0){
//         count++;
//     }
// }
// console.log(count)


// let arr = [1, 2, 3, 4];
// let arr1=new Array()
// let index=0;
// for(let i=arr.length-1;i>=0;i--){
//     arr1[index++]=arr[i]
// }
// console.log(arr1)

//remove duplicates
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let freq={}
// let arr1=new Array()
// for(let ele of arr){
//     freq[ele]=(freq[ele]||0)+1
//     if(freq[ele]===1){
//         arr1.push(ele)
//     }
// }
// console.log(arr1)



//array palindrome
// let arr = [1, 2, 3, 2, 1];
// let count=0;
// let index=arr.length-1
// for(let i=0;i<Math.floor((arr.length-1)/2);i++){
//     if(arr[i]==arr[index--]){
//         count++;
//     }
// }

// console.log(count===(Math.floor(arr.length-1)/2)?"it is palindrome":"it is not palindrome")

// let isPalindrome = true;
// for(let i = 0; i < Math.floor(arr.length / 2); i++){
//     if(arr[i] !== arr[arr.length - 1 - i]){
//         isPalindrome = false;
//         break;
//     }
// }
// console.log(isPalindrome ? "it is palindrome" : "it is not palindrome");


//second largest

// let arr = [100, 20, 4, 45, 99];
// let max=0
// let smax=0;
// for(let ele of arr){
//     if(ele>max){
//         smax=max
//         max=ele
//     }
//     else if(smax!==max&&ele>smax){
//       smax=ele
//     }
// }

// console.log(max+" "+smax)


// let n=1;
// let arr = [1, 2, 3, 4, 5];
// while(n>0){
//     let num=arr[arr.length-1]
//     for(let i=arr.length-1;i>0;i--){
//         arr[i]=arr[i-1]
//     }
//     arr[0]=num
//     n--;
// }
// console.log(arr)


//frequency
// let arr = [1, 2, 2, 3, 1, 4, 1];
// let freq={}
// for(let ele of arr){
//     freq[ele]=(freq[ele]||0)+1
// }
// for(let key in freq){
//    console.log(key+" "+freq[key])
// }



//flatten array

let arr = [1, [2, [3, 4]], 5];

function flatten(arr){
    let result=[]
   for(let ele of arr){
     if(Array.isArray(ele)){
        result=result.concat(flatten(ele))
     }else{
        result.push(ele)
     }
   }
   return result
}
console.log(flatten(arr))
