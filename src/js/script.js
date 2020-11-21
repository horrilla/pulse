/* $(document).ready(function(){
	$('.carousel__inner').slick({
	speed: 1200,
	//adaptiveHeight: true,
	prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.png"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/nextpng.png"></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: false,
		dots: true
			}
		}
	]
	});
});
	 */

const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: true,
	autoplayButtonOutput: false,
	autoplayTimeout: 6000,
	speed: 3000,
	controls: false,
	nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});