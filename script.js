function startSpeedTest() {
    const speedResult = document.getElementById('speed-result');
    speedResult.textContent = 'Testing...';

    // Simulate speed test (using random numbers for demo purposes)
    setTimeout(() => {
        const downloadSpeed = (Math.random() * 100).toFixed(2);  // Random speed in Mbps
        const uploadSpeed = (Math.random() * 50).toFixed(2);     // Random upload speed in Mbps
        speedResult.textContent = `Download Speed: ${downloadSpeed} Mbps | Upload Speed: ${uploadSpeed} Mbps`;
    }, 2000); // Simulate a 2-second delay for the test
}
