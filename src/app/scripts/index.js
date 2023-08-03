import $ from "jquery";
import "jquery-ui/dist/jquery-ui.min";
import lightGallery from "lightgallery";
import "jquery-ui-touch-punch";

import "./markup-menu";
import Popups from "./components/popups";
import Select from "./components/select";
import Tabs from "./components/tabs";
import flickitySlider from "./flickity";
import sliders from "./components/sliders";

global.$ = $;
global.jQuery = $;
document.addEventListener("DOMContentLoaded", () => {
  flickitySlider();
  sliders();
  global.customPopups = new Popups();
  global.customSelect = new Select();
  global.tabs = new Tabs();

  if (window.innerWidth > 899) {
    $(window).on("scroll", () => {
      if ($(window).scrollTop() > 45) {
        $(".header").addClass("fixed");
      } else {
        $(".header").removeClass("fixed");
      }
    });
  }

  $(".nav-btn").click(function() {
    $(this).toggleClass("active");
    $(".header-nav").toggleClass("active");
  });

  $(".accordion")
    .find(".open")
    .children(".accordion__slide")
    .slideDown();
  $(".accordion")
    .find(".open")
    .children(".accordion__handler")
    .addClass("active");

  $(".accordion").on("click", ".accordion__handler", function accordionSlide(
    e
  ) {
    e.stopPropagation();
    const item = $(this).parent();
    const accordion = $(this).closest(".accordion");
    if (item.children(".accordion__handler").hasClass("active")) {
      console.log(item.children(".accordion__slide"));
      item.children(".accordion__slide").slideUp();
      item.children(".accordion__handler").removeClass("active");
      item.removeClass("active");
      item
        .children(".accordion__slide")
        .find(".custom-checkbox input")
        .prop("checked", false);
      return;
    }
    accordion.find(".accordion__slide").slideUp();
    accordion.find(".accordion__handler").removeClass("active");
    accordion.find(".accordion__item").removeClass("active");
    item.children(".accordion__slide").slideDown();
    item.children(".accordion__handler").addClass("active");
    item.addClass("active");
  });

  const PRICE_MIN = +$("#price-range").attr("data-min");
  const PRICE_MAX = +$("#price-range").attr("data-max");

  $(".price-filter__min").text(`$${PRICE_MIN}`);
  $(".price-filter__max").text(`$${PRICE_MAX}`);

  $("#price-range").slider({
    range: true,
    min: PRICE_MIN,
    max: PRICE_MAX,
    values: [PRICE_MIN, PRICE_MAX],
    slide: (event, ui) => {
      $(".price-filter__min").text(`$${ui.values[0]}`);
      $(".price-filter__max").text(`$${ui.values[1]}`);
    }
  });

  $(document).delegate(".ui-page", "touchmove", false);

  $(".custom-checkbox input").on("click", e => {
    e.stopPropagation();
  });

  $(".filter-handler").on("click", () => {
    $(".filters").addClass("active");
  });
  $(".filter-results-btn").on("click", () => {
    $(".filters").removeClass("active");
  });

  $(".coupon-btn").on("click", () => {
    navigator.clipboard.writeText(
      $(".coupon__value")
        .text()
        .trim()
    );
    $(".coupon-notification").addClass("active");
    setTimeout(() => {
      $(".coupon-notification").removeClass("active");
    }, 2000);
  });

  lightGallery(document.getElementById("product-thumb-img"), {
    speed: 500,
    selector: ".product-thumb-img__item",
    controls: true,
    download: false,
    plugins: []
  });

  lightGallery(document.getElementById("comparison-table"), {
    speed: 500,
    selector: ".comparison-table__head-cell a",
    controls: true,
    download: false,
    plugins: []
  });

  $(window).on("load resize", () => {
    if (window.innerWidth < 1101) {
      $(".product-heading-holder").prepend(
        $(".product-heading .product-info-rating")
      );
      $(".product-heading-holder").prepend($(".product-info-meta"));
      $(".product-heading-holder").prepend($(".product-info-header"));
    } else {
      $(".product-info").prepend($(".product-heading .product-info-rating"));
      $(".product-info").prepend($(".product-info-meta"));
      $(".product-info").prepend($(".product-info-header"));
    }

    if (window.innerWidth < 768) {
      $(".faq-title").after($(".faq-sidebar"));
    } else {
      $(".faq-holder").prepend($(".faq-sidebar"));
    }
  });

  $(".anchor").on("click", function ancordsLinks(e) {
    const id = $(this).attr("href");
    e.preventDefault();
    const top = $(id).offset().top - 150;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $(".header-cart-btn").on("click", () => {
    $(".header-cart").addClass("active");
  });

  $(".header-cart__close, .header-cart__overlay").on("click", () => {
    $(".header-cart").removeClass("active");
  });

  if (window.innerWidth < 901) {
    const navOpened = [];
    const backBtn = `<button class="nav-back">BACK</button>`;

    const menuHandle = (selector, link) => {
      const currentItem = $(link).parent();
      const parentMenuLink = $(link)
        .parent()
        .parent()
        .parent()
        .children("a");
      const parentLinkContent = parentMenuLink.text().replace("BACK", "");
      if (!$(link).hasClass("active")) {
        currentItem.siblings().hide();
        currentItem.show();
        $(link).addClass("active");
        currentItem.children(".sub-nav").show();
        $(link).prepend(backBtn);
        if (selector === "sub-nav") {
          let navBreadcrumbs = $(document).find(".nav-breadcrumbs");
          if (!navBreadcrumbs.length) {
            navBreadcrumbs = document.createElement("div");
            $(navBreadcrumbs).addClass("nav-breadcrumbs");
            navOpened.push(parentLinkContent.trim().toLocaleLowerCase());
            $(navBreadcrumbs).text(navOpened);
            $(".header-nav__list").before(navBreadcrumbs);
          } else {
            navOpened.push(parentLinkContent.trim().toLocaleLowerCase());
            $(".nav-breadcrumbs").text(
              navOpened.join(" / ").toLocaleLowerCase()
            );
          }
          parentMenuLink.hide();
        }
      } else {
        currentItem.find(".sub-nav").hide();
        currentItem
          .parent()
          .find(`.${selector}__item`)
          .show();
        $(link)
          .find(".nav-back")
          .remove();
        $(link).removeClass("active");
        if (selector === "sub-nav") {
          parentMenuLink.show();
          navOpened.pop();
          $(".nav-breadcrumbs").text(navOpened.join(" / ").toLocaleLowerCase());
        }
      }
      if (navOpened.length < 1) {
        $(".nav-breadcrumbs").remove();
      }
    };

    $(".header-nav__item.has-child > .header-nav__link").on("click", function(
      e
    ) {
      e.preventDefault();
      menuHandle("header-nav", this);
    });

    $(".sub-nav__item.has-child > .sub-nav__link").on("click", function(e) {
      e.preventDefault();
      menuHandle("sub-nav", this);
    });
  }

  $(".search__field").on("focus", function() {
    $(".search").addClass("active");
  });

  $(document).on("click", function(e) {
    const container = $(".search");
    console.log(container.has(e.target).length);
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".search").removeClass("active");
    }
  });

  $(window).on("scroll", () => {
    $(".shipping-section").each(function() {
      const sectionTop = $(this).offset().top;
      const sectionHeight = $(this).height();
      console.log({ scroll: $(window).scrollTop(), sectionTop, sectionHeight });
      if ($(window).scrollTop() >= sectionTop - sectionHeight / 3 - 100) {
        const current = $(this).attr("id");
        $(".shipping-nav-item").each(function() {
          if ($(this).attr("href") == `#${current}`) {
            $(".shipping-nav-item").removeClass("active");
            $(this).addClass("active");
          }
        });
      }
      if ($(window).scrollTop() < 300) {
        $(".shipping-nav-item").removeClass("active");
      }
    });
  });

  $(".faq-wrapp .faq-item__heading").on("click", function() {
    if (
      !$(this)
        .parent()
        .hasClass("active")
    ) {
      $(this)
        .parent()
        .addClass("active");
      return $(this)
        .parent()
        .find(".faq-item__content")
        .slideDown();
    }
    $(this)
      .parent()
      .removeClass("active");
    $(this)
      .parent()
      .find(".faq-item__content")
      .slideUp();
  });

  $(".faq-nav a").on("click", function() {
    $(".faq-nav a").removeClass("active");
    $(this).addClass("active");
  });

  $(".terminology-item").click(function(e) {
    e.stopPropagation();
    $(".terminology-item").removeClass("active");
    $(this).addClass("active");
    $('.terminology-slider').slick('slickGoTo', $(this).index());
    console.log($(this).index());
  });

  $(".wiki-heading__list a").on("click", function ancordsLinks(e) {
    const id = $(this).attr("href");
    e.preventDefault();
    const top = $(id).offset().top - 170;
    $("body,html").animate({ scrollTop: top }, 800);
  });

  $(window).on("scroll", () => {
    $(".wiki-section").each(function() {
      const sectionTop = $(this).offset().top;
      const sectionHeight = $(this).height();
      console.log({sectionTop, sectionHeight})
      if ($(window).scrollTop() >= (sectionTop - 190) && $(window).scrollTop() <= (sectionTop + sectionHeight)) {
        const current = $(this).attr("id");
        $(".wiki-heading__list a").each(function() {
          if ($(this).attr("href") == `#${current}`) {
            $(".wiki-heading__list a").removeClass("active");
            $(this).addClass("active");
          }
        });
      }
      if ($(window).scrollTop() < 140) {
        $(".wiki-heading__list a").removeClass("active");
      }
    });

    $(".faq-category").each(function() {
      const sectionTop = $(this).offset().top;
      const sectionHeight = $(this).height();
      if ($(window).scrollTop() >= (sectionTop - 190) && $(window).scrollTop() <= (sectionTop + sectionHeight)) {
        const current = $(this).attr("id");
        console.log(current)
        $(".faq-nav a").each(function() {
          if ($(this).attr("href") == `#${current}`) {
            $(".faq-nav a").removeClass("active");
            $(this).addClass("active");
          }
        });
      }
      if ($(window).scrollTop() < 100) {
        $(".faq-nav a").removeClass("active");
      }
    });

    $(".article-content .content-area").each(function() {
      const sectionTop = $(this).offset().top;
      const sectionHeight = $(this).height();
      if ($(window).scrollTop() >= (sectionTop - 190) && $(window).scrollTop() <= (sectionTop + sectionHeight)) {
        const current = $(this).attr("id");
        console.log(current)
        $(".article-nav a").each(function() {
          if ($(this).attr("href") == `#${current}`) {
            $(".article-nav a").removeClass("active");
            $(this).addClass("active");
          }
        });
      }
      if ($(window).scrollTop() < 100) {
        $(".article-nav a").removeClass("active");
      }
    });

  });

  $('.mobile-search-handler').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.header-inner .search').hide();
    } else {
      $(this).addClass('active');
      $('.header-inner .search').show();
    }
  })

  $('.blog-head-search__handler').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.header__overlay').hide();
      $('.blog-search').removeClass('active');
    } else {
      $(this).addClass('active');
      $('.header__overlay').show();
      $('.blog-search').addClass('active');
    }
  })

});
