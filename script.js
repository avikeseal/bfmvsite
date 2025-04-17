

/*function removeElementOnScroll(elementId, scrollThreshold) {
    window.addEventListener("scroll", function() {
        if (this.window.scrollY > scrollThreshold) {
            const element = document.getElementById(elementId);
            if (element) {
                element.remove();
                // optionally remove the event listener after removing the element
                window.removeEventListener("scroll", this);
            }
            
        }
    });
}

removeElementOnScroll("logo", 100);*/

/*function toggleElementOnScroll(elementId, scrollThreshold) {
    window.addEventListener("scroll", function() {
        const element = document.getElementById(elementId);
        if (!element) return;

        if (window.scrollY > scrollThreshold) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });
}

toggleElementOnScroll("logo", 100);*/

/*function toggleElementOnScroll(elementId, scrollThreshold) {
    window.addEventListener("scroll", function() {
        const element = document.getElementById(elementId);
        if (!element) return;

        if (window.scrollY > scrollThreshold) {
            element.style.opacity = "0";
            element.style.visibility = "hidden";
            element.style.transition = "opacity 0.6s ease";
        } else {
            element.style.opacity = "1";
            element.style.visibility = "visible";
            element.style.transition = "opacity 0.6s ease-in 0.2s";
        }

    });
}





toggleElementOnScroll("logo", 10);*/

//adds an event litener to the window object that listens for when the user 
//scrolls:
window.addEventListener("scroll", function(){
    //grabs the first nav element on the page and stores it in the 
    //nav variable 
    var nav = document.querySelector("header");
    //toggles the sticky class on the nav element on the page
    //if the page has been scrolled down from the top:
    nav.classList.toggle("sticky", this.window.scrollY > 0)
});

//reusable function that accepts:
//elementId: ID of the element to target
//scrollThreshold: how many pixels the user ahs to scroll before changes happen
//srollStyles: styles to apply after scrolling past threshold
//topStyles: styles to apply when near the top
function toggleElementOnScroll(elementId, scrollThreshold, scrollStyles, topStyles)
 {
    //scroll listener inside this fucntion
    //so the logic gets applied to the chosen element during scroll
    window.addEventListener("scroll", function () {
        //gets the DOM element with the specific ID
        const element = document. getElementById(elementId);
        //if the element doesn't exist on the page 
        //stop the function to avoid errors
        if (!element) return;

        //checks whether the page has been scrolled past the definite threshold
        const isScrolled = window.scrollY > scrollThreshold;
        //if scrolled, use scrollStyles if not use top Styles
        const styles = isScrolled ? scrollStyles : topStyles;
        //dynamically applies the selected styles to the element using 
        //Object.assign which merges the style properties
        Object.assign(element.style, styles);
    });
 }

 //applies the scroll effect w the element ID - logo
 //after scrolling down 10px the logo fades out and hides
 //when back to the top, the logo fades back in
 toggleElementOnScroll("logo", 10,
 {
    opacity: "0",
    visibility: "hidden",
    transition: "opacity 0.6s ease",
 },
 {
    opacity: "1",
    visibility: "visible",
    transition: "opacity 0.6s ease-in 0.2s"
 }
);

//same s above but with nav-links
//changes the margin and vertical position on scroll to create 
//movement to being the links closer together or float them subtly
toggleElementOnScroll("nav-links", 10,
    {
        margin: "0.5rem",
        transform: "translateY(-8px)",

    },
    {
        margin: "2.5rem",
        transform: "translateY(8px)",
    }
);

toggleElementOnScroll("navbar", 10,
    {
        padding: "0.2rem",
    },
    {
        padding: "0.8rem",
    }
);
