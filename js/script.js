// BURGER
const iconBurger = document.querySelector('.header__burger');
const headerContent = document.querySelector('.header__content');
if (iconBurger){
	iconBurger.addEventListener("click", function(e) {
		document.body.classList.toggle('lock');
		iconBurger.classList.toggle('active');
		headerContent.classList.toggle('active');
	});
}

// NAV TO
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

// // SPOLLERS
// const spollersArray = document.querySelectorAll('[data-spollers');
// if (spollersArray.length > 0) {
// 	const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
// 		return !item.dataset.spollers.split(",")[0];
// 	});

// 	if (spollersRegular.length > 0) {
// 		initSpollers(spollersRegular);
// 	}

// 	function initSpollers() {
// 		spollersArray.forEach(spollersBlock => {
// 			spollersBlock.classList.add('init');
// 			initSpollerBody(spollersBlock);
// 			spollersBlock.addEventListener("click", setSpollerAction);
// 		})
// 	}
// }

document.querySelectorAll('.item-questions__trigger').forEach((item) => {
	item.addEventListener("click", () => {
		const parent = item.parentNode;
		// document.querySelectorAll('.item-questions__content').hidden = true;
		parent.classList.toggle('item-questions--active');
	})
})

// let slideDown = (target, duration = 500) => {
// 	if (!target.classList.contains('slide')) {
// 		target.classList.add('slide');
// 		if (target.hidden) {
// 			target.hidden = false;
// 		}
// 		let height = target.offsetHeight;
// 		target.style.overflow = 'hidden';
// 		target.style.paddingTop = 0;
// 		target.style.paddingBottom = 0;
// 		target.style.marginTop = 0;
// 		target.style.marginBottom = 0;
// 		target.offsetHeight;
// 		target.styl
// 	}
// }

const swiper = new Swiper('.reviews__slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	navigation: {
		nextEl: ".button-next",
		prevEl: ".button-prev"
	},
	pagination: {
		el: ".swiper-pagination",
	},
});

const worksSwiper = new Swiper('.works__slider', {
	// Optional parameters
	loop: true,
	navigation: {
		nextEl: ".button-next",
		prevEl: ".button-prev"
	},
});

const stepsSwiper = new Swiper('.steps__slider', {
	// Optional parameters
	loop: true,
	spaceBetween: 160,
	pagination: {
		el: ".swiper-pagination",
	},
});