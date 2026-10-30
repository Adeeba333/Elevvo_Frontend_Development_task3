# TaskFlow – One-Page Task Management Website

## Project Overview

**TaskFlow** is a fictional task-management application website developed as part of the Elevvo Frontend Development Internship – Task 3.

The project presents a modern one-page website for an application that helps users organize tasks, manage priorities, receive reminders, and track progress. The page is designed to work across both mobile and desktop screen sizes.

The website includes a hero section, feature cards, user reviews, pricing plans, contact information, social media links, and interactive elements.

## Project Objective

The main objective of this project is to design and develop a clean, responsive, and interactive landing page for a fictional task-management application while practicing responsive layout design, JavaScript interactions, and frontend development fundamentals.

## Core Features

###  Hero Section
- TaskFlow app name and branding.
- Main headline and supporting description.
- "Start free" and "See how it works" buttons.
- Responsive hero layout with TaskFlow logo.

###  Features Section
The website presents three main TaskFlow features:

- **Smart Lists** – Organize tasks into projects and manage due dates.
- **Gentle Reminders** – Receive reminders at the appropriate time.
- **Progress Insights** – Track completed tasks and productivity habits.

###  User Reviews
The website includes three fictional customer reviews representing:
- A computer science student.
- A freelance web developer.
- A project manager.

###  Pricing Section
Three pricing plans are provided:

- **Free** – Basic task management features.
- **Pro** – Advanced features and unlimited projects.
- **Team** – Collaboration and shared project features.

###  Dark/Light Mode
Users can switch between dark and light themes using the theme toggle. The selected theme is stored in `localStorage` so it can be remembered between visits.

###  Responsive Navigation
The navigation changes for smaller screens and includes a mobile menu toggle. The menu automatically closes when a navigation link is selected.

###  Authentication Modal
The "Get started" button opens an authentication modal containing:
- Sign-up form.
- Login form.
- Tab switching.
- Form fields for name, email, and password.
- Basic form interaction and feedback.

The modal can also be closed using the close button, clicking outside the modal, or pressing the Escape key.

###  Scroll Reveal Animation
Sections use a scroll-based reveal effect. The JavaScript `IntersectionObserver` detects when sections enter the viewport and adds an animation class.

###  Accessibility Considerations
The project includes accessibility-focused features such as:
- Semantic HTML elements.
- Navigation labels.
- Alternative text for the TaskFlow logo.
- ARIA labels for interactive controls.
- Visible keyboard focus styles.
- Reduced-motion support.

The CSS includes a `prefers-reduced-motion` rule that disables animations for users who prefer reduced motion.

##  Technologies Used

- **HTML5** – Semantic page structure and content.
- **CSS3** – Styling, responsive layouts, themes, animations, and visual design.
- **JavaScript** – Interactive functionality and DOM manipulation.
- **SVG** – Feature and social media icons.
- **Google Fonts** – Roboto Mono typography.

##  Project Structure

```text
TaskFlow/
│
├── index.html
├── style.css
├── script.js
├── logo.png
|── problem statement.md
└── README.md
```

##  Responsive Design

The website uses CSS media queries to adapt its layout to different screen sizes. Feature cards, reviews, pricing plans, navigation, and footer content adjust according to the available screen width.

##  Design

The interface uses a dark navy, gold, cream, and brown color palette. CSS variables are used to manage the theme colors and make dark/light mode switching easier.

The design also uses responsive typography, flexible grids, buttons, cards, and spacing to maintain a consistent appearance across devices.

##  Learning Outcomes

Through this project, I practiced:

- Creating a complete one-page website.
- Building responsive layouts with CSS.
- Using semantic HTML elements.
- Creating reusable styling patterns with CSS variables.
- Implementing JavaScript-based UI interactions.
- Working with DOM events.
- Using `IntersectionObserver` for scroll animations.
- Implementing dark/light theme switching.
- Creating responsive mobile navigation.
- Building interactive modal forms.
- Applying basic accessibility practices.

##  How to Run

1. Download or clone the repository.
2. Open the project folder.
3. Make sure `index.html`, `style.css`, `script.js`, and `logo.png` are in the appropriate locations.
4. Open `index.html` in a browser.

No backend or database is required because TaskFlow is a fictional frontend practice project.

##  Internship Task

**Program:** Elevvo Frontend Development Internship  
**Task:** Task 3 – One-Page Website for a Task App  
**Project:** TaskFlow  
**Developer:** Mahmuda Adeeba Tul Husna
---

*TaskFlow is a fictional application created for frontend development practice.*