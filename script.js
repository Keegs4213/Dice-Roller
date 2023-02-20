function rollDice() {
    var numFaces = document.getElementById("numFaces").value;
    var result = Math.floor(Math.random() * numFaces) + 1;
    document.getElementById("result").innerHTML = "You rolled a " + result;
}
  
console.log(Math.floor(Math.random()*numFaces)+1)