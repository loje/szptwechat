$(document).ready(function(){

	//wechat page
	$(".wechat-container").height($(window).height());
	$(window).resize(function(){
		$(".wechat-container").height($(window).height());
		if($(".wechat-chat").height() > $(".wechat-container").height()){
			$(".wechat-chat").attr("style","bottom: 60px;");
		}
	})


	$("#novoice").click(function(){
		$(".error-tips .error-box span").html("<i class='iconfont'>&#xe609; </i>别点了，这并不是真的微信，不能发语音！");
		$("#errorTips").removeAttr("style");
		var error = setTimeout(function() {
			$("#errorTips").attr("style","display:none;");
			clearTimeout(error);
		}, 1000);
	});
	$("#noface").click(function(){
		$(".error-tips .error-box span").html("<i class='iconfont'>&#xe609; </i>别点了，这并不是真的微信，不能发表情！");
		$("#errorTips").removeAttr("style");
		var error = setTimeout(function() {
			$("#errorTips").attr("style","display:none;");
			clearTimeout(error);
		}, 1000);
	});

	$(".jyss").click(function(){
		$(".wechat-msg").removeAttr("style");
		$(".chat-c").width($(".chat-box .media").width() - 100);
		if($(".wechat-chat").height() > $(".wechat-container").height()){
			$(".wechat-chat").attr("style","bottom: 60px;");
		}
	})
	$(".send button").click(function(){
		$(".input-box input").val("");
		$(".wechat-msg").removeAttr("style");
		$(".chat-c").width($(".chat-box .media").width() - 100);
		if($(".wechat-chat").height() > $(".wechat-container").height()){
			$(".wechat-chat").attr("style","bottom: 60px;");
		}
	})



	$(".body-container").height($(window).height());
	$(".resume-container").attr("style","min-height:" + ($(window).height()) + "px");
	$(".zycp-container").height($(window).height());
	$(".wx-img").width($(".wx-img").height());
	$(".wx-connect").width($(".wx-connect").height());
	$(".user-img").width($(".wx-connect").height());

	$(".perfect-page").attr("style","min-height:" + ($(window).height() - 30 ) + "px");

	$(window).resize(function(){
		$(".zycp-container").height($(window).height());
		$(".body-container").height($(window).height());
		$(".resume-container").attr("style","min-height:" + ($(window).height()) + "px");
		$(".wx-img").width($(".wx-img").height());
		$(".wx-connect").width($(".wx-connect").height());
		$(".user-img").width($(".wx-connect").height());
		$(".perfect-page").attr("style","min-height:" + ($(window).height() - 30 ) + "px");
	});


	var headerheight = parseInt($(".page-header").height() + 5);
	//$(".article-container article").attr("style","margin-top:" + headerheight + "px");

	var recruitheaderheight = parseInt($(".recruit .page-header").height() + 30);
	$(".recruit-page-intro").attr("style","margin-top:" + headerheight + "px");

	$('#activeTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show');
	});

	$(".end").click(function(){
		$("#errorTips").removeAttr("style");
		var error = setTimeout(function() {
			$("#errorTips").attr("style","display:none;");
			clearTimeout(error);
		}, 1000);
	});

	$(".map-box").height($(".map-box").width());
	$(window).resize(function(){
		$(".map-box").height($(".map-box").width());
	});


	$(".wechatnav .under-bar .navbar .container-fluid .collapse .nav li .clickit").click(function(){
		$(".wechatnav").addClass("hidebar");
		$(".keyboard").removeClass("hidebar");
	});
	$(".keyboard .under-bar .navbar .container-fluid .collapse .nav li .clickit").click(function(){
		$(".keyboard").addClass("hidebar");
		$(".wechatnav").removeClass("hidebar");
	});
	// $('#particles').particleground({
	// 	dotColor: '#3D424A',
	// 	lineColor: '#3D424A',
	// 	minSpeedX:0.9,
	// 	maxSpeedX:1,
	// 	minSpeedY:0.8,
	// 	maxSpeedY:1,
	// 	directionX:'right',
	// 	directionY:'bottom'
	// });


	$(".modal-footer button").click(function(){
		$(".error-tips .error-box span").html("<i class='iconfont'>&#xe609; </i>提交成功！");
		$("#errorTips").removeAttr("style");
		var error = setTimeout(function() {
			$("#errorTips").attr("style","display:none;");
			clearTimeout(error);
		}, 1000);
	});


	$(".college-list .the-college .thumbnail .img").height($(".college-list .the-college .thumbnail .img").width());
})