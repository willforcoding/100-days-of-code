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

## Contents
* [Log - click here to see my progress](log.md)
* [Rules](rules.md)
* [FAQ](FAQ.md)
* [Resources](resources.md)