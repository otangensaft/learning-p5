let cube_displacement_x

function setup(){
  createCanvas(windowWidth, 800, WEBGL)
  cube_displacement_x = -windowWidth/2
  
}

function draw(){
  background(100)


  // pop()
  // fill(50)
  // push()
  // translate(cube_displacement_x, 0)

  // cube_displacement_x += 2
  // if(cube_displacement_x > windowWidth/2){
  //   cube_displacement_x = -windowWidth/2
  // }
  // box(100)


  // pop()
  // fill(25,46,48)
  // push()
  // translate(cube_displacement_x, 120)

  // cube_displacement_x += 2
  // if(cube_displacement_x > windowWidth/2){
  //   cube_displacement_x = -windowWidth/2
  // }
  // box(50)



  // translate(-80, 175)
  // rotateY(1.25)
  // rotateX(-0.9)

  pop()
  ambientLight(255)
  stroke('rgba(0,0,0,0.002)')
  // noStroke()
  fill('#3644E4')
  angleMode(DEGREES)
  rotate(23.4)
  rotateY(frameCount/6);
  sphere(128)

}