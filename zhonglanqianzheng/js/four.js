$(function() {
	//数据
	var arr1 = [{
			'id': 1,
			'oimg': 'images/liucheng.png',
			'title': '美国签证加急预约',
			'one': [
				'受理范围:全国受理',
				'入境次数:多次往返',
				'有效期限:十年有效',
				'停留期限:海关决定',
				'是否邮寄:无需邮寄'
			]
		}, {
			'id': 2,
			'oimg': 'images/liucheng.png',
			'title': '代填美国签证DS160主申请表',
			'one': [
				'受理范围:全国受理',
				'入境次数:根据类型',
				'有效期限:根据类型',
				'停留期限:海关决定',
				'是否邮寄:无需邮寄'
			]
		},
		{
			'id': 3,
			'oimg': 'images/liucheng.png',
			'title': '美国签证EVUS登记',
			'one': [
				'受理范围:全国受理',
				'入境次数:多次往返',
				'有效期限:两年有效',
				'停留期限:海关决定',
				'是否邮寄:无需邮寄'
			]
		},
		{
			'id': 4,
			'oimg': 'images/liucheng.png',
			'title': '代缴美国签证SEVIS费',
			'one': [
				'受理范围:全国受理',
				'入境次数:多次往返',
				'有效期限:使馆批复',
				'停留期限:海关决定',
				'是否邮寄:无需邮寄'
			]
		},
		{
			'id': 5,
			'oimg': 'images/liucheng.png',
			'title': '美国十年旅游签证',
			'one': [
				'受理范围:全国受理',
				'入境次数:多次往返',
				'有效期限:十年有效',
				'停留期限:海关决定',
				'是否邮寄:无需邮寄'
			]
		},
		{
			'id': 6,
			'oimg': 'images/liucheng.png',
			'title': '美国十年商务签证',
			'one': [
				'受理范围:全国受理',
				'入境次数:多次往返',
				'有效期限:十年有效',
				'停留期限:海关决定',
				'是否邮寄:无需邮寄'
			]
		},
		{
			'id': 7,
			'oimg': 'images/liucheng.png',
			'title': '代缴美国签证费',
			'one': [
				'受理范围:全国受理',
				'入境次数:不适用 ',
				'有效期限:不适用 ',
				'停留期限:不适用 ',
				'是否邮寄:无需邮寄'
			]
		},
		{
			'id': 8,
			'oimg': 'images/liucheng.png',
			'title': '美国签证加急预约',
			'one': [
				'受理范围:全国受理',
				'入境次数:多次往返',
				'有效期限:十年有效',
				'停留期限:海关决定',
				'是否邮寄:无需邮寄'
			]
		},
		{
			'id': 9,
			'oimg': 'images/liucheng.png',
			'title': '美国签证加急预约',
			'one': [
				'受理范围:全国受理',
				'入境次数:多次往返',
				'有效期限:十年有效',
				'停留期限:海关决定',
				'是否邮寄:无需邮寄'
			]
		},
		{
			'id': 10,
			'oimg': 'images/liucheng.png',
			'title': '美国签证加急预约',
			'one': [
				'受理范围:全国受理',
				'入境次数:多次往返',
				'有效期限:十年有效',
				'停留期限:海关决定',
				'是否邮寄:无需邮寄'
			]
		},
		{
			'id': 11,
			'oimg': 'images/liucheng.png',
			'title': '美国签证加急预约',
			'one': [
				'受理范围:全国受理',
				'入境次数:多次往返',
				'有效期限:十年有效',
				'停留期限:海关决定',
				'是否邮寄:无需邮寄'
			]
		},
		{
			'id': 12,
			'oimg': 'images/liucheng.png',
			'title': '美国签证加急预约',
			'one': [
				'受理范围:全国受理',
				'入境次数:多次往返',
				'有效期限:十年有效',
				'停留期限:海关决定',
				'是否邮寄:无需邮寄'
			]
		}
	]
    var str=''
	for (var i = 0; i < arr1.length; i++) {
		
		str+=`	<li class="media cont">
						<div class="media-left">
							<a href="#"><img src="${arr1[i].oimg}" class="media-object" style="height: 164px;"></a>
						</div>
						
						<div class="media-body consult">
							<a href="#">
								<h3 class="media-heading">
${arr1[i].title}</h3>
							</a>	
						</div>
					</li>`
	}
$('ul[class="media-list"]').html(str)
//console.log(123);
var str2=''
for (var i = 0; i < arr1.length; i++) {
	
	
	
	var oP=$('<p class="cont-one"></p>')
	//console.log($('<p class="cont-one"></p>'));
	for (var j = 0; j < arr1[i].one.length; j++) {
		var oSpan=$(`<span>${arr1[i].one[j]}</span>`)
		oP.append(oSpan)
	   
	}
	//console.log(oP);
	oP.appendTo($('.consult').eq(i))
	$(`<p class="cont-two">
						<span>办理难度:</span>
						<span style="color: #985F0D;">★★★★<span style="color: #999;">★</span></span>
						
					</p>
					
					<p><span>能否加急: 可加急办理</span>
					<a href="" class="btn btn-default">查看详情</a></p>`).appendTo($('.consult').eq(i))
// 	str2+=`

}
//console.log(str2);
 	
})
