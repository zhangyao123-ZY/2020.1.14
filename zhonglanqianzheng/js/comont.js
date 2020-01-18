
$(function(){
    //导航	
	$('#one .nav li').on('mouseover',function(){
			$('#one .nav li').removeClass('active')
			 $('#one .nav li p').remove()
			$('#one .nav li').eq($(this).index()).addClass('active')
			$('#one .nav li').eq($(this).index()).append('<p class="line-top hidden-xs"></p>')
			
	})
	
	
	//留言框 点击换图片和定位高度
	var oMess = 0
	$('#message h4 img').on("click", function() {
		if (oMess == 0) {
			$('#message h4 img').attr('src', 'images/nodeMin.png')
			$('#message').css('bottom', '-400px')
			oMess = 1
		} else {
			$('#message h4 img').attr('src', 'images/nodeMax.png')
			$('#message').css('bottom', '0px')
			oMess = 0
		}
	})
	
	
	
	//悬浮框 鼠标经过显示
	$('#popup li').hover(function() {
	
		$('#popup li .popup-title').eq($(this).index()).css("display", "block")
	}, function() {
		$('#popup li .popup-title').eq($(this).index()).css("display", "none")
	})
	//点击箭头 回到顶部
	$(window).scroll(function() {
		if ($(window).scrollTop() > 350) {
			//PC端
			$('#popup li .popup-five').css("display", "block")
			//手机端
			$('#terminal .terminal-jiantou').css("display", "block")
		} else {
			//PC端
			$('#popup li .popup-five').css("display", "none")
			//手机端
			$('#terminal .terminal-jiantou').css("display", "none")
		}
	})
	//PC端点击
	$('#popup li .popup-five').on('click', function(e) {
	
		e.preventDefault()
		$('body,html').animate({
			'scrollTop': 0
		}, 500)
	
	})
	
	//手机端点击
	var jiantou = 0
	$('#terminal .terminal-jiantou').on('click', function() {
		$('body,html').animate({
			'scrollTop': 0
		}, 500)
		//变蓝还是变黑
		if (jiantou == 0) {
			$('#terminal .terminal-jiantou').css("background-position", "0 0")
			jiantou = 1
		} else {
			$('#terminal .terminal-jiantou').css("background-position", "-92px 0")
			jiantou = 0
		}
	})
})