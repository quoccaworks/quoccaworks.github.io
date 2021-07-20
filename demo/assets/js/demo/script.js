(function($){
  const container = $("#responsive-demo");

  $("nav ul li a").on("click", function(){
    const target = $($(this).attr("href"));
    $("html,body").stop().animate({scrollTop: target.offset().top});
    return false;
  });

  $("[name='header-type']").on("change", function(){
    container.attr("data-header-type", $(this).is(":checked") ? 2 : 1);
  }).first().trigger("change");

  $("[name='main-image-type']").on("change", function(){
    container.attr("data-main-image-type", $(this).val());
  }).first().trigger("change");

  $("[name='sp-responsive-type']").on("change", function(){
    container.attr("data-sp-responsive-type", $(this).val());
  }).first().trigger("change");

  $("[name='tb-responsive-type']").on("change", function(){
    const val = $(this).val();
    container.attr("data-tb-responsive-type", val);
    $("body").toggleClass("overflow-x-scroll", val == 1);
  }).first().trigger("change");

  $("[name='pc-responsive-type']").on("change", function(){
    container.attr("data-pc-responsive-type", $(this).val());
  }).first().trigger("change");
})(jQuery);
