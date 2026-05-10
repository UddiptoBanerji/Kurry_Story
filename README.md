# KURRY STORY - Authentic Indian Cuisine Website

A professional, responsive HTML and jQuery-based website for "Kurry Story," showcasing authentic Indian cuisine with a modern design inspired by popular restaurant websites.

## Features

### 1. **Responsive Design**
- Mobile-first approach
- Hamburger menu for mobile devices
- Optimized for all screen sizes (desktop, tablet, mobile)
- Smooth animations and transitions

### 2. **Key Sections**

#### Navigation Bar
- Sticky navigation with logo
- Quick access to all sections
- Mobile hamburger menu
- Direct "Order Now" CTA button

#### Hero Section
- Eye-catching banner with call-to-action
- Gradient background with primary and secondary colors
- Welcome message

#### About Us
- Restaurant story and philosophy
- Feature cards highlighting key aspects:
  - Authentic Recipes
  - Fresh Ingredients
  - Operating Hours
  - Easy Ordering

#### Services
- 6 service offerings:
  - Dine In
  - Takeaway
  - Home Delivery
  - Catering
  - Special Menus
  - Quick Service

#### Menu Section
- Dynamic menu filtering by category:
  - All
  - Starters
  - Main Course
  - Breads
  - Rice & Biryani
  - Desserts
- 25+ menu items with prices and descriptions
- Beautiful card layout with emoji icons

#### Gallery
- Visual showcase of dishes
- 8 gallery items with icons
- Responsive grid layout

#### Testimonials
- Customer reviews section
- Star ratings
- Auto-loading testimonials
- 6+ customer testimonials

#### Contact Section
- Contact information cards:
  - Phone
  - Email
  - Location
  - Hours
- Contact form for messages
- Fully functional form handling

#### Footer
- Quick links
- Social media links
- Company information
- Legal links (Privacy, Terms, Refund Policy)
- Copyright information

## File Structure

```
KURRY STORY/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # jQuery functionality
└── README.md           # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and Grid/Flexbox
- **jQuery 3.6.0** - DOM manipulation and interactivity
- **Font Awesome 6.4.0** - Icons

## Color Scheme

- **Primary Color**: #d4582e (Burnt Orange)
- **Secondary Color**: #f5a623 (Golden Orange)
- **Dark Color**: #2c3e50 (Dark Blue-Gray)
- **Light Color**: #ecf0f1 (Light Gray)
- **Text Color**: #333 (Dark Gray)

## Features

### JavaScript Functionality

1. **Dynamic Menu Loading**
   - Filter menu items by category
   - Display 25+ items with prices and descriptions
   - Smooth filtering animations

2. **Mobile Menu**
   - Hamburger toggle
   - Smooth open/close animations
   - Auto-close on link click

3. **Gallery Loading**
   - Dynamic gallery grid
   - Responsive layout

4. **Testimonials**
   - Dynamic testimonial loading
   - Star rating display
   - Grid layout for responsive display

5. **Contact Form**
   - Form validation
   - Success message on submission
   - Form reset functionality

6. **Scroll Animations**
   - Elements animate in on scroll
   - Smooth transitions
   - Professional appearance

7. **Smooth Scrolling**
   - Anchor link navigation
   - Smooth scroll animation
   - Auto-adjusted offset for fixed navbar

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## Getting Started

1. **Extract the files** to your desired location (e.g., C:\Sources\KURRY STORY)

2. **Open in Browser**
   - Double-click `index.html` to open in your default browser
   - Or use a local server:
     ```
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

3. **Customize**
   - Update restaurant details in HTML
   - Modify colors in CSS variables (`:root`)
   - Update contact information
   - Add your own menu items in `js/main.js`

## Customization Guide

### Update Contact Information
Edit the Contact section in `index.html`:
```html
<a href="tel:+919830028093">+919830028093</a>
<p><a href="mailto:info@kurrystory.com">info@kurrystory.com</a></p>
```

### Add New Menu Items
Edit `js/main.js` and add items to the `menuData` array:
```javascript
{ id: 26, name: 'Dish Name', category: 'category', price: '₹XXX', description: 'Description', icon: '🍛' }
```

### Change Colors
Edit `css/style.css` variables:
```css
:root {
    --primary-color: #d4582e;
    --secondary-color: #f5a623;
    /* ... */
}
```

### Add Restaurant Images
- Replace emoji icons with actual images
- Update image paths in HTML and CSS
- Consider using services like Unsplash for food images

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS with CSS variables
- Minimal jQuery usage for better performance
- Lightweight design with emoji icons (no heavy image loading by default)
- Smooth animations using CSS transitions

## Future Enhancements

1. Add online ordering system
2. Integrate payment gateway
3. Add image gallery with lightbox
4. Implement reservation system
5. Add multi-language support
6. Create admin panel for menu management
7. Add customer ratings and reviews system
8. Integrate with delivery platforms

## License

This project is created for "KURRY STORY" restaurant website.

## Support

For questions or customizations, please reach out to the development team.

---

**Project Created**: 2024
**Last Updated**: 2024
