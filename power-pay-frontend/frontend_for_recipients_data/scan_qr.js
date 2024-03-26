 // Initialize QuaggaJS
 Quagga.init({
    inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('#scanner-container'), // Target the scanner container
        constraints: {
            width: 640,
            height: 480,
            facingMode: "environment" // Use rear camera for mobile devices
        }
    },
    decoder : {
        readers : ["code_128_reader"] // Specify the QR-Code reader
    }
}, function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("QuaggaJS initialization succeeded");
});

// Handle scan button click event
document.getElementById('start-scan-btn').addEventListener('click', function() {
    Quagga.start();
});