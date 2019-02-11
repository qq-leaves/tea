var count=0;
var timers=null;
$(function () {
    $(".menurange").click(function () {
        $(".hidemenu").show();
    });
    $(".closebtn").click(function () {
        $(".hidemenu").hide();
    });
    //Õº∆¨¬÷≤•
    $(".ullist>li:first").clone().appendTo($(".ullist"));
    showanimate();
    function showanimate(){
        timers=setInterval(function(){
            animateinfo()
        },1300)
    }
    function animateinfo(){
        count++;
        //1.∏¯Õº∆¨…Ë÷√œÚ◊Ûπˆ∂Ø∂Øª≠
        $(".ullist").animate({
            marginLeft:(-32*count)+"rem"
        },700,"linear",function(){
            if(count>=$(this).children().length-1){
                count=0;
                $(this).css("marginLeft","0rem")
            }
        })
    }
    //∑÷“≥
    $(".px").css({backgroundColor:"black",color:"white"});
    /*$(".p1").on("touchend",function(){
        $(this).css({backgroundColor:"black",color:"white"});
    })*/
    $(".p1").each(function(index){
        $(this).on("touchstart",function(){
            $(this).prevAll().css("backgroundColor","");
            $(this).nextAll().css("backgroundColor","");
            $(this).css({
                "backgroundColor":"black"
            })
        })
    })

});