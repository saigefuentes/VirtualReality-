class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.01 + Math.random() * 0.02;
        this.obj = document.createElement("a-entity");

            let body = document.createElement("a-cylinder");
            body.setAttribute("color","rgba(211, 211, 211, 1)");
            body.setAttribute("radius","1");
            body.setAttribute("height","10");
            body.setAttribute("position","0 0 0");
            this.obj.append( body );
            
            let tip = document.createElement("a-cone");
            tip.setAttribute("color","rgba(211, 211, 211, 1)");
            tip.setAttribute("radius-bottom","1");
            tip.setAttribute("radius-top","0");
            tip.setAttribute("height","7");
            tip.setAttribute("position","0 7 0");
            this.obj.append( tip );
            
            let cross = document.createElement("a-sphere");
            cross.setAttribute("color", "blue");
            cross.setAttribute("position","0 2 0");
            cross.setAttribute("scale","0.5 2 0");
            cross.setAttribute("radius","3");
            this.obj.append(cross);

            let cross2 = document.createElement("a-sphere");
            cross2.setAttribute("color", "blue");
            cross2.setAttribute("position","0 2 0");
            cross2.setAttribute("scale","0 2 0.5");
            cross2.setAttribute("radius","3");
            cross2.setAttribute("rotation","0 45 0");
            this.obj.append(cross);

            let layer = document.createElement("a-cylinder");
            layer.setAttribute("color", "white");
            layer.setAttribute("position","0 3 0");
            layer.setAttribute("radius","1.02");
            layer.setAttribute("height","5");
            this.obj.append( layer );

            let layer2 = document.createElement("a-cylinder");
            layer2.setAttribute("color", "rgba(127, 136, 138, 1)");
            layer2.setAttribute("position","0 -3 0");
            layer2.setAttribute("radius","1.5");
            layer2.setAttribute("height","7");
            this.obj.append( layer2 );

            let layer3 = document.createElement("a-cylinder");
            layer3.setAttribute("color", "rgba(0, 0, 0, 1)");
            layer3.setAttribute("position","1 -3 1");
            layer3.setAttribute("radius","0.5");
            layer3.setAttribute("height","4");
            this.obj.append( layer3 );

            let layer4 = document.createElement("a-cylinder");
            layer4.setAttribute("color", "rgba(127, 136, 138, 1)");
            layer4.setAttribute("position","-1 -3 -1");
            layer4.setAttribute("radius","0.5");
            layer4.setAttribute("height","4");
            this.obj.append( layer4 );

            let layer5 = document.createElement("a-cylinder");
            layer5.setAttribute("color", "rgba(24, 60, 114, 1)");
            layer5.setAttribute("position","-1 -3 1");
            layer5.setAttribute("radius","0.5");
            layer5.setAttribute("height","4");
            this.obj.append( layer5 );

            let layer6 = document.createElement("a-cylinder");
            layer6.setAttribute("color", "rgba(13, 45, 112, 0.53)");
            layer6.setAttribute("position","1 -3 -1");
            layer6.setAttribute("radius","0.5");
            layer6.setAttribute("height","4");
            this.obj.append( layer6 );

            let layer7 = document.createElement("a-cylinder");
            layer7.setAttribute("color", "blue");
            layer7.setAttribute("position","0 -5 0");
            layer7.setAttribute("radius","0.5");
            layer7.setAttribute("height","4");
            this.obj.append( layer7 );

            let tip2 = document.createElement("a-cone");
            tip2.setAttribute("color","white");
            tip2.setAttribute("radius-bottom","0.5");
            tip2.setAttribute("radius-top","0");
            tip2.setAttribute("position","1 -0.5 1");
            this.obj.append( tip2 );

            let tip3 = document.createElement("a-cone");
            tip3.setAttribute("color","white");
            tip3.setAttribute("radius-bottom","0.5");
            tip3.setAttribute("radius-top","0");
            tip3.setAttribute("position","1 -0.5 -1");
            this.obj.append( tip3 );
        
            let tip4 = document.createElement("a-cone");
            tip4.setAttribute("color","white");
            tip4.setAttribute("radius-bottom","0.5");
            tip4.setAttribute("radius-top","0");
            tip4.setAttribute("position","-1 -0.5 -1");
            this.obj.append( tip4 );

            let tip5 = document.createElement("a-cone");
            tip5.setAttribute("color","black");
            tip5.setAttribute("radius-bottom","0.5");
            tip5.setAttribute("radius-top","0");
            tip5.setAttribute("position","-1 -0.5 1");
            this.obj.append( tip5 );

            let dividor = document.createElement("a-cone");
            dividor.setAttribute("color","black");
            dividor.setAttribute("radius-bottom","1.5");
            dividor.setAttribute("radius-top","0.35");
            dividor.setAttribute("position","0 1 0");
            this.obj.append( dividor );

            let dividor2 = document.createElement("a-cone");
            dividor2.setAttribute("color","black");
            dividor2.setAttribute("radius-bottom","1");
            dividor2.setAttribute("radius-top","0.35");
            dividor2.setAttribute("position","0 6 0");
            this.obj.append( dividor2 );

            let jet = document.createElement("a-cone");
            jet.setAttribute("color","gray");
            jet.setAttribute("radius-bottom","1");
            jet.setAttribute("radius-top","0");
            jet.setAttribute("position","0 -7 0");
            this.obj.append( jet );

            let fire = document.createElement("a-cone");
            fire.setAttribute("color","blue");
            fire.setAttribute("radius-bottom","0.8");
            fire.setAttribute("radius-top","0");
            fire.setAttribute("position","0 -8.5 0");
            fire.setAttribute("opacity","0.7")
            fire.setAttribute("rotation","-180 0 0");
            this.obj.append( fire );

            let fire2 = document.createElement("a-sphere");
            fire2.setAttribute("color", "blue");
            fire2.setAttribute("position","0 -8 0");
            fire2.setAttribute("radius","0.8");
            fire2.setAttribute("opacity","0.7");
            this.obj.append( fire2 );

            let fire3 = document.createElement("a-cone");
            fire3.setAttribute("color","white");
            fire3.setAttribute("radius-bottom","0.5");
            fire3.setAttribute("radius-top","0");
            fire3.setAttribute("position","1 -6.5 1");
            fire3.setAttribute("opacity","0.7");
            fire3.setAttribute("rotation","-180 0 0");
            fire3.setAttribute("height","4");
            this.obj.append( fire3 );

            let fire4 = document.createElement("a-cone");
            fire4.setAttribute("color","white");
            fire4.setAttribute("radius-bottom","0.5");
            fire4.setAttribute("radius-top","0");
            fire4.setAttribute("position","-1 -6.5 -1");
            fire4.setAttribute("opacity","0.7");
            fire4.setAttribute("rotation","-180 0 0");
            fire4.setAttribute("height","4");
            this.obj.append( fire4 );

            let fire5 = document.createElement("a-cone");
            fire5.setAttribute("color","blue");
            fire5.setAttribute("radius-bottom","0.5");
            fire5.setAttribute("radius-top","0");
            fire5.setAttribute("position","1 -6.5 -1");
            fire5.setAttribute("opacity","0.7");
            fire5.setAttribute("rotation","-180 0 0");
            fire5.setAttribute("height","4");
            this.obj.append( fire5 );

            let fire6 = document.createElement("a-cone");
            fire6.setAttribute("color","blue");
            fire6.setAttribute("radius-bottom","0.5");
            fire6.setAttribute("radius-top","0");
            fire6.setAttribute("position","-1 -6.5 1");
            fire6.setAttribute("opacity","0.7");
            fire6.setAttribute("rotation","-180 0 0");
            fire6.setAttribute("height","4");
            this.obj.append( fire6 );
   
            this.obj.setAttribute("position",{x:x, y:y, z:z});
            scene.append( this.obj );
    }
    fly(){
        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }
}