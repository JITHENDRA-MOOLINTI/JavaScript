// let url="https://fakestoreapi.com/products"
//   fetch(url).then((data)=>
//      data.json()
//   ).then((data)=>{
//     for(let i=0;i<data.length;i++){
//         console.log(data[i].price)
//     }
//   })

// fetch("https://dummyjson.com/todos")
//   .then((response)=>response.json())
//   .then(data=>{
//    for(let i=0;i<data.todos.length;i++){
//       console.log(data.todos[i]);
//    }
//   })

// fetch("https://dummyjson.com/todos")
//   .then(res => res.json())
//   .then(data => console.log(data));


// let options={
//   "method":"GET"
// }
// fetch("http://localhost:3000/students",options)
// .then(response=>response.json())
// .then((data)=>{
//   for(let i=0;i<data.length;i++){
//     console.log(data[i].name);
//   }
// }).catch(err=>console.error("error"))


// let options={
//   "method":"POST",
//   "headers":{
//     "content-type":"application/json"
//   },
//   "body":JSON.stringify({
//     "id":"1",
//     "name":"Jithendra"
//   })
// }

// fetch("http://localhost:3000/students",options)
// .then(response=>{
//   if(response.ok){
//     console.log(response.statusText);
//   }else{
//     console.log("data is not created");
//   }
// }).catch(error=>console.log("error"));


// fetch("http://localhost:3000/students/1",{
//   "method":"PUT",
//   "headers":{
//     "Content-Type":"application/json"
//   },
//   "body":JSON.stringify({
//     "id":1,
//     "name":"Jithendra"
//   })
// }).then(response=>response.ok?console.log(response.statusText):console.log("not updated"))
// .catch(err=>console.log("error"))


// fetch("http://localhost:3000/students/1",{
//   "method":"PATCH",
//    "headers":{
//     "Content-Type":"application/json"
//    },
//    "body":JSON.stringify({
//        "name":"jithendra reddy"
//    })
// }).then(response=>response.ok?console.log(response.statusText):console.log("data is not updated"));

// fetch("http://localhost:3000/students/2",{
//   "method":"DELETE"
// }).then(response=>response.ok?console.log(response.statusText):console.log("not deleted"))
// .catch(err=>console.log("error"));


// fetch("http://localhost:3000/faculty")
// .then(response=>response.json())
// .then(data=>{
//   data.forEach(element => {
//        fetch(`http://localhost:3000/faculty/${element.id}`,{
//         "method":"DELETE"
//        })
//   });
// })

fetch("http://localhost:3000/faculty")
.then(response=>response.json())
.then(data=>{
  for(let i=0;i<data.length;i++){
      fetch(`http://localhost:3000/faculty/${data[i].id}`,{
        "method":"DELETE"
      }).then(response=>response.ok?console.log("deleted"):console.log("not deleted"));
  }
})
