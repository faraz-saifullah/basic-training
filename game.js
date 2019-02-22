function initialize() {
  let arr = new Array(9)
  for(let i = 0; i < 9; i++)
  {
   arr[i] = new Array();
  }
  for(let i=0;i<15;i++)
  {
    let x = Math.floor((Math.random() * 8) + 0);
    let y = Math.floor((Math.random() * 8) + 0);
    while(arr[x][y] != undefined){
      x = Math.floor((Math.random() * 8) + 0);
      y = Math.floor((Math.random() * 8) + 0);
    }
    arr[x][y] = Math.floor((Math.random() * 9) + 1);
  }
  console.log(arr);
}