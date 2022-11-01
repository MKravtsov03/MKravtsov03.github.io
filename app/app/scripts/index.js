import "./markup-menu";
import $ from "jquery";
import "jquery-ui/dist/jquery-ui.min";

import Popups from "./components/popups";
import Select from "./components/select";
import sliders from "./components/sliders";

global.$ = $;
global.jQuery = $;
document.addEventListener("DOMContentLoaded", () => {
  sliders();
  global.customPopups = new Popups();
  global.customSelect = new Select();

  console.log($(".accordion").find(".accordion-item.open"));

  $(".accordion")
    .find(".open")
    .find(".accordion__slide")
    .slideDown();
  $(".accordion")
    .find(".open")
    .find(".accordion__handler")
    .addClass("active");

  $(".accordion").on("click", ".accordion__handler", function accordionSlide() {
    const item = $(this).parent();
    const accordion = $(this).parents(".accordion");
    if (item.find(".accordion__handler").hasClass("active")) {
      item.find(".accordion__slide").slideUp();
      item.find(".accordion__handler").removeClass("active");
      item.removeClass("active");
      return;
    }
    accordion.find(".accordion__slide").slideUp();
    accordion.find(".accordion__handler").removeClass("active");
    accordion.find(".accordion__item").removeClass("active");
    item.find(".accordion__slide").slideDown();
    item.find(".accordion__handler").addClass("active");
    item.addClass("active");
  });

  const PRICE_MIN = +$("#price-range").attr("data-min");
  const PRICE_MAX = +$("#price-range").attr("data-max");

  $("#price-range").slider({
    range: true,
    min: PRICE_MIN,
    max: PRICE_MAX,
    values: [PRICE_MIN, PRICE_MAX],
    slide: function(event, ui) {
      $("#amount_min").val(ui.values[0]);
      $("#amount_max").val(ui.values[1]);
    }
  });

  $("#amount_min").change(function() {
    $("#price-range").slider("values", 0, $(this).val());
  });
  $("#amount_max").change(function() {
    $("#price-range").slider("values", 1, $(this).val());
  });

  $(".price-range__reset").on("click", () => {
    $("#price-range").slider("values", 0, PRICE_MIN);
    $("#price-range").slider("values", 1, PRICE_MAX);
    $("#amount_min").val(PRICE_MIN);
    $("#amount_max").val(PRICE_MAX);
  });

  $(document).on("click", ".anchor", function anchorScroll(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 120
      },
      500
    );
  });

  $(document).on("click", ".scrollTop",  () => {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      800
    );
  });


  $(".burger").on("click", function menuToggle() {
    $(this).toggleClass("open");
    $(".menu-block").toggleClass("open");
  });

  $(".search__handler").on("click", function searchToggle() {
    if ($(".search-form").hasClass("open")) {
      $(this).removeClass("open");
      $(".search-form").removeClass("open");
    } else {
      $(this).addClass("open");
      $(".search-form").addClass("open");
    }

  });

  const readMoreText = $('.category-heading__desc').text();

  $(window).on("load resize", () => {
    if (window.innerWidth < 768) {
      $(".product-info__desc").before($(".product-options__select"));

      $(".product-options").before($(".product-actions"));

      $(".about-item__title").each(function() {
        $(this)
          .parents(".about-item")
          .prepend($(this));
      });

      const showedText = `${readMoreText.slice(0, 125)}...`;
      const restText = readMoreText.slice(125)
      $('.category-heading__desc').html(`${showedText}
                                        <div class="category-heading__desc-hide">${restText}</div>
                                        <div class="category-heading__read-more">
                                            mai mult
                                        </div>
                                       
`)
      $(document).on('click', '.category-heading__read-more', function() {
        if (!$(this).hasClass('active')) {
          $(this).addClass('active');
          $(this).parent().html(`${readMoreText}
                                        <div class="category-heading__read-more active">
                                            mai mult
                                        </div>`)
        } else {
          $(this).parent().html(`${showedText}
                                        <div class="category-heading__desc-hide">${restText}</div>
                                        <div class="category-heading__read-more">
                                            mai mult
                                        </div>`)
        }
      })
    } else {
      $('.category-heading__desc').html(`${readMoreText}`);
      $(".product-options").prepend($(".product-options__select"));

      $(".product-adv").after($(".product-actions"));

      $(".about-item__title").each(function() {
        $(this)
          .parent()
          .find(".about-item__inner")
          .prepend($(this));
      });
    }

    if (window.innerWidth < 993) {
      $(".info-inner__heading").after($(".info-aside"));
    } else {
      $(".info-wrapp").prepend($(".info-aside"));
    }
  });

  if (window.innerWidth < 993) {
    $(".navigation__link.with-child").on("click", e => {
      e.preventDefault();
    });
  }
});
