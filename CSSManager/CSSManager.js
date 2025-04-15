// IMPORTANT
// Optimal use would be for non accessible css properties like :hover, :active, etc. Since everything else can be done via .style
// Since it wasn't built for large scale use
// Since js does not have a way to add pseudo classes, this is a workaround to add styles dynamically to the document head
// This class is a CSS manager that allows you to add, remove, and toggle styles for HTML elements dynamically.
// Also you can create any amount of instances of this class and they will not interfere with each other

class CSSManager {
    // format: { elementName: { propertyName: value, ... }, ... }
    // varaibles format: { varaibleName: value, ... }
    constructor(styles = {}, varaibles = {}) {
        this.styles = styles;
        this.root = varaibles;
        this.renderedStyles = {};
        this.id = `CSSManagerStyles_${CSSManager._generateUniqueId()}`;
        this.renderStyles();
    }

    // Static method to generate a unique ID
    static _generateUniqueId() {
        return Math.random().toString(36).substr(2, 9);
    }

    // Function to add a new style to the styles object or override an existing one
    addStyles(name, styles) {
        Object.keys(styles).forEach((property) => {
            CSS.supports(property, styles[property]) ? null : console.warn(`CSS property ${property} with value ${styles[property]} is not supported`);
        });

        if (!this.styles[name]) {
            this.styles[name] = {};
        }

        Object.keys(styles).forEach((property) => {
            this.styles[name][property] = styles[property];
        });

        this.renderStyles();
    }

    // Function to remove a style from the styles object
    removeStyle(name, property) {
        if (!this.styles[name][property]) {
            console.warn(`Property ${property} does not exist in ${name}`);
            return;
        }

        delete this.styles[name][property];
        this.renderStyles();
    }

    // Function to remove all styles from a specific element
    removeAllStyles(name) {
        if (!this.styles[name]) {
            console.warn(`Element ${name} does not exist`);
            return;
        }

        delete this.styles[name];
        this.renderStyles();
    }

    // Function to toggle a style on or off
    toggleStyle(name, property) {
        if (this.styles[name][property] && !this.styles[name][property].includes("disabled")) {
            this.styles[name][property] += " disabled";
            this.renderStyles();
        }
        else if(this.styles[name][property]) {
            this.styles[name][property] = this.styles[name][property].replace(" disabled", "");
            this.renderStyles();
        }
        else {
            console.warn(`Property ${property} does not exist in ${name}`);
        }
    }

    // Function to reset all styles to nothing
    resetStyles() {
        this.styles = {};
        this.renderStyles();
    }

    // Function to add a new variable to the root object or override an existing one
    addVariables(variables) {
        Object.keys(variables).forEach((name) => {
            let formattedName = name.startsWith("--") ? name : `--${name}`;

            if (!CSS.supports(formattedName, variables[name])) {
                console.warn(`CSS variable ${formattedName} with value ${variables[name]} is not supported`);
            }
            this.root[formattedName] = variables[name];
        });
        this.renderStyles();
    }

    // Function to remove a variable from the root object
    removeVariable(name) {
        if (!this.root[name]) {
            console.warn(`Variable ${name} does not exist`);
            return;
        }

        delete this.root[name];
        this.renderStyles();
    }

    // Function to add @ rules, like @media, @keyframes, etc.
    addAtRule(ruleName, content) {
        let atRule = `@${ruleName}`;
        if (!this.styles[atRule]) {
            this.styles[atRule] = "";
        }
        if(!content || content === "") {
            console.warn(`@${ruleName} content is empty`);
        }
        this.styles[atRule] = content;
        this.renderStyles();
    }

    // Function to render the styles to the document head
    renderStyles() {
        if(document.querySelector(`#${this.id}`)) {
            document.querySelector(`#${this.id}`).remove();
        }
        let styleSheet = document.createElement("style");
        styleSheet.id = this.id;
        styleSheet.type = "text/css";
        styleSheet.innerHTML = this._getStylesRendered();

        document.head.appendChild(styleSheet);
    }

    // Helper functions

    // Function to get all the styles in normal css format
    _getStylesRendered() {
        let styles = "";
        // Check if unrendered styles are the same as rendered to avoid re-rendering
        if(this.styles === this.renderedStyles){
            return;
        }

        if(this.root){
            styles += `:root { \n`;
            Object.keys(this.root).forEach((property) => {
                styles += `\t${property}: ${this.root[property]}; \n`;
            });
            styles += `}\n`;
        }

        Object.keys(this.styles).forEach((name) => {
            if (name.startsWith("@")) {
                styles += `\n${name} {\n\t${this.styles[name]}\n}\n`;
                return;
            }
            else{
                let properties = this.styles[name];
                styles += `\n${name} { \n`;
                Object.keys(properties).forEach((property) => {
                    if(!properties[property].includes("disabled")) {
                        styles += `\t${property}: ${properties[property]}; \n`;
                    }
                });
                styles += `}\n`;
            }
        });

        this.renderedStyles = styles;
        return styles;
    }

    // Function to get a specific style by name
    _getStyles(name) {
        if (!this.styles[name]) {
            console.warn(`Element ${name} does not exist`);
            return null;
        }

        return this.styles[name];
    }
}   