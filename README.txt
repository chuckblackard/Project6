*** This is a README Documentation page ***

This page is a landing page for a company that is in the business of eliminating bugs for software development.
The page utilizes CSS3, HTML5, JavaScript, and jQuery libraries.

This website was created by Chuck Blackard this is the first version (1.0)

You can find Chuck's CodePen here ---> https://codepen.io/dashboard/
You can find Chuck's GitHub page here ---> https://github.com/chuckblackard


I created this page on the date of April 15th, 2018

I used validator by W3C to valiate all of the code

The HTML document had 2 errors and 2 warnings:
Error within the head element for not having a title
Error for not having an alt attribute for the img
Warnings for non-needed src tags for the scripts within the setInterval\

The errors and warnings have been resolved

The CSS doocument had 2 errors for having justify-content and align-items

The JavaScript files had some errors as well
The animation.js had 3 errors and typer.js had 4 errors


The resources I used for this page are Bootstrap, typer.js for the animation of the text, StackOverflow for the bounce animation,
and W3C for refreshers on some CSS elements I haven't used in awhile.


The page directory layout is as follows
js
  typer.js
  typingAnimation.js
  animation.js
css
  styles.css
img
  bug.png
  grey-skyline.jpg
  techbug.png
.gitattributes
index.html
LICENSE
README.md


My landing page is laid out like a single column responsive design. I used CSS to adjust the positioning of the certain divs
with the content within them.


animation.js has 2 functions which control the animation of the image of the logo. one is a click function that allows the user to interact with the logo.
typer.js has many active functions doTyping takes the words you have in the span element in the html and puts them in a loop
setTimeout sets the time for the typing
TyperSetup is a class that sets up the cursor for the typing action
