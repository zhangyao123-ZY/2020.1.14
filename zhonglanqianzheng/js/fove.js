$(function(){
	
	
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		var oscr=$(window).scrollTop()
		//屏幕高度
		var winHe=$(window).height()
		//console.log(winHe);
		//
		//console.log($('#footer').offset().top-oscr);
		
		//右边内容的高度 =页脚距顶部-滚动条值-导航条高度
		var okehuHeight=$('#footer').offset().top-oscr-82
		if ($(window).scrollTop()>=55) {
			$('.kehu').css({
				'position':'fixed',
				'top':'82px',
				'height':okehuHeight+'px',
				'overflow':'auto'
			})
			$('.overkehu').css(
			{
				
				
			   'top':'82px', 
				'height':okehuHeight+'px',
				
			})
		}else if($(window).scrollTop()<55){
			$('.kehu').css({
				'position':'relative',
				'top':'0px'
				
			})
			
		}
	})
	
})