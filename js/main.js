$(function () {
    //   init navbar
    $(".button-collapse").sideNav();

    //  init slider
    $(".slider").slider({
        indicators: false,
        height: $(window).height() - $("nav").height()
    });

    // the min-height image in the hero area
    $(".slider .slides li").css({
        minHeight: $(window).height() - $("nav").height()
    });

    $("input.autocomplete").autocomplete({
        data: {
            Apple: null,
            Microsoft: null,
            nokia: null,
            "windows 10": null,
            google: null,
            facebook: null
        },
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
        minLength: 1 // The minimum length of the input for the autocomplete to start. Default: 1.
    });
    var maxHeight = -1;
    $(".feature .myCard").each(function () {
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });

    $(".feature .myCard").each(function () {
        $(this).height(maxHeight);
    });

    //  init the height for the popular places
    var popheight = -1;
    $(".section-popular .card").each(function () {
        popheight = popheight > $(this).height() ? popheight : $(this).height();
    });

    $(".section-popular .card").each(function () {
        $(this).height(popheight);
    });

    var imgHeight = -1;
    $(".section-popular .card img").each(function () {
        imgHeight = imgHeight > $(this).height() ? imgHeight : $(this).height();
    });

    $(".section-popular .card img").each(function () {
        $(this).height(imgHeight);
    });

    //    scrollspy init
    $(".scrollspy").scrollSpy();

    //    navbar rules for active links
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > $("#search").offset().top) {
            console.log("done");
            $("nav ul li.search a").parent().addClass("active").siblings("li").removeClass("active");
        } else {
            $("nav ul li.home a").parent().addClass("active").siblings("li").removeClass("active");
        }
        if (scrollTop > $("#popular").offset().top) {
            $("nav ul li.popular a").parent().addClass("active").siblings("li").removeClass("active");
        }
        if (scrollTop > $("#gallary").offset().top) {
            $("nav ul li.gallary a").parent().addClass("active").siblings("li").removeClass("active");
        }
    });
});
