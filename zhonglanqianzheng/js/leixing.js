$(function() {
	//数据
	//最外层数据
	var arr = ['签证类型',
		'签证费',
		'节假日及闭馆说明',
		'护照追踪与检索',
		'照片和指纹',
		'申请免面谈',
		'须进一步审理的申请',
		'提交221(G)文件',
		'儿童签证',
		'豁免签证计划',
		'常见问题(FAQ)'
	]
	//中层数据
	var arr1 = [
		['签证类型概述',
			'商务/旅行签证',
			'学生签证',
			'交流访问学者签证',
			'过境/船员/机组签证',
			'工作签证',
			'宗教工作者签证',
			'家庭雇员签证',
			'记者和媒体签证'
		],
		['概述',
			'付款信息',
			'限制条件',
			'签证类型及申请费',
			'无需申请费的签证类型及适用条件',
			'其它费用',
			'SEVIS费',
			'非移民签证签发（“互惠”）费'
		],
		[
			'概述',
			'大使馆/总领事馆的闭馆日',
			'特别注意'
		],
		[
			'概述',
			'更改送达选项',
			'查询签证状态',
			'护照追踪',
			'领取护照/签证',
			'护照检索所需的文件'
		],
		[
			'概述',
			'数码照片要求',
			'七步拍出成功照片',
			'指纹采集'
		],
		[
			'概述',
			'条件',
			'支持性文件',
			'如何申请',
			'中信银行加急代传递服务'
		],
		[
			'概述',
			'其他信息'
		],
		[
			'概述',
			'如何提交221(g)文件'
		],
		[
			'儿童是否需要签证？',
			'儿童是否需缴纳与成年人相同的申请费？',
			'儿童是否需要预约面谈？',
			'是否所有儿童都需亲自参加面谈？',
			'特别注意'
		],
		[
			'概述',
			'条件',
			'旅游授权电子系统(ESTA)',
			'不符条件',
			'ESTA拒签'
		],
		[
			'基本签证信息'
		]
	]

	//最内层
	var arr2 = [
		[
			'概述',
			'非移民签证',
			'签证类型列表'
		],
		[
			'概述',
			'条件',
			'申请材料',
			'如何申请',
			'支持性文件',
			'寻求医疗服务的'
		],
		[
			'概述',
			'签证说明和申请条件',
			'美国公立学校',
			'申请材料',
			'如何申请',
			'支持性文件',
			'家属',
			'其他信息'
		],
		[
			'概述',
			'家属',
			'申请材料',
			'如何申请',
			'支持性文件',
			'针对家属的支持性文件'
		],
		[
			'概述',
			'条件',
			'申请材料',
			'如何申请',
			'支持性文件'
		],
		[
			'概述',
			'签证说明和申请条件',
			'申请时间',
			'申请材料',
			'如何申请',
			'支持性文件',
			'家属'
		],
		[
			'概述',
			'条件',
			'申请批件(Petition)',
			'申请材料',
			'如何申请',
			'支持性文件'
		],
		[
			'概述',
			'条件',
			'陪同非移民签证持有人',
			'陪同美国公民',
			'陪同美国合法永久居民',
			'对B-1签证持有人的雇佣合同要求',
			'陪同A-1、A-2或G-1 - G-4签证持有人,的家庭雇员（A-3或G-5签证）',
			'对A-3/G-5签证持有人的雇佣合同要求',
			'申请材料',
			'如何申请',
			'支持性文件'
		],
		[
			'概述',
			'条件',
			'限制条件',
			'使用商务旅游签证出行',
			'使用短期工作签证出行',
			'家属',
			'申请材料',
			'如何申请',
			'支持性文件'
		]
	]
	//最内层的最后一个
	var arr3 = [
		'Q.1 我的护照有效期必须为多长时间才可以申请美国签证？', 'Q.2 我是否符合豁免签证计划？',
		'Q.3 什么是旅游授权电子系统(ESTA)费？由谁支付？',
		'Q.4 在没有获得旅游授权电子系统(ESTA)批准的情况下，如果去美国旅行会怎么样？',
		'Q.5 如果我是居住在中国的第三国公民，我能否在中国申请非移民签证？',
		'Q.6 是否所有非移民签证申请人都必须到大使馆或总领事馆进行面谈？',
		'Q.7 我有一个快要到期的非移民签证想要续签。我是否需要重新进行整个签证申请流程？',
		'Q.8 我的护照已经到期，但是其中的美国签证仍然有效。我是否需要申请新的签证？',
		'Q.9 我拥有双重公民身份。去美国旅行应该使用哪个护照？'

	]
	//最外层ul 第一层
	var oUl1 = $('<ul></ul>');
	//把ul添加到#solid
	oUl1.appendTo('#solid');
	//最外层
	for (var i = 0; i < arr.length; i++) {

		//创建li
		var oLi1 = $('<li></li>');
		oLi1.appendTo(oUl1);
		//创建a
		var oA1 = $(`<a href="">${arr[i]}</a>`);
		oA1.appendTo(oLi1);
		//第二层起始的ul
		var oUl2 = $('<ul></ul>');
		
		if (i == 0) {
			oA1.addClass('left-active');
			oUl2=$('<ul class="two"></ul>')
			
		
		}
		oUl2.appendTo(oLi1);
		//中层
		for (var j = 0; j < arr1[i].length; j++) {
			var oLi2 = $('<li></li>')
			oLi2.appendTo(oUl2)
			var oA2 = $(`<a href="">${arr1[i][j]}</a>`);
			oA2.appendTo(oLi2);

			if (j == 0 && i != 0) {
				oA2.addClass('left-active-xs')
			}
			if (j==arr1[i].length-1) {
				oA2.removeClass('left-active-xs')
			}
		}

	}
	//最内层 第一个
	//console.log($('#solid ul li ul:first li'))
	var firstul = $('#solid ul li ul:first li')

	for (var i = 0; i < arr2.length; i++) {
		//第三层的第一个
		var oUl3 = $('<ul></ul>')
        if (i==0) {
        	oUl3= $('<ul class="three"></ul>')
        }
		for (var h = 0; h < arr2[i].length; h++) {

			var oLi3 = $('<li></li>')
			var oA3 = $(`<a href="">${arr2[i][h]}</a>`);
			oA3.appendTo(oLi3);
			if (h == 0) {
				oA3.addClass('left-active-xs')
			}
			oLi3.appendTo(oUl3)
		}

		oUl3.appendTo(firstul.eq(i))
	}
	//最内层 最后一个
	var oLastUl = $('#solid ul li ul:last li')
	console.log(oLastUl.eq(0));
	oLastUl.removeClass('left-active-xs')
    //第三层的最后一 个
	var oUl4 =$('<ul class="three"></ul>')
	oUl4.appendTo(oLastUl)
	for (var i = 0; i < arr3.length; i++) {
		//arr3[i]
		var oLi4=$(`<li><a href="">${arr3[i]}</a></li>`)
		if(i==0){
			oLi4=$(`<li><a href="" class="left-active-xs">${arr3[i]}</a></li>`)
		}
		oLi4.appendTo(oUl4)
	}
	//console.log($('#solid ul li ul:last li'))
	
	
	
//点击哪个 哪个显示
	
//第二层	
$('#solid>ul>li>a').on('click',function(e){
	e.preventDefault()
	$('#solid>ul>li>ul').removeClass('two')
	$('#solid>ul>li>ul').eq($(this).parent().index()).addClass('two')
	//最后一个
	$('#solid>ul>li>ul>li>ul').last().addClass('three')
	
})
//第三层
$('#solid>ul>li>ul>li').on('click',function(e){
	e.preventDefault()
	$('#solid>ul>li>ul>li>ul').removeClass('three')	
	//console.log($(this).index());
	$('#solid>ul>li>ul>li>ul').eq($(this).index()).addClass('three')
	//最后一个
	$('#solid>ul>li>ul>li>ul').last().addClass('three')
})

	
})
