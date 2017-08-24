$(document).ready(function(){

	//wechat page
	//$(".wechat-container").height($(window).height());
	$(window).resize(function(){
		//$(".wechat-container").height($(window).height());
		if($(".wechat-chat").height() > $(".wechat-container").height()){
			$(".wechat-chat").attr("style","bottom: 60px;");
		}
	})

	$("#kqzygh_wechat").click(function(){
		$(".wechat-container").append("<a href='jiuyezhengce_page.html' class='wechat-msg' id='zycpmsg'><div class='msg-time'><span>下午4:05</span></div><div class='msg-box'><h5>深职毕业生去哪</h5><h5><small>10月12日</small></h5><div class='thumbnail'><div class='img'><div class='img-title'>深职毕业生去哪</div></div><div class='caption'><p>带你了解深职人的光明未来</p></div></div><p><small>查看全文</small></p></div></a>");
		$("#zycpmsg").removeAttr("style");
		$(".chat-c").width($(".chat-box .media").width() - 100);
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
		$(".wechat-container").append("<a href='jiuyezhengce_page.html' class='wechat-msg' id='zycpmsg'><div class='msg-time'><span>下午4:05</span></div><div class='msg-box'><h5>春季双选会开始啦</h5><h5><small>10月12日</small></h5><div class='thumbnail'><div class='img'><div class='img-title'>春季双选会开始啦</div></div><div class='caption'><p>全面剖析2016年春季招聘</p></div></div><p><small>查看全文</small></p></div></a>");
		$("#dddzyzx_msg").removeAttr("style");
		$("#dddzyzx_msg .chat-c").width($("#dddzyzx_msg .chat-box .media").width() - 100);
		if($(".wechat-chat").height() > $(".wechat-container").height()){
			$(".wechat-chat").attr("style","bottom: 60px;");
		}
	})

	$(".send .btn").click(function(){

		$(".wechat-container").append('<div class="wechat-msg" id="wechat_msg"><div class="msg-time"><span>下午4:06</span></div><div class="chat-box"><div class="media"><div class="media-left"><div class="media-object"></div></div><div class="media-body"><span class="sanjiaoxing"></span><span class="chat-c">发送"zp+关键字"搜索近期招聘信息</span></div></div></div></div>');
		$(".input-box input").val("");
		$("#wechat_msg").removeAttr("style");
		$(".chat-c").width($(".chat-box .media").width() - 100);
		if($(".wechat-chat").height() > $(".wechat-container").height()){
			$(".wechat-chat").attr("style","bottom: 60px;");
		}
	})

	$(".ddd").click(function(){

		$(".wechat-container").append('<div class="wechat-msg" id="wechat_msg"><div class="msg-time"><span>下午4:06</span></div><div class="chat-box"><div class="media"><div class="media-left"><div class="media-object"></div></div><div class="media-body"><span class="sanjiaoxing"></span><span class="chat-c">你好，请问有什么可以帮到你？</span></div></div></div></div>');
		$(".input-box input").val("");
		$("#wechat_msg").removeAttr("style");
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

	$(".list-container").height($(window).height());
	$(window).resize(function(){
		$(".list-container").height($(window).height());
	});

	$(".portrait a.thumbnail .img").height($(".portrait a.thumbnail .img").width());

	$("#the_experience").click(function() {
		$("#experienceTab").removeAttr("style");
		$("#experienceAdd").attr("style","display:none;");
	})
	$("#experienceBtn").click(function(){
		$("#experienceTab").attr("style","display:none;");
		$("#experienceAdd").removeAttr("style");
		$("#educationAdd").attr("style","display:none;");
	})
	$("#experienceCancel").click(function(){
		$("#experienceAdd").attr("style","display:none;");
	})

	$("#the_education").click(function() {
		$("#educationTab").removeAttr("style");
		$("#educationAdd").attr("style","display:none;");
	})
	$("#educationBtn").click(function(){
		$("#educationTab").attr("style","display:none;");
		$("#educationAdd").removeAttr("style");
		$("#experienceAdd").attr("style","display:none;");
	})

	$("#educationCancel").click(function(){
		$("#educationAdd").attr("style","display:none;");
	})

	$(".portal-head .thumbnail").height($(".portal-head .thumbnail").width());
	$("a[href='#myinfo']").click(function(){
		setTimeout(function(){
			$(".portal-head .thumbnail").height($(".portal-head .thumbnail").width());
		},250);
	})
	// setTimeout(function(){
	// 	$(".portal-head a").height($(".portal-head a").width());
	// },2000);
	
	// $(window).resize(function(){
	// 	setTimeout(function(){
	// 		$(".portal-head a").height($(".portal-head a").width());
	// 	},2000);
	// })
	$(".resume-pc .page-header h4 i.iconfont").mouseover(function(){
		$(".resume-pc .page-header h4 img").removeAttr("style");
	});
	$(".resume-pc .page-header h4 i.iconfont").mouseleave(function(){
		$(".resume-pc .page-header h4 img").attr("style","display:none;");
	});
})