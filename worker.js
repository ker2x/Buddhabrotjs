// worker thread

self.onmessage = function(e) {
    console.log(e.data + ' from worker.js');
}