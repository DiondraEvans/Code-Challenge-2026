document.addEventListener('DOMContentLoaded', function () {
	
	const menu = document.getElementById('menu');
	const menuBtn = document.getElementById('menu-btn');
	const contactForm = document.getElementById('contact-form');
	const backToTop = document.getElementById('back-to-top');
	

	function toggleMenu() {
			menu.classList.toggle("visible");
			 if (menu.classList.contains("visible")) {
				menuBtn.style.backgroundImage = 'url("assets/xmark.svg")';
			} else {
				menuBtn.style.backgroundImage = 'url("assets/bars.svg")';
			}
		}
	
	menuBtn.addEventListener('click', toggleMenu);


	contactForm.addEventListener('submit', function (event) {
		event.preventDefault();
		alert('Form submitted!');
	});

	window.onscroll = function () {
		if (window.scrollY > 500) {
			backToTop.classList.add("display");
		} else {
			backToTop.classList.remove('display');
		}
	};

});