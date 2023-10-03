imagePopupHandler();
lenghtSelectionHandler();
collapsHandler();
cartItemCollapsHandler();

// Open popup
$('.view-all-button').on('click', function () {
    $('.popup-sword-part').addClass('active');
})

$('.popup-sword-part ul li').on('click', function () {
    const getDesktopImage = $(this).data('img');
    const getMobileImage = $(this).data('mobile');
    $('.popup-sword-part ul li').removeClass('active');
    $(this).addClass('active');

    $('.popup-sword-part .img-wrapper').find('img').attr('src', getDesktopImage);
    $('.popup-sword-part .img-wrapper').find('source').attr('srcset', getMobileImage);
});

// Close custom popup
$('.popup-sword-part .close').on('click', function () {
    $('.popup-sword-part').removeClass('active');
});


// open mobile cart
$('#open-mobile-cart').on('click', function() {
    $('.cart-content-wrapper').addClass('active');
});

$('.popup-on-mobile .close').on('click', function() {
    $('.cart-content-wrapper').removeClass('active');
});


$('.selec-input input').on('change', function(){
    if ($(this).is(":checked")) {
        $(this).closest('.single-selection, .row-selected').addClass('active');    
    } else {
        $(this).closest('.single-selection, .row-selected').removeClass('active');
    }
})

function imagePopupHandler() {
    const ele = $('.view-images');
    ele.on('click', function(){
        const getImages = JSON.parse($(this).attr('data-images'));
        new Fancybox(getImages);
    })
}

function lenghtSelectionHandler() {
    $('.wrap-selection').on('click', function(){
        $(this).parent().find('.dropdown').toggleClass('active');
    });

    // select handler
    $('.dropdown li').on('click', function(){
        const getSelected = $(this).find('.value').html();
        const getPrice = $(this).find('.price').html();

        const setName = `${getSelected} (<b>${getPrice}</b>)`;

        $(this).closest('.lenght-selection').find('.wrap-selection span').html(setName);
        $(this).closest('.dropdown').removeClass('active');
    })
}

$(document).click(function (event) {
    // Check if the clicked element is not within the target div
    if (!$('.wrap-selection').is(event.target) && !$('.dropdown').is(event.target) && $('.dropdown').has(event.target).length === 0) {
        // This click event occurred outside the div
        console.log("Click outside the div");
        $('.dropdown').removeClass('active');
    }
});

function collapsHandler() {
    $('.wrap-row-collaps .header-collaps').on('click', function(){
        $(this).toggleClass('active');
        $(this).parent().find('.content-of-collaps').slideToggle();
    })
}

function cartItemCollapsHandler() {
    $('.cart-item-row .row-head').on('click', function(){
        $(this).toggleClass('active');
        $(this).parent().find('.row-content').slideToggle();
    })
}