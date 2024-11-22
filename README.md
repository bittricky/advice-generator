# Advice Generator

A responsive advice generator app built to experiment with **HTMX**. This project fetches random advice from the [Advice Slip API](https://api.adviceslip.com/) and displays it dynamically on the page.

---

## Features

- Fetch random advice with the click of a button.
- Responsive design, optimized for desktop and mobile devices.
- Styled with custom CSS using modern HSL-based colors.
- Built using **HTMX** for handling dynamic updates without writing custom JavaScript.

---

## Project Setup

### Prerequisites

To run this project, you need the following installed:

- [Node.js](https://nodejs.org/) (recommended version 16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### Installation

1. **Clone the Repository**

   ```bash
   $ git clone https://github.com/bittricky/advice-generator.git
   $ cd advice-generator
   ```

2. **Install Dependencies**
   If the project includes a `package.json` (e.g., for using Vite as a dev server):
   ```bash
   $ pnpm install
   ```

---

### Development Server

To serve the project locally:

1. **Run the Development Server**
   If you're using Vite:

   ```bash
   $ pnpm run dev
   ```

2. **Open in Your Browser**
   Visit the following URL in your browser:
   ```
   http://localhost:5173
   ```

---

### Serving Without a Dev Server

If you are not using Vite or any build tools:

1. Open the `index.html` file directly in your browser, or serve it with a simple HTTP server.

2. For a lightweight HTTP server, you can use Python:
   ```bash
   $ python3 -m http.server
   ```
   Then navigate to `http://localhost:8000` in your browser.
