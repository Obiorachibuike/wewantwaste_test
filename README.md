
---

# REMWaste Frontend Challenge – Skip Selection Page Redesign

## Overview

This project is a submission for the REMWaste front-end React coding challenge. The objective was to **redesign the "Skip Selection" page** on the REMWaste platform while preserving its functionality, improving the UI/UX, and ensuring responsiveness across devices.

**Live preview:** [Deployed Link Goes Here]  
**GitHub Repo:** [GitHub Repo Link Goes Here]

## Objective

Redesign the skip selection page for improved user experience, responsive layout, and clean maintainable code using React.

## Task Summary

- Navigate to [https://wewantwaste.co.uk](https://wewantwaste.co.uk)
- Enter postcode: `LE10 1SH`, select an address, then select *Garden Waste*
- Target page: **Skip Selection Page**
- Use this data source to populate skip options:  
  [https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)

---

## My Approach

### 1. **Project Setup**
- Bootstrapped a new React project using **Vite** for faster build and dev experience
- Used **Tailwind CSS** for rapid and responsive UI development
- Folder structure follows separation of concerns (components, assets, hooks, utils)

### 2. **Fetching API Data**
- Used `fetch` in `useEffect()` to retrieve skip data from the given endpoint
- Stored the data in local state and mapped it dynamically on the page

### 3. **UI/UX Improvements**
- Redesigned layout for cleaner visual hierarchy and spacing
- Responsive grid system for skip items using Tailwind
- Added modern card-style presentation for skip options
- Used intuitive iconography and clear call-to-action buttons
- Focused on mobile-first responsiveness

### 4. **Code Quality**
- Split UI into reusable components (`SkipCard`, `SkipList`, etc.)
- Organized styling using Tailwind utility classes
- Added fallback UI for loading and error states
- Applied accessibility best practices (alt text, aria labels)

---

## How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/remwaste-challenge.git
   cd remwaste-challenge

2. Install dependencies

npm install


3. Start the development server

npm run dev


4. Open in your browser: http://localhost:5173




---

Tech Stack

React 18

Vite – Fast build tool

Tailwind CSS – Utility-first CSS framework

JavaScript (ES6+)



---

Screenshots

Desktop View

Include screenshot of redesigned page on desktop

Mobile View

Include screenshot of mobile version


---

Final Notes

This challenge was a great opportunity to demonstrate my ability to:

Work with real-world APIs

Write clean and reusable components

Deliver responsive, user-friendly UI in React


Thank you to the REMWaste team for the opportunity!


---

Submitted by:
Chibuike Obiora
https://www.linkedin.com/in/obiorachibuike
---

