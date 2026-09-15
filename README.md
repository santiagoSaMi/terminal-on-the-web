# SantiagOS Terminal

An interactive retro terminal that introduces Santiago through a nostalgic, Windows-inspired interface.

Instead of presenting a traditional portfolio page, this project transforms a personal introduction into a small interactive experience. Visitors can enter their name, explore a keyboard-navigable menu, and discover the creator's personality, values, ambitions, and motivation through a terminal-style conversation.

## Features

- **Retro Windows-inspired interface** with a classic title bar and terminal aesthetic.
- **Interactive introduction** that welcomes visitors and asks for their name.
- **Keyboard navigation** using the arrow keys and Enter.
- **Animated text output** that simulates a terminal typing effect.
- **Personal introduction menu** covering:
  - Personality
  - Superpower
  - Challenge
  - Motivation for joining Takeda
  - Farewell
- **ASCII farewell animation** displayed at the end of the experience.
- **Responsive layout** designed to adapt to different screen sizes.
- **Zero dependencies or build tools** required.

## Built With

- **HTML5** — Structure and semantic page content.
- **CSS3** — Retro interface styling, layout, animations, and visual effects.
- **Vanilla JavaScript** — Terminal behavior, user interaction, keyboard navigation, and text animations.
- **Google Fonts** — VT323 typeface for terminal-inspired typography.

## How to Use

1. Open the terminal experience in your browser.
2. Read the introductory message.
3. Enter your name when prompted.
4. Press **Enter** to continue.
5. Use the **Arrow Up** and **Arrow Down** keys to navigate the menu.
6. Press **Enter** to select an option.
7. Explore the available sections and finish with the farewell animation.

## Getting Started

This is a static website, so no installation, package manager, or build process is required.

### Option 1: Open Locally

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Navigate into the project directory:

```bash
cd YOUR-REPOSITORY
```

Open `index.html` in your preferred browser.

### Option 2: Use a Local Development Server

If you use Visual Studio Code, you can launch the project with the **Live Server** extension.

Alternatively, run a simple local server with Python:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Project Structure

```text
terminal-on-the-web/
├── index.html    # Main HTML structure
├── style.css     # Interface styling and animations
└── script.js     # Terminal logic and interactions
```

## Concept

SantiagOS is a fictional terminal-style interface created to represent its creator through a different medium.

The project explores how a personal introduction can become more engaging when it is designed as an experience rather than a conventional page. Its central idea is to combine technology, personality, nostalgia, and human-centered storytelling in a simple web interface.

## Design Inspiration

The visual design draws inspiration from:

- Classic Windows interfaces.
- CRT monitors and command-line terminals.
- Retro computing aesthetics.
- Text-based interactive experiences.
- Pixel-inspired typography and ASCII art.

## Possible Future Improvements

Potential enhancements for future versions include:

- Mouse and touch support for menu selection.
- Functional minimize, maximize, and close buttons.
- Sound effects and optional background music.
- Additional terminal commands.
- More interactive portfolio sections.
- Language selection.
- A dedicated projects or contact section.
- Improved accessibility for non-keyboard users.

> A personal introduction, reimagined as a terminal.
