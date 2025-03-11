// Simple JARVIS AI
document.getElementById('jarvis-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const input = e.target.value;
    const output = document.getElementById('jarvis-output');
    
    // Add GPT-4 API call here later
    output.innerHTML += `<div class="response">JARVIS: Processing "${input}"...</div>`;
    e.target.value = '';
  }
});