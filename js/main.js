const content = document.querySelector('.transformation__content')
const list = content.querySelector('.transformation__list')
const item = Array.from(content.querySelectorAll('.transformation__item'))

if (document.documentElement.clientWidth <= 465) {
	const navigation = document.createElement('div')
	const prev = document.createElement('div')
	const next = document.createElement('div')
	const pagination = document.createElement('div')
	navigation.classList.add('transformation__navigation')
	prev.classList.add('transformation__prev', 'swiper-button-prev')
	next.classList.add('transformation__next', 'swiper-button-next')
	pagination.classList.add('transformation__pagination')
	navigation.append(prev, pagination, next)
	content.append(navigation)
	content.classList.add('swiper')
	list.classList.add('swiper-wrapper')
	item.forEach(li => {
		li.classList.add('swiper-slide')
	})

	const swiper1 = new Swiper('.transformation__content', {
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.transformation__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: next,
			prevEl: prev,
		},
	})
} else {
	content.classList.remove('swiper')
	list.classList.remove('swiper-wrapper')
	item.forEach(li => {
		li.classList.remove('swiper-slide')
	})
}

const swiper2 = new Swiper('.participants__swiper', {
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
	spaceBetween: 30,
	pagination: {
		el: '.participants__pagination',
		type: 'fraction',
	},

	navigation: {
		nextEl: '.participants__next',
		prevEl: '.participants__prev',
	},
})
