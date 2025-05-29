function setupOscillatingDots() {
    const container = document.getElementById("oscillating-dots");
    if (!container) return;
    container.innerHTML = "";

    // Imposta canvas a tutta la larghezza del contenitore
    const width = container.offsetWidth || window.innerWidth;
    const height = container.offsetHeight || 320;

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.top = "0";
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const centerY = canvas.height / 2;
    let time = 0;
    let lastTime = 0;

    const dotCount = Math.floor(width / 12); 
    const rowCount = 14;
    const spacing = Math.max(18, height / (rowCount + 2));

    function animate(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        time += deltaTime * 0.001;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let row = 0; row < rowCount; row++) {
            const y = centerY - ((rowCount - 1) / 2) * spacing + row * spacing;
            for (let i = 0; i < dotCount; i++) {
                const baseX = (width / (dotCount - 1)) * i;
                const amplitude = 4 + row * 2;
                const frequency = 1 + row * 0.2;
                const phaseOffset = row * 0.5;
                const offset = Math.sin(time * frequency + i * 0.2 + phaseOffset) * amplitude;
                const finalY = y + offset;
                ctx.beginPath();
                ctx.arc(baseX, finalY, 2, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(238, 0, 0, 0.9)";
                ctx.fill();
            }
        }
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    window.addEventListener("resize", () => {
        canvas.width = container.offsetWidth || window.innerWidth;
        canvas.height = container.offsetHeight || 320;
    });
}