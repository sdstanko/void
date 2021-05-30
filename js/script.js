// $(document).ready(function() {
// 	$('.header__burger').click(function(event) {
// 		$('.header__burger,.header__content').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });

const iconBurger = document.querySelector('.header__burger');
const headerContent = document.querySelector('.header__content');
if (iconBurger){
	iconBurger.addEventListener("click", function(e) {
		document.body.classList.toggle('lock');
		iconBurger.classList.toggle('active');
		headerContent.classList.toggle('active');
	});
}

const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if(iconBurger.classList.contains('active')) {
				document.body.classList.remove('lock');
				iconBurger.classList.remove('active');
				headerContent.classList.remove('active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}