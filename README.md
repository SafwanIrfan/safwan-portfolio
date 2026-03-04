# Safwan Irfan - Portfolio Website

A modern, minimal, client-friendly portfolio built for a backend-focused Full Stack Developer.

## Tech Stack
- **React.js** (Frontend Library)
- **Vite** (Build Tool)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **React Icons** (Iconography)

## Folder Structure
```text
safwan-portfolio/
├── src/
│   ├── components/    # Reusable UI elements (Button, Card, SectionHeading)
│   ├── layout/        # Layout wrappers (Navbar, Footer)
│   ├── sections/      # Page sections (Hero, About, Skills, Experience, Projects, Contact)
│   ├── data/          # Static data (skills, experience, projects) & fetch script
│   ├── App.jsx        # Main application assembly
│   ├── main.jsx       # React DOM entry point
│   └── index.css      # Tailwind base styles and custom configurations
├── tailwind.config.js # Tailwind theme and styling configuration
├── package.json       # Project dependencies
└── README.md          # Setup instructions
```

## Setup Instructions

### 1. Prerequisites
Ensure you have Node.js (v16+) installed on your machine.

### 2. Installation
Navigate to the project directory and install the required dependencies:
```bash
cd d:\safwan-learning\safwan-portfolio
npm install
```

### 3. Fetch Latest GitHub Projects (Optional)
The project is pre-configured with a script to fetch your latest public GitHub repositories directly into the portfolio data structure.
```bash
node src/data/fetchRepos.js
```

### 4. Run Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the portfolio.

### 5. Build for Production
To create an optimized production build:
```bash
npm run build
```
This generates a `dist/` folder which is ready to be hosted on Vercel, Netlify, GitHub Pages, or any static hosting service.
