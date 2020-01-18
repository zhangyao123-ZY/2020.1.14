$(function() {

	//轮播图
	// .carousel() 框架中有的
	$('#myBanner').carousel({
		//控制轮播图速度（定时器时间）
		interval: 1000
	})

	//数字滚动特效
	/**通用-我们的成绩等数字滚动特效**/
	var oOptions = {
		useEasing: true,
		useGrouping: true,
		separator: ',',
		decimal: '.',

	}
	var oArray = new Array(
		new CountUp("oneNumber", 0, 18397, 0, 2.5, oOptions),
		new CountUp("twoNumber", 0, 98.8, 1, 2.5, oOptions),
		new CountUp("threeNumber", 0, 3273, 0, 2.5, oOptions),
		new CountUp("fourNumber", 0, 100, 1, 2.5, oOptions)
	)
    var oName=0
	if (oName==0) {
		$('.number1').each(function() {
			oArray[$(this).index('.number1')].start()
		})
		oName=1
	}
	$(window).scroll(function() {
		
		if ($(window).scrollTop() >= 80 && oName==1) {

			$('.number1').each(function() {
				oArray[$(this).index('.number1')].start()
			})
			oName=0
		}
	})

	//我们的服务 放大
	$('.card-area li').on('mouseover', function() {

		$('.card-area li').removeClass('card-active')
		//console.log($(this).index());
		$('.card-area li').eq($(this).index()).addClass('card-active')
	})

	//美国签证最新资讯

	//实时监控
	$(window).on("resize", function() {
		//获取h4 p 的宽度   页面宽度
		var oYemian = $(window).outerWidth()
		var oH = $('h4[class="media-heading"]')
		var oP = $('.consult P')
		var oDiv = $('.consult')
		if (oYemian <= $('.media').width() + 50) {
			console.log(123);
			oDiv.css("width", oYemian - 200 + 'px')
			oH.css("width", oYemian - 205 + 'px')
			oP.css("width", oYemian - 205 + 'px')

		} else {
			oDiv.css("width", 400 + 'px')
			oH.css("width", 400 + 'px')
			oP.css("width", 400 + 'px')
		}
		if (oYemian > 767) {
			oDiv.css("width", 300 + 'px')
			oH.css("width", 300 + 'px')
			oP.css("width", 300 + 'px')
		}

	})


	// 我们的客户 进行数据添加
	var str = ["images/client1.png", "images/client2.png", "images/client3.png", "images/client4.png",
		"images/client5.png", "images/client6.png", "images/client7.png", "images/client8.png", "images/client9.png",
		"images/client10.png", "images/client11.png", "images/client12.png"
	]
	var str1 =
		`<div class="col-sm-12 main-title">
	 		<h2 class="h1">我们的客户</h2>
	 		<p class="line line-big"></p>
	 		<h2><small>他们与中岚建立了合作关系。</small></h2>
	 	</div>`
	for (var i = 0; i < str.length; i++) {
		str1 +=
			`<div class="col-sm-3 col-md-2 col-xs-4">
	 	<div class="client-log">
	 	   <img src="${str[i]}" class="img-responsive">		
	 	</div>
	 	
	 </div>`
	}
	$('#client').html(str1)




})
