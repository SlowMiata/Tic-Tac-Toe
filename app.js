//DOM element

//Functions

//game board object

function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i][j] = i * columns + (j + 1);
    }
  }

  const selectBox = (number, player) => {
    board.forEach((row) => {
      for (let i = 0; i < rows; i++) {
        if (row[i] === number) {
          row[i] = player;
        }
      }
    });
    //printBoard();
  };

  const getBoard = () => board;

  const printBoard = () => {
    for (let i = 0; i < rows; i++) {
      console.log(board[i]);
    }
  };

  return { getBoard, printBoard, selectBox };
}

function GameController(
  playerOneName = "Player 1",
  playerTwoName = "Player Two"
) {
  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      token: "X",
    },
    {
      name: playerTwoName,
      token: "O",
    },
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  const playRound = (number) => {
    console.log(`${getActivePlayer().name}'s picks box number ${number}`);

    board.selectBox(number, getActivePlayer().token);

    switchPlayerTurn();
    printNewRound();
  };
  printNewRound();

  return {
    playRound,
    getActivePlayer,
  };
}

const game = GameController();

/*
Focus on a console version of the game first
*/

