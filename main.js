// nav header 
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)

    
})


//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

$(document).ready(function () {
    // Get the current page URL
    var currentUrl = window.location.href;

    // Handle clicks on the links
    $(".nav-links a").click(function () {
        // Remove the active class from all links
        $(".nav-links a").removeClass("active-link");

        // Add the active class to the clicked link
        $(this).addClass("active-link");
    });

    // Highlight the active link based on the current URL
    $(".nav-links a").each(function () {
        if (currentUrl.includes($(this).attr("href"))) {
            $(this).addClass("active-link");
        }
    });
});

//logo when scrolling
document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("headerContainer");
    var logo = document.getElementById("logoImage");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            // Add a class to switch to the white logo when scrolling
            logo.classList.add("scroll-logo");
        } else {
            // Remove the class when at the top of the page
            logo.classList.remove("scroll-logo");
        }
    });
});



