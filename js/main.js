$(function(){
    $('.toggle_btn').click(function(){
        if($('#header').hasClass('open')){
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });
    $('#navi a').click(function(){
        $('#header').removeClass('open');
    });
    //スムーススクロール
    $('a[href^="#"]').click(function(){
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;
    });
    //フェード
    $('.inview').on('inview', function(event, isInView){
        if(isInView){
            //要素(inviewクラス)が表示されたら、showクラスを追加する
            $(this).stop().addClass('show');
        }
    });
    //スクロール時のイベント
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();

        //メインビジュアルの拡大縮小
        mv_scale(scroll);

        //site-title,toggle_btnのスクロール表示
        if(scroll > 450){
            $('.site-title').hide().fadeIn(500);
            $('.toggle_btn').hide().fadeIn(500);
        } else {
            $('.site-title').fadeOut(500);
            $('.toggle_btn').fadeOut(500);
        }
    });
});