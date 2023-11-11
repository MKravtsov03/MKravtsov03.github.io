imagePopupHandler();
lenghtSelectionHandler();
collapsHandler();
cartItemCollapsHandler();

$(document).on('scroll',function () {
    if ($(this).scrollTop() >= 40) {
        $(".header-wrapper a.mobile-popup").addClass("active");
    } else {
        $(".header-wrapper a.mobile-popup").removeClass("active");
    }
});


var scrollDiv = $('.scroll-to-bottom');

if (scrollDiv.length > 0){
    scrollDiv.animate({ scrollTop: scrollDiv[0].scrollHeight }, 'slow');
}


// Open popup
$('.view-all-button').on('click', function (e) {
    e.preventDefault();
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
    $(this).toggleClass('active');
    $('.cart-content-wrapper').toggleClass('active');
    $('body').toggleClass("hide-overflow");
});

$('.popup-on-mobile .close').on('click', function() {
    $('.cart-content-wrapper').removeClass('active');
    $('body').removeClass('active');
});

$('.open-confirm').on('click', function(e) {
    e.preventDefault();
    $('.popup-confirmation').toggleClass('active');
});

$('.popup-confirmation .close-popup').on('click', function() {
    $('.popup-confirmation').removeClass('active');
});


$('.selec-input input').on('change', function(){
    if ($(this).is(":checked")) {
        $(this).closest('.single-selection, .row-selected').addClass('active');
        const getContentArea = $(this).closest('.single-selection');
        $('.next-button').addClass('active');

        console.log('getContentArea ===', getContentArea);
        
    } else {
        $(this).closest('.single-selection, .row-selected').removeClass('active');
        $('.next-button').removeClass('active');
    }
});

$('.selec-input input').on('change', function () {
    const contentArea = $(this).closest('.wrap-single-row').find('.content-area');

    if ($(this).is(":checked")) {
        $('.next-button').addClass('active');

        // Check if content area is available before toggling
        if (contentArea.length > 0) {
            contentArea.slideDown(); // You can use slideDown or any other method to show the content
            contentArea.find('textarea').focus(); // Set focus on the textarea
        }

    } else {
        $('.next-button').removeClass('active');

        // Check if content area is available before toggling
        if (contentArea.length > 0) {
            contentArea.slideUp(); // You can use slideUp or any other method to hide the content
        }
    }
});

$('.mobile-actions .next-button a').on('click', function(e){
    e.preventDefault(); // Prevent the default click action
    $(this).css(
        "opacity", 0.5,
        "pointer-events", 'none',
    )
    // Your actions to be performed before navigating
    $('.empty-view').addClass('animate');

    // Delay the navigation after 1 second (1000 milliseconds)
    setTimeout(function () {
        window.location.href = $(e.currentTarget).attr('href');
    }, 3000);
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
    $('.cart-item-row .row-head').on('click', function () {
        var $row = $(this).parent('.cart-item-row');
        var $content = $row.find('.row-content');
        var $rowHead = $(this);

        if ($rowHead.hasClass('active')) {
            // If the row is already active, slide up the content and remove the 'active' class
            $rowHead.removeClass('active');
            $content.slideUp();
        } else {
            // If the row is not active, close all other rows and open this one
            $('.cart-item-row .row-head.active').removeClass('active');
            $('.cart-item-row .row-content:visible').slideUp();
            $rowHead.addClass('active');
            $content.slideDown();
        }
    });

    const getLenght = $('.expanded-rows .single-item-row').length;
    if (getLenght <= 2 && $(window).width() > 1200){
        $('.expanded-rows .single-item-row .row-content').css(
            "max-height", "320px"
        );
    }
}