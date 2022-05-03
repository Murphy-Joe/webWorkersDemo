function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

onmessage = async function(e) {
    console.log(`Worker: ${e.data} received from main script, ${performance.now()}`);
    await delay(2000)
    var workerResult = 'Worker manipulation: ' + (e.data + 1);
    console.log(`Worker: Posting ${e.data + 1} back to main script, ${performance.now()}`);
    postMessage(workerResult);
  }

