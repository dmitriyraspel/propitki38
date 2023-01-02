$(function() {

	$('input[type="tel"]').mask('+7 (999) 999-99-99');




	$('.burger').on('click', function(e) {
		e.preventDefault();

		$('.mobMenuOverlay').fadeIn();
		$('.mobMenuSection').addClass('active');
		$('body').addClass('hidden');
	});

	$('.closeMobMenu').on('click', function(e) {
		e.preventDefault();

		$('.mobMenuOverlay').fadeOut();
		$('.mobMenuSection').removeClass('active');
		$('body').removeClass('hidden');
	});




	/* Селекты */

	$(document).on('click', '.selectField', function(e) {
		e.preventDefault();

		$(this).toggleClass('active');

		if ($(this).hasClass('active')) {
			$('.selectChildren').hide();

			$('.selectField').removeClass('active');
			$(this).addClass('active');

			$(this).parents('.selectWrap').find('.selectChildren').show();
		} else {
			$(this).parents('.selectWrap').find('.selectChildren').hide();
		}
	});

	$(document).on('click', '.selectChild', function() {
		var selectName = $(this).parents('.selectWrap').data('name');
		$(this).parents('form').find('input[name="'+ selectName +'"]').val($(this).data('val'));

		$(this).parents('.selectWrap').find('.selectField').html($(this).html()).removeClass('active');
		$(this).parents('.selectWrap').find('.selectChildren').hide();
		$(this).addClass('active').siblings().removeClass('active');
	});

	$(document).mouseup(function (e) {
		var elem = $('.selectWrap');
		if (!elem.is(e.target) && elem.has(e.target).length === 0) {
			elem.find('.selectChildren').hide();
			elem.find('.selectField').removeClass('active');
		}
	});




	/* Воспроизведение видео */

	$('.videoOverlay').on('click', function(e) {
		e.preventDefault();

		$('video').each(function() {
			this.pause();
			$(this).parents('.videoBlock').find('.videoOverlay').fadeIn();
		});

		var video = this.previousElementSibling.querySelector('video');
		video.play();

		$(this).fadeOut();
	});



	/* Фиксированный header */
	
	$(document).on('scroll', function(e) {
		var scrollTop = $(this).scrollTop();

		if ($(window).width() > 960) {
			if (scrollTop > 76) {
				$('header').addClass('fixed');
				$('body').addClass('fixedHeader');
			} else {
				$('header').removeClass('fixed');
				$('body').removeClass('fixedHeader');
			}
		}
	});
	




	/* Модальные окна */

	$('.showOrderModal').on('click', function(e) {
		e.preventDefault();

		$('.overlay, #orderModal').fadeIn();
		$('#orderModal .input').first().find('input').focus();
	});

	$('.overlay, .closeModal').on('click', function(e) {
		e.preventDefault();

		$('.overlay, .modal').fadeOut();
	});




	/* == ГЛАВНАЯ == */

	/* Слайдер вверху */

	$('.main1Wrap').slick({
		arrows: false,
		dots: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000
	});




	/* Преимущества */

	if ($('.main5SectionWrap').length > 0) {
	 	var wrapperOffset = ($(window).width() - $('.main5Wrap').innerWidth()) / 2;
	 	var main5Width = $('.main5Item').length * $('.main5Item').innerWidth();
	 	var main5Scroll = main5Width - $(window).width() + wrapperOffset;

	 	var main5Height = main5Scroll + $(window).innerHeight() + 150;

	 	$('.main5SectionWrap').css('height', main5Height);

	 	$(document).on('scroll', function() {
	 		var scrollTop = $(this).scrollTop();

	 		if ($(window).width() > 960) {
		 		if (scrollTop > $('.main5SectionWrap').offset().top) {
		 			var val = parseInt(scrollTop - $('.main5SectionWrap').offset().top);

		 			if (val < main5Scroll) {
			 			$('.main5Wrap').css({
			 				'transform': 'translateX(-'+val+'px)'
			 			});
		 			}
		 		} else {
		 			$('.main5Wrap').removeAttr('style');
		 		}
	 		}
	 	});

	 	if ($(window).width() <= 960) {
	 		$('.main5Wrap').slick({
	 			arrows: false,
	 			dots: true
	 		});
	 	}
 	}




 	/* Пропитки - это */

	if ($('.main6SectionWrap').length > 0) {
	 	var wrapperOffset = ($(window).width() - $('.main6Wrap').innerWidth()) / 2;
	 	var main6Width = $('.main6Item').length * $('.main6Item').innerWidth();
	 	var main6Scroll = main6Width - $(window).width() + wrapperOffset;

	 	var main6Height = main6Scroll + $(window).innerHeight() + 150;

	 	$('.main6SectionWrap').css('height', main6Height);

	 	$(document).on('scroll', function() {
	 		var scrollTop = $(this).scrollTop();

	 		if ($(window).width() > 960) {
		 		if (scrollTop > $('.main6SectionWrap').offset().top) {
		 			var val = parseInt(scrollTop - $('.main6SectionWrap').offset().top);

		 			if (val < main6Scroll) {
			 			$('.main6Wrap').css({
			 				'transform': 'translateX(-'+val+'px)'
			 			});
		 			}
		 		} else {
		 			$('.main6Wrap').removeAttr('style');
		 		}
	 		}
	 	});

	 	if ($(window).width() <= 960) {
	 		$('.main6Wrap').slick({
	 			arrows: false,
	 			dots: true
	 		});
	 	}
 	}




 	/* Новости на главной */

 	if ($(window).width() > 960) {
	 	$('.mainNewsWrap').slick({
	 		slidesToShow: 3,
	 		arrows: false,
	 		dots: true,
	 		speed: 750
	 	});
 	}

 	$('.mainNewsArrow.prev').on('click', function(e) {
 		e.preventDefault();

 		$('.mainNewsWrap').slick('slickPrev');
 	});

 	$('.mainNewsArrow.next').on('click', function(e) {
 		e.preventDefault();

 		$('.mainNewsWrap').slick('slickNext');
 	});




 	/* == О НАС == */

 	if ($('.about3SectionWrap').length > 0) {
	 	var wrapperOffset = ($(window).width() - $('.about3Wrap').innerWidth()) / 2;
	 	var about3Width = $('.about3Item').length * $('.about3Item').innerWidth();
	 	var about3Scroll = about3Width - $(window).width() + wrapperOffset;

	 	var about3Height = about3Scroll + $(window).innerHeight() + 150;

	 	$('.about3SectionWrap').css('height', about3Height);

	 	$(document).on('scroll', function() {
	 		var scrollTop = $(this).scrollTop();

	 		if ($(window).width() > 960) {
		 		if (scrollTop > $('.about3SectionWrap').offset().top) {
		 			var val = parseInt(scrollTop - $('.about3SectionWrap').offset().top);

		 			if (val < about3Scroll) {
			 			$('.about3Wrap').css({
			 				'transform': 'translateX(-'+val+'px)'
			 			});
		 			}
		 		} else {
		 			$('.about3Wrap').removeAttr('style');
		 		}
	 		}
	 	});

	 	if ($(window).width() <= 960) {
	 		$('.about3Wrap').slick({
	 			arrows: false,
	 			dots: true
	 		});
	 	}
 	}




 	/* == FAQ == */

 	$(document).on('click', '.faqItem .ques, .faqItemArrow', function(e) {
 		$(this).parents('.faqItem').toggleClass('active').find('.answ').slideToggle();

 		if (!$(this).parents('.faqItem').hasClass('active')) {
 			$('html, body').animate({
 				scrollTop: $(this).parents('.faqItem').offset().top - $('header').innerHeight()
 			}, 500);
 		}
 	});




 	/* == КАТАЛОГ == */

 	/* Бытовые/Профессиональные */

 	$('.catalogTypeItem').on('click', function(e) {
 		e.preventDefault();

 		$(this).addClass('active').siblings().removeClass('active');
 		$('.catalogTypeDescItem').eq($(this).index()).addClass('active').siblings().removeClass('active');
 	});

 	/* Чётное кол-во в мобилке */

 	$('.catalogWrap').each(function() {
 		var catalogLength = $(this).find('.catalogItem').length;

 		if (catalogLength % 2 === 0) {
 			var catalogLengthNew = catalogLength;
 		} else {
 			var catalogLengthNew = catalogLength - 1;
 		}

 		if ($(window).width() <= 560 && $(window).width() > 360 && catalogLength != 1) {
	 		$(this).find('.catalogItem').each(function(i) {
	 			if (i >= catalogLengthNew) {
	 				$(this).hide();
	 			}
	 		});
 		}
 	});




 	/* == КАРТОЧКА ТОВАРА == */

 	/* Табы в продукте */

	if ($('.productTabsItem').length > 0) {
		$('.productTabsItem').first().addClass('active');
	}

	if ($('.productTabsWrap').length > 0) {
		$('.productTabsWrap').first().addClass('active');
	}

	$('.productTabsItem').on('click', function(e) {
		e.preventDefault();

		var productTabsActive = $(this).index();

		$('.productTabsWrap').removeClass('active').eq(productTabsActive).addClass('active');
		$('.productTabsItem').removeClass('active').eq(productTabsActive).addClass('active');

		/* Скрыть все активные видео */

		$('.product2Section video').each(function() {
			this.pause();
		});

		$('.product2Section .videoOverlay').fadeIn();
	});




	/* == ГДЕ КУПИТЬ == */

	if ($('.contactsMap').length > 0) {
		var officesLength = $('.offices .contactsListItem').length - 1;
		var officesArr = [];

		var warehousesLength = $('.warehouses .contactsListItem').length - 1;
		var warehousesArr = [];

		var shopsLength = $('.shops .contactsListItem').length - 1;
		var shopsArr = [];

		for (var i = 0; i <= officesLength; i++) {
			var firstCoord = $('.offices .contactsListItem').eq(i).data('coord1');
			var lastCoord = $('.offices .contactsListItem').eq(i).data('coord2');
			officesArr[i] = new google.maps.LatLng(firstCoord, lastCoord);
		}

		for (var i = 0; i <= warehousesLength; i++) {
			var firstCoord = $('.warehouses .contactsListItem').eq(i).data('coord1');
			var lastCoord = $('.warehouses .contactsListItem').eq(i).data('coord2');
			warehousesArr[i] = new google.maps.LatLng(firstCoord, lastCoord);
		}

		for (var i = 0; i <= shopsLength; i++) {
			var firstCoord = $('.shops .contactsListItem[data-shop="'+ i +'"]').data('coord1');
			var lastCoord = $('.shops .contactsListItem[data-shop="'+ i +'"]').data('coord2');
			shopsArr[i] = new google.maps.LatLng(firstCoord, lastCoord);
		}


		var directionsService = new google.maps.DirectionsService();
		var directionsDisplay = new google.maps.DirectionsRenderer();

		var map = new google.maps.Map($("#map")[0], {
		    center: new google.maps.LatLng(52.267096, 104.330580),
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    zoom: 16,
		    scrollwheel: true,
		    streetViewControl: false,
		    mapTypeControl: false
		});

		directionsDisplay.setMap(map);


		for (var i = 0; i <= officesLength; i++) {
			var marker = new google.maps.Marker({
			    position: officesArr[i],
			    map: map,
			    //icon: "/wp-content/themes/prompower/assets/img/map-pin1Big.svg",
			    icon: "img/map-pin1Big.svg",
			    visible: true
			});
		}

		for (var i = 0; i <= warehousesLength; i++) {
			var marker = new google.maps.Marker({
			    position: warehousesArr[i],
			    map: map,
			    icon: "img/map-pin2Big.svg",
			    visible: true
			});
		}

		for (var i = 0; i <= shopsLength; i++) {
			var marker = new google.maps.Marker({
			    position: shopsArr[i],
			    map: map,
			    icon: "img/map-pin3Big.svg",
			    visible: true
			});
		}
    }

    $('.contactsListItem').on('click', function(e) {
    	var index = $(this).index();
    	var dataShop = parseInt($(this).data('shop'));

    	if ($(this).parent().hasClass('offices')) {
    		map.setCenter(officesArr[index]);
    	}

    	if ($(this).parent().hasClass('warehouses')) {
    		map.setCenter(warehousesArr[index]);
    	}

    	if ($(this).parent().hasClass('shops')) {
    		map.setCenter(shopsArr[dataShop]);
    	}

		$('.contactsListItem').removeClass('active');
		$(this).addClass('active');

		if ($(window).width() < 960) {
			$('html, body').animate({
				scrollTop: $('.contactsWrap').offset().top - $('header').innerHeight() - 20
			}, 500);
		}
	});

	$('.offices .contactsListItem').first().addClass('active');


});