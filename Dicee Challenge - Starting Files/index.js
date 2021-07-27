var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.round(randomNumber1) + 1; 
// can also do 
// document.querySelectorAll("img")[0]; 
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
console.log(randomNumber1); 

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.round(randomNumber2) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); 
console.log(randomNumber2); 

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1️⃣ Wins!"; 
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2️⃣ Wins!"; 
} else {
    document.querySelector("h1").innerHTML = "Draw!"; 
}

