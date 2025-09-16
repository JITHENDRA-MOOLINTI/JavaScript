

//even or odd
// let n=5
// if(n%2==0){
//     console.log("even")
// }else{
//     console.log("odd")
// }

//square/cube
// let n=2
// console.log("square: "+(n*n)+" cube:"+(n*n*n))
// console.log("square: "+Math.pow(n,2)+" cube:"+Math.pow(n,3))

//positive/negative/zero
// let n=-7
// if(n>0){
//     console.log("positive")
// }
// else if(n<0){
//     console.log("negative")
// }else{
//     console.log("zero")
// }

//largest of three
// let a=10
// let b=25
// let c=5
// if(a>b&&a>c){
//     console.log(a+" is greatest")
// }else if(b>c){
//     console.log(b+" is greatest")
// }else{
//     console.log(c+" is greatest")
// }

//swap
// let a=10;
// let b=20;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a+" "+b)

//multiply of 3/5/both
// let n=15
// if(n%3===0&&n%5===0){
//     console.log("multiply of both")
// }else if(n%3===0){
//     console.log("multiply of 3")
// }else{
//     console.log("multiply of 5")
// }

//absolute value
// let n=-9
// console.log(Math.abs(n))

//round decimal places
// let n=3.14159
// console.log(n.toFixed(2))

//sum of digits
// let n=123
// let sum=0;
// while(n>0){
//     let rem=n%10
//     sum+=rem
//     n=Math.floor(n/10)
// }
// console.log(sum)

//palindrome
// let n=121
// let palindrome=n;
// let ans=0;
// while(n>0){
//     let rem=n%10;
//     ans=ans*10+rem
//     n=Math.floor(n/10)
// }
// if(palindrome===ans){
//     console.log("it is palindrome")
// }else{
//     console.log("it is not palindrome")
// }

//prime
// let n=7
// let isPrime=false;
// for(let i=2;i<7;i++){
//     if(n%i==0){
//         isPrime=true;
//     }
// }
// if(!isPrime){
//     console.log("it is prime")
// }
// else{
//     console.log("it is not prime")
// }

//factorial
// let n=5
// let fact=1;
// for(let i=n;i>1;i--){
//    fact*=i;
// }
// console.log(fact)

//random
// let num=(Math.floor((Math.random()*100)+1))
// console.log(num)

//number of digits
// let n=12345
// let count=0;
// while(n>0){
//     count++;
//   n=Math.floor(n/10)
// }
// console.log(count)

// let n=123
// let rev=0;
// while(n>0){
//     rev=(rev*10)+(n%10)
//     n=Math.floor(n/10)
// }
// console.log(rev)

//Armstrong number
// let n=153
// let n1=n;
// let n2=n;
// let arm=0;
// let count=0;
// while(n>0){
//   count++
//   n=(Math.floor)(n/10)
// }
// while(n1>0){
//     arm+=Math.pow(n1%10,count)
//     n1=Math.floor(n1/10)
// }
// console.log(arm===n2?"it is armstrong number":"it is not armstrong number")


//perfect number
// let n=28
// let sum=0;
// for(let i=1;i<n;i++){
//     if(n%i==0){
//         sum+=i
//     }
// }
// console.log(sum==n?"it is perfect number":"it is not perfect number")

//gcd
// let a=24
// let b=36
// let min=Math.min(a,b)
// let gcd=1;
// let ans=0;
// while(gcd<=min){
//     if(a%gcd==0&&b%gcd==0){
//         ans=gcd
//    }
//    gcd++;
// }
// console.log(ans)

//lcm
// let a=4
// let b=6
// let max=Math.max(a,b)
// while(true){
//     if(max%a===0&&max%b===0){
//         break;
//     }
//     max++;
// }
// console.log(max)

//strong number
// let n=145
// let n1=n
// let sum=0;
// while(n>0){
//     let rem=n%10
//     let fact=1;
//     for(let i=rem;i>1;i--){
//         fact*=i;
//     }
//      sum+=fact;
//      n=Math.floor(n/10)
// }
// console.log(n1===sum?"it is strong number":"it is not strong number")

//conver to binary
// let n=10;
// let op="";
// while(n>0){
//     op+=n%2
//     n=Math.floor(n/2)

// }
// console.log(op.split("").reverse().join(""))

//binary to decimal
// let b="1010"
// let decimal=0;
// let count=0;
// for(let i=b.length-1;i>=0;i--){
//      decimal+=((Number)(b.charAt(i))*(Math.pow(2,count++)))
// }
// console.log(decimal)

//happynumber
// let n=19
// while(n>9){
//    let sum=0
//    let n1=n;
//    while(n1>0){
//       let rem=n1%10;
//       sum+=Math.floor(Math.pow(rem,2))
//       n1=Math.floor(n1/10)
//    }
//   n=sum
 
// }

// console.log(n==1?"it is happy number":"it is not happy number")

//power
// let n=2
// let pow=5
// while(pow>1){
//     n=n*2
//     pow--
// }
// console.log(n)

//sum of n numbers
// let n=10;
// let sum=0;
// while(n>=1){
//    sum+=n;
//    n--;
// }
// console.log(sum)

// let x;
// console.log(x === undefined);
// console.log(typeof NaN);


// function jithu(){
//    var a=10;
//    console.log(a)
// }
// jithu();
// var a;
// console.log(a)
// let b;
// console.log(b)
// const c=10;
// console.log(c)

const country="India";
let city="Tirupati";
var year=2025;
console.log(`Country:${country}, City:${city}, Year:${year}`);

// var _name="hello";
// console.log(_name);

// var marks=70;
// if(marks>=75){
//     console.log('A');
// }
// if(!marks<75){
//     console.log('B');
// }



