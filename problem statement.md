# Problem Statement

Develop a responsive and accessible one-page task-management website using HTML5, CSS3, and JavaScript ES6+.  
The website should present the TaskFlow application through a hero section, feature cards, user reviews, pricing plans, and contact information.  
Responsive design, semantic HTML, CSS Flexbox/Grid, theme customization, and accessibility practices should be used to create a clean and adaptable layout.  
JavaScript DOM manipulation and event handling should control interactive features such as dark/light mode, mobile navigation, authentication modals, and scroll-based animations.  
CSS transitions and responsive techniques should be used to provide smooth interactions and a consistent experience across different screen sizes.

# Technical Problem Review

- Made the website interactive by adding a dark/light theme toggle instead of keeping the page in a fixed theme.
- Used localStorage to store the selected theme preference.
- Added a responsive mobile navigation menu that can be opened and closed using JavaScript.
- Created a signup/login modal with tab switching, close controls, Escape-key support, and form submission feedback.
- Used IntersectionObserver to reveal page sections when they enter the viewport instead of displaying all animations immediately.
- Applied CSS transitions and animations to make the navigation, buttons, cards, modal, and page sections feel smoother.
- Added responsive CSS using media queries, Flexbox, and Grid so the layout adapts to different screen sizes.
- Added reduced-motion support to improve accessibility for users who prefer fewer animations.