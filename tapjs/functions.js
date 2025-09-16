// var str=prompt("enetr the first string")
// var str1=prompt("enter the second string")
// console.log(str+" "+str1)
//it gives the popup message in the above tap. it has only ok button
// alert(str+" "+str1)

//confirm function has cancel and ok button
// confirm(str+" "+str1)

// var str=parseInt(prompt("enetr the first number"))
// var str1=parseInt(prompt("enter the second number"))
// alert(str+str1)
// alert(str*str1)


// var str=parseFloat(prompt("enetr the first number"))
// var str1=parseFloat(prompt("enter the second number"))
// alert(str+str1)
// alert(str*str1)

// var str=parseFloat(prompt("enetr the first number"))
// var n=Math.sqrt(str)
// confirm(n)


// function display(){
//     console.log("The Function is invoked")
// }
// display()


// function display(msg){
//     return "Hello "+msg
// }
// var msg=display("Jithu")
// console.log(msg)


// function display(msg){
//     return `Hello ${msg}`//most efficent way
// }
// var msg=display("Jithu")
// console.log(msg)

// var food=prompt("Enter the food item")
// var display=function(food){
//     return `Your have Ordered ${food} Placed Successfully`
// }
// var msg=display(food)
// // confirm(msg)
// console.log(msg)


var food=prompt("enter the food item")
var display=(food)=>`Your have ordered ${food} placed sucessfully`
var food=display(food)
console.log(food)
