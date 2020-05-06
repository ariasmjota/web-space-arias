import p5 from 'p5';

const createSketch = (elem) => {
  var sketch = new p5(function (app) {

    var tam = 0;
    var col1 = '#000';
    var aritos = 0;
    var rotation = 0;


    app.setup = function () {
      //Create canvas 3d
      const canvas = app.createCanvas(1250, 300, app.WEBGL);
      //Material render del 3d
      app.normalMaterial();
      canvas.parent(elem);


    }

    app.draw = function () {
      app.clear();

      //Light control vars
      let locX = app.mouseX - app.height / 2;
      let locY = app.mouseY - app.width / 2;

      //Control orbit
      app.orbitControl(1, 1, 0);

      //function lights
      app.ambientLight(60, 60, 60);
      app.pointLight(250, 250, 250, locX, locY, 100);

      //Control ellipsoid 
      app.push();
      app.fill(col1);
      app.ellipsoid(tam, tam, tam);
      //Control Orbit
      app.rotateY(0.5);
      app.rotateX(0.5);
      app.pop();

     
      app.push();

      app.rotateX(app.frameCount * rotation);
      app.rotateY(app.frameCount * rotation);
    
      for (let i = 0; i < aritos; i++) {
        // primer tam que tan lejos estan todos del centro
        // el segundo tam coloca la distancia entre ellos
        app.torus(tam + 20 * (i), tam / (i + 10));
      }
      
      app.pop();



    }

    app.setTam = function (tamElip) {
      tam = tamElip;
      console.log('tamaño bolita' + tam);
    }

    app.setCol = function (c1) {
      col1 = c1;
    }
    app.setAros = function (aro) {
      aritos = aro;
      console.log('tamaño arito' + aritos);
    }
    app.setOrbit = function (orbit) {
      rotation = orbit;
     
    }

  });

  return sketch;
}

export default createSketch;