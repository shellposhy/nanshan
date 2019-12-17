function ismobile() {
	var u = navigator.userAgent, app = navigator.appVersion;
	if (/AppleWebKit.*Mobile/i.test(navigator.userAgent)
			|| (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
					.test(navigator.userAgent))) {
		if (window.location.href.indexOf("?mobile") < 0) {
			try {
				if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
					return '0';
				} else {
					return '1';
				}
			} catch (e) {
			}
		}
	} else if (u.indexOf('iPad') > -1) {
		return '0';
	} else {
		return '1';
	}
};

$(function() {
	var gototop = $('<div class="gototop"><i class="glyphicon glyphicon-triangle-top"></i></div>');
	var initGototop = function(){
		var winW = $(window).width();
		var docW = $('.tr-main .container').width() || $('.index_tab_wrap .container').width();
		gototop.css('right',winW / 2 - docW / 2 - 60);
	};
	
	var toggleGototop = function(){
		var winH = $(window).height();
		var scrollTop = $(window).scrollTop();
		if(scrollTop > winH / 3){
			gototop.addClass('active');
		}else{
			gototop.removeClass('active');
		}
	};
	gototop.on('click',function(){
		$(window).scrollTop(0);
	});

	$(window).resize(function(){
		initGototop();
	});

	$(window).scroll(function(){
		toggleGototop();
	});
	initGototop();
	$('body').append(gototop);

	if (ismobile() == 1) {
		// navbar
		$('.navbar-nav .dropdown').each(function() {
			$(this).mouseover(function() {
				$('.navbar-nav .dropdown').removeClass('active');
				$(this).addClass('active open');
			});
			$(this).mouseout(function() {
				$(this).removeClass('active open');
			});
		})
		//footer
		$('#gSocial span').hover(function() {
			$(this).parent('li').toggleClass('active');
		});
		// trhovertab
		$('.trhovertab').each(function() {
			var that = $(this);
			$(this).on('mouseover', function() {
				this.click();
			})
		})

		// navbar
		$(window).on('scroll', function() {
			if ($(window).scrollTop() > 114) {
				$('.navbar').addClass('navbar-mini');
			} else {
				$('.navbar').removeClass('navbar-mini');
			}
		})
	};

});