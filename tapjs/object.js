const person={
    "first name":"jithu",
    "last name":"moolinti",
     "age":23,
     address:{
         "city":"tirupati",
         "pin code":517126
     },
     marks:[98,76,89,78,98],
     start:function(){
        console.log("start his carrear")
     }

}

// let copy_of_person={...person}
// console.log(copy_of_person)
// console.log(copy_of_person.address)

var order={
    item:"Biryani",
    price:350,
    message:function(){
        return `You have Placed the ${this.item} and total amount is ${this.price}`
    }
   
}
console.log(order.message())


// console.log(person)
// for(let key in person){
//     console.log(key+":",person[key])
// }
// console.log(person.address)
// console.log(person.start())
// person.gender="male"
// console.log(person)
// person.gender="female"
// console.log(person)
//  delete person["gender"]
// console.log(person)
