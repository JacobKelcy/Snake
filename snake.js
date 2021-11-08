const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

//Creates a default grid sized 16x16
function defaultGrid() {
  //makeRows calls the make rows function 16 times creating the 16 divs
  makeRows(16);

  //makeColumns calls the make columns function
  //for every makeRows div that we have, a div will be created inside that rows div
  //that created div has class name of cell. that class's css border is what
  //brings each cell to life in the browser.
}

//Takes rows, columns input and makes a grid
function makeRows(rowNum) {
  //rows
  //if Idx is < (16) increment up 1.
  for (r = 0; r < rowNum; r++) {
    let row = document.createElement("div");

    for (j = 0; j < 16; j++) {
      let newCell = document.createElement("div");
      newCell.setAttribute("id", `cellId-${r},${j}`);
      row.appendChild(newCell).className = "cell";
    }
    //created var containing a created a single div
    container.appendChild(row).className = "gridRow";
    //we append that single div into the container giving it a class gridRow
    // console.log(rowNum);
  }
}

let snake = {
  //this row is 144 - 159
  body: [
    [9, 0],
    [9, 1],
    [9, 2],
    [9, 3],
    [9, 4],
    [9, 5],
    [9, 6],
    [9, 7],
  ],
};

let gameState = {
  apple: [11, 8],
  snake: {
    body: [
      [9, 4],
      [9, 5],
      [9, 6],
      [9, 7],
    ],
    nextDirection: [1, 0],
  },
};

let currentDirection = "";

document.addEventListener("keydown", (e) => {
  currentDirection = e.key;
});

// movement
// w: -[0]
// s: +[0]
// a: -[1]
// d: +[1]

// let currentRow = head[0];
// let currentCol = head[1]; // if currentCol === -1 you lose
// let tail = snake.body[0];
// let nextCol = currentCol - 1; // bounds: -1, 16

function paintSnake() {
  snake.body.forEach((snakeCells) => {
      if {
    console.log(row)
  }
    let row = snakeCells[0];
    let col = snakeCells[1];
    // console.log(snakeCells[0]);
    // console.log(row);
    // console.log(col);
    let domScale = document.getElementById(`cellId-${row},${col}`);
    domScale.classList.add("red");
  });
}

function moveSnake() {
  if (currentDirection === "w" && currentDirection !== "s") {
    let head = snake.body[snake.body.length - 1];
    let tail = snake.body[0];
    let domTail = document.getElementById(`cellId-${tail[0]},${tail[1]}`);
    domTail.classList.remove("red");
    let nextCol = head[0] - 1;
    let currentCol = head[1];
    let nextSpace = [nextCol, currentCol];
    snake.body.push(nextSpace);
    snake.body.shift();
    paintSnake();
  } else if (currentDirection === "a" && currentDirection !== "d") {
    let head = snake.body[snake.body.length - 1];
    let tail = snake.body[0];
    let domTail = document.getElementById(`cellId-${tail}`);
    domTail.classList.remove("red");
    let nextCol = head[0];
    let currentCol = head[0];
    let nextRow = head[1] - 1;
    let nextSpace = [currentCol, nextRow];
    snake.body.push(nextSpace);
    snake.body.shift();

    paintSnake();
  } else if (currentDirection === "s" && currentDirection !== "w") {
    let head = snake.body[snake.body.length - 1];
    let tail = snake.body[0];
    let domTail = document.getElementById(`cellId-${tail[0]},${tail[1]}`);
    domTail.classList.remove("red");
    let nextCol = head[0] + 1;
    let currentCol = head[1];
    console.log(currentCol);
    let nextSpace = [nextCol, currentCol];
    snake.body.push(nextSpace);
    snake.body.shift();
    paintSnake();
  } else if (currentDirection === "d" && currentDirection !== "a") {
    let head = snake.body[snake.body.length - 1];
    let tail = snake.body[0];
    let domTail = document.getElementById(`cellId-${tail}`);
    domTail.classList.remove("red");
    let nextCol = head[0];
    let currentCol = head[0];
    let nextRow = head[1] + 1;
    let nextSpace = [currentCol, nextRow];
    snake.body.push(nextSpace);
    snake.body.shift();
    paintSnake();
  }
}

defaultGrid();

paintSnake();

setInterval(moveSnake, 500);

// let endGame = clearInterval(moveSnake());
// let moveSnakefunc = moveSnake();
// let funcNotActive = false;

function gameOver() {
  let head = snake.body[snake.body.length - 1];
  let currentCol = head[1];
  let row = snakeCells[0];

  // for (let i = 0; i < bodyVal; i++) {
  //   if (snake.body[i] === head) {
  //     continue;
  //   } else if (head !== snake.body) {
  //     // clearInterval(moveSnake());
  //     setInterval(moveSnake, 500);
  //     console.log("you lose");
  //     console.log(bodyVal);
  //   }
  //   // console.log(snake.body[i]);
  //   console.log(head);
  //   // console.log(bodyVal);
  // }
  console.log(currentCol);
}
// console.log(head);

gameOver();

// console.log(snake.body[1], snake.body[2]);
//if key w is pressed it will i-- 1st ele of body every 500ms.

//  console.log(snake.body)

// let snakeStart = document.getElementById("cellId-9,4").classList.add("red");

//  console.log(rows);

// console.log(Object.values(snake));

// console.log(cells)
// console.log(rows);
// console.log(cells[151])
//for each row it creates 16 squares

//the column func takes the row and duplicates 16 times
// console.log(cellNum);

//   function grabCellsIdx(){

//   }

//  grabCellsIdx()

// console.log(cells.length);

// buildInitialState();

// // // render
// // function renderState() {

// // }

// // // maybe a dozen or so helper functions for tiny pieces of the interface

// // // listeners
// // function onBoardClick() {
// //   // update state, maybe with another dozen or so helper functions...

// //   renderState() // show the user the new state
// // }
// // const board = document.getElementById('board');
// // board.addEventListener('click', onBoardClick); // etc
