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

function toggleElementOnScroll(elementId, scrollThreshold) {
    window.addEventListener("scroll", function() {
        const element = document.getElementById(elementId);
        if (!element) return;

        if (window.scrollY > scrollThreshold) {
            element.style.opacity = "0";
            element.style.visibility = "hidden";
            element.style.transition = "opacity 0.3s ease";
        } else {
            element.style.opacity = "1";
            element.style.visibility = "visible";
            element.style.transition = "opacity 0.3s ease";
        }

    });
}

toggleElementOnScroll("logo", 100);

