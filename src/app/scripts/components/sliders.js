import $ from "jquery";
import "slick-carousel";

export default () => {
  if (window.innerWidth < 768) {
    $(".featured-list").addClass("products-slider");
    // const featured = $('.featured-list');
    // featured.each(function() {
    //     console.log($(this).parents('.tab').length)
    //     if($(this).parents('.tab').length == 0) {
    //         $(this).addClass('products-slider')
    //     }
    // })

    $(".list-slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true
    });
  }

  if (window.innerWidth < 1300) {
    $(".brands-list").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true,
      dots: true
    });
  }

  if (window.innerWidth < 901) {
    // $(".category-page-types-list").slick({
    //   slidesToShow: 3,
    //   centerMode: true,
    //   infinite: false,
    //   slidesToScroll: 1,
    //   variableWidth: true
    // });
    // $(".category-page-types-list").slick("slickNext");

    $(".category-page-types-list").flickity({
      freeScroll: true,
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });

    $(".types-block-list.slider").flickity({
      freeScroll: true,
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });

    // $(".types-block-list.slider").slick({
    //   slidesToShow: 3,
    //   centerMode: true,
    //   infinite: false,
    //   slidesToScroll: 1,
    //   variableWidth: true
    // });
    // $(".types-block-list.slider").slick("slickNext");
  }

  $(".header-cart-products").slick({
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    arrows: false,
    dots: false
  });
  $(".header-cart-products__count").text(
    `1/${$(".header-cart-products .cart-item").length}`
  );

  $(".header-cart-products").on(
    "beforeChange init",
    (event, slick, currentSlide, nextSlide) => {
      console.log({ currentSlide, nextSlide, slick });
      $(".header-cart-products__count").text(
        `${nextSlide + 1}/${slick.slideCount}`
      );
      if (nextSlide == 0) {
        $(".header-cart-products__arrow.prev").addClass("disabled");
      } else {
        $(".header-cart-products__arrow.prev").removeClass("disabled");
      }

      if (nextSlide + 1 == slick.slideCount) {
        $(".header-cart-products__arrow.next").addClass("disabled");
      } else {
        $(".header-cart-products__arrow.next").removeClass("disabled");
      }
    }
  );
  $(".header-cart-products__arrow.next").on("click", () => {
    $(".header-cart-products").slick("slickNext");
  });
  $(".header-cart-products__arrow.prev").on("click", () => {
    $(".header-cart-products").slick("slickPrev");
  });

  $(".similar-products-list").slick({
    arrows: false,
    variableWidth: true,
    infinite: true,
    slidesToShow: 2
  });

  $(".products-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    nextArrow: `
                    <button type="button" class="slick-arrow slick-next">
                        <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5919 19.5919L4.59188 34.5919C4.1692 35.0146 3.59591 35.252 2.99813 35.252C2.40036 35.252 1.82707 35.0146 1.40438 34.5919C0.981696 34.1692 0.744232 33.5959 0.744232 32.9981C0.744232 32.4003 0.981696 31.8271 1.40438 31.4044L14.8125 18L1.40814 4.59187C1.19884 4.38258 1.03282 4.13411 0.91955 3.86065C0.806281 3.5872 0.747982 3.29411 0.747982 2.99812C0.747982 2.70213 0.806281 2.40904 0.91955 2.13559C1.03282 1.86213 1.19884 1.61366 1.40814 1.40437C1.61743 1.19508 1.8659 1.02905 2.13935 0.915785C2.41281 0.802516 2.7059 0.744217 3.00189 0.744217C3.29787 0.744217 3.59096 0.802516 3.86442 0.915785C4.13787 1.02905 4.38634 1.19508 4.59564 1.40437L19.5956 16.4044C19.8051 16.6136 19.9713 16.8622 20.0845 17.1359C20.1978 17.4095 20.2559 17.7028 20.2555 17.9989C20.2552 18.295 20.1964 18.5882 20.0825 18.8615C19.9686 19.1349 19.8019 19.3831 19.5919 19.5919Z" fill="#80918F"/>
                        </svg>
                    </button>
                    `,
    prevArrow: `
                    <button type="button" class="slick-arrow slick-prev">
                        <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.40808 19.5919L16.4081 34.5919C16.8308 35.0146 17.4041 35.252 18.0018 35.252C18.5996 35.252 19.1729 35.0146 19.5956 34.5919C20.0183 34.1692 20.2557 33.5959 20.2557 32.9981C20.2557 32.4003 20.0183 31.8271 19.5956 31.4044L6.18746 18L19.5918 4.59187C19.8011 4.38258 19.9672 4.13411 20.0804 3.86065C20.1937 3.5872 20.252 3.29411 20.252 2.99812C20.252 2.70213 20.1937 2.40904 20.0804 2.13559C19.9672 1.86213 19.8011 1.61366 19.5918 1.40437C19.3825 1.19508 19.1341 1.02905 18.8606 0.915785C18.5872 0.802516 18.2941 0.744217 17.9981 0.744217C17.7021 0.744217 17.409 0.802516 17.1356 0.915785C16.8621 1.02905 16.6136 1.19508 16.4043 1.40437L1.40434 16.4044C1.19482 16.6136 1.02868 16.8622 0.91544 17.1359C0.802199 17.4095 0.744088 17.7028 0.744436 17.9989C0.744785 18.295 0.803587 18.5882 0.917471 18.8615C1.03135 19.1349 1.19808 19.3831 1.40808 19.5919Z" fill="#80918F"/>
                        </svg>
                    </button>
                    `,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          variableWidth: true,
          infinite: true,
          slidesToShow: 2,
          dots: true
        }
      }
    ]
  });

  $(".customer-reviews-list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    nextArrow: `
                    <button type="button" class="slick-arrow slick-next">
                        <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5919 19.5919L4.59188 34.5919C4.1692 35.0146 3.59591 35.252 2.99813 35.252C2.40036 35.252 1.82707 35.0146 1.40438 34.5919C0.981696 34.1692 0.744232 33.5959 0.744232 32.9981C0.744232 32.4003 0.981696 31.8271 1.40438 31.4044L14.8125 18L1.40814 4.59187C1.19884 4.38258 1.03282 4.13411 0.91955 3.86065C0.806281 3.5872 0.747982 3.29411 0.747982 2.99812C0.747982 2.70213 0.806281 2.40904 0.91955 2.13559C1.03282 1.86213 1.19884 1.61366 1.40814 1.40437C1.61743 1.19508 1.8659 1.02905 2.13935 0.915785C2.41281 0.802516 2.7059 0.744217 3.00189 0.744217C3.29787 0.744217 3.59096 0.802516 3.86442 0.915785C4.13787 1.02905 4.38634 1.19508 4.59564 1.40437L19.5956 16.4044C19.8051 16.6136 19.9713 16.8622 20.0845 17.1359C20.1978 17.4095 20.2559 17.7028 20.2555 17.9989C20.2552 18.295 20.1964 18.5882 20.0825 18.8615C19.9686 19.1349 19.8019 19.3831 19.5919 19.5919Z" fill="#80918F"/>
                        </svg>
                    </button>
                    `,
    prevArrow: `
                    <button type="button" class="slick-arrow slick-prev">
                        <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.40808 19.5919L16.4081 34.5919C16.8308 35.0146 17.4041 35.252 18.0018 35.252C18.5996 35.252 19.1729 35.0146 19.5956 34.5919C20.0183 34.1692 20.2557 33.5959 20.2557 32.9981C20.2557 32.4003 20.0183 31.8271 19.5956 31.4044L6.18746 18L19.5918 4.59187C19.8011 4.38258 19.9672 4.13411 20.0804 3.86065C20.1937 3.5872 20.252 3.29411 20.252 2.99812C20.252 2.70213 20.1937 2.40904 20.0804 2.13559C19.9672 1.86213 19.8011 1.61366 19.5918 1.40437C19.3825 1.19508 19.1341 1.02905 18.8606 0.915785C18.5872 0.802516 18.2941 0.744217 17.9981 0.744217C17.7021 0.744217 17.409 0.802516 17.1356 0.915785C16.8621 1.02905 16.6136 1.19508 16.4043 1.40437L1.40434 16.4044C1.19482 16.6136 1.02868 16.8622 0.91544 17.1359C0.802199 17.4095 0.744088 17.7028 0.744436 17.9989C0.744785 18.295 0.803587 18.5882 0.917471 18.8615C1.03135 19.1349 1.19808 19.3831 1.40808 19.5919Z" fill="#80918F"/>
                        </svg>
                    </button>
                    `,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          variableWidth: true,
          infinite: true,
          slidesToShow: 2,
          dots: true
        }
      }
    ]
  });

  $(".product-thumb-img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: false,
    asNavFor: $(".product-thumb-nav"),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          infinite: false,
          variableWidth: true,
          fade: false
        }
      }
    ]
  });
  $(".product-thumb-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    focusOnSelect: true,
    infinite: false,
    asNavFor: $(".product-thumb-img-slider"),
    nextArrow: `
                <button type="button" class="slick-arrow slick-next">
                    <svg width="36" height="21" viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4082 19.5919L1.40821 4.59191C0.985519 4.16922 0.748054 3.59594 0.748054 2.99816C0.748054 2.40039 0.985519 1.8271 1.40821 1.40441C1.83089 0.981725 2.40419 0.744261 3.00196 0.744261C3.59973 0.744261 4.17302 0.981725 4.59571 1.40441L18.0001 14.8125L31.4082 1.40817C31.6175 1.19887 31.866 1.03285 32.1394 0.91958C32.4129 0.806311 32.706 0.748012 33.002 0.748012C33.2979 0.748012 33.591 0.806311 33.8645 0.91958C34.1379 1.03285 34.3864 1.19887 34.5957 1.40817C34.805 1.61746 34.971 1.86593 35.0843 2.13938C35.1976 2.41284 35.2559 2.70593 35.2559 3.00192C35.2559 3.2979 35.1976 3.59099 35.0843 3.86445C34.971 4.1379 34.805 4.38637 34.5957 4.59567L19.5957 19.5957C19.3864 19.8052 19.1378 19.9713 18.8642 20.0846C18.5906 20.1978 18.2973 20.2559 18.0012 20.2556C17.705 20.2552 17.4119 20.1964 17.1385 20.0825C16.8652 19.9686 16.617 19.8019 16.4082 19.5919Z" fill="#80918F"/>
                    </svg>
                 </button>

                    `,
    prevArrow: `
                    <button type="button" class="slick-arrow slick-prev">
                        <svg width="36" height="21" viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4082 1.40821L1.40821 16.4082C0.985519 16.8309 0.748054 17.4042 0.748054 18.002C0.748054 18.5997 0.985519 19.173 1.40821 19.5957C1.83089 20.0184 2.40419 20.2559 3.00196 20.2559C3.59973 20.2559 4.17302 20.0184 4.59571 19.5957L18.0001 6.18758L31.4082 19.592C31.6175 19.8013 31.866 19.9673 32.1394 20.0805C32.4129 20.1938 32.706 20.2521 33.002 20.2521C33.2979 20.2521 33.591 20.1938 33.8645 20.0805C34.1379 19.9673 34.3864 19.8013 34.5957 19.592C34.805 19.3827 34.971 19.1342 35.0843 18.8607C35.1976 18.5873 35.2559 18.2942 35.2559 17.9982C35.2559 17.7022 35.1976 17.4091 35.0843 17.1357C34.971 16.8622 34.805 16.6138 34.5957 16.4045L19.5957 1.40446C19.3864 1.19495 19.1378 1.0288 18.8642 0.915562C18.5906 0.802321 18.2973 0.74421 18.0012 0.744559C17.705 0.744908 17.4119 0.80371 17.1385 0.917594C16.8652 1.03148 16.617 1.1982 16.4082 1.40821Z" fill="#80918F"/>
                        </svg>
                    </button>
                    `
  });

  $(".terminology-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: `
                    <button type="button" class="slick-arrow slick-next">
                        <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5919 19.5919L4.59188 34.5919C4.1692 35.0146 3.59591 35.252 2.99813 35.252C2.40036 35.252 1.82707 35.0146 1.40438 34.5919C0.981696 34.1692 0.744232 33.5959 0.744232 32.9981C0.744232 32.4003 0.981696 31.8271 1.40438 31.4044L14.8125 18L1.40814 4.59187C1.19884 4.38258 1.03282 4.13411 0.91955 3.86065C0.806281 3.5872 0.747982 3.29411 0.747982 2.99812C0.747982 2.70213 0.806281 2.40904 0.91955 2.13559C1.03282 1.86213 1.19884 1.61366 1.40814 1.40437C1.61743 1.19508 1.8659 1.02905 2.13935 0.915785C2.41281 0.802516 2.7059 0.744217 3.00189 0.744217C3.29787 0.744217 3.59096 0.802516 3.86442 0.915785C4.13787 1.02905 4.38634 1.19508 4.59564 1.40437L19.5956 16.4044C19.8051 16.6136 19.9713 16.8622 20.0845 17.1359C20.1978 17.4095 20.2559 17.7028 20.2555 17.9989C20.2552 18.295 20.1964 18.5882 20.0825 18.8615C19.9686 19.1349 19.8019 19.3831 19.5919 19.5919Z" fill="#80918F"/>
                        </svg>
                    </button>
                    `,
    prevArrow: `
                    <button type="button" class="slick-arrow slick-prev">
                        <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.40808 19.5919L16.4081 34.5919C16.8308 35.0146 17.4041 35.252 18.0018 35.252C18.5996 35.252 19.1729 35.0146 19.5956 34.5919C20.0183 34.1692 20.2557 33.5959 20.2557 32.9981C20.2557 32.4003 20.0183 31.8271 19.5956 31.4044L6.18746 18L19.5918 4.59187C19.8011 4.38258 19.9672 4.13411 20.0804 3.86065C20.1937 3.5872 20.252 3.29411 20.252 2.99812C20.252 2.70213 20.1937 2.40904 20.0804 2.13559C19.9672 1.86213 19.8011 1.61366 19.5918 1.40437C19.3825 1.19508 19.1341 1.02905 18.8606 0.915785C18.5872 0.802516 18.2941 0.744217 17.9981 0.744217C17.7021 0.744217 17.409 0.802516 17.1356 0.915785C16.8621 1.02905 16.6136 1.19508 16.4043 1.40437L1.40434 16.4044C1.19482 16.6136 1.02868 16.8622 0.91544 17.1359C0.802199 17.4095 0.744088 17.7028 0.744436 17.9989C0.744785 18.295 0.803587 18.5882 0.917471 18.8615C1.03135 19.1349 1.19808 19.3831 1.40808 19.5919Z" fill="#80918F"/>
                        </svg>
                    </button>
                    `
  });

  $(".terminology-slider").on(
      "beforeChange",
      (event, slick, currentSlide, nextSlide) => {
        $(".terminology-item").removeClass("active");
        $(".terminology-item")
            .eq(nextSlide)
            .addClass("active");
      }
  );

  $(".brands-swordsmiths-portfolio-item__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: `
                    <button type="button" class="slick-arrow slick-next">
                        <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5919 19.5919L4.59188 34.5919C4.1692 35.0146 3.59591 35.252 2.99813 35.252C2.40036 35.252 1.82707 35.0146 1.40438 34.5919C0.981696 34.1692 0.744232 33.5959 0.744232 32.9981C0.744232 32.4003 0.981696 31.8271 1.40438 31.4044L14.8125 18L1.40814 4.59187C1.19884 4.38258 1.03282 4.13411 0.91955 3.86065C0.806281 3.5872 0.747982 3.29411 0.747982 2.99812C0.747982 2.70213 0.806281 2.40904 0.91955 2.13559C1.03282 1.86213 1.19884 1.61366 1.40814 1.40437C1.61743 1.19508 1.8659 1.02905 2.13935 0.915785C2.41281 0.802516 2.7059 0.744217 3.00189 0.744217C3.29787 0.744217 3.59096 0.802516 3.86442 0.915785C4.13787 1.02905 4.38634 1.19508 4.59564 1.40437L19.5956 16.4044C19.8051 16.6136 19.9713 16.8622 20.0845 17.1359C20.1978 17.4095 20.2559 17.7028 20.2555 17.9989C20.2552 18.295 20.1964 18.5882 20.0825 18.8615C19.9686 19.1349 19.8019 19.3831 19.5919 19.5919Z" fill="#80918F"/>
                        </svg>
                    </button>
                    `,
    prevArrow: `
                    <button type="button" class="slick-arrow slick-prev">
                        <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.40808 19.5919L16.4081 34.5919C16.8308 35.0146 17.4041 35.252 18.0018 35.252C18.5996 35.252 19.1729 35.0146 19.5956 34.5919C20.0183 34.1692 20.2557 33.5959 20.2557 32.9981C20.2557 32.4003 20.0183 31.8271 19.5956 31.4044L6.18746 18L19.5918 4.59187C19.8011 4.38258 19.9672 4.13411 20.0804 3.86065C20.1937 3.5872 20.252 3.29411 20.252 2.99812C20.252 2.70213 20.1937 2.40904 20.0804 2.13559C19.9672 1.86213 19.8011 1.61366 19.5918 1.40437C19.3825 1.19508 19.1341 1.02905 18.8606 0.915785C18.5872 0.802516 18.2941 0.744217 17.9981 0.744217C17.7021 0.744217 17.409 0.802516 17.1356 0.915785C16.8621 1.02905 16.6136 1.19508 16.4043 1.40437L1.40434 16.4044C1.19482 16.6136 1.02868 16.8622 0.91544 17.1359C0.802199 17.4095 0.744088 17.7028 0.744436 17.9989C0.744785 18.295 0.803587 18.5882 0.917471 18.8615C1.03135 19.1349 1.19808 19.3831 1.40808 19.5919Z" fill="#80918F"/>
                        </svg>
                    </button>
                    `
  });



  // $(window).on("load", () => {
  //   if (window.innerWidth < 641) {
  //     $('.looking-for-katana__price').after($('.looking-for-katana__logos'));
  //     $('.looking-for-katana__logos').slick({
  //       slidesToShow: 5,
  //       slidesToScroll: 1,
  //       centerMode: true,
  //       arrows: false,
  //       variableWidth: true,
  //     })
  //   }
  // })

};

