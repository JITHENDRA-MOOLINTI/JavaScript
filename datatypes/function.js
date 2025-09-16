
debugger;
function calculate(a,b,callback){
          console.log(callback(a,b));
}
function add(a,b){
    return a+b;
}
function mul(a,b){
   return a*b;
}
function sub(a,b){
   return a-b;
}

calculate(10,20,add);
calculate(20,10,sub);
calculate(10,20,mul);