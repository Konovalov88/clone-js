(function() {
    const slides = [
        {   
            id: "1",
            image: "img/icon-hive.svg",
            title: "Clover Honey",
            description: `Thick honey is produced by honeybees that collect the nectar of clover plants. Mild in taste and light in color.`,
        },
        {   
            id: "2",
            image: "img/icon-drop.svg",
            title: "Buckwheat Honey",
            description: `It is highly nutritious amber-colored honey with a slight reddish tint. It has a has a pleasant sweet taste.`,
        },        
        {   
            id: "3",
            image: "img/icon-garden.svg",
            title: "Wildflower Honey",
            description: `It is also known as polyfloral honey. It is made from the nectar of different species of flowers or blossoms.`,
        },        
        {   
            id: "4",
            image: "img/icon-hive.svg",
            title: "Citrus Blossom Honey",
            description: `This honey is sweet and relatively thick, a perfect match for your tea or toast. It is the best association with California!`,
        },
    ];
       

    const productsContainer = document.querySelector(".products");
    let html = "";
    for (const product of sortedProducts) {
      html += `
             <article class="product">
                <img src="${product.image}" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="buttons">
                    <button class="button card-button">Shop Now</button>
                </div>
            </article>`;
    }
    productsContainer.innerHTML = html;
  }

    let currentSlideIdx = 0;

    function renderSlides() {
        const slidesContainer = document.querySelector('.carousel .slides-container');
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

    
    document.querySelector('.carousel .prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel .next').addEventListener('click', nextSlide);

    renderSlides();

    window.addEventListener('resize', renderSlides);
})();