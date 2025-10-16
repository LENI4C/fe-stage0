# Profile Card - HNG Stage 0

A responsive, accessible Profile Card component built with semantic HTML, modern CSS, and vanilla JavaScript. This project fulfills all requirements for the HNG Stage 0 task.

## 🚀 Live Demo

[View Live Demo](https://your-netlify-url.netlify.app) - _Replace with your actual deployment URL_

## 📋 Features

-   ✅ **Semantic HTML**: Uses proper semantic elements (`<article>`, `<header>`, `<figure>`, `<nav>`, `<section>`)
-   ✅ **Accessibility**: Full keyboard navigation, ARIA labels, focus management
-   ✅ **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
-   ✅ **Testable**: All elements include required `data-testid` attributes
-   ✅ **Dynamic Content**: Real-time display of current time in milliseconds
-   ✅ **Modern CSS**: Flexbox/Grid layouts with smooth animations
-   ✅ **Error Handling**: Fallback avatar image and graceful error handling

## 🎯 Required Elements (All Present)

| Element                     | data-testid                  | Status |
| --------------------------- | ---------------------------- | ------ |
| Profile card root container | `test-profile-card`          | ✅     |
| Name (plain text)           | `test-user-name`             | ✅     |
| Short biography (paragraph) | `test-user-bio`              | ✅     |
| Current time (milliseconds) | `test-user-time`             | ✅     |
| Avatar image                | `test-user-avatar`           | ✅     |
| Social links list           | `test-user-social-links`     | ✅     |
| Individual social links     | `test-user-social-{network}` | ✅     |
| Hobbies list                | `test-user-hobbies`          | ✅     |
| Dislikes list               | `test-user-dislikes`         | ✅     |

## 🛠️ Setup Instructions

### Prerequisites

-   A modern web browser
-   A local web server (optional, for development)

### Local Development

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/profile-card-stage0.git
    cd profile-card-stage0
    ```

2. **Open in browser**

    - Simply open `index.html` in your browser, or
    - Use a local server for better development experience:

        ```bash
        # Using Python
        python -m http.server 8000

        # Using Node.js (if you have http-server installed)
        npx http-server

        # Using PHP
        php -S localhost:8000
        ```

3. **View the application**
    - Open `http://localhost:8000` in your browser
    - Or directly open `index.html` in your browser

## 📱 Responsive Breakpoints

-   **Mobile**: < 768px (stacked layout)
-   **Tablet**: 768px - 1023px (side-by-side layout)
-   **Desktop**: ≥ 1024px (enhanced spacing and larger elements)

## ♿ Accessibility Features

-   **Keyboard Navigation**: All interactive elements are keyboard accessible
-   **Focus Management**: Visible focus indicators for all focusable elements
-   **ARIA Labels**: Descriptive labels for screen readers
-   **Semantic HTML**: Proper heading hierarchy and landmark elements
-   **Alt Text**: Descriptive alt text for images
-   **High Contrast Support**: CSS media queries for high contrast mode
-   **Reduced Motion**: Respects user's motion preferences

## 🧪 Testing

The component includes built-in validation for all required `data-testid` attributes. Open the browser console to see validation results.

### Manual Testing Checklist

-   [ ] All `data-testid` attributes are present and correctly named
-   [ ] Time displays current milliseconds (updates every second)
-   [ ] Avatar image loads correctly (with fallback)
-   [ ] Social links open in new tabs with proper security attributes
-   [ ] Keyboard navigation works for all interactive elements
-   [ ] Layout is responsive across different screen sizes
-   [ ] Focus indicators are visible when navigating with keyboard

### Automated Testing

You can use the following selectors for automated testing:

```javascript
// Example test selectors
const profileCard = document.querySelector('[data-testid="test-profile-card"]');
const userName = document.querySelector('[data-testid="test-user-name"]');
const userBio = document.querySelector('[data-testid="test-user-bio"]');
const currentTime = document.querySelector('[data-testid="test-user-time"]');
const avatar = document.querySelector('[data-testid="test-user-avatar"]');
const socialLinks = document.querySelector(
    '[data-testid="test-user-social-links"]'
);
const hobbies = document.querySelector('[data-testid="test-user-hobbies"]');
const dislikes = document.querySelector('[data-testid="test-user-dislikes"]');
```

## 🎨 Customization

### Changing Content

-   Edit `index.html` to modify text content, links, and image sources
-   Update the avatar image URL in the `<img>` tag
-   Modify social media links and their `data-testid` attributes
-   Add or remove hobbies/dislikes items

### Styling

-   Modify `styles.css` to change colors, fonts, spacing, and layout
-   The CSS uses CSS custom properties for easy theming
-   Responsive breakpoints can be adjusted in the media queries

### Functionality

-   Edit `script.js` to modify time update frequency or add new features
-   The time update interval can be changed (currently set to 1000ms)

## 📁 Project Structure

```
profile-card-stage0/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Responsive CSS with modern layouts
├── script.js           # JavaScript for dynamic functionality
└── README.md           # This file
```

## 🔧 Technical Details

### HTML Semantics

-   `<article>`: Main profile card container
-   `<header>`: Profile header with avatar and basic info
-   `<figure>`: Avatar image with caption
-   `<nav>`: Social media links navigation
-   `<section>`: Separate sections for hobbies and dislikes
-   `<ul>`/`<li>`: Proper list structures for hobbies and dislikes

### CSS Features

-   CSS Grid and Flexbox for responsive layouts
-   CSS custom properties for consistent theming
-   Smooth transitions and hover effects
-   Mobile-first responsive design
-   Accessibility-focused styling

### JavaScript Features

-   Real-time time display using `Date.now()`
-   Error handling for image loading
-   Keyboard navigation support
-   Focus management for accessibility
-   Built-in validation for test attributes

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command to: `echo "No build step required"`
3. Set publish directory to: `/` (root)
4. Deploy automatically on every push

### GitHub Pages

1. Go to repository Settings > Pages
2. Select source: Deploy from a branch
3. Choose `main` branch and `/` folder
4. Your site will be available at `https://username.github.io/repository-name`

### Other Platforms

-   **Vercel**: Connect GitHub repo, no configuration needed
-   **Surge.sh**: `npm install -g surge && surge`
-   **Firebase Hosting**: Use Firebase CLI to deploy

## 📝 Notes

-   The time display updates every second to maintain reasonable accuracy
-   Avatar image includes a fallback SVG for error cases
-   All external links include `rel="noopener noreferrer"` for security
-   The component is fully self-contained with no external dependencies
-   CSS includes support for reduced motion and high contrast preferences

## 🤝 Contributing

This is a Stage 0 task submission. If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue.

## 📄 License

This project is part of the Frontend Wizards Stage 0 task and is available for educational purposes.
