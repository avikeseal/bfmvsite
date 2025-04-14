window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", this.window.scrollY > 0)
});

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


function toggleElementOnScroll(elementId, scrollThreshold, scrollStyles, topStyles)
 {
    window.addEventListener("scroll", function () {
        const element = document. getElementById(elementId);
        if (!element) return;

        const isScrolled = window.scrollY > scrollThreshold;
        const styles = isScrolled ? scrollStyles : topStyles;
        Object.assign(element.style, styles);
    });
 }

 toggleElementOnScroll("logo", 10,
 {
    opacity: "0",
    visibility: "hidden",
    transition: "opacity 0.6s ease"
 },
 {
    opacity: "1",
    visibility: "visible",
    transition: "opacity 0.6s ease-in 0.2s"
 }
);

toggleElementOnScroll("nav-links", 10,
    {
        margin: "1.5rem",
        transform: "translateY(-8px)",

    },
    {
        margin: "2.8rem",
        transform: "translateY(8px)",
    }
);