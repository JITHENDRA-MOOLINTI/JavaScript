 const restName='Raju Gari Biryani';
function browse(restName,callback){
     setTimeout(()=>{
        console.log(`${restName} Restaurant is Found `);
        if(callback) callback();
     },2000)
}
function selectFood(restName,callback){
     setTimeout(()=>{
        console.log(`Food is Selected at ${restName}`);
        if(callback) callback();
     },1500)
}
function placeOrder(restName,callback){
     setTimeout(()=>{
        console.log(`Order is placed From ${restName}`);
        if(callback) callback();
     },2000)
}

function makePayment(restName,callback){
     setTimeout(()=>{
        console.log(`payment successful to  ${restName}`);
        if(callback) callback();
     },1000)
}

function prepareFood(restName,callback){
     setTimeout(()=>{
        console.log(`Food Prepared From ${restName}`);
        if(callback) callback();
     },3000)
}
function deliver(restName,callback){
     setTimeout(()=>{
        console.log(`Order Deliver to Customer`);
        if(callback) callback();
     },3000)

}


browse(restName,()=>{
    selectFood(restName,()=>{
        placeOrder(restName,()=>{
            makePayment(restName,()=>{
                prepareFood(restName,()=>{
                    deliver(restName,()=>{
                        console.log('deliver is successfull')
                    });
                })
            })
        })
    })
})


function browse(restName){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
         console.log(`${restName} Restaurant is Found `);
          resolve();
     },2000)
    })
}
function selectFood(restName){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
           console.log(`Food is Selected at ${restName}`);
            resolve();
     },1500)
    })
}

function placeOrder(restName){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log(`Order is placed From ${restName}`);
           resolve();
     },2000)
     })
}

function makePayment(restName){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log(`payment successful to  ${restName}`);
         resolve();
     },1000)
     })
}
function prepareFood(restName){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log(`Food Prepared From ${restName}`);
         resolve();
     },3000)
     })
}

function deliver(restName){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log(`Order Deliver to Customer`);
        resolve();
     },3000)
    })
}
browse(restName)
.then(()=>selectFood(restName))
.then(()=>placeOrder(restName))
.then(()=>makePayment(restName))
.then(()=>prepareFood(restName))
.then(()=>deliver(restName))
.then(()=>console.log("deliver is Successfull"));









