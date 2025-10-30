class UFO{
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = -(0.02 + Math.random() * 0.03); // random falling speed
        this.obj = document.createElement("a-entity");

            // Base (saucer)
            let base = document.createElement("a-cylinder");
            base.setAttribute("color", "black");
            base.setAttribute("radius", "3");
            base.setAttribute("height", "0.5");
            base.setAttribute("position", "0 0 0");
            this.obj.append(base);

            // Dome (glass top)
            let dome = document.createElement("a-sphere");
            dome.setAttribute("color", "rgba(34, 185, 79, 1)");
            dome.setAttribute("radius", "2");
            dome.setAttribute("position", "0 1 0");
            dome.setAttribute("opacity", "0.6");
            this.obj.append(dome);

            // Light (glow under the UFO)
            let light = document.createElement("a-cylinder");
            light.setAttribute("color", "yellow");
            light.setAttribute("radius", "1.5");
            light.setAttribute("height", "0.2");
            light.setAttribute("position", "0 -0.4 0");
            light.setAttribute("opacity", "0.8");
            this.obj.append(light);

            this.obj.setAttribute("position", {x:x, y:y, z:z});
            scene.append(this.obj);
    }

    invade() {
        // UFO falls until it reaches ground level
        if (this.y > 0) {
            this.y += this.dy;
            if (this.y < 0) this.y = 0; // stop at ground
            this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        }
    }
}