// Start Predicting Button
document.getElementById('start-predicting').addEventListener('click', () => {
  const predictions = [
    "The future holds great opportunities for you.",
    "A new discovery awaits you tomorrow.",
    "Your next step will lead to success.",
    "Prepare for an unexpected breakthrough."
  ];
  const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
  document.getElementById('terminal-output').textContent = randomPrediction;
});

// Neural Interface Button
document.getElementById('neural-interface').addEventListener('click', () => {
  const terminalOutput = document.getElementById('terminal-output');
  terminalOutput.textContent = "Neural Link Established";
  terminalOutput.style.color = "#ff073a"; // Red glow for dramatic effect

  // Optional: JARVIS voiceover
  if ('speechSynthesis' in window) {
    const msg = new SpeechSynthesisUtterance("Neural link established. Awaiting further instructions.");
    speechSynthesis.speak(msg);
  }
});
