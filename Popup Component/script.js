
const showPopup = () => {
    $('[data-popup]').addClass('c-popup--active');
    $('html').css('overflow', 'hidden');
};
const closePopup = () => {
    $('[data-popup]').removeClass('c-popup--active');
    $('html').css('overflow', 'auto');
}

$(document).on('click', '[data-popup-close]', () => {
    closePopup();
});

$(document).ready(() => {
    setTimeout(() => {
        showPopup();
    }, 500);
});
