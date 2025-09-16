let hiddenDigit=Math.ceil(Math.random()*10);
let gameScore=30;
let highScore=0;
let chances=3;
console.log(Number(document.querySelector("#input_number").value));

document.querySelector(".btn").addEventListener("click",function(){
     //read the value
     const guess=Number(document.querySelector("#input_number").value);
     if(guess>hiddenDigit&&gameScore>0){
        gameScore=gameScore-10;
        chances--;
         if(chances>0){
        document.querySelector(".guess").innerHTML="<h3><span>📈</span>Too High</h3>";
        document.querySelector(".update").textContent="🎮 Game Score: "+gameScore;
         }else{
            document.querySelector(".guess").innerHTML="<h3><span>😔</span>You Lost</h3>";
            document.querySelector(".update").textContent="🎮 Game Score: "+gameScore;
            document.querySelector(".number").textContent=hiddenDigit;
         }
          document.querySelector(".chances").textContent="🎲 Remaining Chances: "+chances;
       
     }
     else if(guess<hiddenDigit&&gameScore>0){
        gameScore=gameScore-10;
        chances--;
       if(chances>0){
        document.querySelector(".guess").innerHTML="<h3><span>📉</span>Too Low</h3>"
       document.querySelector(".update").textContent="🎮 Game Score: "+gameScore;

       }else{
           document.querySelector(".guess").innerHTML="<h3><span>😔</span>You Lost</h3>";
           document.querySelector(".update").textContent="🎮 Game Score: "+gameScore;
           document.querySelector(".number").textContent=hiddenDigit;
       }
        document.querySelector(".chances").textContent="🎲 Remaining Chances: "+chances;
     }else if(gameScore>0){
        chances--;
        document.querySelector(".guess").innerHTML="<h3><span>🏆</span>You Won</h3>"
        document.querySelector(".update").textContent="🎮 Game Score: "+gameScore;
        document.querySelector("body").style.backgroundColor="#9c9c10";
       document.querySelector(".number").textContent=hiddenDigit;
       if(gameScore>highScore){
         highScore=gameScore;
       }
       document.querySelector(".score").innerHTML= "<span>&#127941;</span> All Time Best: " + highScore;
        document.querySelector(".chances").textContent="🎲 Remaining Chances: "+chances;
     }

});


document.querySelector(".btn2").addEventListener("click",function(){
       document.querySelector("body").style.backgroundColor="#000";
       document.querySelector(".guess").innerHTML="<h3>🧠 Guess The Number</h3>";
       document.querySelector(".update").innerHTML="<h3>🎮 Game Score: 30</h3>";
       gameScore=30;
       chances=3;
       document.querySelector("#input_number").value="";
       document.querySelector(".number").innerHTML="<h3>?</h3>";
       document.querySelector(".chances").textContent="🎲 Chances: "+chances;
       hiddenDigit=Math.ceil(Math.random()*10);
});