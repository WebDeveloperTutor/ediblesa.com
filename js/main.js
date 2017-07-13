
"use strict";

var winWidth, winHeight;
function is_mobile_device (){
	return jQuery.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
}

/**/
/* google map */
/**/
function init_map()
{
	var delta
	var coordLat = -37.81261128155935;
	var coordLng = 144.96260404586792;
	if( jQuery(window).width() < 756 )
	{
		delta = 0;
	}
	
	var point = new google.maps.LatLng(coordLat,coordLng);
	var center = new google.maps.LatLng(coordLat,coordLng);
	
	var mapOptions = {	
		zoom: 15,
		center: center,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var image = 'images/gmap_default.png';
  var beachMarker = new google.maps.Marker({
  	map: map,
  	position: point
  });
}

function cws_tabs_init (){
	jQuery(".tab_widget").each(function (){
		var parent = jQuery(this);
		var tabs = parent.find("[role='tab']");
		var showTab

		/* show active and hide another */
		showTab = tabs.parent().find(".active").attr("tabindex");
		parent.find(".tab_items").find(".tab_item").hide();
		parent.find(".tab_items").find("[tabindex='"+showTab+"']").show();
		/*end  show active and hide another */

		var tab_items_container = parent.find("[role='tabpanel']").parent();
		tabs.each(function(){
			jQuery(this).on("click", function (){
				var active_ind = jQuery(this).siblings(".active").eq(0).attr("tabindex");
				jQuery(this).addClass("active").siblings().removeClass("active");
				var item = tab_items_container.find("[tabindex='"+this.tabIndex+"']");
				item.siblings("[tabindex='"+active_ind+"']").eq(0).fadeToggle("150",'swing',function(){
					item.fadeToggle("150");
				});
			});
		});
	});
}

//function to load isotop after carousel bild
function isotopeCarousel(item) {
		item.isotope({
			masonry: {columnWidth: (item.find('.item').outerWidth() - item.find('.item').css("margin-left"))},
		}); 	
}
window.is_set = true;
function mobileSecondaryMenu(){ 
	var dropdownWrapp = $(".dropdown-menu-wrapper");
	var dropdownList = $(".mobile-wrap .secondary-nav>li")
	var allDropdown = $(".mobile-wrap .secondary-nav>li").find(".dropdown");
	var dropdownWrapp_dropdown

	if ($("html").hasClass("touch")) {
		$(".secondary-nav").addClass("no-hover")
		if (window.innerWidth > 767) {
			$(".secondary-nav.no-hover>li>a").click(function(event){event.preventDefault()})
			$(".secondary-nav.no-hover>li").on("click",function() {
				var elem = $(this);
				$(this).addClass("hovered").siblings().removeClass("hovered")
				$("#open_or_close_menu").addClass("open")
				if ($(elem).hasClass("clicked")) {
					document.location = ""+$(elem).children("a").attr("href")+""
				};
				$(elem).addClass("clicked").siblings().removeClass("clicked")
			})
			$("#open_or_close_menu").click(function(){
				$(this).removeClass("open");
				$(".secondary-nav.no-hover").find(".hovered").removeClass("hovered")
			})		
		}
	}else{
		$(".secondary-nav").removeClass("no-hover")
	}
	if (window.innerWidth < 768) {
		if (is_set) {
			/* mobile-secondary menu */
			for (var i = 0; i <= allDropdown.length - 1; i++) {
				dropdownWrapp.append($(allDropdown)[i].outerHTML)
			};
			dropdownWrapp_dropdown = $(".dropdown-menu-wrapper .dropdown")
			
			$(dropdownWrapp).hide();
			$(dropdownWrapp_dropdown).hide();

			$(".mobile-wrap .toogle-switcher").click(function(){
				$(this).parent().toggleClass("active");
				$(this).parent().find(".secondary-nav-wrapper").slideToggle("300");
				$(dropdownWrapp_dropdown).slideUp(300);
				$(dropdownWrapp).slideUp(300);
				$("#open_or_close_menu").removeClass("open");
				$(".mobile-wrap .secondary-nav>li.active").removeClass("active");
				$(".mobile-wrap .secondary-nav>li.clicked").removeClass("clicked");
			})
			$(dropdownList).click(function(e){
				$(dropdownWrapp).show();
				event.preventDefault();
			    var elem = $(this)
				var elemNumber = $(this).attr("data-number-filter")
				elem.addClass("active").siblings().removeClass("active");
				$("#open_or_close_menu").addClass("open")
				$(".mobile-wrap .dropdown-menu-wrapper .dropdown").slideUp(300)
				setTimeout(function(){
					$($(".mobile-wrap .dropdown-menu-wrapper .dropdown")[(elemNumber-1)]).slideDown(300)
					$(elem).addClass("clicked").siblings().removeClass("clicked")
				}, 300)
				if ($(elem).hasClass("clicked")) {
					document.location = ""+$(elem).children("a").attr("href")+""
				};    
			});
			$("#open_or_close_menu").click(function(){
				$(this).removeClass("open");
				$(".dropdown-menu-wrapper .dropdown").slideUp(300);
				$(".dropdown-menu-wrapper").slideUp(300);
				$(dropdownList).removeClass("active");
				$(dropdownList).removeClass("clicked");
			})
			is_set = false;
		}

	}else{
		$(".secondary-nav-wrapper").show();
		$(".dropdown-menu-wrapper").hide();
		$(".dropdown-menu-wrapper .dropdown").slideUp(300);
		$(".mobile-wrap .toogle-switcher").unbind( "click");
		$(".mobile-wrap .secondary-nav:not(.no-hover)>li").unbind( "click");
		$("html:not(.touch) #open_or_close_menu").removeClass("open");
		is_set = true;
	}

}

/**/
/* main nav */
/**/
window.is_set1 = true;
function mobileMainMenu(){	
	if( is_mobile_device() || (window.innerWidth < 768))
	{
		if (is_set1) {
			$('#main-nav').find("ul").hide();	
			$("body").addClass("mobile");
			if ($( "#main-nav li .has_child").length) {}else{$( "#main-nav li" ).has( "ul" ).append("<i class='has_child'></i>");}
			$('#main-nav .has_child').click (function()
			{		
				if( $(this).parent().children('ul').length )
				{
					$(this).parent().children('ul').slideToggle('fast');
					return false;
				}
			});

			$('#main-nav .switcher').click(function()
			{	
				if( $(this).next('ul').length )
				{
					$(this).next('ul').slideToggle('fast').css("display","inline-block");
					return false;
				}
			});
			is_set1 = false
		};
	}
	else
	{
		$( "#main-nav li .has_child").remove()
		$('body').removeClass("mobile");
		$('#main-nav').find("ul").css({"display":"block"});	
	}
}

/**/
/* MARK */
/**/
function star_rating(){
	var stars_active = false;
	var mark
	var rating
	$(".woocommerce .stars").on("mouseover", function(){
		if (!stars_active){
			$(this).find("span:not(.stars-active)").append("<span class='stars-active' data-set='no'>&#xf005;&#xf005;&#xf005;&#xf005;&#xf005;</span>");
			stars_active = true;
		}
	});
	$(".woocommerce .stars").on("mousemove", function (e){
		var cursor = e.pageX;
		var ofs = $(this).offset().left;
		var fill = cursor - ofs;
		var width = $(this).width(); 
		var persent = Math.round(100*fill/width);
		$(".woocommerce .stars span a").css({"line-height":String((width+1)/5)+"px","width":String(width/5)+"px"})
		$(".woocommerce .stars span .stars-active").css("margin-top","0px");
		$(this).find(".stars-active").css('width',String(persent)+"%");
		$(".stars-active").removeClass("fixed-mark");

	});
	$(".woocommerce .stars").on("click", function (e){
		var cursor = e.pageX;
		var ofs = $(this).offset().left;
		var fill = cursor - ofs;
		var width = $(this).width(); 
		var persent = Math.round(100*fill/width);
		mark = $(this).find(".stars-active");
		mark.css('width',String(persent)+"%").attr("data-set",String(persent));
		rating = $( this ).closest( '#respond' ).find( '#rating' );
		rating.val( $($(this).find("span a[class*='star-']")[Math.ceil((persent).toFixed(2)/20)-1]).text());
	});
	$(".woocommerce .stars").on("mouseleave", function (e){
		if ($(mark).attr("data-set") == "no"){
			mark.css("width","0");
		}
		else{
			var persent = $(mark).attr("data-set");
			$(mark).css("width",String(persent)+"%");
			$(".stars-active").addClass("fixed-mark");
		}
	});
}

/* woocommerce_price_slider */
function woocommerce_price_slider(){
	var current_min_price
	var current_max_price
	window.woocommerce_price_slider_params = {
		'currency_symbol' : '$',
		'currency_pos' : 'left',
	}
	// woocommerce_price_slider_params is required to continue, ensure the object exists
	if ( typeof woocommerce_price_slider_params === 'undefined' ) {
		return false;
	}
	// Get markup ready for slider
	$( 'input#min_price, input#max_price' ).hide();
	$( '.price_slider, .price_label' ).show();

	// Price slider uses jquery ui
	var min_price = $( '.price_slider_amount #min_price' ).data( 'min' ),
		max_price = $( '.price_slider_amount #max_price' ).data( 'max' );

	current_min_price = parseInt( min_price, 10 );
	current_max_price = parseInt( max_price, 10 );


	if ( woocommerce_price_slider_params.min_price ) current_min_price = parseInt( woocommerce_price_slider_params.min_price, 10 );
	if ( woocommerce_price_slider_params.max_price ) current_max_price = parseInt( woocommerce_price_slider_params.max_price, 10 );
	$( 'body' ).bind( 'price_slider_create price_slider_slide', function( event, min, max ) {
		if ( woocommerce_price_slider_params.currency_pos === 'left' ) {

			$( '.price_slider_amount span.from' ).html( woocommerce_price_slider_params.currency_symbol + min );
			$( '.price_slider_amount span.to' ).html( woocommerce_price_slider_params.currency_symbol + max );

		} else if ( woocommerce_price_slider_params.currency_pos === 'left_space' ) {

			$( '.price_slider_amount span.from' ).html( woocommerce_price_slider_params.currency_symbol + " " + min );
			$( '.price_slider_amount span.to' ).html( woocommerce_price_slider_params.currency_symbol + " " + max );

		} else if ( woocommerce_price_slider_params.currency_pos === 'right' ) {

			$( '.price_slider_amount span.from' ).html( min + woocommerce_price_slider_params.currency_symbol );
			$( '.price_slider_amount span.to' ).html( max + woocommerce_price_slider_params.currency_symbol );

		} else if ( woocommerce_price_slider_params.currency_pos === 'right_space' ) {

			$( '.price_slider_amount span.from' ).html( min + " " + woocommerce_price_slider_params.currency_symbol );
			$( '.price_slider_amount span.to' ).html( max + " " + woocommerce_price_slider_params.currency_symbol );

		}

		$( 'body' ).trigger( 'price_slider_updated', min, max );
	});

	$( '.price_slider' ).slider({
		range: true,
		animate: true,
		min: min_price,
		max: max_price,
		values: [ current_min_price, current_max_price ],
		create : function( event, ui ) {

			$( '.price_slider_amount #min_price' ).val( current_min_price );
			$( '.price_slider_amount #max_price' ).val( current_max_price );

			$( 'body' ).trigger( 'price_slider_create', [ current_min_price, current_max_price ] );
		},
		slide: function( event, ui ) {

			$( 'input#min_price' ).val( ui.values[0] );
			$( 'input#max_price' ).val( ui.values[1] );

			$( 'body' ).trigger( 'price_slider_slide', [ ui.values[0], ui.values[1] ] );
		},
		change: function( event, ui ) {

			$( 'body' ).trigger( 'price_slider_change', [ ui.values[0], ui.values[1] ] );

		},
	});
};

/**/
/* woocommerce button add */
/**/
function woocommerce_button_add() {

	// Orderby
	$( '.woocommerce-ordering' ).on( 'change', 'select.orderby', function() {
		$( this ).closest( 'form' ).submit();
	});

	// Quantity buttons
	$( 'div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)' ).addClass( 'buttons_added' ).append( '<input type="button" value="+" class="plus" />' ).prepend( '<input type="button" value="-" class="minus" />' );

	// Target quantity inputs on product pages
	$( 'input.qty:not(.product-quantity input.qty)' ).each( function() {
		var min = parseFloat( $( this ).attr( 'min' ) );

		if ( min && min > 0 && parseFloat( $( this ).val() ) < min ) {
			$( this ).val( min );
		}
	});

	$( document ).on( 'click', '.plus, .minus', function() {

		// Get values
		var $qty		= $( this ).closest( '.quantity' ).find( '.qty' ),
			currentVal	= parseFloat( $qty.val() ),
			max			= parseFloat( $qty.attr( 'max' ) ),
			min			= parseFloat( $qty.attr( 'min' ) ),
			step		= $qty.attr( 'step' );

		// Format values
		if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
		if ( max === '' || max === 'NaN' ) max = '';
		if ( min === '' || min === 'NaN' ) min = 0;
		if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;

		// Change the value
		if ( $( this ).is( '.plus' ) ) {

			if ( max && ( max == currentVal || currentVal > max ) ) {
				$qty.val( max );
			} else {
				$qty.val( currentVal + parseFloat( step ) );
			}

		} else {

			if ( min && ( min == currentVal || currentVal < min ) ) {
				$qty.val( min );
			} else if ( currentVal > 0 ) {
				$qty.val( currentVal - parseFloat( step ) );
			}

		}
		// Trigger change event
		$qty.trigger( 'change' );
	});
};


/**/
/* woocommerce shipping calc */
/**/
function woocommerce_shipping_calc_slide () {
	$( document ).on( 'click', '.shipping-calculator-button', function() {
		$( '.shipping-calculator-form' ).slideToggle( 'slow' );
		return false;
	})
	$( '.shipping-calculator-form' ).show();
};

/**/
/* on scroll */
/**/
$(window).scroll(function()
{	
	if( $(this).scrollTop() > 200 )
	{
		$('#scroll-top').fadeIn();
	}
	else
	{
		$('#scroll-top').fadeOut();
	}
});


/**/
/* on resize */
/**/
$(window).resize(function()
{
	winWidth = window.innerWidth;
	winHeight = window.innerWidth;

	/**/
	/* main nav */
	/**/
	mobileSecondaryMenu();
	mobileMainMenu();

	/**/
	/* blog */
	/**/
	$('.blog.isotope').isotope({
		masonry: {columnWidth: ($('.blog.isotope .item').outerWidth() - $('.blog.isotope .item').css("margin-left"))}
	});
 	 $('.portfolio.isotope .grid').isotope({
    	// options
    	masonry: {columnWidth: ($('.portfolio.isotope .item').outerWidth() - $('.portfolio.isotope .item').css("margin-left"))}
  	});

});


/**/
/* on document load */
/**/
$(function()
{
	winWidth = window.innerWidth;
	winHeight = window.innerHeight;

	mobileSecondaryMenu();
	mobileMainMenu();
	cws_tabs_init ();
	star_rating()
	if ($(".woocommerce").length) {
		woocommerce_price_slider( $ )
		woocommerce_button_add( $ )
		woocommerce_shipping_calc_slide ( $ )
	};

	/**/
	/* scroll animations */
	/**/
	if( winWidth > 1024 )
	{
		new WOW().init();
	}

	// Fix for hover on ipad iphone
	$(".picture , .picture>* , .link-cont a").hover(function(){});
	
	/**/
	/* search */
	/**/
	$('#search').on('click', '.opener', function()
	{
		$(this).parent().addClass('search-opened').prev().hide();
		return false;
	});
	$('#search').on('click', '.closer', function()
	{
		$(this).parent().removeClass('search-opened').prev().show();
		return false;
	});


	/**/
	/* list-grid switcher */
	/**/
	$(".woocommerce .products").addClass("grid-view")
	$("#list-or-grid>div").on("click", function (){
		$(this).addClass("active").siblings().removeClass("active");
		if ($(this).hasClass("grid-view")) {
			if ($(".woocommerce .products").hasClass("grid-view")) {
				return false
			}else{
				$(".woocommerce .products").fadeOut(300,function(){
					$(".woocommerce .products").addClass("grid-view").removeClass("list-view").fadeIn(300)
				})	
			}		
		}
		if ($(this).hasClass("list-view")){
			if ($(".woocommerce .products").hasClass("list-view")) {
				return false
			}else{
				$(".woocommerce .products").fadeOut(300,function(){
					$(".woocommerce .products").addClass("list-view").removeClass("grid-view").fadeIn(300)	
				})
			}
			
		}
	})

	/* Search icon hover */
	$( "#searchform #searchsubmit" ).mouseover(function() {
  		$("#searchform div").addClass( "hover-search" );
	});
	$( "#searchform #searchsubmit" ).mouseout(function() {
  		$("#searchform div").removeClass( "hover-search" );
	});

	/**/
	/* woocommerce tabs */
	/**/
	$( '.woocommerce-tabs .panel' ).hide();
	$('div' + $(".woocommerce-tabs .tabs .active a").attr( 'href' )).show()	
	$( '.woocommerce-tabs ul.tabs li a' ).click( function() {
		var $tab = $( this ),
		$tabs_wrapper = $tab.closest( '.woocommerce-tabs' );
		$( 'ul.tabs li', $tabs_wrapper ).removeClass( 'active' );
		$( 'div.panel', $tabs_wrapper ).hide();
		$( 'div' + $tab.attr( 'href' ), $tabs_wrapper).show();
		$tab.parent().addClass( 'active' );
		return false;
	});


	/**/
	/* fancybox */
	/**/
	$(".fancy").fancybox();
	$('.fancybox').fancybox({
		helpers: {
			media: {}
		}
	});
	
	/**/
	/* layerslider */
	/**/
	$('#layerslider').layerSlider({
		responsive: false,
		responsiveUnder: 1001,
		layersContainer: 1001,
		skinsPath: 'js/layerslider/skins/',
		navStartStop: false,
		thumbnailNavigation: 'disabled'
	});
	
	
	/**/
	/* accordion */
	/**/
	$('.accordion .active').next().show();
	$('.accordion').on('click', 'dt', function()
	{
		$(this).toggleClass('active').siblings('dt').removeClass('active');
		$(this).siblings('dd').slideUp('fast');
		$(this).next().stop().slideDown('fast');
	});
	
	
	/**/
	/* slider */
	/**/
	$('.slider').owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		pagination: false,
		slideSpeed: 300,
		rewindSpeed: 300,
		autoHeight: true,
		transitionStyle : 'fadeUp'
  });
	
	
	/**/
	/* toggles */
	/**/
	$('.toggles .active').next().show();
	$('.toggles').on('click', 'dt', function()
	{
		$(this).toggleClass('active');
		$(this).next().stop().slideToggle('fast');
	});
	
	
	/**/
	/* feedback */
	/**/
	$("#feedback-form").validate(
	{
		onkeyup: false,
		onfocusout: false,
		errorElement: 'p',
		errorLabelContainer: $("#feedback-form-errors div"),
		rules:
		{
			name:
			{
				required: true
			},
			email:
			{
				required: true,
				email: true
			},
			message:
			{
				required: true
			}
		},
		messages:
		{
			name:
			{
				required: 'Please enter your name',
			},
			email:
			{
				required: 'Please enter your email address',
				email: 'Please enter a VALID email address'
			},
			message:
			{
				required: 'Please enter your message'
			}
		},
		invalidHandler: function()
		{
			$("#feedback-form-errors").slideDown('fast');
		},
		submitHandler: function(form)
		{			
			$(form).ajaxSubmit();
			$(form)[0].reset();
			$("#feedback-form-errors").slideUp('fast');
			$("#feedback-form-success").slideDown('fast');
			return false;
		}
	});
	
	
	/**/
	/* best-reviews */
	/**/

	if ($(".grid-col-8 #best-reviews").length) {
		$('#best-reviews').owlCarousel({
			items: 2,
			itemsDesktop: [1199,2],
			navigation: true,
			navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			pagination: false,
			slideSpeed: 300,
			rewindSpeed: 300
	  	});	
	}
	else{	
		$('#best-reviews').owlCarousel({
			items: 3,
			itemsDesktop: [1199,3],
			navigation: true,
			navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			pagination: false,
			slideSpeed: 300,
			rewindSpeed: 300
  		});
	}

	/**/
	/* categories */
	/**/
	$('.categories ul').owlCarousel({
		items : 4,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		pagination: false,
		slideSpeed: 300,
		rewindSpeed: 300
  	});

  	/**/
	/* shop */
	/**/
		var n
		if ($(".woocommerce .related.products ul").length) {
			n = 3
			if ($(".woocommerce .grid-col-8 .related.products ul").length) {
				n = 2
			};
		}else{
			n = 3
		}
		$('.woocommerce .related.products ul').owlCarousel({
			itemsCustom : [
				[0, 1],
				[463, 2],
				[767, n],
				[980, n],
				[1200, n],
			],
			navigation: true,
			navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			pagination: false,
			slideSpeed: 300,
			rewindSpeed: 300
	  	});


  	/**/
	/* blog */
	/**/
	var item = $('.blog .media-block.carousel ul')
	jQuery(item).each(function (){
		jQuery(this).owlCarousel({
			singleItem:true,
			slideSpeed: 300,
			navigation: false,
			pagination: false,
			afterUpdate :isotopeCarouselInit ,
		});

		// reboot isotop grid after carousel load
		item = $(this).parent().parent().parent().parent()
		function isotopeCarouselInit () {
			isotopeCarousel($(item))
		}
		var owl = jQuery(this);
		jQuery(this).parents(".media-block").find(".carousel_nav").each(function (){
			jQuery(this).children(".next").click(function(){
				owl.trigger('owl.next');
			})
			jQuery(this).children(".prev").click(function (){
				owl.trigger('owl.prev');
			});
		});
	});
		
	/**/
	/* countdown */
	/**/
	var date = new Date();
	date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 10);
	$('#countdown').countdown({
		until: date,
		format: 'DHM',
		layout: '<ul><li><span>{dnn}</span>{dl}</li><li class="sep"></li><li><span>{hnn}</span>{hl}</li><li class="sep"></li><li><span>{mnn}</span>{ml}</li></ul>'
	});
	
	
	/**/
	/* map */
	/**/
	if( document.getElementById('map') )
	{
		var script = document.createElement('script');
	 	script.type = 'text/javascript';
	 	script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false&callback=init_map';
	 	document.body.appendChild(script);
 	}
 	
	/**/
	/* widget authors */
	/**/
	$('#widget-authors').owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		pagination: false,
		slideSpeed: 300,
		rewindSpeed: 300,
		autoHeight: true
	});
	
	
	/**/
	/* widget calendar */
	/**/
	$('#calendar').datepicker({
		prevText: '<i class="fa fa-angle-left"></i>',
		nextText: '<i class="fa fa-angle-right"></i>'
	});
	
	
	/**/
	/* scroll top */
	/**/
	$('#scroll-top').click(function()
	{
		$('html, body').animate({scrollTop: 0});
		return false;
	});


	/* portfolio fix for mobile divice */
	$('.portfolio.isotope .grid').isotope(
	 	{
     		animationOptions: {
	           duration: 800,
	           easing: 'linear',
	           queue: false
        	}
		});
	$('.portfolio.isotope .secondary-filter-mobile select').on('change', function(){
		$('.portfolio.isotope .grid').isotope(
	 	{
        	filter: $(this).val()
		});
		$(this).parent().parent().find(".filter a[data-filter='"+$(this).val()+"']").addClass('active').siblings().removeClass('active'); 
	});
	$('.portfolio.isotope .filter').on('click', 'a', function(){   
    	$('.portfolio.isotope .grid').isotope(
    	{
     		filter: $(this).data('filter')
    	});
    	$(this).addClass('active').siblings().removeClass('active');  
    
    	return false;
	});


	/* twitter feed */
	if ($('.twitter-feed').length) {
		$('.twitter-feed').tweet({
			username: 'Creative_WS',
			count: 3,
			loading_text: 'loading twitter feed...',
			template: "<li><i class='fa fa-twitter'></i><p><a href='{user_url}'>@{screen_name}</a>{join}{text}<br>{time}</p></li>"
		});
	};

});


/**/
/* on window load */
/**/
jQuery(window).load(function()
{

	/*********    ISOTOP  load    **********/
	/**/
	/* blog */
	/**/
	$('.blog.isotope').isotope({
		itemSelector: '.item',
		animationOptions: {
           duration: 800,
           easing: 'linear',
           queue: false
        },
    	masonry: {columnWidth: ($('.blog.isotope .item').outerWidth() - $('.blog.isotope .item').css("margin-left"))},
	});

	/*********    ISOTOP  load    **********/
	var $container = $('.portfolio.isotope .grid');
	// init
		$container.isotope({
		// options
		itemSelector: '.item',
		animationOptions: {
           duration: 800,
           easing: 'linear',
           queue: false
        },
		transformsEnabled:false,
		masonry: {columnWidth: ($('.portfolio.isotope .item').outerWidth() - $('.portfolio.isotope .item').css("margin-left"))},
	});
});