
//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
import { Point3D } from './point3D.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');

let cv: CvHLines;
let obj: Obj3D;
let ang: number=0;

function leerArchivo(e:any) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;
    mostrarContenido(contenido);
    obj = new Obj3D();
    if (obj.read(contenido)) {
      //sDir = sDir1;
      cv = new CvHLines(graphics, canvas);
      cv.setObj(obj);
      cv.paint();
    }
  };
  lector.readAsText(archivo);
}

function mostrarContenido(contenido:any) {
  var elemento = document.getElementById('contenido-archivo');
  //
  //readObject(new Input(contenido));
  elemento.innerHTML = contenido;
}

function vp(dTheta:number, dPhi:number, fRho:number):void{  // Viewpoint
  if (obj != undefined) {
    let obj: Obj3D = cv.getObj();
    if (!obj.vp(cv, dTheta, dPhi, fRho))
      alert('datos no validos');
  }
  else
    alert('aun no has leido un archivo');
}

function eyeDownFunc() {
  vp(0, 0.1, 1);
}

function eyeUpFunc() {
  vp(0, -0.1, 1);
}

function eyeLeftFunc() {
  vp(-0.1, 0, 1);
}

function eyeRightFunc() {
  vp(0.1, 0, 1);
}

function incrDistFunc() {
  vp(0, 0, 2);
}

function decrDistFunc() {
  vp(0, 0, 0.5);
}

