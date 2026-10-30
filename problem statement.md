### Problem Statement

Develop a responsive and accessible one-page task-management website using HTML5, CSS3, and JavaScript ES6+. 
The website should present the TaskFlow application through a hero section, feature cards, 
user reviews, pricing plans, and contact information. 
Responsive design, semantic HTML, CSS Flexbox/Grid, theme customization, 
and accessibility practices should be used to create a clean and adaptable layout. 
JavaScript DOM manipulation and event handling should control interactive features such as dark/light mode, 
mobile navigation, authentication modals, and scroll-based animations. 
CSS transitions and responsive techniques should be used to provide smooth interactions and a consistent experience across different screen sizes. 

### Technical Problem Review

    - made the website interactive by adding a dark/light theme toggle instead of keeping the page in a fixed theme.
    - used localStorage to save the selected theme so the user's preference remains after refreshing the page.
    - added a responsive mobile navigation menu that can be opened and closed using JavaScript.
    - created a signup/login modal with tab switching, close controls, Escape-key support, and form submission feedback.
    - used IntersectionObserver to reveal page sections when they enter the viewport instead of displaying all animations immediately.
    - used CSS transitions and animations to make the navigation, buttons, cards, modal, and page sections feel smoother.
    - added responsive CSS using media queries, Flexbox, and Grid so the layout adapts to different screen sizes.
    - added reduced-motion support to provide a more accessible experience for users who prefer fewer animations.
