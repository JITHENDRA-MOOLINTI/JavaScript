// //let a;
// console.log(a)
// let a=10;
// console.log(a)




// console.log(typeof myFunc);
// var myFunc = function () {
//   return "Hoisting!";
// };


// let a = 10;

// function test() {
//   let b = 20;
//   console.log(a);
//   console.log(b);
// }
// test();
// console.log(a);

//   let name="jithu"
//   let age=23
//   let isStudent=true
//   console.log(`My Name is ${name},I am ${age} Years Old,I am now as ${isStudent}`)

//   let a = 5;
//   let b = 10;
//   a=a+b//15
//   b=a-b//5
//   a=a-b//10
//   console.log(a,b)

//   const a = 10; // Global scope

// function show() {
//   console.log(a); // Accessible
// }
// show()
// console.log(a); // Accessible

// const arr=[1,2,3]
// arr.push(4)
// console.log(arr)


// let age=Symbol("age")
// let person={
//     name:"jithu",
//     age:23
// }
// console.log(person["age"])


// let userId = Symbol("userId");

// let user = {
//   name: "Jithu",
//   [userId]: 101  // symbol as key
// };

// console.log(user.userId);  // 101


// let secretKey=Symbol("id")

// let user={
//     id:100,
//     [secretKey]:"private-101"

// }

// console.log(user["id"])
// console.log(user[secretKey])
// console.log(user.id)
// console.log(user["secretKey"])

// for(let key in user){
//     console.log(key)
// }

// let symbols=Object.getOwnPropertySymbols(user)
// console.log(symbols)
// console.log(user[symbols[0]])


// let privateKey=Symbol("hidden")

// let user={
//     "name":"jithu",
//     "age":23,
//     [privateKey]:"secretValue"
// }
// console.log(Object.keys(user))
// let arr=Object.getOwnPropertySymbols(user)
// console.log(user[arr[0]])
// console.log(user["name"])
// console.log(user[privateKey])
// console.log(user["privateKey"])


// //reverse string
// let s="jithu"
// console.log(s.split("").reverse().join(""))

// //domain part
// let email = "jithu@gmail.com";
// // console.log(email.substring(5)) not correct
// console.log(email.split("@")[1])

// //repeat 
// let sentence = "I ate an apple. That apple was sweet. Apple is my favorite fruit.";
// console.log(sentence.toLowerCase().split("apple").length-1)

// console.log(s.charAt(0).toUpperCase()+s.substring(1))

//palindrome
// let str="madam"
// let rstr=str.split("").reverse().join("")
// if(str===rstr){
//     console.log(`It is Palindrome.${str}`)
// }else{
//     console.log(`it is not palindrome`)
// }

// //count vowels
// let count=0;
// let s="javascript"
// for(let i=0;i<s.length;i++){
//     // if(s.charAt(i)=='a'||s.charAt(i)=='e'||s.charAt(i)=='i'||s.charAt(i)=='o'||s.charAt(i)=='u'){
//     //     count++;
//     // }
//     if("aeiou".includes(s[i])){
//         count++;
//     }
// }
// console.log(count)

// //remove spaces

// let s1=" Hello    world     Jithu "
// console.log(s1.trim())
// let cleaned = s1.trim().split(/\s+/).join(" ");
// console.log(cleaned);  // "Hello world Jithu

// //mask a phone number
// // let s2="9876543210"
// // console.log(s2.replace(s2.substring(0,6),"*".repeat(6)))

// let s2 = "9876543210";
// let masked = "*".repeat(6) + s2.slice(6);
// console.log(masked)

// //reverse word in string
// let s3="JavaScript is fun"
// let result=s3.split(" ")
// let ans="";
// for(let i=0;i<result.length;i++){
//     if(i==result.length-1){
//         ans+=result[i].split("").reverse().join("")
//     }else{
//         ans+=result[i].split("").reverse().join("")+" "
//     }
// }
// console.log(ans)

// //lower to upper viceversa
// let s4="Jithu REDDY"
// let op="";
// for(let ch of s4){
//     if(ch===ch.toUpperCase()){
//        op+=ch.toLowerCase()
//     }else{
//         op+=ch.toUpperCase()
//     }
// }
// console.log(op)

// //frequency of character
// let s="aabbcde"
// s=s.toLowerCase().replace(" ","")
// let freq={}
// for(let ch of s){
//     freq[ch]=(freq[ch]||0)+1
// }

// for(let key in freq){
//    console.log(key+"  "+freq[key])
// }

// //frquency non-repeating character
// for(let key in freq){
//     if(freq[key]==1){
//     console.log(key)
//     break
//     }
// }

// let str="javascript"
// str=str.toLowerCase().replace(" ","")
// let fre1={}
// for(let ch of str){
//     if(fre1[ch]){
//         fre1[ch]++;
//     }
//     else{
//         fre1[ch]=1
//     }
// }
// console.log(fre1)
 
// // //anagram
// // let str1="listen"
// // let str2="silent"


// //remove dupliactes 
// let str3="aabbccdde"
// let op="";
// let freq2={}
// for(let ch of str3){
//     if(freq2[ch]){
//         freq[ch]++
//     }else{
//         op+=ch
//         freq2[ch]=1
//     }
// }
// console.log(op)
//reverse
// let s="hello"
// let str=s.split("").reverse().join("")
// console.log(str)

