// ammobox.js — Rock replacement version
class AmmoBox {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.obj = document.createElement("a-entity");

    // Main rock body
    const rock = document.createElement("a-sphere");
    const randomScale = 0.2 + Math.random() * 0.4; // adds variation

    rock.setAttribute("radius", "1");
    rock.setAttribute("color", "grey"); 
    rock.setAttribute("scale", `${randomScale} ${randomScale * 0.7} ${randomScale}`);
    rock.setAttribute("roughness", "1");
    rock.setAttribute("metalness", "0.2");
    rock.setAttribute("position", "0 -1.8 0");
    rock.setAttribute("class", "clickable");

    // Position this rock in world space
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });

    // Optional: add a rock texture if you have an image like rocks.jpg
     rock.setAttribute("src", "rocks.jpg");

    // Simple click effect to collect this rock (ammo)
    rock.addEventListener("click", () => {
      ammo_count += 3;
      rock.setAttribute("visible", false);
    });

    this.obj.appendChild(rock);
    scene.appendChild(this.obj);
  }
}
