$("#show-menu-1").on("click", function() {
    $("#hidden-menu-1").animate({
"bottom": 0
    },800);
});
$("#show-menu-2").on("click", function() {
    $("#hidden-menu-2").animate({
"bottom": 0
    },800);
});
$("#hidden-menu-1 .close").on("click", function() {
    $("#hidden-menu-1").animate({
"bottom": "-100vh"
    }, 500);
});
$("#hidden-menu-2 .close").on("click", function() {
    $("#hidden-menu-2").animate({
"bottom": "-100vh"
    }, 500);
});
$(".up-btn").on("click", function(){
    $("html, body").animate ({
    scrollTop: 0
    }, 'slow');
    });



// скрол ссылок на сайте
    $(document).ready(function() {
        $("a.nav-link").click(function () { 
            $("html, body").animate ({  
            scrollTop: $($(this).attr("href")).offset().top + "px"}, {duraction:1000,
                easing: "swing"
            });
            return false;
        });
    });
