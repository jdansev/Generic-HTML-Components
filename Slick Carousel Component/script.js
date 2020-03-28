
$(document).ready(function() {
    $('[data-carousel]').not('.slick-initialized').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        appendDots: $('[data-carousel-dots-container]')
    });

    $('[data-carousel-nav-next]').click(function() {
        $('[data-carousel]').slickNext();
    });
    $('[data-carousel-nav-prev]').click(function() {
        $('[data-carousel]').slickPrev();
    });
});
