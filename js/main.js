$(document).ready(function(){
    // Scroll


    function scroll(from) {
        $(from).on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
    }

    scroll(".list-menu__item-masters");
    scroll(".list-menu__item-services");
    scroll(".list-menu__item-training");
    scroll(".list-menu__item-gallery");
    scroll(".list-menu__item-contacts");
    scroll(".training-utp__button");


    // Burger


    $(".burger-menu").on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("burger-menu_active");
        document.body.style.overflow = "hidden";
        $(".burger-modal").toggleClass("show");
        $(".burger-modal").toggleClass("hide");
    });
});