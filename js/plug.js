$(document).ready(function(){
    $(window).on('scroll' , function(){
        var src = $(window).scrollTop()
        var count = $('.amana-about .counters').offset().top
        if (src = count - 50){
            $('.amana-about .counters .content .one h3').prop('counter' , 0).animate({
                counter : 25
            } , {
                duration : 3000 ,
                easing : 'swing' ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            }) 
            $('.amana-about .counters .content .two h3').prop('counter' , 0).animate({
                counter : 100
            } , {
                duration : 3000 ,
                easing : 'swing' ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            }) 
            $('.amana-about .counters .content .three h3').prop('counter' , 0).animate({
                counter : 50
            } , {
                duration : 3000 ,
                easing : 'swing' ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            }) 
        }
    })
})