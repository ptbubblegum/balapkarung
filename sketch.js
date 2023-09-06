let player1, player2;

function setup() {
  createCanvas(600, 400);
  
  player1 = new Player('red', 100)
  player2 = new Player('blue', 300)
}

function draw() {
  background(220, 200, 100);
  
  player1.tampilkan()
  player2.tampilkan()
  
  player1.maju()
  player2.maju()
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    player1.tombolkiri = true
  }
  else if(keyCode === RIGHT_ARROW) {
    player2.tombolkanan = true
  }
}

function keyReleased() {
  player1.tombolkiri = false
  player2.tombolkanan = false
}
