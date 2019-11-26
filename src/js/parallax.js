const parallaxImages = document.querySelectorAll(".parallax__image");
document.querySelector(".parallax__noscript--image").style.display = "none";

window.addEventListener("scroll", () => {
	parallaxImages.forEach( ( image, index ) => {
		image.style.transform = 'translateY(-' + window.scrollY * (index + 1) / 10 + 'px)';
	})
})