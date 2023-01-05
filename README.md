# bjmcshane.github.io

https://www.youtube.com/watch?v=bmpI252DmiI&t=838s


Current bug list:
- can't use the Helvetica Neue font face for some unknown reason. Some weird import bug that I thought was due to pathing but apparently doesn't impact the other two font faces. Something to do with ttf?
- The contact-link fading is bugged in components/Sidebar/index.scss. For whatever reason it won't display the 'CONTACT' text while hovering over the link. No issue with other two, some problem in index.js?
- useEffect in components/Home/useEffect makes the whole page blank and won't pring any errors in a try catch (~41:00)
- I'm skipping over the pacman loading animation (~1:03:00)
- the contact form was hovering over all the text on the page, coulnd't figure out why so I just added a much larger margin-top part