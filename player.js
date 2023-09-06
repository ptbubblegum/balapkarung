class Player {
  constructor(warna, y) {
    this.warna = color(warna)
    this.d = 40
    this.pos = createVector(50, y)
    this.speed = 2
    this.tombolkiri = false
    this.tombolkanan = false
  }
  
  tampilkan() {
    fill(this.warna)
    circle(this.pos.x, this.pos.y, this.d)
  }
  
  maju() {
    if(this.tombolkiri) this.pos.x += this.speed
    if(this.tombolkanan) this.pos.x += this.speed
  }
}