## Day 2: CSS
May 10, 2022

### **Today's Progress**
- Basic CSS
	- Inline Style (attribute in HTML Element `style=""`)
	- Internal Style (style tag in head `<style></style>`)
	- External Style (link to external css files `style.css`)
	- Using class for styling
	- `color`, `font-size`, `font-family`
	- Import Google Fonts 

		```html
		<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
		```
        
	- `font-family` fallback or degrade
	- image width
	- multiple class
	- `border-color`,`border-width`,`border-style`,`border-radius` (50% make circle)
	- `background-color`
	- selector `tag`, `#id` , `.class`)
	- `padding` (top,right,bottom,left)
	- `margin` (top,right,bottom,left)0%
	- Attribute Selectors `[attribute='value']`
	- Absolute versus Relative Units
	- Style Inheritance
	- Override Style (class,id,inline, !important)
	- Hexadecimal used in color
	- Use CSS function `rgb(red,green,blue)` to give color
	- CSS Variable `--variable-name: value;`
	- Use Variable `css-property:var(--variable-name)`
	- Use Variable with fallback `css-property:var(--variable-name,black)`
	- Media Query `@media (max-width: 350px)`
- Projects
	- CSS googly eyes, you can copy the css and assign `googly-eyes` class to any html element to add googly eyes 🤣 - [link](/projects/googly-eyes)
- CSS Declaration
	- CSS Declaration Syntax

	![CSS Declaration.png](/assets/CSS%20Declaration.png)

	- CSS Box Model

	![CSS box model.png](/assets/CSS%20box%20model.png)
	
- Resources
	- [FreeCodeCamp Basic CSS](https://www.freecodecamp.org/learn/responsive-web-design/#basic-css)
	- [MDN Basic CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
    - [MDN All CSS References](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

### **Thoughts**
CSS can makes website beautiful and pleasing for the eyes. The important part of it are to select elements and declare the style. I face some difficulties when creating project when the CSS not work the way I think, like why we must put relative div for the child absolute can refer for the relative div. Why not just using relative. There are many things in CSS that I am not touching yet. Will try it as I need. Especially flex box and grid. CSS Art are awesome, so I make project that use CSS to draw object.

### **Questions**
When exploring I see there are many ways to draw in website, SVG, canvas and CSS. What are the use cases for each of them?