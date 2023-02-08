$(document).ready(function(){
    $('.home-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false ,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.ph-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false ,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items: 2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $('.cer .cer-slider').owlCarousel({
        loop:true,
        margin:80,
        nav:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            700:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    $('input').focus(function(){
        $(this).css({
            "border" : "1px dashed #EBEBEB" 
        })
    })
    $('input').blur(function(){
        $(this).css({
            "border" : "1px solid #EBEBEB"
        })
    })
    $('textarea').focus(function(){
        $(this).css({
            "border" : "1px dashed #EBEBEB" 
        })
    })
    $('textarea').blur(function(){
        $(this).css({
            "border" : "1px solid #EBEBEB"
        })
    })
    $('.amana-elc .landing .content .top .cont').click(function(){
        $(this).css({
            "background-color" : "#1D1DC5" ,
            "color" : "#FFFFFF"
        }).siblings().css({
            "background-color" : "#D9D9D9" ,
            "color" : "#1D1D1D"
        })
    })
    $('#p').click(function(){
        $('#panel').show().siblings().hide()
    })
    $('#s').click(function(){
        $('#solar').show().siblings().hide()
    })
    $('#e').click(function(){
        $('#protec').show().siblings().hide()
    })
    $('.proc-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})