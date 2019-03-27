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
}
