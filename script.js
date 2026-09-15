const output = document.getElementById("output");
const inputLine = document.getElementById("input-line");
const userInput = document.getElementById("user-input");
const body = document.getElementById("terminal-body");

const INTRO = `Hola, soy SantiagOS. Encantado de conocerte.
Como puedes ver, esta es mi forma (que no te asuste ni intimide).
Soy la interfaz de Santiago, alguien a quien le gusta programar y armar cosas raras para la web, como esta terminal.
Aqui puedes conocer un poco sobre mi y lo que hago.

Pero primero, ¿como te llamas?

`;

function scrollToBottom() {
  body.scrollTop = body.scrollHeight;
}

function typeText(text, speed, onDone) {
  let i = 0;
  (function step() {
    if (i < text.length) {
      output.textContent += text.charAt(i);
      i++;
      scrollToBottom();
      setTimeout(step, speed);
    } else if (onDone) {
      onDone();
    }
  })();
}

function showInput() {
  inputLine.hidden = false;
  userInput.focus();
  scrollToBottom();
}

function placeCaretAtEnd(el) {
  const range = document.createRange();
  const sel = window.getSelection();
  range.selectNodeContents(el);
  range.collapse(false);
  sel.removeAllRanges();
  sel.addRange(range);
}

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const name = userInput.textContent.trim();
    if (!name) return;

    inputLine.hidden = true;
    output.textContent += "> " + name + "\n\n";
    userInput.textContent = "";

    typeText(`Un placer, ${name}.\n`, 25, scrollToBottom);
  }
});

body.addEventListener("click", () => {
  if (!inputLine.hidden) {
    userInput.focus();
    placeCaretAtEnd(userInput);
  }
});

typeText(INTRO, 20, showInput);
