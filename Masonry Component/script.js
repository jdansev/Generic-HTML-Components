
// Ensures the masrony grids are lined up with the container
const gridResizer = () => {
    $('.c-testimonials__card').addClass('c-testimonials__card--resized');
    $(window).off('resize', gridResizer);
}

$(window).on('resize', gridResizer);

$(document).ready(function() {
    $('[data-testimonials]').masonry({
        itemSelector: '[data-testimonial-card]',
        gutter: 40
    });
});
