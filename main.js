const worker = new Worker('worker.js');
worker.postMessage('Hello from main.js');

// canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

setup();
requestAnimationFrame(draw)

function setup() {
    // draw background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // set origin to center of canvas
    ctx.transform(1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
}

function draw() {
    requestAnimationFrame(draw);
    // loop 100 times
    for (let i = 0; i < 1000; i++) {
        // choose a random point in the complex plane
        const c = math.complex(Math.random() * 4 - 2, Math.random() * 4 - 2);
        // draw the point
        const iterations = mandelbrot(c);
        ctx.fillStyle = 'rgb(' + iterations + ', ' + iterations + ', ' + iterations + ')';
        ctx.fillRect(c.re * 400, c.im * 400, 1, 1);
    }
}

// given a point in the complex plane, return the number of iterations it takes to escape the set
function mandelbrot(c) {
    // exit if the point is too far away
    if (c.abs() > 2) {
        return 0;
    }
    let z = math.complex(0, 0);
    for (let i = 0; i < 255; i++) {
        //z = math.add(math.multiply(z, z), c);
        z = math.chain(z).multiply(z).add(c).done();
        if (z.abs() > 2) {
            return i;
        }
    }
    return 255;
}