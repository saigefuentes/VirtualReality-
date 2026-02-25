class Snowman {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = rnd(0.03, 0.08);
    this.dz = rnd(0.03, 0.08);
    this.a = 0;
    this.da = 1;
    this.die = false;
    this.checkHit = false;

    this.isTarget = true;
    this.hitRadius = 6.5;
    this.isHit = false;

    // root entity
    this.obj = document.createElement("a-entity");

    // THICK red frame as a cylinder "ring"
    let frame = document.createElement("a-cylinder");
    frame.setAttribute("position", { x: 0, y: 4, z: 0.6 });
    frame.setAttribute("radius", 1.3);       // outer radius of frame
    frame.setAttribute("height", 0.3);       // thickness (bigger = thicker)
    frame.setAttribute("theta-length", 360); // full circle
    frame.setAttribute("rotation", { x: 90, y: 0, z: 0 }); // face forward
    frame.setAttribute("color", "red");
    this.obj.append(frame);

    // outer red disk (front face)
    let outer = document.createElement("a-cylinder");
    outer.setAttribute("position", { x: 0, y: 4, z: 0.62 });
    outer.setAttribute("radius", 0.8);
    outer.setAttribute("height", 0.3);       // thickness of outer circle
    outer.setAttribute("rotation", { x: 90, y: 0, z: 0 });
    outer.setAttribute("color", "red");
    this.obj.append(outer);

    // white disk
    let innerWhite = document.createElement("a-cylinder");
    innerWhite.setAttribute("position", { x: 0, y: 4, z: 0.63 });
    innerWhite.setAttribute("radius", 0.5);
    innerWhite.setAttribute("height", 0.3);  // thickness of white ring
    innerWhite.setAttribute("rotation", { x: 90, y: 0, z: 0 });
    innerWhite.setAttribute("color", "white");
    this.obj.append(innerWhite);

    // inner red disk
    let innerRed = document.createElement("a-cylinder");
    innerRed.setAttribute("position", { x: 0, y: 4, z: 0.64 });
    innerRed.setAttribute("radius", 0.25);
    innerRed.setAttribute("height", 0.3);    // thickness of center
    innerRed.setAttribute("rotation", { x: 90, y: 0, z: 0 });
    innerRed.setAttribute("color", "red");
    this.obj.append(innerRed);

    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
  }

  walk(){
    this.z += this.dz;
    this.x += this.dx;
  if (this.x > 100 || this.x < -100){
    this.dx = -this.dx;
  }
  if (this.z > 100 || this.z < -60){
    this.dz = -this.dz;
  }

    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    if (this.die){
      this.a += this.da;
      this.y -= 0.05; 
      this.obj.setAttribute("rotation", {x:0, y:this.a, z:0});
      this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
      this.obj.setAttribute("visible", false);
  }
}
}
