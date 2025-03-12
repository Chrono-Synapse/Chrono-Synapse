// Matrix Rain Animation
const startMatrixRain = () => {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  setInterval(draw, 50);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
};

// JARVIS Voiceover
const activateVoiceover = () => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  const msg = new SpeechSynthesisUtterance("Chrono Synapse online. The future is in your hands.");
  const voices = speechSynthesis.getVoices();
  msg.voice = voices.find(v => v.name === "Samantha") || voices[0];
  msg.pitch = 0.8;
  msg.rate = 1.1;
  speechSynthesis.speak(msg);
};

// Neural Canvas Animation
const startNeuralAnimation = () => {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
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
};

// Initialize Everything
window.onload = () => {
  startMatrixRain();
  activateVoiceover();
  if (document.getElementById('neural-canvas')) {
    startNeuralAnimation();
  }
};
