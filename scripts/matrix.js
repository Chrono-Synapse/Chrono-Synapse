class MatrixRain {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      console.error("Canvas element not found!");
      return;
    }

    this.ctx = this.canvas.getContext('2d');
    this.chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ';
    this.fontSize = 16;
    this.columns = 0;
    this.drops = [];
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.columns = Math.floor(this.canvas.width / this.fontSize);
    this.drops = Array(this.columns).fill(1);
  }

  animate() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = '#0F0';
    this.ctx.font = `${this.fontSize}px 'MS Gothic'`;

    this.drops.forEach((drop, i) => {
      const char = this.chars[Math.floor(Math.random() * this.chars.length)];
      this.ctx.fillText(char, i * this.fontSize, drop * this.fontSize);

      if (drop * this.fontSize > this.canvas.height && Math.random() > 0.975) this.drops[i] = 0;
      this.drops[i]++;
    });

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize MatrixRain
new MatrixRain('matrix-canvas');
