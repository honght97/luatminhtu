export default function MenuModule() {
  let width = $(window).width();
  let heightHeader = $(".header-wrapper").outerHeight(true);
  const main = $(".main").css("padding-top", heightHeader);
  // onscroll
  const header = $(".header-wrapper");
  let lastScrollTop = 0;
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop) {
      header.addClass("is-fixed");
    } else {
      header.removeClass("is-fixed");
    }
  });
  // mobile
  $(".js-bar").click((e) => {
    let current = $(e.currentTarget);
    current.toggleClass("is-active");
    $(".header-main").toggleClass("is-active");
    if (current.hasClass("is-active")) {
      $(".main").off("touchmove");
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "unset");
    }
  });
  if (width < 992) {
    $(".js-sub .submenu").hide();
    $(".js-sub").click((e) => {
      let current = $(e.currentTarget);
      current.toggleClass("is-active");
      current.find(".submenu").slideToggle();
    });
  }
}
