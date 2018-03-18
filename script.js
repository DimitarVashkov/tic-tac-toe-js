'use strict';

const easyAI = document.querySelector('#easyAI');
const hardAI = document.querySelector('#hardAI');
const multiplayer = document.querySelector('#multiplayer');
const options = document.querySelector('#options');
const gameSpaces = document.querySelectorAll('.space');

// Factory for player
const playerFactory = (name, symbol) => {
  const info = () => console.log(name, symbol);
  return { info, name, symbol };
};

const boardFactory = () => {
  let board = ['', '', '', '', '', '', '', '', ''];
  const update = (index, symbol) => board[index] = symbol;
  return { board, update };
};

// Module for game
const game = (() => {
  const player1 = undefined;
  const player2 = undefined;
  let currentPlayer = undefined;
  let board = undefined;

  // Factory for board


  const start = () => {
    currentPlayer = player1;
    board = boardFactory();
    display();

  };

  const switchTurn = () => {
    if (currentPlayer == player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  };

  const display = () => {
    for (let i = 0; i < 9; i++) {
      let place = document.getElementById(i + 1);
      place.innerText = board.board[i];
    }
  };

  return { player1, player2, start };
})();

// easyAI.addEventListener('click', function () {
//   options.classList.add('hidden');
// });

// Gets the ID of the gameboard space that the user has clicked.
gameSpaces.forEach(function (item, index) {
  item.addEventListener('click', function () {
    console.log(item.id);
  });
});

game.start();
