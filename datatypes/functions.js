// function calculateArea(length,breadth){
//     return length*breadth
// }
// console.log(calculateArea(3,6))

// function isEven(number){
//     if(number%2==0){
//         return true
//     }
//     return false
// }

// console.log(isEven(4))


// const add=function(a,b){
//     return a+b
// }
// console.log(add(5,3))

// const faren=function(temp){
//     return ((temp*(9/5))+32).toFixed(2)
// }
// console.log(faren(45))


// let square=num=>{
//     return num*num
// }
// console.log(square(6))

// let greet=(name)=>{
//     return `Hi...${name}`
// }
// console.log(greet("Jithu"))


// function greet(){
//     console.log('Hello');
// }
// greet();

// function showMessage(){
//     console.log('This is a Message!');
// }
// showMessage();

// function logInfo(){
//     console.log('Logging Information…');
// }
// logInfo();

// function startGame(){
//     console.log('Game Started!');
//     endGame();
// }
// function endGame(){
//     console.log('Game Ended!');

// }
// startGame();


// function  beginTask(){
//     console.log('Task Started');
//     finishTask();
// }
// function   finishTask(){
//     console.log('Task Finished');

// }
// beginTask();


// function one(a,b){
//     console.log("one");
//     return a+b+two(a,b);
// }

// function two(a,b) {
//     console.log("two");
//     return a*b;
// }

// console.log(two(12,10)+one(12,10));


// function sayHi(callback) {
//     console.log("HI")
//     console.log(callback)
// }

// function sayHello() {
//     console.log("Hello")
// }

// sayHi(sayHello)


// function hi() {
//     return "hi jithu how are you"
// }

// function hello(j) {
//     var a=j()
//     return a;
// }

// console.log(hi(hello));


// function sum() {
//     return a+b;
// }

// function add(a) {
//     console.log("first function");
//     a();
// }

// function sum( a,b) {
//     console.log("second function");
   
// }
// add(sum);


var a=function (callback) {
    console.log("anynomus funstion");
    callback();
}

function add(a,b) {
    console.log("sum:"+(a+b));
}

a(add)















