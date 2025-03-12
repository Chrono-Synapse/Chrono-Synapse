// AI Prediction Algorithm
const predictions = [
  "You will discover a hidden talent.",
  "A major technological breakthrough will occur in 2024.",
  "India's GDP will double by 2030.",
  "You will meet someone who changes your life.",
  "A global event will reshape society in 2025."
];

document.getElementById("predict-btn")?.addEventListener("click", () => {
  const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
  document.getElementById("prediction-output").textContent = randomPrediction;
});

// Neural Canvas Animation
const canvas = document.getElementById("neural-canvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const nodes = [];
  for (let i = 0; i < 100; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 243, 255, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    nodes.forEach(node => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
      ctx.fill();

      node.y += 1;
      if (node.y > canvas.height) node.y = 0;
    });

    requestAnimationFrame(draw);
  }
  draw();
}

// Voiceover Activation
window.onload = () => {
  const msg = new SpeechSynthesisUtterance("Chrono Synapse online. The future is in your hands.");
  msg.voice = speechSynthesis.getVoices().find(v => v.name === "Samantha");
  msg.pitch = 0.8;
  msg.rate = 1.1;
  speechSynthesis.speak(msg);
};// Matrix Rain Animation
const startMatrixRain = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  document.body.prepend(canvas);

  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '-1';

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const chars = '01';
  const fontSize = 14;
  const columns = Math.floor(width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
};

window.onload = startMatrixRain;