//palindrome
// let s="madam"
// let rstr=s.split("").reverse().join("")
// if(s===rstr){
//     console.log("it is palindrome")
// }else{
//     console.log("it is not palindrome")
// }

//count vowels
// let s="Hello World"
// s=s.toLowerCase()
// let count=0;
// for(let ch of s){
//     if("aeiou".includes(ch)){
//          count++;
//     }
// }
// console.log(count)

//capitilize each word 
// let s="hello world"
// s=s.split(" ")
// let op="";
// for(let str of s){
//    op+=str.charAt(0).toUpperCase()+str.slice(1)+" "
// }
// console.log(op.trim())

//length of string
// let s="hello"
// let count=0;
// for(let ch of s){
//    count++;
// }
// console.log(count)

//convert string to array
// let s="abcd"
// s=s.split("")
// console.log(s)


//remove white spaces
// let s=" hello "
// s=s.trim()
// console.log(s)

//check string sub is another string

// let s="JavaScript"
// s=s.toLowerCase();
// console.log(s.includes("script"))

//frequency
// let s="hello"
// s=s.toLowerCase().trim()
// let freq={}
// for(let ch of s){
//     freq[ch]=(freq[ch]||0)+1
// }
// for(let key in freq){
//     console.log(key+"  "+freq[key])
// }

//replace character
// let s="apple"
// s=s.replaceAll("p","b")
// // for(let ch of s){
// //     if(ch==="p"){
// //         s=s.replace(ch,"b")
// //     }
// // }
// console.log(s)

//compressed repeated characters
// let s="aaabbc"
// let freq={}
// for(let ch of s){
//     if(freq[ch]){
//         freq[ch]++
//     }else{
//         freq[ch]=1
//     }
// }
// let op=""
// for(let key in freq){
//     op+=key+freq[key]
// }
// console.log(op)

//first non-repeating character
// let s="aabccbd"
// let freq={}
// for(let ch of s){
//     freq[ch]=(freq[ch]||0)+1
// }
// for (let ch of s) {
//     if (freq[ch] === 1) {
//         console.log(ch);
//         break;
//     }
// }


//remove duplicates
// let s="programming"
// let freq={}
// for(let ch of s){
//     freq[ch]=(freq[ch]||0)+1
// }
// let op="";
// for(let key in freq){
//     op+=key
// }
// console.log(op)


//convert to title case
// let s="welcome to js"
// s=s.split(" ");
// let op=""
// for(let str of s){
//    op+=str.charAt(0).toUpperCase()+str.slice(1)+" "
// }
// console.log(op.trim())

//anagram
// let s1="listen"
// let s2="silent"
// let freq1={}
// let freq2={}
// if(s1.length!=s2.length){
//     console.log("not a anagram")
// }
// else{
// for(let ch of s1){
//     freq1[ch]=(freq1[ch]||0)+1
// }
// for(let ch of s1){
//     freq2[ch]=(freq2[ch]||0)+1
// }

// let isAnagram=false
// for(let ch of s1){
//     if(freq1[ch]!=freq2[ch]){
//       console.log("not a anagram")
//       isAnagram=true
//     }
// }
//   if(!isAnagram){
//     console.log("it is anagram")
//   }
// }
//

//short approach
// let s1 = "listen", s2 = "silent";
// let isAnagram = s1.split("").sort().join("") === s2.split("").sort().join("");
// console.log(isAnagram ? "it is anagram" : "not a anagram");

//sort string
// let s="javascript"
// s=s.split("").sort().join("")
// console.log(s)

//convert to camel case
// let s="hello world from js"
// s=s.split(" ")
// let op="";
// for(let i=0;i<s.length;i++){
//     if(i==0){
//         op+=s[i]
//     }else{
//         op+=s[i].charAt(0).toUpperCase()+s[i].slice(1)
//     }
// }
// console.log(op)

//most frequent charcater
// let s="hello"
// let freq={}
// for(let ch of s){
//     freq[ch]=(freq[ch]||0)+1
// }

// let max=0;
// let char="";
// for(let key in freq){
//     if(freq[key]>max){
//         max=freq[key]
//         char=key
//     }
// }

// console.log(char+":"+max)

//string rotate
// let s="abcde"
// let rotate="cdeab"
// let isPresent=false
// for(let i=0;i<s.length-1;i++){
//     if(s===rotate){
//         console.log(true)
//         isPresent=true
//         break
//     }
//     s=s.slice(1,s.length)+s.slice(0,1)
// }
// if(!isPresent){
//     console.log(false)
// }


//short approach 
// let s = "abcde", rotate = "cdeab";
// console.log((s.length === rotate.length) && (s + s).includes(rotate)); // true

//panagram 
// let s="The quick brown fox jumps over the lazy dog"
// s=s.toLowerCase().split(" ").join("")
// let freq={}
// for(let ch of s){
//     freq[ch]=(freq[ch]||0)+1
// }
// let count=0
// for(let key in freq){
//     count++;
// }
// if(count===26){
//     console.log("it is pangram")
// }else{
//     console.log("it is not pangram")
// }


// console.log(0.1+0.2)//0.300000000000004


