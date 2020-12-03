$(document).ready(function(){
    $(".training-utp__button").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('#contacts'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});