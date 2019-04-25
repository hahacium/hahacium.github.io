$(function() {
	/* 04 - function on page load */
	$(window).load(function(){
		//$('#loader-wrapper').fadeOut(300);
        $('.header-style2').removeClass('active');
		$('.header-style5').addClass('active');
	});
	/* 01 - toast 通知插件 */
	//http://www.jq22.com/yanshi10876
	/*=====================*/
	function dan(){
		var $dang=$.toast({
		text: "此项正在开发中，敬请期待",
		heading: '提示', 
		/*icon: 'warning',*/
		showHideTransition: 'fade', // fade, slide or plain
		allowToastClose: true, // Boolean value true or false
		hideAfter: 1000, //
		stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
		//position: 'bottom-left', 
		position: { left : 'auto', right : 10, top : 50, bottom : 'auto' }, 
		bgColor: '#808080',
		textColor: '#eeeeee',
		textAlign: 'left',  // Text alignment i.e. left, right or center
		loader: false,  // Whether to show loader or not. True by default
		loaderBg: '#9ec600',  // Background color of the toast loader
		/*beforeShow: function () {}, // will be triggered before the toast is shown
		afterShown: function () {}, // will be triggered after the toat has been shown
		beforeHide: function () {}, // will be triggered before the toast gets hidden
		afterHidden: function () {}  // will be triggered after the toast has been hidden*/
		});
	}
	$('.footer-style .btn-style1').on('click',function(){
		dan();
	});
	$('.contact-form .center-block').on('click',function(){
		if($('#inputName').val()&&$('#inputEmail').val()&&$('#inputMessage').val()!=''){
		$.toast({
		text: "感谢您的留言",
		showHideTransition: 'fade', // fade, slide or plain
		allowToastClose: false, // Boolean value true or false
		hideAfter: 3000, //
		stack: 5, 
		position: 'top-center', 
		bgColor: '#808080',
		textColor: '#eeeeee',
		textAlign: 'center',  // Text alignment i.e. left, right or center
		loader: false,  // Whether to show loader or not. True by default
		loaderBg: '#9ec600',
	});
		$('#inputName,#inputEmail,#inputMessage').val('').blur(); 
		}
	});
/*=======================================================================================*/
        //menu dropdown-plus小页面导航+
   $('.dropdown-plus span').on('click', function(){
        var overmenu_index = $('.dropdown-plus span').index(this);
        if($('.dropdown-plus').eq(overmenu_index).hasClass('active clicked')){
            $('.dropdown-plus').eq(overmenu_index).removeClass('active clicked');
        } else{
            $('.dropdown-plus').eq(overmenu_index).addClass('active clicked');
        }
    });
/*header scroll固定导航栏*/
$(window).scroll(function() {

        if ($(this).scrollTop() > 30){
            $('.header-style5').addClass('tou');
			$('.header-style5 a').addClass('disabled');
			$('.summit-fixbar li').removeClass('summit-fixbar-top');
        }
        else{
            $('.header-style5').removeClass('tou');
			$('.header-style5 a').removeClass('disabled');
			$('.summit-fixbar li').addClass('summit-fixbar-top');
			if($('.header-style5').hasClass('scrolled')){
				$('.header-style5').removeClass('scrolled');
			}
				
        }
    });
$('.header-style5').on('mousemove',function(){
	if($('.header-style5').hasClass('tou')){
			$('.header-style5').removeClass('tou');
			$('.header-style5 a').removeClass('disabled');
            $('.header-style5').addClass('scrolled');
        }});
/*$('.header-style5').mouseout(function() {
	if($('.header-style5').hasClass('tou')){
			$('.header-style5').removeClass('tou');
			$('.header-style5 a').removeClass('disabled');
            $('.header-style5').removeClass('scrolled');
        }
});*/
 //overlay hamburger-icon小页面导航三
    $('.hamburger-icon').on('click', function(){
        $('.overlay-wrapper.menu').addClass('active');
    });

//overlay video
$('.button-play').on('click', function(){
        $('.overlay-wrapper.video').addClass('active');
        var $this = $(this);
        if($(this).hasClass('open-video')) setTimeout(function(){$('iframe').attr('src', $this.data('src'));}, 500);
});

//overlay btn-close X
    $('.btn-close').on('click', function(){
        $('.overlay-wrapper').removeClass('active');
        var $this = $(this);
        $(this).closest('.overlay-wrapper.video').find('iframe').attr('src', '');
        $('.overlay-wrapper.video').removeClass('active');
    });


//header-menu hamburger-icon2
    $('.hamburger-icon2').on('click', function(){
        if($('.header-style2').hasClass('active')){
            $('.header-style2').removeClass('active');
        }else
            $('.header-style2').addClass('active');
    });
//header-menu hamburger-icon3
    $('.hamburger-icon3').on('click', function(){
        if($('.header-style3').hasClass('active')){
            $('.header-style3').removeClass('active');
        }else
            $('.header-style3').addClass('active');
    });
    /*footer input click*/
    $('.input-style input').on('focus',function(){
        var input_index = $('.input-style input').index(this);
         $('.input-style').eq(input_index).addClass('focus');
         return false;
     });
    $('.input-style input').on('focusout',function(){
        var input_index = $('.input-style input').index(this);
        if($(this).val()==""){
            $('.input-style').eq(input_index).removeClass('focus');
        }
         return false;
    });
    /*footer textarea click*/
    $('.input-style.textarea textarea').on('focus',function(){
        var form_index = $('.input-style.textarea textarea').index(this);
         $('.input-style.textarea').eq(form_index).addClass('focus');
         return false;
     });
    $('.input-style.textarea textarea').on('focusout',function(){
        var form_index = $('.input-style.textarea textarea').index(this);
        if($(this).val()==""){
            $('.input-style.textarea').eq(form_index).removeClass('focus');
        }
         return false;
    });

/*swiper-slide click*/
    /*$('.swiper-slide').on('click', function(){
        var imgSrc = $(this).data('img-src');
        $('.swipers-img img').attr('src', imgSrc);
    });*/
	/*左定位栏*/
	 $('.header-style3 .header-content a').on('click',function(){
		 var h=$($(this).attr("href")).offset().top;
		 $('html, body').stop(true,false).animate({scrollTop:h-70+'px'},{duration:100,});
		 return false;
    });
	/*Summit-fixbar回到顶部*/
	$('.summit-fixbar').on('click',function(){
		$('html, body').stop(true,false).animate({scrollTop:0+'px'},{duration:100});
		return false;
    });
	/*百度按钮*/
	/*$('.footer-style .btn-style1').on('click',function(){
		window.open("http://www.baidu.com");
	});*/
});