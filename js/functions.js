// Modal stuff
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("images");
var captionText = document.getElementById("caption");

// Function to open modal
window.openModal = function(image) {
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// Function to hide the loader though there currently isn't one for this website
function hideLoader() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("loading2").style.display = "none";
    document.getElementById("preload").style.display = "none";
}


// Function for drop down menu on mobile phones using JQuery
$(document).ready(function () {
    $(".navButton").on("click", function () {
        $("nav ul").toggleClass("open");
        $(".menu").toggleClass("open");
        $("nav a").toggleClass("open");
        $("nav").toggleClass("open");
        $(".navButton hr").toggleClass("open");
    });
});

function navBarScroll() {
    var navBar = document.getElementById('nav');
    var currentY = window.pageYOffset;
    if (currentY > 350) {
        navBar.style.opacity = "0.8";
        //navBar.style.fontSize = "8px"
    }
    else {
        navBar.style.opacity = "1";
        //navBar.style.fontSize = "11px"
    }
}
window.addEventListener("scroll", navBarScroll);

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


