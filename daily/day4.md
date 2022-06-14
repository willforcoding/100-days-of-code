## Day 4: Applied Accessibility
June 13, 2022

### **Today's Progress**
- Restructuring log so easy to read day by day
- Finished Applied Accessibility and Responsive Web Design on FreeCodeCamp
- Applied Accessibility
	- Add a Text Alternative to Images for Visually Impaired Accessibility `<img src="doingKarateWow.jpeg" alt="Camper cat doing karate">`
	- Alt Text Should be Left Blank if images used for background or decorator
	- Use Headings to Show Hierarchical Relationships of Content
	- Semantic Tags `main`, `header`, `footer`, `nav`, `article`, and `section` works like div, but provide meaning for assistive technology and search indexing engine
	- Jump Straight to the Content Using the main Element `<main></main>`, used to wrap main content, should contains only one per page
	- Wrap Content in the article Element `<article></article>` , article tag used to group independent self contained content where section tag group related content
	- Make Screen Reader Navigation Easier with the header Landmark `<header></header>` wrap introductor information and navigation links
	- Make Screen Reader Navigation Easier with the nav Landmark `<nav></nav>` for repeated links in your website
	- Make Screen Reader Navigation Easier with the footer Landmark `<footer></footer>` used to contain copyright information at the bottom or links to related documents
	- Improve Accessibility of Audio Content with the audio Element
	
		```html
		<audio controls>
			<source src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg">
		</audio>
		```

	- Improve Chart Accessibility with the figure Element, figure can be used for image and chart with its figcaption summarize conclusion or explaining trends of chart showing in the figure
	
        ```html
        <figure>
            <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
            <br>
            <figcaption>
                Master Camper Cat demonstrates proper form of a roundhouse kick.
            </figcaption>
        </figure>
        ```

	- Improve Form Field Accessibility with the label Element, using `for` attribute on label with value `id` attribute of the `<input>` element will makes text clickables
	
		```html
		<form>
		    <label for="name">Name:</label>
			<input type="text" id="name" name="name">
		</form>
		```

	- Wrap Radio Buttons in a fieldset Element for Better Accessibility

        ```html
        <fieldset>
            <legend>What level ninja are you?</legend>
            <input id="newbie" type="radio" name="levels" value="newbie">
            <label for="newbie">Newbie Kitten</label><br>
            <input id="intermediate" type="radio" name="levels" value="intermediate">
            <label for="intermediate">Developing Student</label><br>
            <input id="master" type="radio" name="levels" value="master">
            <label for="master">Master</label>
        </fieldset>
        ```

	- Add an Accessible Date Picker `<input type=date id="pickdate" name="date">`
	- Standardize Times with the HTML5 datetime Attribute `<time datetime="2016-09-15">Thursday, September 15<sup>th</sup></time>`
	- Make Elements Only Visible to a Screen Reader by Using Custom CSS to move element out the viewport and give 1 pixel width and height
	
        ```css
        .sr-only {
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            top: auto;
            overflow: hidden;
        }	
        ```

	- Improve Readability with High Contrast Text, must be around 4.5 - 1 contrast ratio
	- Avoid Colorblindness Issues by Using Sufficient Contrast
	- Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
	- Give Links Meaning by Using Descriptive Link Text, wrap link around informative text instead of click here or others
	- Make Links Navigable with HTML Access Keys `<a id="second" accesskey="c" href="#">`
	- Use tabindex to Add Keyboard Focus to an Element `<p tabindex="0">`
	- Use tabindex to Specify the Order of Keyboard Focus for Several Elements, tabindex will cycle through the sequence of specified index value before moving to index 0
- Responsive Web Design Principles
	- Create a Media Query to change the presentation of content based on different viewport sizes
	
		```css
		@media (max-height:800px){
			p{
				font-size: 10px;
			}
		}
		```

	- Make an Image Responsive

	  ```css
		.responsive-img {
		max-width:100%;
		height: auto;
		}
	  ```
			  
	- Use a Retina Image for Higher Resolution Displays, make image size half of actual image size
	- Make Typography Responsive
		- `vw` (viewport width): `10vw` would be 10% of the viewport's width.
		- `vh` (viewport height): `3vh` would be 3% of the viewport's height.
		- `vmin` (viewport minimum): `70vmin` would be 70% of the viewport's smaller dimension (height or width).
		- `vmax` (viewport maximum): `100vmax` would be 100% of the viewport's bigger dimension (height or width).

### **Thoughts**
Learned how to develop our website usable by as many people as possible. No project complete on this day. After this will switch to new freecodecamp new project based learning.

### **Questions**
Is there any way to check your site already accessible enough?
