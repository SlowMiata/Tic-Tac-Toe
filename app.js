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

  const resetBoard =() =>{
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
          board[i][j] = i * columns + (j + 1);
        }
      }
  };

  return { getBoard, printBoard, selectBox, resetBoard };
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


    const checkWinner = () =>{

        const currentBoard = board.getBoard();

        let PlayerOneCount = 0;
        let PlayerTwoCount = 0;
        



        //check row
        //check if the row is all 'X' or all 'O'

        for(let i = 0; i < currentBoard.length; i++){
            for(let j = 0; j< 3; j++){

                let currentSpot = currentBoard[i][j]
                
                if(currentSpot === "X"){
                    PlayerOneCount++;
                    }
                else if(currentSpot === "O"){
                    PlayerTwoCount++;
                }
            }
            if (PlayerOneCount === 3 | PlayerTwoCount === 3){

                if (PlayerOneCount === 3){
                    console.log("Player 1 wins!")
                }
                else{
                    console.log("Player 2 wins!")
                }
                
                return true
            }
            else {
                PlayerOneCount = 0;
                PlayerTwoCount = 0;
            }
        };

        //check columns

        for(let i = 0; i < currentBoard.length; i++){
            for(let j = 0; j< 3; j++){

                let currentSpot = currentBoard[j][i]

                if(currentSpot === "X"){
                    PlayerOneCount++;
                    }
                else if(currentSpot === "O"){
                    PlayerTwoCount++;
                }
            }
            if (PlayerOneCount === 3 || PlayerTwoCount === 3){

                if (PlayerOneCount === 3){
                    console.log("Player 1 wins!")
                }
                else{
                    console.log("Player 2 wins!")
                }
                
                return true
            }
            else {
                PlayerOneCount = 0;
                PlayerTwoCount = 0;
            }
        };

        //check diagonal 

        //[00, 11, 22]
        // [20, 11, 02]


        //check diagonal going right
        for (let i = 0; i < 3; i++) {
            let currentSpot = currentBoard[i][i];
            
            if(currentSpot === "X"){
                PlayerOneCount++;
                }
            else if(currentSpot === "O"){
                PlayerTwoCount++;
            }
        };
        if (PlayerOneCount === 3 || PlayerTwoCount === 3){

            if (PlayerOneCount === 3){
                console.log("Player 1 wins!")
            }
            else{
                console.log("Player 2 wins!")
            }
            
            return true
        }
        else {
            PlayerOneCount = 0;
            PlayerTwoCount = 0;
        };

        //check diagonal going left
        let count = 2;
        for (let i = 0; i < 3; i++) {
            
            let currentSpot = currentBoard[i][count];
            console.log(currentSpot)
            if(currentSpot === "X"){
                PlayerOneCount++;
                }
            else if(currentSpot === "O"){
                PlayerTwoCount++;
            }
            count--;
        }
        if (PlayerOneCount === 3 || PlayerTwoCount === 3){

            if (PlayerOneCount === 3){
                console.log("Player 1 wins!")
            }
            else{
                console.log("Player 2 wins!")
            }
            
            return true
        }
        else {
            PlayerOneCount = 0;
            PlayerTwoCount = 0;
        }


        return false;
    };


    if (checkWinner()) {

        //end game
        console.log("game over!")
        board.printBoard();
        board.resetBoard()

    }
    else{
        printNewRound();
    }

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

