
$(document).on('click', '[data-launch-gallery-btn]', function() {
    $(this).lightGallery({
        dynamic: true,
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        enableDrag: true,
        enableSwipe: true,
        download: false,
        share: false,
        zoom: false,
        fullScreen: false,
        autoplayControls: false,

        dynamicEl: [
            {
                "src": 'https://images.pexels.com/photos/3540375/pexels-photo-3540375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'thumb': 'https://images.pexels.com/photos/3540375/pexels-photo-3540375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                "src": 'https://images.pexels.com/photos/698170/pexels-photo-698170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'thumb': 'https://images.pexels.com/photos/698170/pexels-photo-698170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                "src": 'https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'thumb': 'https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
        ]
    })
});
