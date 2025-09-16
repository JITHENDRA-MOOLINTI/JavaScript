let boxes=document.querySelectorAll(".box");
let rstbtn=document.getSelector("#rst-btn");

let turn=true;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,5],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         console.log("box was clicked")
//     })
// })

let var=10;
var let=20;