// document.getElementById("h1").addEventListener("click",function(){
//     document.getElementById("h1").innerHTML="Get Your Dream Job Soon!!!"
// })


var a=document.getElementById("h1")
a.addEventListener("click",ms1)
a.addEventListener("mouseout",ms2)

function ms1(){
    a.innerHTML="work hard!!"
}
function ms2(){
    a.innerHTML="get your dream job soon!!"
}