// Matrix Rain Animation
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const drops = Array(Math.floor(canvas.width/10)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = '14px monospace';

    drops.forEach((drop, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 10, drop * 10);
        drops[i] = drop > canvas.height || Math.random() > 0.95 ? 0 : drop + 1;
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Matrix Animation
setInterval(drawMatrix, 50);

// Sample blog posts (replace with dynamic content)
const posts = [
    {
        title: 'The Quantum Mind Interface',
        content: 'Exploring neural network integration with quantum computing...'
    },
    {
        title: 'AI & Spiritual Consciousness',
        content: 'Bridging artificial intelligence with metaphysical concepts...'
    }
];

const postGrid = document.querySelector('.post-grid');
posts.forEach(post => {
    const article = document.createElement('article');
    article.className = 'cyber-card';
    article.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
    `;
    postGrid.appendChild(article);
});