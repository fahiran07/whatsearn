// Loading Animation
window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");
	loader.style.display = "none";
});

// Scroll Animation
const appCards = document.querySelectorAll(".app-card");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}
		});
	},
	{ threshold: 0.1 }
);

appCards.forEach((card) => {
	observer.observe(card);
});
