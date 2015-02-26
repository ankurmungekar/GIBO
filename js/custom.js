$('document').ready(function(){
    $('.packeges-tabs-panel a').click(function(){
        var id = '#' + $(this).attr('rel');
        $('#section-1').fadeOut('600', function(){
           $(id).fadeIn();
        });
    });

    $('.go-back').click(function(){
        $('.tour-packeges, #international-packeges').fadeOut('600', function(){
            $('#section-1').fadeIn();
        });
    });

    $('.packeges-tabs a.tab-2').click(function(){
        $('#section-1').fadeOut('600', function(){
            $('#international-packeges').fadeIn();
        });
    });
    $('#international-packeges .tour-packeges-item').hover(function(){
        $(this).find('.caption').stop().animate({
            bottom: '0px'
        });
    },function(){
        $(this).find('.caption').stop().animate({
            bottom: '-158px'
        });
    });

    $('#international-packeges .tour-packeges-item').click(function(){
        if(window.screen.width > 768){
            $('#international-packeges .tour-packeges-item .caption').animate({
                bottom: '-158px'
            });
            $(this).find('.caption').stop().animate({
                bottom: '0px'
            });
        }
    });
    $(function() {
        FastClick.attach(document.body);
    });
});