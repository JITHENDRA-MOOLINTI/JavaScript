// let ul=document.createElement("ul");
let fruits=["apple","banana","carrot","dimple"];
// fruits.forEach(fruit=>{
//     let li=document.createElement("li");
//     li.innerText=fruit;
//     ul.appendChild(li);
// })

// document.body.appendChild(ul);


// let div=document.createElement("div");
// let p=document.createElement("p");
// p.innerText="hello jithu how are you";
// div.appendChild(p);
// document.body.appendChild(div);

// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let p=document.createElement("p");
// h1.innerText="Welcome To India";
// p.innerText="India has lot of places to visit."
// div.appendChild(h1);
// div.appendChild(p);
// document.body.appendChild(div);


// let table=document.createElement("table");
// table.border="1";
// let data=[["name","age","city"],["Jithu", 22, "Kadapa"],
//   ["Ravi", 25, "Hyderabad"],
//   ["Priya", 23, "Chennai"]];

//   data.forEach((rowData,rowIndex)=>{
//     let row=document.createElement("tr");
//     rowData.forEach(cellData=>{
//         let cell;
//         if(rowIndex===0){
//             cell=document.createElement("th");
//         }else{
//             cell=document.createElement("td");
//         }
//         cell.innerText=cellData;
//         row.appendChild(cell);
//     });
//       table.appendChild(row);
//   });

//   document.body.appendChild(table);

// let div=document.createElement("div");
// fruits.forEach(fruit=>{
//     let buttton=document.createElement("button");
//     buttton.innerText=fruit;
//     div.appendChild(buttton);
// })
// document.body.appendChild(div);

// let names=["jithu","nandha","poornima"];
// let div=document.createElement("div");
// names.forEach(data=>{
//     let p=document.createElement("p");
//    p.innerText=data;
//    div.appendChild(p);
// })
// document.body.appendChild(div);

// let names=["Home","About us","Contact","Projects"];
// let header=document.createElement("header");
// header.className="main";
// names.forEach(data=>{
//     let nav=document.createElement("nav");
//     nav.innerText=data;
//     header.appendChild(nav);
// })

// document.body.appendChild(header)

let products = [
 	{ id: 201, name: "Smartphone", price: 699, category: "Electronics", stock: 50, rating: 4.6 },
 	{ id: 202, name: "Blender", price: 49, category: "Appliances", stock: 20, rating: 4.3 },
 	{ id: 203, name: "Yoga Mat", price: 25, category: "Fitness", stock: 100, rating: 4.9 },
 	{ id: 204, name: "Office Desk", price: 299, category: "Furniture", stock: 10, rating: 4.2 },
 	{ id: 205, name: "Bluetooth Speaker", price: 79, category: "Electronics", stock: 60, rating: 4.7 }
 ];

 let div=document.createElement("div");
 div.className="outercontainer";
 products.forEach(data=>{
	let div2=document.createElement("div");
	div2.className="innercontainer";
	div2.innerHTML=`<h3>${data.name}</h3> \n <h4>${data.category}</h4> \n <h4>$${data.price}</h4> \n <h4>In Stock:${data.stock}</h4> \n <h4>Rating:${data.rating}</h4>`
	div.appendChild(div2)
 })
 document.body.appendChild(div);
