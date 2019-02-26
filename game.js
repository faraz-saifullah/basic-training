let h1 = document.getElementsByTagName('h1')[0];
let seconds = 0;
let minutes = 0;
let hours = 0;
let t;

function add() {
  seconds++;
  if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
          minutes = 0;
          hours++;
      }
  }
  h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
  timer();
}
function timer() {
  t = setTimeout(add, 1000);
}
function endGame(){
    clearTimeout(t);
}
function fadeIn(element) {
  var op = 0.1;
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      op += 0.01;
  }, 60);
}
function initialize() {
  document.getElementById('startButton').style.display = 'none';
  let board = document.getElementById('board');
  fadeIn(board);
  timer()
  let arr = new Array(9);
  for(let i = 0; i < 9; i++)
  {
   arr[i] = new Array();
  }
  for(let i=0;i<40;i++)
  {
    let x = Math.floor(Math.random() * 9);
    let y = Math.floor(Math.random() * 9);
    while(arr[x][y] != undefined){
      x = Math.floor(Math.random() * 9);
      y = Math.floor(Math.random() * 9);
    }
    let number = Math.floor(Math.random() * 9) + 1;
    while(!(checkRow(arr,number,x) && checkColumn(arr,number,y) && checkBlock(arr,number,x,y) )) {
      number = Math.floor(Math.random() * 9) + 1;
    }
    arr[x][y] = number;
    for(let k=0;k<9;k++) {
      for(let l=0;l<9;l++) {
        let x = k.toString();
        let y = l.toString();
        if(arr[k][l] != undefined) {
          document.getElementById(x+y).value = arr[k][l];
          document.getElementById(x+y).readOnly = true;
        }
      }
    }
  }
}
function checkRow(arr,number,x) {
  for(let i=x,j=0;j<9;j++) {
    if(arr[i][j] == number ) {
      return false;
    }
  }
  return true
}
function checkColumn(arr,number,y) {
  for(let i=0,j=y;i<9;i++) {
    if(arr[i][j] == number ) {
      return false;
    }
  }
  return true
}
function checkBlock(arr,number,x,y) {
  let upperX;
  let lowerX;
  let upperY;
  let lowerY;
  if(x < 3 && x > -1) {
    lowerX = 0;
    upperX = 2;
  }
  else if(x < 6 && x > 2) {
    lowerX = 3;
    upperX = 5;
  }
  else if(x < 9 && x > 5) {
    lowerX = 6;
    upperX = 8;
  }
  if(y < 3 && y > -1) {
    lowerY = 0;
    upperY = 2;
  }
  else if(y < 6 && y > 2) {
    lowerY = 3;
    upperY = 5;
  }
  else if(y < 9 && y > 5) {
    lowerY = 6;
    upperY = 8;
  }
  // console.log(lowerX,upperX,lowerY,upperY);
  for(let k = lowerX; k < upperX + 1;k++) {
    for(let l = lowerY; l < lowerY + 1;l++) {
      if(arr[k][l] == number)
      {
        return false;
      }
    }
  }
  return true;
}
function hint() {
  let arr = new Array(9);
  for(let i = 0; i < 9; i++) {
   arr[i] = new Array();
  }
  for(let i = 0; i < 9; i++) {
   for(let j = 0; j < 9 ; j++) {
    arr[i][j] = document.getElementById(i.toString()+j.toString()).value
   }
  }
  let x = Math.floor(Math.random() * 9);
  let y = Math.floor(Math.random() * 9);
  // while(arr[x][y] != undefined) {
  //   x = Math.floor(Math.random() * 9);
  //   y = Math.floor(Math.random() * 9);
  // }
  let number = Math.floor(Math.random() * 9) + 1;
  // while(!(checkRow(arr,number,x) && checkColumn(arr,number,y) && checkBlock(arr,number,x,y) )) {
  //   number = Math.floor(Math.random() * 9) + 1;
  // }
  arr[x][y] = number;
  document.getElementById(x.toString()+y.toString()).value = number;
  document.getElementById(x.toString()+y.toString()).readOnly = true;
  // document.getElementById(x.toString()+y.toString()).style.color = 'blue';
}