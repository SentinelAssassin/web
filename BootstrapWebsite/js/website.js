$(function() {
	//		轮播图的js代码		代码初始化时
	var size = $(".banner-img li").size();
	for(var i = 1; i <= size; i++) {
		var li = "<li>" + i + "</li>";
		//添加子元素
		$(".banner-num").append(li)
	}
	$(".banner .banner-img li").eq(0).show().siblings().hide();
	$(".banner .banner-num li").eq(0).addClass("active")
	//手动控制轮播
	$(".banner .banner-num li").on("click", function() {
		$(this).addClass("active").siblings().removeClass("active")
		var index = $(this).index()
		i = index
		$(".banner .banner-img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300)
	})
	//自动轮播
	var i = 0;
	timer = setInterval(move, 3000);

	function move() {
		i++;
		if(i == size) {
			i = 0;
		}
		$(".banner-num li").eq(i).trigger("click");
	};
	//向左运动
	function moveL() {
		i--;
		if(i == -1) {
			i = size - 1;
		}
		$(".banner-num li").eq(i).trigger("click");
	};

	//移入停止定时器，移除开启定时器
	$(".banner").hover(function() {
		clearInterval(timer)
	}, function() {

		timer = setInterval(move, 3000);
	});
	//左右按钮控制
	$(".banner-btn-prev").click(function() {
		moveL()
	})
	$(".banner-btn-next").click(function() {
		move();
	})

	//回到顶部js代码
	$(window).scroll(function() {
		$(".go-top").show()
		if($(window).scrollTop() <= 50) {
			$(".go-top").hide();
		}
	});
	$(".go-top").click(function() {

		$("body,html").animate({
			"scrollTop": "0"
		}, 500);

		return false;
	});
	//回到顶部的标签
	$(function () { $("[data-toggle='tooltip']").tooltip(); });
})