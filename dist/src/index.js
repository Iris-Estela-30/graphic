//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
var canvas;
var graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
var cv;
var obj;
var ang = 0;
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
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
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    //
    //readObject(new Input(contenido));
    elemento.innerHTML = contenido;
}
function vp(dTheta, dPhi, fRho) {
    if (obj != undefined) {
        var obj_1 = cv.getObj();
        if (!obj_1.vp(cv, dTheta, dPhi, fRho))
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
    var af = 0.1;
    Rota3D.initRotate(obj.w[900], obj.w[901], af * Math.PI / 180);
    for (var i = 1; i <= 32; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    for (var i = 401; i <= 544; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    for (var i = 902; i <= 913; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function pza1IzqFunc() {
    var af = -0.1;
    Rota3D.initRotate(obj.w[900], obj.w[901], af * Math.PI / 180);
    for (var i = 1; i <= 32; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    for (var i = 401; i <= 544; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    for (var i = 902; i <= 913; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function Adelante() {
    var tr = -0.1;
    for (var i = 1; i <= 32; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    for (var i = 401; i <= 544; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    for (var i = 900; i <= 913; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    var af2 = -10;
    Rota3D.initRotate(obj.w[902], obj.w[903], af2 * Math.PI / 180);
    for (var i_1 = 509; i_1 <= 544; i_1++) {
        obj.w[i_1] = Rota3D.rotate(obj.w[i_1]);
    }
    Rota3D.initRotate(obj.w[904], obj.w[905], af2 * Math.PI / 180);
    for (var i_2 = 473; i_2 <= 508; i_2++) {
        obj.w[i_2] = Rota3D.rotate(obj.w[i_2]);
    }
    Rota3D.initRotate(obj.w[906], obj.w[907], af2 * Math.PI / 180);
    for (var i_3 = 437; i_3 <= 472; i_3++) {
        obj.w[i_3] = Rota3D.rotate(obj.w[i_3]);
    }
    Rota3D.initRotate(obj.w[908], obj.w[909], af2 * Math.PI / 180);
    for (var i_4 = 401; i_4 <= 436; i_4++) {
        obj.w[i_4] = Rota3D.rotate(obj.w[i_4]);
    }
    cv.setObj(obj);
    cv.paint();
}
function Reversa() {
    var tr = 0.1;
    for (var i = 1; i <= 32; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    for (var i = 401; i <= 544; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    for (var i = 900; i <= 913; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    var af2 = 10;
    Rota3D.initRotate(obj.w[902], obj.w[903], af2 * Math.PI / 180);
    for (var i_5 = 509; i_5 <= 544; i_5++) {
        obj.w[i_5] = Rota3D.rotate(obj.w[i_5]);
    }
    Rota3D.initRotate(obj.w[904], obj.w[905], af2 * Math.PI / 180);
    for (var i_6 = 473; i_6 <= 508; i_6++) {
        obj.w[i_6] = Rota3D.rotate(obj.w[i_6]);
    }
    Rota3D.initRotate(obj.w[906], obj.w[907], af2 * Math.PI / 180);
    for (var i_7 = 437; i_7 <= 472; i_7++) {
        obj.w[i_7] = Rota3D.rotate(obj.w[i_7]);
    }
    Rota3D.initRotate(obj.w[908], obj.w[909], af2 * Math.PI / 180);
    for (var i_8 = 401; i_8 <= 436; i_8++) {
        obj.w[i_8] = Rota3D.rotate(obj.w[i_8]);
    }
    cv.setObj(obj);
    cv.paint();
}
function Izquierda() {
    var tr = -0.0001;
    for (var i = 1; i <= 32; i++) {
        obj.w[i].y = obj.w[i].y + tr;
    }
    for (var i = 401; i <= 544; i++) {
        obj.w[i].y = obj.w[i].y + tr;
    }
    for (var i = 900; i <= 913; i++) {
        obj.w[i].y = obj.w[i].y + tr;
    }
    var af2 = -.4;
    Rota3D.initRotate(obj.w[910], obj.w[911], af2 * Math.PI / 180);
    for (var i_9 = 401; i_9 <= 436; i_9++) {
        obj.w[i_9] = Rota3D.rotate(obj.w[i_9]);
    }
    Rota3D.initRotate(obj.w[912], obj.w[913], af2 * Math.PI / 180);
    for (var i_10 = 473; i_10 <= 508; i_10++) {
        obj.w[i_10] = Rota3D.rotate(obj.w[i_10]);
    }
    cv.setObj(obj);
    cv.paint();
}
function Derecha() {
    var tr = 0.0001;
    for (var i = 1; i <= 32; i++) {
        obj.w[i].y = obj.w[i].y + tr;
    }
    for (var i = 401; i <= 544; i++) {
        obj.w[i].y = obj.w[i].y + tr;
    }
    for (var i = 900; i <= 913; i++) {
        obj.w[i].y = obj.w[i].y + tr;
    }
    var af2 = .4;
    Rota3D.initRotate(obj.w[910], obj.w[911], af2 * Math.PI / 180);
    for (var i_11 = 401; i_11 <= 436; i_11++) {
        obj.w[i_11] = Rota3D.rotate(obj.w[i_11]);
    }
    Rota3D.initRotate(obj.w[912], obj.w[913], af2 * Math.PI / 180);
    for (var i_12 = 473; i_12 <= 508; i_12++) {
        obj.w[i_12] = Rota3D.rotate(obj.w[i_12]);
    }
    cv.setObj(obj);
    cv.paint();
}
var up = false, right = false, down = false, left = false, x = window.innerWidth / 2 - 130 / 2, y = window.innerHeight / 2 - 130 / 2;
document.addEventListener('keydown', press);
function press(e) {
    if (e.keyCode === 87 /* w */) {
        up = true;
    }
    if (e.keyCode === 68 /* d */) {
        right = true;
    }
    if (e.keyCode === 83 /* s */) {
        down = true;
    }
    if (e.keyCode === 65 /* a */) {
        left = true;
    }
}
document.addEventListener('keyup', release);
function release(e) {
    if (e.keyCode === 87 /* w */) {
        up = false;
    }
    if (e.keyCode === 68 /* d */) {
        right = false;
    }
    if (e.keyCode === 83 /* s */) {
        down = false;
    }
    if (e.keyCode === 65 /* a */) {
        left = false;
    }
}
function gameLoop() {
    var div = document.querySelector('div');
    if (up) {
        Adelante();
    }
    if (right) {
        Derecha();
        pza1DerFunc();
    }
    if (down) {
        Reversa();
    }
    if (left) {
        Izquierda();
        pza1IzqFunc();
    }
    window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);
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
var Pix, Piy;
var Pfx, Pfy;
var theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
var flag = false;
function handleMouse(evento) {
    Pix = evento.offsetX;
    Piy = evento.offsetY;
    flag = true;
}
function makeVizualization(evento) {
    if (flag) {
        Pfx = evento.offsetX;
        Pfy = evento.offsetY;
        //console.log(Pfx, Pfy)
        var difX = Pix - Pfx;
        var difY = Pfy - Piy;
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
