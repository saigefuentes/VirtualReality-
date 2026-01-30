class Bullet{
  constructor() {
    this.obj = document.createElement("a-entity");
    let body = document.createElement("a-sphere");
    body.setAttribute("radius",0.1);
    body.setAttribute("scale", "1 1 2");
    body.setAttribute("color", "#555555");  
    body.setAttribute("roughness", 1);         
    
    let pos = camera.object3D.position;
    this.obj.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
    this.obj.append(body);
    scene.append(this.obj);

    // same direction logic as your bullet
    let theta = camera.object3D.rotation.y + Math.PI;
    let phi = camera.object3D.rotation.x;
    let v = 0.1;
    let v_xz = v * Math.cos(phi);
    this.dz = v_xz * Math.cos(theta);
    this.dx = v_xz * Math.sin(theta);
    this.dy = v * Math.sin(phi);
  }

  fire() {
    // same motion as bullet, just different visuals
    this.obj.object3D.position.x += this.dx * 6;
    this.obj.object3D.position.y += this.dy * 6;
    this.obj.object3D.position.z += this.dz * 6;
  }
}