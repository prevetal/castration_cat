document.addEventListener('DOMContentLoaded', function () {
	setTimeout(() => { // Этот таймаут убрать нужно, он нужен из-за долгой загрузки шрифтов со сторонего сайта, на реальном сайте не будет такой задержки

		// Карусель - Важно
		const castrationCatImportantSliders = [],
			castrationCatImportant = document.querySelectorAll('.castration_cat_important .swiper')

		castrationCatImportant.forEach(function (el, i) {
			el.classList.add('castration_cat_important_s' + i)

			let options = {
				loop: false,
				speed: 500,
				watchSlidesProgress: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				preloadImages: false,
				lazy: {
					enabled: true,
					checkInView: true,
					loadOnTransitionStart: true,
					loadPrevNext: true
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					bulletActiveClass: 'active'
				},
				breakpoints: {
					0: {
						spaceBetween: 20,
						slidesPerView: 'auto'
					},
					768: {
						spaceBetween: 20,
						slidesPerView: 2
					},
					1280: {
						spaceBetween: 24,
						slidesPerView: 'auto'
					},
					1440: {
						spaceBetween: 30,
						slidesPerView: 'auto'
					}
				},
				on: {
					init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
					resize: swiper => {
						let items = swiper.el.querySelectorAll('.item')

						items.forEach(el => el.style.height = 'auto')

						setHeight(items)
					}
				}
			}

			castrationCatImportantSliders.push(new Swiper('.castration_cat_important_s' + i, options))
		})


		// Карусель - Как подготовить вашу кошку к кастрации
		const castrationCatPreparationSliders = [],
			castrationCatPreparation = document.querySelectorAll('.castration_cat_preparation .swiper')

		castrationCatPreparation.forEach(function (el, i) {
			el.classList.add('castration_cat_preparation_s' + i)

			let options = {
				loop: false,
				speed: 500,
				watchSlidesProgress: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					bulletActiveClass: 'active'
				},
				breakpoints: {
					0: {
						spaceBetween: 20,
						slidesPerView: 'auto'
					},
					768: {
						spaceBetween: 20,
						slidesPerView: 2
					},
					1280: {
						spaceBetween: 24,
						slidesPerView: 3
					},
					1440: {
						spaceBetween: 30,
						slidesPerView: 3
					}
				},
				on: {
					init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
					update: swiper => setHeight(swiper.el.querySelectorAll('.item')),
					resize: swiper => {
						let items = swiper.el.querySelectorAll('.item')

						items.forEach(el => el.style.height = 'auto')

						setHeight(items)
					}
				}
			}

			castrationCatPreparationSliders.push(new Swiper('.castration_cat_preparation_s' + i, options))
		})


		// Карусель - Мифы о кастрации
		const castrationCatMythsSliders = [],
			castrationCatMyths = document.querySelectorAll('.castration_cat_myths .swiper')

		castrationCatMyths.forEach(function (el, i) {
			el.classList.add('castration_cat_myths_s' + i)

			let options = {
				loop: false,
				speed: 500,
				watchSlidesProgress: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					bulletActiveClass: 'active'
				},
				breakpoints: {
					0: {
						spaceBetween: 20,
						slidesPerView: 'auto'
					},
					768: {
						spaceBetween: 20,
						slidesPerView: 2
					},
					1280: {
						spaceBetween: 24,
						slidesPerView: 3
					},
					1440: {
						spaceBetween: 30,
						slidesPerView: 3
					}
				}
			}

			castrationCatMythsSliders.push(new Swiper('.castration_cat_myths_s' + i, options))
		})


		// Карусель - Реабилитационный период
		const castrationCatRehabilitationSliders = [],
			castrationCatRehabilitation = document.querySelectorAll('.castration_cat_rehabilitation .swiper')

		castrationCatRehabilitation.forEach(function (el, i) {
			el.classList.add('castration_cat_rehabilitation_s' + i)

			let options = {
				loop: false,
				speed: 500,
				watchSlidesProgress: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					bulletActiveClass: 'active'
				},
				breakpoints: {
					0: {
						spaceBetween: 20,
						slidesPerView: 'auto'
					},
					768: {
						spaceBetween: 20,
						slidesPerView: 2
					},
					1280: {
						spaceBetween: 24,
						slidesPerView: 3
					},
					1440: {
						spaceBetween: 30,
						slidesPerView: 3
					}
				},
				on: {
					init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
					update: swiper => setHeight(swiper.el.querySelectorAll('.item')),
					resize: swiper => {
						let items = swiper.el.querySelectorAll('.item')

						items.forEach(el => el.style.height = 'auto')

						setHeight(items)
					}
				}
			}

			castrationCatRehabilitationSliders.push(new Swiper('.castration_cat_rehabilitation_s' + i, options))
		})


		// Карусель - Доктора
		const castrationCatDoctorsSliders = [],
			castrationCatDoctors = document.querySelectorAll('.castration_cat_doctors .swiper')

		castrationCatDoctors.forEach(function (el, i) {
			el.classList.add('castration_cat_doctors_s' + i)

			let options = {
				loop: false,
				speed: 500,
				watchSlidesProgress: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				breakpoints: {
					0: {
						spaceBetween: 20,
						slidesPerView: 'auto'
					},
					768: {
						spaceBetween: 20,
						slidesPerView: 2
					},
					1280: {
						spaceBetween: 24,
						slidesPerView: 3
					},
					1440: {
						spaceBetween: 30,
						slidesPerView: 3
					}
				}
			}

			castrationCatDoctorsSliders.push(new Swiper('.castration_cat_doctors_s' + i, options))
		})


		// Карусель - Как подготовить вашу кошку к кастрации - Спойлер
		$('.castration_cat_preparation .step1 .item .spoler_btn').click(function(e) {
			e.preventDefault()

			$(this).closest('.item').find('.desc').addClass('full')
			$(this).remove()

			castrationCatPreparationSliders.forEach(swiper => {
				$(swiper.el).find('.item').height('auto')
				swiper.update()
			})
		})


		// Аккордион
		$('body').on('click', '.accordion .accordion_item .head', function(e) {
			e.preventDefault()

			const $item = $(this).closest('.accordion_item'),
				$accordion = $(this).closest('.accordion')

			if ($item.hasClass('active')) {
				$item.removeClass('active').find('.data').slideUp(300)
			} else {
				$accordion.find('.accordion_item').removeClass('active')
				$accordion.find('.data').slideUp(300)

				$item.addClass('active').find('.data').slideDown(300)
			}
		})

	}, 200)
})



// Вспомогательные функции
const setHeight = items => {
	let maxheight = 0

	items.forEach(el => {
		if (el.offsetHeight > maxheight) maxheight = el.offsetHeight
	})

	items.forEach(el => el.style.height = maxheight + 'px')
}