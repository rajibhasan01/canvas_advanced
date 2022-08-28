const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); // make ctx variable an instance of canvas 2d api object
canvas.width = 800;
canvas.height = 450;

const image1 = new Image(); // new is a special keyword in js and Image is a special build in class constructor
// we just create a blank new image object that comes with src property

image1.src = 'image1.png';