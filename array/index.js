let movies=["premikula roju","raja rani","12th fail","f1","seetha ramam"];
// for(let i=0;i<movies.length;i++){
//     console.log(movies[i]);
// }
// console.log("--------------")
// for(let value of movies){
//     console.log(value)
// }
// console.log("--------------");
// for(let key in movies){
//     console.log("movie "+key+" movie name:"+movies[key])
// }

// console.log(movies.shift()+" "+movies.pop());
// let start=0;
// let end=movies.length-1;
// while(start<Math.floor(movies.length/2)){
//     let fname=movies[start];
//     movies[start]=movies[end];
//     movies[end]=fname
//     start++;
//     end--;

// }

// let reversed=[]
// for(let i=movies.length-1;i>=0;i--){
//     reversed.push(movies.pop())
// }

// console.log(reversed)

// let num=[12,3,5,6,22,56,29];
// let evenSum=0;
// let oddSum=0;
// num.forEach(n=>{
//     if(n%2===0){
//         evenSum+=n;
//     }else{
//         oddSum+=n;
//     }
// })
// console.log(evenSum+" "+oddSum);


//  let arr = ["apple", "banana", "mango", "banana", 3, 4, 5, 6, true, {name: "object"}];
  
//  let s=[];
//  let num=[];
//  let bool=[];
//  let  obj=[];
//  arr.forEach(ty=>{
//     if(typeof ty==="number"){
//         num.push(ty);
//     }
//     else if(typeof ty==="string"){
//         s.push(ty);
//     }else if(typeof ty==="boolean"){
//          bool.push(ty)
//     }else{
//         obj.push(ty);
//     }
//  })

// console.log(s);
// console.log(num);
// console.log(bool);
// console.log(obj);

// let sports=["cricket","horse ridding"];
// let hobbies=["books","painting","news search"];
// let merge=[];
// merge=sports.concat(hobbies);
// console.log(merge);

// let arr=[1,2,3,4,5,6,7,8,9,10];
// console.log(arr);
// arr.splice(3,3,40,50,60);
// console.log(arr);

// let days=["sunday","monday","tuesday","wednesday","thursday","friday","staurday"];
// let weekdays=days.slice(1,6);
// console.log(weekdays);

// let arr=["hi","jithu","how","are","you","?"];
// console.log(arr.join(" "));

// let arr=[3,5,1,7,8,9];
// arr.sort();
// console.log(arr);

// let data=[
//     {
//       "id": 1,
//       "todo": "Do something nice for someone you care about",
//       "completed": false,
//       "userId": 152
//     },
//     {
//       "id": 2,
//       "todo": "Memorize a poem",
//       "completed": true,
//       "userId": 13
//     },
//     {
//       "id": 3,
//       "todo": "Watch a classic movie",
//       "completed": true,
//       "userId": 68
//     },
//     {
//       "id": 4,
//       "todo": "Watch a documentary",
//       "completed": false,
//       "userId": 84
//     },
//     {
//       "id": 5,
//       "todo": "Invest in cryptocurrency",
//       "completed": false,
//       "userId": 163
//     }
// ]

// data.forEach(data=>{
//     fetch("http://localhost:3000/todos",{
//         "method":"POST",
//         "headers":{
//             "Content-Type":"application/json"
//         },
//         "body":JSON.stringify(data)
//     }).then(respone=>respone.ok?console.log("data inserted"):console.log("data not inserted"));

// })

// let names=["jithu","hussein","madhu","rajesh"];
// let upName=[];
// names.forEach(name=>upName.push(name.toUpperCase()))
// console.log(upName);

// let arr=[1,2,3,4,5];
// let sq=arr.map(num=>num*num);
// console.log(sq);

// let arr=[1,2,3,4,5];
// function print(){
//     console.log("hello there");
// }
// arr.forEach(print);

// let res=arr.map(ele=>ele%2===0?"even":"odd");
// console.log(res);

// let res=arr.filter(num=>num%2==0);
// console.log(res);

// let promise1=new Promise((reslove,reject)=>{
//     reslove("hello there")
// })
// function x(){
//     return promise1.then(ele=>ele)
// }
// console.log(x().then(data=>console.log(data)));

// function x(){
//     return Promise.resolve("hello")
// }
// console.log(x())
// console.log(x().then(data=>console.log(data)))

// Promise.resolve("hello").then(data=>console.log(data))

// let promise=new Promise((reslove,reject)=>{
//     reslove("success")
//     reject("error")
// })
// promise
// .then(res=>console.log(res))
// .catch(res=>console.log(res));

// Promise.resolve("Done").then((data)=>{
//     console.log(data);
//     return "Next";
// }).then(ele=>console.log(ele));

// let promise=new Promise((reslove,reject)=>{
//     setTimeout(()=>{
//         reslove("after 4 seconds")
//     },4000)
// })
// promise.then((val)=>console.log(val));

// async function  getTodos() {
//     let data =await (await fetch("http://localhost:3000/todos")).json();
//     console.log(data)
// }
// getTodos()

// let promise1=new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve("hello there")
//       },2000)
// })
//  promise1.then(res=>console.log(res));
// console.log("started");

// async function x() {
//     let data=await promise1
//     console.log(data);
//     console.log("started");
// }
// x();

async function x() {
    try{
        let res= await fetch("http://localhost:3000/todos/4",{
            "method":"DELETE"
        });
        if(!res.ok){
              throw `data is not enetered ${res.status} ${res.statusText}`;
        }else{
             let data=await res.json();
             console.log(data);
        }
       
    }
    catch(err){
           console.log(err)
    }

}
x();
