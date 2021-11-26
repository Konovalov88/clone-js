(function() {
	const slides = [
		 
		 `<div class="columns-section-what-we-do">
			  <img class="columns-img-section-what-we-do" src="img/icon1block2colums1.svg" alt="Honey Production">
			  <h4>
					Honey Production
			  </h4>
			  <p class="text-columns">
					Feel free to book excursions and workshops at our swaths.
			  </p>
			  <p class="subtitle-what-we-do">
					Learn More
			  </p>
		 </div>`,


		 `<div class="columns-section-what-we-do">
			  <img class="columns-img-section-what-we-do" src="img/icon2block2colums2.svg" alt="Honey Shop">
			  <h4>
					Honey Shop
			  </h4>
			  <p class="text-columns">
					We produce, bottle, and sell honey harvested by our beekeepers.
			  </p>
			  <p class="subtitle-what-we-do">
					Learn More
			  </p>
		 </div>`,


		 `<div class="columns-section-what-we-do">
			  <img class="columns-img-section-what-we-do" src="img/icon3block2colums3.svg" alt="Supplements">
			  <h4>
					Supplements
			  </h4>
			  <p class="text-columns">
					We offer over 10 types of organic raw honey in our online store.
			  </p>
			  <p class="subtitle-what-we-do">
					Learn More
			  </p>
		 </div>`,
         `<div class="columns-section-what-we-do">
			  <img class="columns-img-section-what-we-do" src="img/icon4block2.svg" alt="Bekeepeeng Classes">
			  <h4>
					Bekeepeeng Classes
			  </h4>
			  <p class="text-columns">
					We produce, bottle, and sell honey harvested by our beekeepers.
			  </p>
			  <p class="subtitle-what-we-do">
					Learn More
			  </p>
		 </div>`
	];

	let currentSlideIdx = 0;

	function renderSlides() {
		 const slidesContainer = document.querySelector('.block-columns-section-what-we-do');
		 slidesContainer.innerHTML = slides[currentSlideIdx];
		 if (window.innerWidth > 500) {
			  const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
			  slidesContainer.innerHTML += slides[slide2Idx];
			  if (window.innerWidth > 900) {
					const slide3Idx = slide2Idx + 1 >= slides.length ? 0 : slide2Idx + 1;
					slidesContainer.innerHTML += slides[slide3Idx];    
			  }
		 }
	}

	function nextSlide() {
		 currentSlideIdx++;
		 if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
		 renderSlides();
	}

	function prevSlide() {
		 currentSlideIdx--;
		 if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
		 renderSlides();
	}

	setInterval(nextSlide, 100000);
	document.querySelector('.prev').addEventListener('click', prevSlide);
	document.querySelector('.next').addEventListener('click', nextSlide);

	renderSlides();

	window.addEventListener('resize', renderSlides);
})();