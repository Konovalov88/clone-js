(function() {
	const slides = [

        `<div class="columns-carousel-types">
            <img class="columns-img" src="img/icon-hive.svg" alt="Icon Hive">
            <h3 class="columns-title">Clover Honey</h3>
            <p class="text-columns">Thick honey is produced by honeybees that collect the nectar of clover plants. Mild in taste and light in color.</p>
            <button class="button">Shop Now</button>
        </div>`,

        `<div class="columns-carousel-types">
            <img class="columns-img" src="img/icon-drop.svg" alt="Icon Drop">
            <h3 class="columns-title">Buckwheat Honey</h3>
            <p class="text-columns">It is highly nutritious amber-colored honey with a slight reddish tint. It has a has a pleasant sweet taste.</p>
            <button class="button">Shop Now</button>
        </div>`,

        `<div class="columns-carousel-types">
            <img class="columns-img" src="img/icon-garden.svg" alt="Icon Garden">
            <h3 class="columns-title">Wildflower Honey</h3>
            <p class="text-columns">It is also known as polyfloral honey. It is made from the nectar of different species of flowers or blossoms.</p>
            <button class="button">Shop Now</button>
        </div>`,

        `<div class="columns-carousel-types">
            <img class="columns-img" src="img/icon-sweet.svg" alt="Icon Sweet">
            <h3 class="columns-title">Citrus Blossom Honey</h3>
            <p class="text-columns">This honey is sweet and relatively thick, a perfect match for your tea or toast. It is the best association with California!</p>
            <button class="button">Shop Now</button>
        </div>`
	];

	let currentSlideIdx = 0;

	function renderSlides() {
		 const slidesContainer = document.querySelector('.types-of-honey-carousel .types-of-honey-slides');
		 slidesContainer.innerHTML = slides[currentSlideIdx];
		 if (window.innerWidth > 500) {
			  const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
			  slidesContainer.innerHTML += slides[slide2Idx];
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

	setInterval(nextSlide, 60000);
	document.querySelector('.prev').addEventListener('click', prevSlide);
	document.querySelector('.next').addEventListener('click', nextSlide);

	renderSlides();

	window.addEventListener('resize', renderSlides);
})();