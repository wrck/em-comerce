/**
 * Created by yunpeng on 16/2/24.
 */
$(document).ready(function () {
    //$('.main-content .item').height($('.main-content .item').width());
    ////$('.main-content .item .item-block').css('margin-top', -$('.main-content .item .item-block').height() / 2 + 'px');
    //$('.main-content .item>.item-block').width($('.main-content .item').width());
    //$('.main-content .item').eq(0).height($('.main-content .item').width() * 2);
    //$('.main-content .item').eq(9).height($('.main-content .item').width() * 2);

    $('.main-content .item>.item-block').height($('.main-content .item').width());
    $('.main-content .item>.item-block').width($('.main-content .item').width());
//        $('.main-content .item .item-block').css('margin-top',-$('.main-content .item .item-block').height()/2+'px');
    $('.main-content .item>.item-block').eq(0).height($('.main-content .item').width() * 2);
    $('.main-content .item>.item-block').eq(9).height($('.main-content .item').width() * 2);
    if ($(window).width() > 575) {
        /*footer*/
        var max_height = $('footer .col-md-3').eq(0).height();
        for (var i = 1; i < 4; i++) {
            if ($('footer .col-md-3').eq(i).height() > max_height) {
                max_height = $('footer .col-md-3').eq(i).height();
            }
        }
        $('footer .col-md-3').height(max_height);
        /*footer end*/
    }
    if ($(window).width() > 767) {
        $('.text-middle').height($('.table-tbody .table-tbody-row').height());
        $('.shopping-cat-subtotal p').css('padding-right', $('.shopping-cat-table-right .text-middle').outerWidth() * 2 + 17 - $('.shopping-cat-subtotal-money').outerWidth() - 15 + 'px');
    } else {
        $('.basket-bag-open').width($('.navbar').width() - 42 * 2 - 30);

        $('.text-middle').height($('.text-middle').css('height', ''));
        $('.shopping-cat-subtotal p').css('padding-right', '');
        $('.table-tbody .shopping-cat-product-img').height($('.table-tbody .shopping-cat-product-img').parents('.table-tbody-row').height());
    }
    $('.table-tbody .shopping-cat-table-right').height($('.table-tbody .table-tbody-row').height() - 20);

    $(window).resize(function () {
        //$('.main-content .item').height($('.main-content .item').width());
        ////$('.main-content .item .item-block').css('margin-top', -$('.main-content .item .item-block').height() / 2 + 'px');
        //$('.main-content .item>.item-block').width($('.main-content .item').width());
        //
        //$('.main-content .item').eq(0).height($('.main-content .item').width() * 2);
        //$('.main-content .item').eq(9).height($('.main-content .item').width() * 2);

        $('.main-content .item>.item-block').height($('.main-content .item').width());
        $('.main-content .item>.item-block').width($('.main-content .item').width());
//        $('.main-content .item .item-block').css('margin-top',-$('.main-content .item .item-block').height()/2+'px');
        $('.main-content .item>.item-block').eq(0).height($('.main-content .item').width() * 2);
        $('.main-content .item>.item-block').eq(9).height($('.main-content .item').width() * 2);
        if ($(window).width() > 767) {
            /*footer*/
            $('footer .col-md-3').css('height', '');
            var max_height = $('footer .col-md-3').eq(0).height();
            for (var i = 1; i < 4; i++) {
                if ($('footer .col-md-3').eq(i).height() > max_height) {
                    max_height = $('footer .col-md-3').eq(i).height();
                }
            }
            $('footer .col-md-3').height(max_height);
            /*footer end*/

            $('#navbar').css('width', '');
            $('.basket-bag-open').css('width', '');

            $('.text-middle').height($('.table-tbody .shopping-cat-product-img').width());
            $('.table-tbody .shopping-cat-product-img').height($('.table-tbody .shopping-cat-product-img').width());
            $('.shopping-cat-subtotal p').css('padding-right', $('.shopping-cat-table-right .text-middle').outerWidth() * 2 + 17 - $('.shopping-cat-subtotal-money').width() - 15 + 'px');
        } else {
            $('footer .col-md-3').css('height', '');
            $('#navbar').width($('.navbar').width());
            $('.basket-bag-open').width($('.navbar').width() - 42 * 2 - 30);

            $('.text-middle').height($('.text-middle').css('height', ''));
            $('.shopping-cat-subtotal p').css('padding-right', '');
            $('.table-tbody .shopping-cat-product-img').height($('.table-tbody .shopping-cat-product-img').parents('.table-tbody-row').height());
        }
        $('.table-tbody .shopping-cat-table-right').height($('.table-tbody .table-tbody-row').height() - 20);

    })


    $('a#basket-bag').click(function () {
        $(this).parent().toggleClass('active');
        $('.basket-bag-open').slideToggle(0);
    });
    $('a#basket-bag').prev().click(function () {
        $(this).parent().toggleClass('active');
        $('.basket-bag-open').slideToggle(0);
    });


    $('a#search-icon').click(function () {
        $(this).toggleClass('active');
        if (!($('.search input').attr('type') == 'text'))
            $('.search input').attr('type', 'text');
        else {
            if($('.search input').val().trim()==''){
                $('.search input').attr('type', 'hidden');
            }else{
                window.location.pathname="/SH/search-results.html";
            }
        }
    });

    $(document).click(function (e) {
        if (!(e.target == $('a#search-icon')[0] || ($('.search input')[0] == e.target))) {
            $('a#search-icon').removeClass('active');
            $('.search input').attr('type', 'hidden');
        }
    })

    $('.product-picture-thum img').click(function () {
        $('.product-picture>img').attr('src', $(this).attr('src'));
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.detail-size').click(function () {
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.detail-color').click(function () {
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.shopping-cat-btn-order').click(function () {
        $('.shopping-cat-btn').hide();
        $('.order-now').show();
    })
    $('.style-content').click(function () {
        $(this).next().slideToggle();
        $(this).children('.style-content-right').toggleClass('onshow');
    })

    $('#register').click(function () {
        $('#InputRePassword').parent().toggle();
        if ($(this).text() == 'I have an account') {
            $(this).text('I don’t have an account')
        } else {
            $(this).text('I have an account')
        }
    })

    var flag = $('.login');
    if (flag.length == 0) {
        $('body').append('<div class="login"></div>').find('.login').load("./login.html .modal");
    } else {
        $('.login').load('./login.html .modal');
    }

    $('.login form').submit(function () {
        var flag = true;
        if ($('.login #InputEmail').val().trim() == '') {
            $('.login #InputEmail').css('borderColor', 'red');
            flag = false;
        } else {
            $('.login #InputEmail').css('borderColor', '');
            flag = true;
        }
        if ($('.login #InputPassword').val().trim() == '') {
            $('.login #InputPassword').css('borderColor', 'red');
            flag = false;
        } else {
            $('.login #InputPassword').css('borderColor', '');
            flag = true;
        }
        if (!$('.login #InputRePassword').is(':hidden')) {
            if ($('.login #InputRePassword').val().trim() == '') {
                $('.login #InputRePassword').css('borderColor', 'red');
                flag = false;
            } else {
                $('.login #InputRePassword').css('borderColor', '');
                flag = true;
            }
        }
        if (!flag) {
            alert('存在问题');
        } else {
            $('#login-out').show();
            $('#login-in').hide();
            $('#user-name').show();
            $(".modal").modal('hide');
        }
    })
    $('#login-out').click(function () {
        $('#login-out').hide();
        $('#login-in').show();
        $('#user-name').hide();
    })
})