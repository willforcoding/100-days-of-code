# 100 Days Of Code - Log

## Day 0: Preparation
May 3, 2022

### **Today's Progress**
- [Post](https://twitter.com/willforcoding/status/1521146431624855552) asking for course recommendation

    > Hi, I am new here, can anybody recommend me what website to learn frontend dev?

- Googling on 100daysofcode, Found:

    - [100DaysOfCode](https://www.100daysofcode.com/) Official Website
	- [100Devs](https://leonnoel.com/100devs/) - leonnoel.com
	- [100 Days Of Web Development Path](https://100daysofcode.net/paths/100-days-challenge) - Udemy Course

- Googling on what course to take and decided on 5 courses based on my experiences (Please recommend me if you have any other course):

    - Learn to Code — For Free — Coding Courses for Busy People - [Freecodecamp](https://www.freecodecamp.org/)
    - Learn to Code with Interactive Tutorials - [Scrimba.com](https://scrimba.com/)
    - Learn to Code for Free – [Grasshopper](https://grasshopper.app/)
    - [Frontend Mentor](https://www.frontendmentor.io/) - Front-end coding challenges using a real-life workflow
    - [StackUp](https://app.stackup.dev/)
        

- Setup Git and [Github](https://github.com/)
- Learn Markdown with [MarkdownGuide](https://www.markdownguide.org/basic-syntax)
- Forking [100DaysOfCode Repo](https://github.com/Kallaway/100-days-of-code)
- Setting Up [Github Pages](https://pages.github.com/) for documenting my journey
- You can see the result in my website [willforcoding.com](willforcoding.com)

### **Thoughts**
Surprisingly there are many free and good resources out there. I will try the free one first. I like how markdown was used anywhere, so I decided to learn just enough to structure my logs. Also there are free services on Github to host your website.

## Day 1: HTML
May 4, 2022

### **Today's Progress**
- Change Github Pages to Cloudflare pages to use custom domain
- Basic HTML and HTML5
	- HTML Elements
	- Heading (`h1-6`)
	- Paragraph (`p`)
	- Comment (`<!--comment-->`)
	- HTML5 Elements
	- Anchor Elements (`a`) for external and internal
	- Images (`img`)
	- Unordered and ordered list ( `ul` and `ol`)
	- Form Element (`form`)
	- Text field (`input`) + placeholder
	- Submit Form (`button type="submit"`)
	- HTML5 Required Field (`required`)
	- Radio Button and Checkbox (input grouped by name attribute)
	- Nesting HTML Element
	- HTML Structure (Doctype `html` `head` `body`)
    - Empty Element
- Page to include all html element that I tried - [link](projects/hello.html)
- HTML Elements
    ![HTML Element.png](/assets/HTML%20Element.png)
    ![HTML Element with Attribute.png](/assets/HTML%20Element%20with%20Attribute.png)
- Resources
    - [MDN Basic HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
    - [MDN All HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

### **Thoughts**
There are many tag with functionality that we can use without having to code anything

### **Questions**
Can we make custom tag?

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
	- CSS googly eyes, you can copy the css and assign `googly-eyes` class to any html element to add googly eyes 🤣 - [link](projects/googly-eyes)
- CSS Declaration
	- CSS Declaration Syntax

	![CSS Declaration.png](assets/CSS%20Declaration.png)

	- CSS Box Model

	![CSS box model.png](assets/CSS%20box%20model.png)
	
- Resources
	- [FreeCodeCamp Basic CSS](https://www.freecodecamp.org/learn/responsive-web-design/#basic-css)
	- [MDN Basic CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
    - [MDN All CSS References](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

### **Thoughts**
CSS can makes website beautiful and pleasing for the eyes. The important part of it are to select elements and declare the style. I face some difficulties when creating project when the CSS not work the way I think, like why we must put relative div for the child absolute can refer for the relative div. Why not just using relative. There are many things in CSS that I am not touching yet. Will try it as I need. Especially flex box and grid. CSS Art are awesome, so I make project that use CSS to draw object.

### **Questions**
When exploring I see there are many ways to draw in website, SVG, canvas and CSS. What are the use cases for each of them?

## Day 3: Applied Visual Design
May 13, 2022

### **Today's Progress**
- Applied Visual Design
	- Building Card Layout
	- Center text using `text-align:center`
	- Justify paragraph using `text-align:justify` so that each line has equal width
	- `Right` text align and `left` text align (default) 
	- Make card have fixed size by setting `width: 245px`
	- Give some vertical spacing using `height: 25px` to h4
	- Use the strong Tag to Make Text Bold `<strong>text</strong>` equal to applying `font-weight: bold;`
	- Use the u Tag to Underline Text `<u>text</u>` equal to applying `text-decoration: underline;`
	- Use the em Tag to Italicize Text `<em>text</em>` equal to applying `font-style: italic;`
	- Use the s Tag to Strikethrough Text `<s>text</s>` equal to applying `text-decoration: line-through;`
	- Create a Horizontal Line Using the hr Element `<hr/>`
	- Adjust the background-color Property of Text `background-color: rgba(45, 45, 45, 0.1);`
	- Adjust the Size of a Heading Element Versus a Paragraph Element `font-size: 27px;`
	- Add a box-shadow to a Card-like Element, you can add multiple shadow on one declaration `box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);`
		- Box Shadow Syntax `box-shadow: offset-x offset-y blur-radius spread-radius color`
			- `offset-x` (how far to push the shadow horizontally from the element)
			-   `offset-y` (how far to push the shadow vertically from the element)
			-   `blur-radius`
			-   `spread-radius`
			-   `color`
	- Decrease the Opacity of an Element `opacity:0.7;`
	- Use the text-transform Property to Make Text Uppercase `text-transform:uppercase;` , we can also use `lowercase` and `capitalize`
	- Set the font-size for Multiple Heading Elements `font-size: 68px;`
	- Set the font-weight for Multiple Heading Elements `font-weight: 800;` which will give bold like effect with varying thickness based on the value supported by the font
	- Set the font-size of Paragraph Text `font-size: 16px;` 
	- Set the line-height of Paragraphs `line-height: 25px;`
	- Adjust the Hover State of an Anchor Tag `a:hover`
	- Change an Element's Relative Position
	
	```css
	p {
	  position: relative;
	  bottom: 10px;
	}	
	```
	
	- Move a Relatively Positioned Element with CSS Offsets with `top`, `bottom`, `left` and `right` property
	- Lock an Element to its Parent with Absolute Positioning
	
		```css
		#searchbar {
			position: absolute;
			top:50px;
			right:50px;
		}
		section {
			position: relative;
		}
		```
	
	- Lock an Element to the Browser Window with Fixed Positioning `position:fixed;` can add `top`, `bottom`, `left` and `right` property for positioning
	- Push Elements Left or Right with the float Property `float:left` or `float:right`
	- Change the Position of Overlapping Elements with the z-index Property `z-index:2`
	- Center an Element Horizontally Using the margin Property `margin:auto`
	- Learn about Complementary Colors
		- red (#FF0000) and cyan (#00FFFF) 
		- green (#00FF00) and magenta (#FF00FF)
		- blue (#0000FF) and yellow (#FFFF00)
	- Learn about Tertiary Colors
		- orange (#FF7F00)
		- cyan (#00FFFF)
		- raspberry (#FF007F)
	- Adjust the Color of Various Elements to Complementary Colors
	- Adjust the Hue of a Color by varying h in `hsl(120, 100%, 50%)` we can get different color
	- Adjust the Tone of a Color by only changing its saturation and lightness, shade for decreasing saturation and lightness and tint for increasing saturation and lightness
	- Create a Gradual CSS Linear Gradient `background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);`
	- Use a CSS Linear Gradient to Create a Striped Element

		```css
		repeating-linear-gradient(
		    45deg,
			yellow 0px,
			yellow 40px,
			black 40px,
			black 80px
	    );
		```

	- Create Texture by Adding a Subtle Pattern as a Background Image `background: url(https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png);`
	- Use the CSS Transform scale Property to Change the Size of an Element `transform: scale(1.5);`
	- Use the CSS Transform scale Property to Scale an Element on Hover 
	
		```css
		div:hover{
		  transform: scale(1.1);
		}
		```
	- Use the CSS Transform Property skewX to Skew an Element Along the X-Axis `transform: skewX(24deg);`
	- Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis `transform: skewY(-10deg);`
	- Create a Graphic Using CSS, built cresent moon using box shadow
	- Create a More Complex Shape Using CSS and HTML, made heart using `::before,::after
	- Learn How the CSS @keyframes and animation Properties Work

	```css
	rect {
		animation-duration: 4s;
	}
				
	@keyframes rainbow {
		0% {
			background-color: blue;
		}
		50% {
			background-color: green;
		}
		100% {
			background-color: yellow;
		}
	}
	```
	- Use CSS Animation to Change the Hover State of a Button

	```css
	button:hover {
	    animation-name: background-color;
	    animation-duration: 500ms;
	}

	@keyframes background-color{
	    100%{
	      background-color: #4791d0;
	    }
	}
	```
	- Modify Fill Mode of an Animation to `animation-fill-mode: forwards;` so the animation are not reset to initial state
	- Create Movement Using CSS Animation
	
	```css
	@keyframes rainbow {
		0% {
			background-color: blue;
			top: 0px;
			left: 0px;
		}
		50% {
			background-color: green;
			top: 50px;
			left: 25px;
		}
		100% {
			background-color: yellow;
			top: 0px;
			left: -25px;
		}
	}
	```

	- Create Visual Direction by Fading an Element from Left to Right

	```css
	@keyframes fade {
		50% {
			left: 60%;
			opacity: 0.1;
			}
		}
	```

	- Animate Elements Continually Using an Infinite Animation Count `animation-iteration-count: infinite;`
	- Make a CSS Heartbeat using an Infinite Animation Count 💓
	- Animate Elements at Variable Rates by changing keyframe percentage
	- Animate Multiple Elements at Variable Rates by changing animation duration slightly
	- Change Animation Timing with Keywords `animation-timing-function: ease-out;`
	- Learn How Bezier Curves Work linear equals `animation-timing-function: animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);`
	- Use a Bezier Curve to Move a Graphic ease-out equals `animation-timing-function: cubic-bezier(0, 0, 0.58, 1);` - [Cubic Bezier Generator](https://www.cssportal.com/css-cubic-bezier-generator/)
	- Make Motion More Natural Using a Bezier Curve by setting coordinate above 1 `cubic-bezier( 0.311, 0.441, 0.444, 1.649);`
-	Projects
	- CSS Animal Flip Card - [Link](projects/css-animal-flip-card)
-   Resources
	- [W3Schools How to make flip card](https://www.w3schools.com/howto/howto_css_flip_card.asp)
	- [MDN Transform Style](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style)
	- [MDN Perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
	- [MDN Calc CSS Function](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)
	- [MDN Min CSS Function](https://developer.mozilla.org/en-US/docs/Web/CSS/min)

### **Thoughts**
Learn about visual hierarchy, how to make some element standout to grab user attention using font size, font style, text decoration, elevation using shadow and z-index. Also how color works with each other and more about how to animation in CSS

### **Questions**
What are the benefits of CSS animation vs javascript animation?

## Contents
* [Log - click here to see my progress](log.md)
* [Rules](rules.md)
* [FAQ](FAQ.md)
* [Resources](resources.md)
