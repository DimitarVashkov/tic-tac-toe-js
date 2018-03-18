// Create factories for players

// Create modules for board and game

// Separate render and game logic
'use strict';

const easyAI = document.querySelector('#easyAI');
const hardAI = document.querySelector('#hardAI');
const multiplayer = document.querySelector('#multiplayer');
const options = document.querySelector('#options');


// Factory for player
const playerFactory = (name, symbol) => {
  const info = () => console.log(name, symbol);
  return { info, name, symbol };
};

// Factory for board
const boardFactory = () => {
  let board = ['', '', '', '', '', '', '', '', ''];
  const update = (index, symbol) => board[index] = symbol;
  return { board, update };
};

easyAI.addEventListener('click', function () {
  options.classList.add('hidden');
});
