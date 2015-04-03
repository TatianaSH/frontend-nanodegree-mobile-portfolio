## Website Performance Optimization portfolio project

Master - contains human readable html, css, js files.
Gh-pages - copy of master.

Folder build/ contain files processed by Gulp.

## Hello, to view the site simply click the link below-
http://TatianaSH.github.io/frontend-nanodegree-mobile-portfolio

To view the optimized (minified, image optimezed, uglified javascript) version of site click the link below-
http://TatianaSH.github.io/frontend-nanodegree-mobile-portfolio/build

## Measuring the PageSpeed Insights Score-
https://developers.google.com/speed/pagespeed/insights/

After that, just copy and paste the link of the website into the bar and click analyze

##Optimizations part 1
- Losslessly compressed images, using Gulp and Gimp.
- Changed the sizes of images using Gimp.
- Minified all JS and CSS files using free online Minifiers.
- media="print" added to a css link. 
- Added async properties to a perfmatters.js file in the html.
- Replaced Google Analytics to async version as described https://developers.google.com/analytics/devguides/collection/gajs/. 
- Inlined above-the-fold style.css and font.css properties. Removed unnecesseary font versions (like cyrillic, etc..) from font.css.

##Optimizations part 2
- Moved all loop-invariant calculations out of for loops.
- Reduced number of pizzas to 100. This should be enough for a screen 2000px height.
- Replaced jQuery querySelectors to native getElementsByClassName and getElementById.
- Used CSS transform - translateX and translateZ to position pizzas and put each pizza to individual layer.
