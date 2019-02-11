$(function(){	
//	点击小圆圈往下移动
	var num=0;
	var timer=null;

	
	$('.index li').click(function(e) {
		var index=$(this).index();
        $(this).addClass('current').siblings().removeClass();
		$('.doc').stop().animate({ top:-index*100+'%' },500);
		num=index;
   });
// 使用jquery插件,鼠标轮播播放下一张
	$(document).mousewheel(function(e,d){
		clearTimeout(timer);
		timer=setTimeout(function(){
			num-=d;
			if( num>3 ){ num=3 }
			if( num<0 ){ num=0 }
			
			$('.index li').eq(num).addClass('current').siblings().removeClass();
			$('.doc').stop().animate({ top:-num*100+'%' },500);
		},300)
		
	});
	
})