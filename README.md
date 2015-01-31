The Jatsby Web Framework
========================
Jatsby is a minimalist CSS framework for creating elegant webpages and experimenting with your latest designs. It comes with four breakpoints, an essential reset CSS block, awesome fonts, and a color palette with today at heart. 

Favicons
--------
Favicons should be packaged in a favicon.ico file, which can include multiple resolutions for the various pixel densities out there (retina, 4k, etc.).

Just place your favicon.ico file in the same location as index.html (the root of the framework folder) and you're good to go!

Breakpoints
------------
jatsby.css includes four simple breakpoints for making your website responsive. And if responsive isn't on the agenda, simply stick to mobile.css' 320px breakpoint.

mobile.css - for @imports, reset, and global declarations; 320px breakpoint
tablet.css - 600px breakpoint
desktop.css - 900px breakpoint and 1201px breakpoint (for hover effects and other desktop-specific CSS)

There's a lot of meaning behind these numbers! Below are the screen widths of some of the world's most-popular gadgets:

 320px - iPhone (4, 4s, 5, 5s)  
 375px - iPhone 6  
 540px - Nexus 5  
 600px - Nexus 7  
 720px - Surface Pro 3  
 768px - iPad (3, Mini, Air)  
 800px - Nexus 10  
 960px - Nexus 7 (Landscape)   
1024px - iPad (Landscape)  
1200px - Nexus 10 (Landscape)  
1280px - MacBook Pro 13" (Retina and non-Retina)  

Notice that up to 1200px, a device could be a tablet, hence the 1201+ desktop breakpoint, which is primarily for restricting :hover effects to mouse-and-keyboard computers.

Fonts
-----
Jatsby comes with some neat, free-to-use fonts that you can @import from Jatsby.com directly for easy implimentation.

Aileron
Bebas Neue
Lato
Lobster
Mohave
Montserrat
Simplifica

Colors
------
These aren't quite finalized, yet, but they will be in a supplimental update to v0.7. In the meantime, you can sip the "beta" colors from jatsby.com to try them out!

Notes
--------------
Remember, Jatsby's in beta! It's not perfect just yet, and it will likely change a lot by the time v1.0 rolls around.
