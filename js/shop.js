//鼠标经过与离开显示与隐藏箭头
$(function(){
	$(".banner").on("mouseenter",function(){
		$(".arr").css("display","block")
		
	})
	$(".banner").on("mouseleave",function(){
		$(".arr").css("display","none")
		
	})
})
//图片轮播
$(function(){
	var count=0;
	$(".arr-r").click(function(){
		count++;
		if(count==3){
			count=0;
		}
		$(".banner li").eq(count).fadeIn().siblings("li").fadeOut();
		console.log(count);
	})
})
//右边固定导航栏的显示与隐藏
$(function () {
    
    //当页面超出去100px的时候，让右边固定导航栏显示出来,如果小于100，就让固定导航栏隐藏
    $(window).scroll(function () {
      if($(window).scrollTop() >= 100 ){
        $(".wrap").stop().fadeIn(100);
      }else {
        $(".wrap").stop().fadeOut(100);
      }
    });
 })
//画布

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.font="35px Arial";
ctx.strokeText("Hello music",10,50);
