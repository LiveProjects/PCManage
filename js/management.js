/**
 * Created by Administrator on 2015/8/5 0005.
 */
$(document).ready(function(){
    $("#manage-right").css('min-height',window.innerHeight-50+'px');
    $("#manage-right iframe").css('min-height',window.innerHeight-50+'px');
    $("#manage-left ul li a").click(function(e){
        e.preventDefault();
        var href=$(this).attr('href');
        console.log(href);
        $("#manage-right iframe").attr('src',href);
    });
});