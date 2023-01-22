$(document).ready(function() {

    $(".dropdown img.flag").addClass("flagvisibility");

    $(".dropdown dt a").click(function() {
        $(".dropdown dd ul").toggle();
    });

    $(".dropdown dd ul li a").click(function() {
        var text = $(this).html();
        $(".dropdown dt a").html(text);
        $(".dropdown dd ul").hide();
    });
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown"))
            $(".dropdown dd ul").hide();
    });

    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();




    var percent = document.getElementById("Ultra").value;


    var percent = parseFloat(document.getElementById("Ultra").value);
    var minMoney = [10, 800, 1500, 3000, 100.00];
    var maxMoney = [799, 100000, 100000, 100000, 5001.00];
    $("#money").val(minMoney[0]);
    console.log($("#money").val(minMoney[0]));

    //Calculator
    function calc() {
        var money = parseFloat($("#money").val());
        switch (percent) {
            case 0:
                if ((money >= 10 && money < 999)) {
                    var profitDaily = money / 100 * 1;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 500 * 1 + money;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 1;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 500 * 0.5;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text('$' + profitDaily);
                    $("#profitTotal").text('$' + profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);
                    //} else if(isNaN(money) == true) {
                }
                if (money < 10) {
                    $("#profitDaily").text("Error!");
                    $("#profitTotal").text("Error!");
                    $("#profitPercent").text("Error!");
                    $("#profitNet").text("Error!");
                }
                if (money > 999) {
                    $("#profitDaily").text("Max: $999");
                    $("#profitTotal").text("Max: $999");
                    $("#profitPercent").text("Max: $999");
                    $("#profitNet").text("Max: $999");
                }
                break;
            case 1:
                if (money >= 10 && money <= 799) {

                    var profitDaily = money / 100 * 9;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 9 * 14;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 9;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 9 * 14;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);

                }
                if (money < 10) {
                    $("#profitDaily").text("Min: $10");
                    $("#profitTotal").text("Min: $10");
                    $("#profitPercent").text("Min: $10");
                    $("#profitNet").text("Min: $10");
                }
                if (money > 799) {
                    $("#profitDaily").text("Max: $799");
                    $("#profitTotal").text("Max: $799");
                    $("#profitPercent").text("Max: $799");
                    $("#profitNet").text("Max: $799");
                }
                break;
            case 2:
                if (money >= 800 && money <= 100000) {

                    var profitDaily = money / 100 * 15;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 15 * 10;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 15;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 15 * 10;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);

                }
                if (money < 800) {
                    $("#profitDaily").text("Min: $800");
                    $("#profitTotal").text("Min: $800");
                    $("#profitPercent").text("Min: $800");
                    $("#profitNet").text("Min: $800");
                }
                if (money > 100000) {
                    $("#profitDaily").text("Max: $100000");
                    $("#profitTotal").text("Max: $100000");
                    $("#profitPercent").text("Max: $100000");
                    $("#profitNet").text("Max: $100000");
                }
                break;
            case 3:
                if (money >= 1500 && money <= 100000) {

                    var profitDaily = money / 100 * 21.428;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 150;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 150;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 150 * 30;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);

                }
                if (money < 1500) {
                    $("#profitDaily").text("Min: $1500");
                    $("#profitTotal").text("Min: $1500");
                    $("#profitPercent").text("Min: $1500");
                    $("#profitNet").text("Min: $1500");
                }
                if (money > 100000) {
                    $("#profitDaily").text("Max: $100000");
                    $("#profitTotal").text("Max: $100000");
                    $("#profitPercent").text("Max: $100000");
                    $("#profitNet").text("Max: $100000");
                }
                break;
            case 4:
                if (money >= 3000 && money <= 100000) {

                    var profitDaily = money / 100 * 40;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 200;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 200;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 200 * 5;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);

                }
                if (money < 3000) {
                    $("#profitDaily").text("Min: $3000");
                    $("#profitTotal").text("Min: $3000");
                    $("#profitPercent").text("Min: $3000");
                    $("#profitNet").text("Min: $3000");
                }
                if (money > 100000) {
                    $("#profitDaily").text("Max: $100000");
                    $("#profitTotal").text("Max: $100000");
                    $("#profitPercent").text("Max: $100000");
                    $("#profitNet").text("Max: $100000");
                }

                break;
            case 5:
                if (money >= 5000 && money <= 100000) {

                    var profitDaily = money / 100 * 1000 / 50;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 1000;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 1000;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 1000 - money;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);
                    //} else if(isNaN(money) == true) {
                }
                if (money < 5000) {
                    $("#profitDaily").text("Min: $5000");
                    $("#profitTotal").text("Min: $5000");
                    $("#profitPercent").text("Min: $5000");
                    $("#profitNet").text("Min: $5000");
                }
                break;
            case 6:
                if (money >= 10 && money <= 1000) {

                    var profitDaily = money / 100 * 3;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 3 * 50 + money;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 3;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 3 * 50;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);

                }
                if (money < 10) {
                    $("#profitDaily").text("Min: $10");
                    $("#profitTotal").text("Min: $10");
                    $("#profitPercent").text("Min: $10");
                    $("#profitNet").text("Min: $10");
                }
                break;
            case 7:
                if (money >= 100 && money <= 50000) {

                    var profitDaily = money / 100 * 4;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 4 * 50 + money;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 4;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 4 * 50;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);

                }
                if (money < 100) {
                    $("#profitDaily").text("Min: $100");
                    $("#profitTotal").text("Min: $100");
                    $("#profitPercent").text("Min: $100");
                    $("#profitNet").text("Min: $100");
                }
                break;
            case 8:
                if (money >= 1000 && money <= 100000) {

                    var profitDaily = money / 100 * 5;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 5 * 50 + money;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 5;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 5 * 50;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);

                }
                if (money < 1000) {
                    $("#profitDaily").text("Min: $1000");
                    $("#profitTotal").text("Min: $1000");
                    $("#profitPercent").text("Min: $1000");
                    $("#profitNet").text("Min: $1000");
                }
                break;
            case 9:
                if (money >= 5000 && money <= 100000) {

                    var profitDaily = money / 100 * 10;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 10 * 50 + money;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 10;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 10 * 50;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);

                }
                if (money < 5000) {
                    $("#profitDaily").text("Min: $5000");
                    $("#profitTotal").text("Min: $5000");
                    $("#profitPercent").text("Min: $5000");
                    $("#profitNet").text("Min: $5000");
                }
                break;
            case 10:
                if (money >= 20 && money <= 1000) {

                    var profitDaily = money / 100 * 900 / 70;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 900;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 900;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 900 - money;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);

                }
                if (money >= 1001 && money <= 3000) {
                    var profitDaily = money / 100 * 950 / 70;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 950;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 950;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 950 - money;
                    var profitNet = profitNet.toFixed(2);


                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);

                }
                if (money >= 3001 && money < 9999999999) {
                    var profitDaily = money / 100 * 1000 / 70;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 1000;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 1000;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 1000 - money;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);
                }
                if (money < 20) {
                    $("#profitDaily").text("Min: $20");
                    $("#profitTotal").text("Min: $20");
                    $("#profitPercent").text("Min: $20");
                    $("#profitNet").text("Min: $20");
                }
                break;
            case 11:
                if (money >= 10 && money <= 1000) {

                    var profitDaily = money / 100 * 1800 / 120;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 1800;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 1800;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 1800 - money;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);

                }
                if (money >= 1001 && money <= 3000) {
                    var profitDaily = money / 100 * 1900 / 120;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 1900 * 1;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 1900;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 1900 - money;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);

                }
                if (money >= 3001 && money < 9999999999) {
                    var profitDaily = money / 100 * 2000 / 120;
                    var profitDaily = profitDaily.toFixed(2);
                    var profitTotal = money / 100 * 2000;
                    var profitTotal = profitTotal.toFixed(2);
                    var profitPercent = 2000;
                    var profitPercent = profitPercent.toFixed(2);
                    var profitNet = money / 100 * 2000 - money;
                    var profitNet = profitNet.toFixed(2);

                    $("#profitDaily").text(profitDaily);
                    $("#profitTotal").text(profitTotal);
                    $("#profitPercent").text(profitPercent + '%');
                    $("#profitNet").text('$' + profitNet);

                }
                if (money < 10) {
                    $("#profitDaily").text("Min: $10");
                    $("#profitTotal").text("Min: $10");
                    $("#profitPercent").text("Min: $10");
                    $("#profitNet").text("Min: $10");
                }
                break;

        }
    }
    if ($("#money").length) {
        calc();
    }
    $("#money").keyup(function() {
        calc();
    });

    $("#Ultra").on('change', function() {
        percent = parseFloat(this.value);
        calc();
    })



});