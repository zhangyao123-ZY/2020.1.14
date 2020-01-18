$(function(){
	

var arr=[
	{
		'id':1,
		'oimg':"images/doc.svg",
		'title':'美国签证信息采集表',
		'op':'用于采集申请人基本信息, 用于填写DS160主申请表 请务必详细准确填写',
		'big':'234 KB',
		'timer':'2017-05-01',
		'zhe':'中岚签证'
	},
	{
		'id':1,
		'oimg':"images/doc.svg",
		'title':'美国签证信息采集表',
		'op':'用于采集申请人基本信息, 用于填写DS160主申请表 请务必详细准确填写',
		'big':'234 KB',
		'timer':'2017-05-01',
		'zhe':'中岚签证'
	},
	{
		'id':1,
		'oimg':"images/doc.svg",
		'title':'美国签证信息采集表',
		'op':'用于采集申请人基本信息, 用于填写DS160主申请表 请务必详细准确填写',
		'big':'234 KB',
		'timer':'2017-05-01',
		'zhe':'中岚签证'
	},
	{
		'id':1,
		'oimg':"images/doc.svg",
		'title':'美国签证信息采集表',
		'op':'用于采集申请人基本信息, 用于填写DS160主申请表 请务必详细准确填写',
		'big':'234 KB',
		'timer':'2017-05-01',
		'zhe':'中岚签证'
	},
	{
		'id':1,
		'oimg':"images/doc.svg",
		'title':'美国签证信息采集表',
		'op':'用于采集申请人基本信息, 用于填写DS160主申请表 请务必详细准确填写',
		'big':'234 KB',
		'timer':'2017-05-01',
		'zhe':'中岚签证'
	},
	{
		'id':1,
		'oimg':"images/doc.svg",
		'title':'美国签证信息采集表',
		'op':'用于采集申请人基本信息, 用于填写DS160主申请表 请务必详细准确填写',
		'big':'234 KB',
		'timer':'2017-05-01',
		'zhe':'中岚签证'
	},
	{
		'id':1,
		'oimg':"images/doc.svg",
		'title':'美国签证信息采集表',
		'op':'用于采集申请人基本信息, 用于填写DS160主申请表 请务必详细准确填写',
		'big':'234 KB',
		'timer':'2017-05-01',
		'zhe':'中岚签证'
	},
	{
		'id':1,
		'oimg':"images/doc.svg",
		'title':'美国签证信息采集表',
		'op':'用于采集申请人基本信息, 用于填写DS160主申请表 请务必详细准确填写',
		'big':'234 KB',
		'timer':'2017-05-01',
		'zhe':'中岚签证'
	},
	{
		'id':1,
		'oimg':"images/doc.svg",
		'title':'美国签证信息采集表',
		'op':'用于采集申请人基本信息, 用于填写DS160主申请表 请务必详细准确填写',
		'big':'234 KB',
		'timer':'2017-05-01',
		'zhe':'中岚签证'
	},
	{
		'id':1,
		'oimg':"images/doc.svg",
		'title':'美国签证信息采集表',
		'op':'用于采集申请人基本信息, 用于填写DS160主申请表 请务必详细准确填写',
		'big':'234 KB',
		'timer':'2017-05-01',
		'zhe':'中岚签证'
	}
]
var str=''
for (var i = 0; i < arr.length; i++) {
	arr[i]
	str+=`<li class="media cont">
							<div class="media-left">
								<a href="#"><img src="${arr[i].oimg}" class="media-object" style="width: 42px;height: 48px;" ></a>
							</div>
							<div class="media-body consult">
								<a href="#">
									<h4 class="media-heading">${arr[i].title}</h4>
								</a>
							

								<p>
								${arr[i].op}</p>
								<div class="xiang">
									    
									<span>文件大小:&nbsp;<em>${arr[i].big}</em></span>
									<span>上传时间:&nbsp;<em>${arr[i].timer} </em></span>
									<span>上传作者:&nbsp;<em>${arr[i].zhe}</em></span>
									<a href="" class="btn btn-default">免费咨询</a>
								</div>
							</div>
						</li>`
}
$('.media-list').html(str)

})