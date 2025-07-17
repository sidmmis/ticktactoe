// let turn = "O";
// let total_turn = 0;

// const winner = [[0,1,2],[3,4,5],[6,7,8],
// [0,3,6],[1,4,7],[2,5,8],
// [0,4,8],[2,4,6]];

// let tictactoe = new Array(9).fill("E");
// // check karte hai ki koi jeeta hai ya nahi
// // initalize the board with "E" (Empty)
// // aur uske baad x aur o ke turn ko track karte hai

// // function checkwinner(){
// //             //   0 ,1,2 
// //     for(let [index0, index1, index2] of winner)
// //     {
// //         if(tictactoe[index0]!="E"&&tictactoe[index0]===tictactoe[index1]&&tictactoe[index1]===tictactoe[index2])
// //         return 1;
// //     }

// //     return 0;
// // }
// function checkwinner() {
//     for (let combo of winningCombos) {
//         const [a, b, c] = combo;
//         if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//             document.getElementById(a).classList.add('win');
//             document.getElementById(b).classList.add('win');
//             document.getElementById(c).classList.add('win');

//             // 🎉 Show splash
//             const splash = document.getElementById('winnerSplash');
//             const text = document.getElementById('winnerText');
//             text.textContent = `${currentPlayer} Wins! 🎉`;
//             splash.classList.remove('hidden');

//             // Optional: confetti
//             if (window.confetti) {
//                 confetti({
//                     particleCount: 150,
//                     spread: 80,
//                     origin: { y: 0.6 }
//                 });
//             }

//             return true;
//         }
//     }
//     return false;
// }



// const board = document.querySelector('.board');

// const boardLogic = function(event){
    
//     if(tictactoe[event.target.id]==="E")
//         {    
//         total_turn++;    
    
//         if(turn==="O"){
//             event.target.innerHTML = "O";
//             tictactoe[event.target.id] = "O";
//             if(checkwinner())
//             {
//                 document.getElementById('winningMessage').innerText = "Winner is O";
//                 board.removeEventListener('click',boardLogic);
//                 return;
//             }
    
//             turn = "X";
//         }
//         else
//         {
//             event.target.innerHTML = "X";
//             tictactoe[event.target.id] = 'X';
//             if(checkwinner())
//             {
//                 document.getElementById('winningMessage').innerText = "Winner is X";
//                 board.removeEventListener('click',boardLogic);
//                 return;
//             };
            
//             turn = "O";
//         }
//        }

//     if(total_turn==9){
//         document.getElementById('winningMessage').innerText = "Match is Draw";
//     }   
// }
// document.getElementById('winnerSplash').addEventListener('click', () => {
//     document.getElementById('winnerSplash').classList.add('hidden');
// });

// board.addEventListener('click', boardLogic);

// const Restart = document.getElementById("restartButton");
// Restart.addEventListener('click',()=>{
//     turn = "O";
//     const cell = document.getElementsByClassName('cell');
//     Array.from(cell).forEach((element)=>{
//       element.innerHTML = "";
//     })

//     document.getElementById('winningMessage').innerText = "";
//     total_turn = 0;

//     tictactoe = new Array(9).fill("E");
    
//     board.addEventListener('click', boardLogic);
// })

let turn = "O";
let total_turn = 0;

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

let tictactoe = new Array(9).fill("E");

const board = document.querySelector('.board');

// ✅ Winner Splash
function checkwinner() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (tictactoe[a] !== "E" && tictactoe[a] === tictactoe[b] && tictactoe[b] === tictactoe[c]) {
      document.getElementById(a).classList.add('win');
      document.getElementById(b).classList.add('win');
      document.getElementById(c).classList.add('win');

      // Show fullscreen splash
      const splash = document.getElementById('winnerSplash');
      const text = document.getElementById('winnerText');
      text.textContent = `${turn} Wins! 🎉`;
      splash.classList.remove('hidden');

      // Optional confetti
      if (window.confetti) {
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
      }

      return true;
    }
  }
  return false;
}

// ✅ Game Play Logic
const boardLogic = function (event) {
  const id = parseInt(event.target.id);
  if (tictactoe[id] === "E") {
    total_turn++;

    event.target.innerHTML = turn;
    tictactoe[id] = turn;

    if (checkwinner()) {
      document.getElementById('winningMessage').innerText = `Winner is ${turn}`;
      board.removeEventListener('click', boardLogic);
      return;
    }

    if (total_turn === 9) {
      document.getElementById('winningMessage').innerText = "Match is Draw";
    }

    turn = turn === "O" ? "X" : "O";
  }
};

// ✅ Click to dismiss splash
document.getElementById('winnerSplash').addEventListener('click', () => {
  document.getElementById('winnerSplash').classList.add('hidden');
});

// ✅ Attach click
board.addEventListener('click', boardLogic);

// ✅ Restart Logic
const Restart = document.getElementById("restartButton");
Restart.addEventListener('click', () => {
  turn = "O";
  total_turn = 0;
  tictactoe = new Array(9).fill("E");

  const cell = document.getElementsByClassName('cell');
  Array.from(cell).forEach(element => {
    element.innerHTML = "";
    element.classList.remove("win");
  });

  document.getElementById('winningMessage').innerText = "";
  document.getElementById('winnerSplash').classList.add('hidden');

  board.addEventListener('click', boardLogic);
});
