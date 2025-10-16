# Profile Card - HNG Stage 0

A responsive, accessible Profile Card component built with semantic HTML, modern CSS, and vanilla JavaScript. This project fulfills all requirements for the HNG Stage 0 task.

## 🚀 Live Demo

[View Live Demo](https://fe-stage0.vercel.app) - _https://fe-stage0.vercel.app_

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

## 📝 Notes

-   The time display updates every second to maintain reasonable accuracy
-   Avatar image includes a fallback SVG for error cases
-   All external links include `rel="noopener noreferrer"` for security
-   The component is fully self-contained with no external dependencies
-   CSS includes support for reduced motion and high contrast preferences

## 🤝 Contributing

This is a Stage 0 task submission. If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue.

## 📄 License

This project is part of the HNG Stage 0 task and is available for educational purposes.