function pza1DerFunc() {
  let af = 0.1;
 	
	Rota3D.initRotate( obj.w[900], obj.w[901], af*Math.PI/180);	
	
  for (let i = 1; i <= 32; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
  for (let i = 401; i <= 544; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
  for (let i = 902; i <= 913; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
}

function pza1IzqFunc() {
  let af = -0.1;
	Rota3D.initRotate( obj.w[900], obj.w[901], af*Math.PI/180);	
  for (let i = 1; i <= 32; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
  for (let i = 401; i <= 544; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
  for (let i = 902; i <= 913; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
}

  function Adelante(){
    var tr = -0.1 ;
    for(var i = 1; i<=32; i++){
      obj.w[i].x= obj.w[i].x+tr;
    }
    for(var i = 401; i<=544; i++){
      obj.w[i].x= obj.w[i].x+tr;
    }
    for(var i = 900; i<=913; i++){
      obj.w[i].x= obj.w[i].x+tr;
    }
    let af2 = -10;
    Rota3D.initRotate( obj.w[902], obj.w[903], af2*Math.PI/180);
    for (let i = 509; i <= 544; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	  }
    Rota3D.initRotate( obj.w[904], obj.w[905], af2*Math.PI/180);
    for (let i = 473; i <= 508; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	  }
    Rota3D.initRotate( obj.w[906], obj.w[907], af2*Math.PI/180);
    for (let i = 437; i <= 472; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	  }
    Rota3D.initRotate( obj.w[908], obj.w[909], af2*Math.PI/180);
    for (let i = 401; i <= 436; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	  }
    cv.setObj(obj);
    cv.paint();
  }
  function Reversa(){
    var tr = 0.1;
    for(var i = 1; i<=32; i++){
      obj.w[i].x= obj.w[i].x+tr;
    }
    for(var i = 401; i<=544; i++){
      obj.w[i].x= obj.w[i].x+tr;
    }
    for(var i = 900; i<=913; i++){
      obj.w[i].x= obj.w[i].x+tr;
    }
    let af2 = 10;
    Rota3D.initRotate( obj.w[902], obj.w[903], af2*Math.PI/180);
    for (let i = 509; i <= 544; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	  }
    Rota3D.initRotate( obj.w[904], obj.w[905], af2*Math.PI/180);
    for (let i = 473; i <= 508; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	  }
    Rota3D.initRotate( obj.w[906], obj.w[907], af2*Math.PI/180);
    for (let i = 437; i <= 472; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	  }
    Rota3D.initRotate( obj.w[908], obj.w[909], af2*Math.PI/180);
    for (let i = 401; i <= 436; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	  }
    cv.setObj(obj);
    cv.paint();
  }
  function Izquierda(){
    var tr = -0.0001 ;
    

    for(var i = 1; i<=32; i++){
      obj.w[i].y= obj.w[i].y+tr;
    }
    for(var i = 401; i<=544; i++){
      obj.w[i].y= obj.w[i].y+tr;
    }
    for(var i = 900; i<=913; i++){
      obj.w[i].y= obj.w[i].y+tr;
    }
    let af2 = -.4;
    Rota3D.initRotate( obj.w[910], obj.w[911], af2*Math.PI/180);
    for (let i = 401; i <= 436; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	  }
    Rota3D.initRotate( obj.w[912], obj.w[913], af2*Math.PI/180);
    for (let i = 473; i <= 508; i++){
      obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
    cv.setObj(obj);
    cv.paint();
  }
  function Derecha(){
    var tr = 0.0001;
    for(var i = 1; i<=32; i++){
      obj.w[i].y= obj.w[i].y+tr;
    }
    for(var i = 401; i<=544; i++){
      obj.w[i].y= obj.w[i].y+tr;
    }
    for(var i = 900; i<=913; i++){
      obj.w[i].y= obj.w[i].y+tr;
    }
    let af2 = .4;
    Rota3D.initRotate( obj.w[910], obj.w[911], af2*Math.PI/180);
    for (let i = 401; i <= 436; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	  }
    Rota3D.initRotate( obj.w[912], obj.w[913], af2*Math.PI/180);
    for (let i = 473; i <= 508; i++){
      obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
    cv.setObj(obj);
    cv.paint();
  }
var up = false,
    right = false,
    down = false,
    left = false,
    x = window.innerWidth/2-130/2,
    y = window.innerHeight/2-130/2


  document.addEventListener('keydown',press)
function press(e){
  if (e.keyCode === 87 /* w */){
    up = true;
  }
  if (e.keyCode === 68 /* d */){
    right = true;
  }
  if (e.keyCode === 83 /* s */){
    down = true;
  }
  if (e.keyCode === 65 /* a */){
    left = true;
  }
}
document.addEventListener('keyup',release)
function release(e){
  if (e.keyCode === 87 /* w */){
    up = false
  }
  if (e.keyCode === 68 /* d */){
    right = false
  }
  if (e.keyCode === 83 /* s */){
    down = false
  }
  if (e.keyCode === 65 /* a */){
    left = false
  }
}
function gameLoop(){
  var div = document.querySelector('div');
  if (up){
    Adelante();
  }
  if (right){
    Derecha()
    pza1DerFunc();
  }
  if (down){
    Reversa();
  }
  if (left){
    Izquierda();
    pza1IzqFunc();
  }
  window.requestAnimationFrame(gameLoop)
}
window.requestAnimationFrame(gameLoop)

document.getElementById('file-input').addEventListener('change', leerArchivo, false);
document.getElementById('eyeDown').addEventListener('click', eyeDownFunc, false);
document.getElementById('eyeUp').addEventListener('click', eyeUpFunc, false);
document.getElementById('eyeLeft').addEventListener('click', eyeLeftFunc, false);
document.getElementById('eyeRight').addEventListener('click', eyeRightFunc, false);
document.getElementById('incrDist').addEventListener('click', incrDistFunc, false);
document.getElementById('decrDist').addEventListener('click', decrDistFunc, false);


//movimiento de piezas
/*document.getElementById('pza1Izq').addEventListener('click', pza1IzqFunc, false);
document.getElementById('pza1Der').addEventListener('click', pza1DerFunc, false);
document.getElementById('pza12Izq').addEventListener('click', , false);
document.getElementById('pza12Der').addEventListener('click', , false);
*/
let Pix: number, Piy: number;
let Pfx: number, Pfy: number;
let theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
let flag: boolean = false;

function handleMouse(evento: any) {
  Pix=evento.offsetX;
  Piy = evento.offsetY;
  flag = true;
}

function makeVizualization(evento: any) {
  if (flag) {
    Pfx = evento.offsetX;
    Pfy = evento.offsetY;
    //console.log(Pfx, Pfy)
    let difX = Pix - Pfx;
    let difY = Pfy - Piy;
    vp(0, 0.1 * difY / 50, 1);
    Piy = Pfy;
    vp(0.1 * difX, 0 / 50, 1);
    Pix = Pfx;
    /*if( Piy>Pfy+1 ){
      phi += SensibilidadY;
      vp(0, 0.1*, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }

    if(Pfy>Piy+1){
      phi -= SensibilidadY;
      vp(0,-0.1, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }*/

    /*if (Pix > Pfx + 1) {
      theta += SensibilidadX;
      vp(0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }
        
    if (Pfx > Pix + 1) {
      theta -= SensibilidadX;
      vp(-0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }*/
  }
}

function noDraw() {
  flag = false;
}

canvas.addEventListener('mousedown', handleMouse);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mousemove', makeVizualization);