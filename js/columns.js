
(function () {
	
	const blockColumnsSectionWhatWeDo = [
		{
			id: "1",
			title: "Honey Production",
			description: "Feel free to book excursions and workshops at our swaths.",
			subtext: "Learn More",
			image: "img/icon1block2colums1.svg"

		},
		{
			id: "2",
			title: "Honey Shop",
			description: "We produce, bottle, and sell honey harvested by our beekeepers.",
			subtext: "Learn More",
			image: "img/icon2block2colums2.svg"

		},
		{
			id: "3",
			title: "Supplements",
			description: "We offer over 10 types of organic raw honey in our online store.",
			subtext: "Learn More",
			image: "img/icon3block2colums3.svg"

		},
		
		
	];

	function renderBlockColumnsSectionWhatWeDo(blockColumnsSectionWhatWeDo) {
		const blockColumnsSectionWhatWeDoContainer = document.querySelector('.block-columns-section-what-we-do');
		for (const columnsSectionWhatWeDo of blockColumnsSectionWhatWeDo) {
			blockColumnsSectionWhatWeDoContainer.innerHTML += `<div class="block-columns-section-what-we-do">
			<div class="columns-section-what-we-do">
				 <img class="columns-img-section-what-we-do" src="${columnsSectionWhatWeDo.image}" alt="${columnsSectionWhatWeDo.title}">
				 <h4>
				 ${columnsSectionWhatWeDo.title}
				 </h4>
				 <p class="text-columns">
					  ${columnsSectionWhatWeDo.description}
				 </p>
				 <p class="subtitle-what-we-do">
					 ${columnsSectionWhatWeDo.subtext}
				 </p>
			</div>`;
		}
	}
	
	renderBlockColumnsSectionWhatWeDo(blockColumnsSectionWhatWeDo);
		
})();