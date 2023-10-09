$(function () {
    $('div').click(function () {
        $(this).toggleClass('favorite');
        $(this).find('i').addClass('favoriting');
        setTimeout(() => {
            $(this).find('i').
            removeClass('favoriting').
            toggleClass('fontawesome-heart fontawesome-heart-empty');
        }, 2000);
    });
});