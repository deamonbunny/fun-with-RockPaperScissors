//confirm, prompts

//TODO: randomly choose computer choice
  //todo: randomly choose either r,p,s
  //todo: store in variable
//TODO: collect users choice
  //todo: collect user choice r,p,s
  //todo: edge case: user doesn't pick r,p,s
//TODO: Figure Result
  //TODO: win: R:s, p:R, S:P
  //todo: loss: s:r, r:p, p:s
  //Todo: tie: r:r, p:p, s:s
//TODO: Log stats
  //TODO: create variables for W,L,T
  //update appropriate variable based on result
  //display to user
var w = 0;
var l = 0;
var t = 0;
var game = true;
var rps = ["r","p","s"]

var ai = (rps [Math.floor(Math.random()*rps.length)])



while (game) {

   if (confirm("Would you like to play?")) {
     var player = prompt("Pick R, P or S!", "Enter Here") 
   } else {
      game = false;
   }
   player = player.toLocaleLowerCase();



if (player == "r") {
  if (ai == "r") {
   alert("You Chose Rock, Ai chose Rock, You Tied!");
   t++
  } else if (ai == "p") {
   alert("You Chose Paper, Ai chose Rock, You Lose!");
   l++
 } else {
   alert("You Chose Rock, Ai chose Rock, You Win!");
   w++
  };
} else if (player == "p") {
   if (ai == "r") {
    alert("You Chose Paper, Ai chose Rock, You Win!");
    r++
   } else if (ai == "p") {
    alert("You Chose Paper, Ai chose Rock, You Tied!");
    t++
  } else {
    alert("You Chose Paper, Ai chose Rock, You Lose!");
    l++
   };
 } else if (player == "s") {
   if (ai == "r") {
    alert("You Chose Scissor, Ai chose Rock, You Lose!");
    l++
   } else if (ai == "p") {
    alert("You Chose Scissor, Ai chose Paper, You Win!");
    w++
  } else {
    alert("You Chose Scissor, Ai chose Scissor, You Tie!");
    t++
   };
 } else {
   alert("Invalid Input");
 }


 if (confirm(`Total Wins: ${w}\nTotal Loses: ${l}\nTotal Ties: ${t}\nOk to play\nCancel to End`)) {
   game = true;
 } else {
   game = false;
 }

}