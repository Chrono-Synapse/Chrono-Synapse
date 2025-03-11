// JARVIS Terminal v1.0
const jarvisInput = document.getElementById('jarvis-input');
const jarvisOutput = document.getElementById('jarvis-output');

const responses = {
  "hello": "J.A.R.V.I.S: Initializing quantum interface... How may I assist you today?",
  "future": "J.A.R.V.I.S: Scanning timeline... [AI Prediction Module Active]",
  "help": "Available commands: /predict, /simulate, /about"
};

jarvisInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const query = jarvisInput.value.toLowerCase();
    jarvisInput.value = '';
    
    // Add user query
    jarvisOutput.innerHTML += `<div class="user-query">USER: ${query}</div>`;
    
    // AI response
    let response = responses[query] || 
      `J.A.R.V.I.S: Command "${query}" not recognized. Activating neural learning...`;
    
    // Simulate GPT-4 API call
    setTimeout(() => {
      jarvisOutput.innerHTML += `<div class="ai-response">${response}</div>`;
      jarvisOutput.scrollTop = jarvisOutput.scrollHeight;
    }, 800);
  }
});
