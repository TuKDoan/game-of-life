let grid;
let cols
let rows;
let reso = 40;
let canvx = 1000;
let canvy = 1000;

function make2DArray(cols, rows){
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas (canvx, canvy);
  cols = width / reso;
  rows = width / reso;

  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * reso;
      let y = j * reso;
      if (grid[i][j] == 1) {
        fill(255);
        rect(x, y, reso-1, reso-1);
      }
    }
  }

  let next = make2DArray(cols, rows);

  // Compute next generation based on grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];

      // Edges
      if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1){
        next[i][j] = state;
      } else {

      // Count the number of live neighbors
      let sum = 0;
      let neighbors = countNeighbors(grid, i, j)

      // Rules for game.
      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)){
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }
}

  grid = next;

}

function countNeighbors(grid, x, y){
  let sum = 0;
  for (let i = -1; i < 2; i ++){
    for (let j = -1; j < 2; j++){
      sum += grid[x + i][y + j];
    }
  }

  sum -= grid[x][y];
  return sum;

}
