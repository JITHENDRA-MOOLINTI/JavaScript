// let arr=[1,2,3,4,5]

//here i am not assigned index 2 it gived undefined,because i am not assigned here
// let arr=[]
// arr[0]=1
// arr[1]=2
// arr[3]=4
// arr[4]=5

// let arr=new Array();
// console.log(arr)
// arr[0]=1;
// arr[1]="jithu"
// arr[2]=true
// arr[3]=1.65
// arr[4]=null
// for(let n of arr){
//     console.log(n)
// }


// let arr=[1,2,5,4,6,3,8,1,4]
// console.log(arr.sort())
// console.log(arr.reverse())
// arr.slice()
// let ar2=arr.slice(2,5)
// console.log(ar2)
// arr.push(7)
// console.log(arr)
// arr.unshift(0)
// console.log(arr)
// arr[3]=33
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)
// delete arr[2]
// console.log(arr)
// arr.splice(1,3)
// console.log(arr)
// arr.push(3)
// arr.push(4)
// arr.push(6)
// arr.push(7)
// arr.unshift(0)
// arr[2]=2
// console.log(arr)
// arr.splice(2,0,33,44)
// console.log(arr)


// let arr=[1,2,3,4,5]
// console.log(arr)
// arr.forEach(function(i){
//     console.log(i)
// })

// arr.forEach(function(i,index){
//     console.log(index+"="+i)
// })


// var s="javascript"
// var c=s.split("")
// c.forEach(function(i,index){
//     console.log(i+"="+index)
// })

// var str="hii jithu how are you"
// var str1=str.split(" ");
// str1.forEach(function(i){
//     console.log(i)
// })

var arr=[1,2,3,4,5]

// function double(x){
//     return x*2
// }
// var arr1=arr.map(double)
// console.log(arr1)

// let result=arr.map(num=>num*2)
// console.log(result)

// function even(x){
//     if(x%2==0){
//         return x
//     }
// }
// var result=arr.filter(even)
// console.log(result)

// let result=arr.filter(function(x){
//     if(x%2==0){
//         return x
//     }
// })
// console.log(result)

let result=arr.filter((x)=>x%2==0)
console.log(result)