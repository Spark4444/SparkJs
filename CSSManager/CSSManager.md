## Features
* Add, remove, and toggle styles dynamically for HTML elements.
* Add and remove CSS variables to the `:root` object.
* Add `@rules` like `@media` or `@keyframes`.
* Render styles dynamically to the document head.
* Reset all styles or remove specific styles.
* Toggle styles on or off for specific elements.
* Generate unique IDs for style blocks to avoid errors.

## Examples
```html
<!-- Example HTML -->
<div class="myClass">Hello World</div>
```
```javascript
// Create an instance of CSSManager
const cssManager = new CSSManager();

// Add styles to an element
cssManager.addStyles(".myClass", {
    color: "red",
    "font-size": "16px"
});

// Add a CSS variable
cssManager.addVariables({
    "--main-color": "blue"
});

// Add an @media rule
cssManager.addAtRule("media (max-width: 600px)", `
    .myClass {
        color: green;
    }
`);

// Toggle a style property
cssManager.toggleStyle(".myClass", "color");

// Remove a specific style property
cssManager.removeStyle(".myClass", "color");

// Remove all styles for an element
cssManager.removeAllStyles(".myClass");

// Reset all styles
cssManager.resetStyles();
```
```css
/* Example CSS Output */
:root {
    --main-color: blue;
}

.myClass {
    font-size: 16px;
}

@media (max-width: 600px) {
    .myClass {
        color: green;
    }
}
```