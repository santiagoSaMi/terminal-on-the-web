const output = document.getElementById("output");
const inputLine = document.getElementById("input-line");
const userInput = document.getElementById("user-input");
const menu = document.getElementById("menu");
const asciiGif = document.getElementById("ascii-gif");
const body = document.getElementById("terminal-body");

const INTRO = `Hola, soy SantiagOS. Encantado de conocerte.
Como puedes ver, esta es mi forma (que no te asuste ni intimide).
Soy la interfaz de Santiago, alguien a quien le gusta programar y armar cosas raras para la web, como esta terminal.
Aqui puedes conocer un poco sobre mi y lo que hago.

Pero primero, ¿como te llamas?

`;

const MENU_OPTIONS = [
  { label: "Mi personalidad", answer: "Soy un sistema operativo bastante completo. Siempre busco ayudar a mis usuarios de la mejor manera posible y recordarles lo importantes que son para el mundo, pues fue una persona quien me ideó. Cada día que pasa, se generan ideas revolucionarias alrededor del mundo, pero ¿cuántas llegan a ser escuchadas? Yo quiero que eso cambie." },
  { label: "Mi superpoder", answer: "Mi superpoder es lograr traer las ideas a la realidad, teniendo en cuenta un factor fundamental: la gente. Que las cosas se adapten a cómo las personas quieren verlas y que les permitan resolver problemas que ni siquiera sabían que podían solucionarse, o hacer mejor aquello que ya existe, es siempre mi punto central. Es algo que pocas veces encontrarás en este mundo contemporáneo." },
  { label: "Mi reto", answer: "Mi reto es solucionar los problemas que enfrenta nuestro mundo, pero no de maneras banales o poco precisas, pues considero que esas soluciones carecen de vida. Las soluciones radican en las personas y en cómo podemos lograr que la gente se sienta, sobre todo, escuchada." },
  { label: "Por que quiero ser parte de Takeda", answer: "Hace unos meses, mi creador tuvo la oportunidad de realizar un intercambio en Japón, donde no solo visitó una de las culturas más disciplinadas y educadas del mundo, sino que también experimentó soluciones japonesas que siempre priorizaban al usuario y lograban una armonía entre la persona y su entorno, a veces sin necesidad de tecnología. Dice que le pareció tan すごい que desea incorporar esa filosofía en sus futuras soluciones, y qué mejor manera de hacerlo que formando parte de una compañía de la misma índole." },
  { label: "Despedida", farewell: true },
];

const FAREWELL_TEXT = "Ha sido un placer hablar contigo. ¡Hasta la próxima!\n\n";

const FAREWELL_FRAMES = [
`   \\o/
    |
   / \\
`,
`    o/
    |
   / \\
`,
`   \\o
    |
   / \\
`,
`    o/
    |
   / \\
`,
];

let selectedIndex = 0;
let menuActive = false;

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

function renderMenu() {
  menu.innerHTML = "";
  MENU_OPTIONS.forEach((option, index) => {
    const line = document.createElement("div");
    line.className = "menu-option" + (index === selectedIndex ? " selected" : "");
    line.textContent = (index === selectedIndex ? "> " : "  ") + option.label;
    menu.appendChild(line);
  });
}

function showMenu() {
  selectedIndex = 0;
  menuActive = true;
  menu.hidden = false;
  renderMenu();
  scrollToBottom();
}

function playFarewellAnimation() {
  asciiGif.hidden = false;
  let frame = 0;
  setInterval(() => {
    asciiGif.textContent = FAREWELL_FRAMES[frame % FAREWELL_FRAMES.length];
    frame++;
    scrollToBottom();
  }, 400);
}

function selectMenuOption() {
  const option = MENU_OPTIONS[selectedIndex];
  menuActive = false;
  menu.hidden = true;

  output.textContent += "> " + option.label + "\n\n";

  if (option.farewell) {
    typeText(FAREWELL_TEXT, 25, playFarewellAnimation);
    return;
  }

  typeText(option.answer + "\n\n", 25, () => {
    typeText("¿Que mas deseas conocer de mi?\n\n", 20, showMenu);
  });
}

document.addEventListener("keydown", (e) => {
  if (!menuActive) return;

  if (e.key === "ArrowUp") {
    e.preventDefault();
    selectedIndex = (selectedIndex - 1 + MENU_OPTIONS.length) % MENU_OPTIONS.length;
    renderMenu();
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    selectedIndex = (selectedIndex + 1) % MENU_OPTIONS.length;
    renderMenu();
  } else if (e.key === "Enter") {
    e.preventDefault();
    selectMenuOption();
  }
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const name = userInput.textContent.trim();
    if (!name) return;

    inputLine.hidden = true;
    output.textContent += "> " + name + "\n\n";
    userInput.textContent = "";

    typeText(`Un placer, ${name}.\n\n`, 25, () => {
      typeText("¿Que deseas conocer de mi?\n\n", 20, showMenu);
    });
  }
});

body.addEventListener("click", () => {
  if (!inputLine.hidden) {
    userInput.focus();
    placeCaretAtEnd(userInput);
  }
});

typeText(INTRO, 20, showInput);
