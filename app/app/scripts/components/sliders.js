import $ from 'jquery'
import 'slick-carousel'

export default () => {

    $('.product-thumb__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: $('.product-thumb__nav'),
    })

    $('.product-thumb__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        asNavFor: $('.product-thumb__slider'),
    })

    if ($(window).width() < 768) {

        $('.blog-section .blog-list').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false,
            dots: false,
        });

        $('.about-products-list').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false,
            dots: false,
        });
    }
}