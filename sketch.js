
let arvores = [];
let contador = 0;

function setup() {
  createCanvas(800, 600);
  textSize(20);
}

function draw() {
  background(100, 200, 255); // Céu azul claro

  // Sol ou lua
  if (millis() % 20000 < 10000) {
    fill(255, 204, 0); // Sol
    ellipse(700, 100, 80, 80);
  } else {
    fill(230);
    ellipse(700, 100, 60, 60); // Lua
  }

  // Grama
  fill(50, 180, 50);
  rect(0, height - 100, width, 100);

  // Árvores
  for (let arvore of arvores) {
    arvore.crescer();
    arvore.mostrar();
  }

  // Contador
  fill(0);
  text("Árvores plantadas: " + contador, 20, 30);
}

function mousePressed() {
  if (mouseY > height - 100) {
    arvores.push(new Arvore(mouseX, mouseY));
    contador++;
  }
}

class Arvore {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.altura = 10;
    this.maxAltura = random(50, 150);
  }

  crescer() {
    if (this.altura < this.maxAltura) {
      this.altura += 0.2;
    }
  }

  mostrar() {
    stroke(100, 60, 20);
    strokeWeight(10);
    line(this.x, this.y, this.x, this.y - this.altura);

    noStroke();
    fill(30, 150, 50);
    ellipse(this.x, this.y - this.altura, 50, 50);
  }
}






