const canvas = document.querySelector('canvas');

let ctx =  canvas.getContext('2d'),
    isDrawing = false,
    brushWidth = 5

window.addEventListener('load',()=>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const startDrawing =  () => {
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
};


const drawing  = e => {
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
};

const stopDrawing = () => {
    isDrawing = false;
};

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup',stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

