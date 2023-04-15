const flock = [];

let alignSlider, cohesionSlider, separationSlider;
let population;

let kepik
let pohon

function preload(){
  kepik = loadImage("kepik.png")
  pohon = loadImage("pohon.jpg")  
}

function setup(){
  createCanvas(800, 400);
  //createSlider(min, max, nilai_skrg, jarak antar nilai)
  alignSlider = createSlider(0,5,1,0.1);
  cohesionSlider = createSlider(0,5,1,0.1);
  separationSlider = createSlider(0,5,1,0.1);
  
  //menambahkan jumlah populasi
  p = createInput(10)
  p.position(2, 25)
  p.changed(population)
  
  population ();
  
  function population(){
    pop = (p.value())
    for (let i=0; i<pop;i++){
      flock.push(new Boid());
    }
  }
}

function draw(){
  image(pohon, 0, 0, 800, 400)
  fill("white")
  stroke(1)
  text("Masukkan Jumlah Populasi Yang Ingin Ditambahkan", 2, 15)
  text("AlignSlider", 2, 395)
  text("CohesionSlider", 140, 395)
  text("SeparationSlider", 270, 395)  
  
  
  for (let boid of flock){
    
    fill("#008B8B6")
    rect(600, 0, 200, 500);
    
    fill("white")
    stroke(1)
    text("TUGAS MATA KULIAH", 642, 30)
    text("VISUAL STUDIO CODE", 640, 50)
    text("SIMULASI FLOCKING", 645, 80)
    
    text("Nama : Rani Jesica Turnip", 645, 150)
    text("NIM    : 119160093", 645, 180)
    text("Prodi  : Matematika", 645, 210)
    boid.edges();
    boid.flock(flock)
    boid.update();
    boid.show();
  }
}