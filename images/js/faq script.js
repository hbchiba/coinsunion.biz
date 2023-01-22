jQuery(document).ready(function() {
    jQuery(".rank-math-list-item .rank-math-question").click(function() {
        jQuery(this).parents(".rank-math-list-item").siblings().find(".rank-math-answer").hide(600);
        jQuery(this).parents(".rank-math-list-item").siblings().find(".rank-math-question").removeClass("open");
        if (jQuery(this).next().is(":visible")) {
            jQuery(this).next().hide(600);
            jQuery(this).removeClass("open");
        } else {
            jQuery(this).addClass("open");
            jQuery(this).next().show(600);
        }
    });
});