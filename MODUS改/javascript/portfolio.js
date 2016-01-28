/**
 * Created by yunpeng on 16/1/5.
 */
$(document).ready(function(){
    var index=1;
    var max=3;
    var t;
    var interval=5000;
    $('.nav-down').hover(function(){
        $(this).children('a').toggleClass('onselected');
        $('.drag-down').fadeToggle();
    });

    //function carouselStart() {
    //    if (index == max - 1)
    //        index = -1;
    //    $('.carousel.active').addClass('left');
    //    $('.carousel').eq(++index).addClass('next left');
    //    $('.portfolio-label label.active').removeClass('active');
    //    setTimeout(function () {
    //        $('.carousel.active').removeClass('active left');
    //        $('.carousel').eq(index).removeClass('next left').addClass('active');
    //        $('.portfolio-label label').eq(index).addClass('active');
    //    },0);
    //
    //    t=setTimeout(carouselStart,4000);
    //}
    t=setInterval(carouselStart,interval);
    function carouselStart() {
        if (index == max - 1)
            index = -1;
        $('.carousel.active').addClass('left');
        $('.carousel').eq(++index).addClass('next left');
        $('.portfolio-label label.active').removeClass('active');
        setTimeout(function () {
            $('.carousel').eq(index).removeClass('next left').addClass('active');
            $('.portfolio-label label').eq(index).addClass('active');
            setTimeout(function(){
                $('.carousel.active.left').removeClass('active left');
            },1000)
        },0);
    }
    $('.portfolio-faucibus').mouseover(function(){
        clearInterval(t);
    })
    $('.portfolio-faucibus').mouseout(function(){
        t=setInterval(carouselStart,interval);
    })
    $('.carousel-arrow-l').click(function(){
        if(index==-1)
            index=max-1;
        $('.carousel.active').addClass('right');
        $('.carousel').eq(--index).addClass('next right');
        $('.portfolio-label label.active').removeClass('active');
        setTimeout(function () {
            $('.carousel').eq(index).removeClass('next right').addClass('active');
            $('.portfolio-label label').eq(index).addClass('active');
            setTimeout(function(){
                $('.carousel.active.right').removeClass('active right');
            },600)
        },0);
    });

    $('.carousel-arrow-r').click(function(){
        if (index == max - 1)
            index = -1;
        $('.carousel.active').addClass('left');
        $('.carousel').eq(++index).addClass('next left');
        $('.portfolio-label label.active').removeClass('active');
        setTimeout(function () {
            $('.carousel').eq(index).removeClass('next left').addClass('active');
            $('.portfolio-label label').eq(index).addClass('active');
            setTimeout(function(){
                $('.carousel.active.left').removeClass('active left');
            },600)
        },0);
    });

    $('.portfolio-label label').click(function () {
        index=$(this).attr('tabindex');

        $('.carousel.active').addClass('left');
        $('.carousel').eq(index).addClass('next left');
        $('.portfolio-label label.active').removeClass('active');
        setTimeout(function () {
            $('.carousel').eq(index).removeClass('next left').addClass('active');
            $('.portfolio-label label').eq(index).addClass('active');
            setTimeout(function(){
                $('.carousel.active.left').removeClass('active left');
            },600)
        },0);
        //
        //$('.carousel.active').removeClass('active');
        //$('.portfolio-label label.active').removeClass('active');
        //$('.carousel').eq(index).addClass('active');
        //$('.portfolio-label label').eq(index).addClass('active');
    });
//    $('.project-card').hover(function(){
////                $(this).next().addClass('active');
//        $(this).children('.portfolio-related-layout').fadeToggle(500);
//        $('.portfolio-related-layout').height($('.project-card').height());
//    });
//            $('.portfolio-related-layout').mouseout(function(){
////                $(this).removeClass('active');
//                $(this).fadeOut(1000);
//            });
//    $(window).resize(function(){
//        $('.portfolio-related-header img').width($('.container').width()-$('.portfolio-related-header h2').width()-$('.portfolio-related-header .btn-group').width()-20);
//    });
    //$('.portfolio-related-header img').width($('.container').width()-$('.portfolio-related-header h2').width()-$('.portfolio-related-header .btn-group').width()-20);
})