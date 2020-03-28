
$(document).on('click', '[data-accordion-read-more]', function() {
    let accordionContent = $(this).closest('[data-accordion]').find('[data-accordion-content]');
    let accordion = $(this).closest('[data-accordion]');
    let accordionReadMore = $(this);

    if (!accordion.data('open')) {
        accordionContent.stop(false, true).slideDown(() => {
            accordionReadMore.text('Read Less');
            accordion.data('open', true);
        });
    } else {
        accordionContent.stop(false, true).slideUp(() => {
            accordionReadMore.text('Read More');
            accordion.data('open', false);
        });
    }
});
