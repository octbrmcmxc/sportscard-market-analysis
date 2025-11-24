# Sports Card Mobile App Business Plan - Interactive Web Presentation

This repository contains the source code for an interactive web presentation of a comprehensive business plan for a new mobile application targeting the sports card market. The application is built using **React** and **Vite** with a dark, aesthetic theme.

## 🚀 Features

*   **Interactive Navigation:** Easily switch between core sections: Overview, Market Analysis, Technical Roadmap, and Financial Projections.
*   **Data Visualization:** Includes charts for user growth, revenue projections, and profitability analysis using `recharts`.
*   **Aesthetic Dark Theme:** Designed for a modern, professional look.

## 🛠️ Tech Stack

*   **Frontend:** React (with Vite)
*   **Styling:** Pure CSS (with a focus on responsiveness)
*   **Charting:** `recharts`
*   **Icons:** `lucide-react`

## 📦 Local Deployment

Follow these steps to set up and run the project locally.

### Prerequisites

*   Node.js (version 18 or higher)
*   npm (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/octbrmcmxc/sportscard-market-analysis.git
    cd sportscard-market-analysis
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 🌐 Hosted Deployment (Static Hosting)

Since this is a static React application, it can be easily deployed to any static hosting service (e.g., Netlify, Vercel, GitHub Pages, Firebase Hosting).

### Build the Project

1.  **Run the build command:**
    ```bash
    npm run build
    ```
2.  The optimized, production-ready files will be generated in the `dist` directory.

### Deployment Steps (Example: GitHub Pages)

1.  Ensure your `vite.config.js` is configured for the correct base path if deploying to a subdirectory (e.g., for GitHub Pages). For a root domain deployment, no changes are needed.
2.  Follow your chosen hosting provider's instructions to deploy the contents of the `dist` folder.

For GitHub Pages, you can use the `gh-pages` package:

1.  Install `gh-pages`:
    ```bash
    npm install gh-pages --save-dev
    ```
2.  Add the following scripts to your `package.json`:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```
3.  Run the deploy command:
    ```bash
    npm run deploy
    ```
    *(Note: You may need to configure your GitHub Pages settings to serve from the `gh-pages` branch or the `dist` folder.)*

## 📄 Business Plan Report

The full, detailed Markdown report that served as the source for this web application is included in the repository root: `sports_card_app_business_plan.md`.
