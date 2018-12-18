// refresh page at the top
$(document).ready(function () {
    $(this).scrollTop(0);
    $("div.mobile-nav").hide();
});

// js for arrow on header
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("nav").addClass("active");
    }
    else {
        $("nav").removeClass("active");
    }
});


// nav hamburger menu toggle-----------------------

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {   
hamburger.classList.toggle("is-active");
    $("div.mobile-nav").slideToggle("slow");
});



// Select all links with hashes-------------------------
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
