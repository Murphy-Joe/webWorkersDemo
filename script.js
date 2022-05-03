let hi = document.getElementById('hi');
hi.onclick = () => spawnWorkers()
handleMsg = (e) => {console.log(`Main: ${e.data} received from worker, ${performance.now()}`);}

function spawnWorkers() {
    for (var i = 0; i < 3; i++) {
        console.log(`Main: Spawning worker ${i}, ${performance.now()}`);
        let worker = new Worker('worker.js');
        worker.postMessage(i);
        worker.onmessage = (e) => handleMsg(e);
    }
}