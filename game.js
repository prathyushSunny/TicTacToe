console.log("This is just a test case!");
// var oneE = document.querySelector("#one");
var board = document.querySelectorAll("td");
var restart = document.querySelector("#restart");
// console.log(board);
//
//

restart.addEventListener("click",function(){
  for (var i = 0; i < board.length; i++) {
    board[i].textContent = "";
  }
});

function changeMarker() {
  if (this.textContent === "") {
    this.textContent = "X";
  }else if (this.textContent === "X") {
    this.textContent = "O";
  }else {
    this.textContent = "";
  }
}

// board[4].addEventListener("click",changeMarker);


for (var i = 0; i < board.length; i++) {
  board[i].addEventListener("click",changeMarker);
}

// console.log(board.length);
// for (var i = 0; i < board.length; i++) {
//   board[i].addEventListener("click",function(){
//     if (board[i].textContent === "") {
//       board[i].textContent = "X";
//     }else if (board[i].textContent === "X") {
//       board[i].textContent = "O";
//     }else {
//       board[i].textContent = "";
//     }
//   });
// }
