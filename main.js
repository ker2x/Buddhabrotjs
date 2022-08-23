const worker = new Worker('worker.js');

worker.postMessage('Hello from main.js');

