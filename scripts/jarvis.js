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

  // Ensure voices are loaded before speaking
  if (voices.length === 0) {
    speechSynthesis.onvoiceschanged = () => {
      const updatedVoices = speechSynthesis.getVoices();
      msg.voice = updatedVoices.find(v => v.name === "Samantha") || updatedVoices[0];
      speechSynthesis.speak(msg);
    };
  } else {
    speechSynthesis.speak(msg);
  }
};

window.onload = () => {
  activateVoiceover();
};
