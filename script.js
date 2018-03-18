'use strict';

const easyAI = document.querySelector('#easyAI');
const hardAI = document.querySelector('#hardAI');
const multiplayer = document.querySelector('#multiplayer');
const options = document.querySelector('#options');
const board = document.querySelector('#board');
const gameSpaces = document.querySelectorAll('.space');

// Factory for player
const playerFactory = (name, symbol) => {
  const info = () => console.log(name, symbol);
  return { info, name, symbol };
};

const boardFactory = () => {
  let board = ['', '', '', '', '', '', '', '', ''];
  const update = (index, symbol) => board[index] = symbol;
  const won = () => {
    if (board[0] == board[1] && board[1] == board[2] && board[0].length != 0) {
      console.log('Rule 1');
      return true;
    } else if (board[3] == board[4] && board[4] == board[5] && board[3].length != 0) {
      console.log('Rule 2');
      return true;
    } else if (board[6] == board[7] && board[7] == board[8] && board[6].length != 0) {
      console.log('Rule 3');
      return true;
    } else if (board[0] == board[3] && board[3] == board[6] && board[0].length != 0) {
      console.log('Rule 4');
      return true;
    } else if (board[1] == board[4] && board[4] == board[7] && board[1].length != 0) {
      console.log('Rule 5');
      return true;
    } else if (board[2] == board[5] && board[5] == board[8] && board[2].length != 0) {
      console.log('Rule 6');
      return true;
    } else if (board[0] == board[4] && board[4] == board[8] && board[0].length != 0) {
      console.log('Rule 7');
      return true;
    }else if (board[2] == board[4] && board[4] == board[6] && board[2].length != 0) {
      console.log('Rule 8');
      return true;
    } else {
      return false;
    }
  };

  return { board, update, won };
};

// Module for game
const game = (() => {
  let player1 = undefined;
  let player2 = undefined;
  let currentPlayer = undefined;
  let board = undefined;
  let end = false;

  // Factory for board

  const start = (p1, p2) => {
    player1 = p1;
    player2 = p2;
    currentPlayer = player1;
    board = boardFactory();
    display();

  };

  const pick = (id) => {
    if (!end && board.board[id - 1] == '') {
      board.update(id - 1, currentPlayer.symbol);
      display();
      switchTurn();
    }
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

      if (board.won()) {
        console.log('Won: ' + currentPlayer.name);
        end = true;
      }
    };

  return { start, pick };
})();

multiplayer.addEventListener('click', function () {
  options.classList.add('hidden');
  board.classList.remove('hidden');

  const player1 = playerFactory('Player 1', 'X');
  const player2 = playerFactory('Player 2', 'O');
  game.start(player1, player2);
});

// Gets the ID of the gameboard space that the user has clicked.
gameSpaces.forEach(function (item, index) {
  item.addEventListener('click', function () {
    game.pick(item.id);
  });
});
