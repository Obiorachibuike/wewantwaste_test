---

# REMWaste Frontend Challenge – Skip Selection Page Redesign

## Overview

This project is a submission for the REMWaste front-end React coding challenge. The goal was to **redesign the "Skip Selection" page** of the REMWaste platform while keeping its core functionality intact, improving the UI/UX, and making it responsive across devices.

**Live Preview:** [wewantwaste-test.vercel.app](https://wewantwaste-test.vercel.app)  
**StackBlitz Sandbox:** [Open in StackBlitz](https://stackblitz.com/~/github.com/Obiorachibuike/wewantwaste_test?file=src/App.tsx)  
**GitHub Repo:** [https://github.com/Obiorachibuike/wewantwaste_test](https://github.com/Obiorachibuike/wewantwaste_test)

---

## Objective

Redesign the Skip Selection page for a better user experience, modern visual appeal, and responsive layout using React and TypeScript.

---

## Task Summary

- Visit [https://wewantwaste.co.uk](https://wewantwaste.co.uk)
- Enter the postcode: `LE10 1SH`, select any address, and choose *Garden Waste*
- The Skip Selection page is the one to be redesigned
- Use the data from:  
  [https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)

---

## My Approach

### 1. **Project Setup**
- Initialized a new **React + TypeScript** project using **Vite** for fast development
- Used standard **CSS** for styling and layout
- Organized codebase into folders:
  - `components/` – reusable UI elements
  - `services/` – API logic
  - `styles/` – custom CSS styles

### 2. **API Integration**
- Fetched skip data using the native `fetch` API inside a `useEffect` hook
- Handled loading and error states
- Stored skip data in local state and displayed it dynamically on the page

### 3. **UI/UX Enhancements**
- Redesigned the layout with clean spacing and consistent alignment
- Used **CSS Flexbox and Grid** for a responsive design
- Implemented **card-style layout** for skip options
- **Incorporated icons** to improve visual clarity and make the interface more intuitive and user-friendly
- Ensured mobile and desktop responsiveness
- Clear call-to-action buttons and interactive hover effects

### 4. **TypeScript & Code Quality**
- Used TypeScript throughout the project to ensure type safety
- Defined proper interfaces for API responses and component props
- Separated logic and UI into components for better maintainability
- Followed best practices for code readability and reusability

---

## How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Obiorachibuike/wewantwaste_test.git
   cd wewantwaste_test

2. Install dependencies

npm install


3. Start the development server

npm run dev


4. Open in browser: http://localhost:5173




---

Tech Stack

React 18

TypeScript

Vite

CSS (vanilla)



---

Screenshots

Desktop View

(Insert screenshot here)

Mobile View

(Insert screenshot here)


---

Final Notes

This project helped me demonstrate:

Integration with live APIs

Building responsive, clean UI using CSS and React

Designing user-friendly interfaces with visual cues like icons

Writing modular, type-safe, and maintainable front-end code


Thank you to the REMWaste team for this opportunity!


---

Submitted by:
Chibuike Obiora
LinkedIn – https://www.linkedin.com/in/obiorachibuike
---

