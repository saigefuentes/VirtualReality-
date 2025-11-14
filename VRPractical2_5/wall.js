class Wall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.obj = document.createElement("a-entity");
    let wall = document.createElement("a-box");
    wall.setAttribute("src","wall.png");
    wall.setAttribute("repeat","0.5 2");
    wall.setAttribute("scale","4, 10, 4")
    wall.setAttribute("position",{x:x,y:y,z:z});
    let baseboard = document.createElement("a-box");
    baseboard.setAttribute("scale","4.1, 0.2, 4.1");
    baseboard.setAttribute("position",{x:x,y:y-4.9,z:z});
    this.obj.append(wall)
    this.obj.append(baseboard)
    scene.append(this.obj);
    
  }
}