class Monster{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.obj = document.createElement("a-entity");
    let monster = document.createElement("a-box");
    monster.setAttribute("src","monster.png");
    monster.setAttribute("position",{x:x,y:y,z:z});

    this.obj.append(monster)
    scene.append(this.obj);
    
  }
}