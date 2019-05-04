(function(){

	var header = document.getElementsByClassName('header-area')[0];
	var home = document.getElementById('home');
	var header = document.getElementById('header');
	var portfolio = document.getElementById('portfolio');
	var contact = document.getElementById('contact');
	window.addEventListener('scroll', function () {
		var rect = home.getBoundingClientRect();
		if (rect.bottom < 0) {
			header.className = 'header-area sticky-menu';
		} else {
			header.className = 'header-area';
		}
		// var portfolioBoundries = portfolio.getBoundingClientRect();
		// if ((portfolioBoundries.top - 76) <= 0) {
		// 	portfolio.className = 'portfolio-area sticky';
		// } else if (contact.top <= (window.innerHeight) / 2){
		// 	portfolio.className = 'portfolio-area'
		// }
		about();
		skills();
		work();
		education();
		portfolio();
		contact();
	});
	function about() {
		var about = document.getElementById('about');
		var aboutItem = document.getElementById('about-item');
		var rect = about.getBoundingClientRect();
		if (rect.top <= (window.innerHeight) / 2) {
			removeActive();
			aboutItem.className = 'active'
		} else {
			aboutItem.className = ''
		}
	}
	function skills() {
		var about = document.getElementById('skills');
		var aboutItem = document.getElementById('skills-item');
		var rect = about.getBoundingClientRect();
		if (rect.top <= (window.innerHeight) / 2) {
			removeActive();
			aboutItem.className = 'active'
		} else {
			aboutItem.className = ''
		}
	}
	function work() {
		var about = document.getElementById('work');
		var aboutItem = document.getElementById('work-item');
		var rect = about.getBoundingClientRect();
		if (rect.top <= (window.innerHeight) / 2) {
			removeActive();
			aboutItem.className = 'active'
		} else {
			aboutItem.className = ''
		}
	}
	function education() {
		var about = document.getElementById('education');
		var aboutItem = document.getElementById('education-item');
		var rect = about.getBoundingClientRect();
		if (rect.top <= (window.innerHeight) / 2) {
			removeActive();
			aboutItem.className = 'active'
		} else {
			aboutItem.className = ''
		}
	}
	function portfolio() {
		var about = document.getElementById('portfolio');
		var aboutItem = document.getElementById('portfolio-item');
		var rect = about.getBoundingClientRect();
		if (rect.top <= (window.innerHeight) / 2) {
			removeActive();
			aboutItem.className = 'active'
		} else {
			aboutItem.className = ''
		}
	}
	function contact() {
		var about = document.getElementById('contact');
		var aboutItem = document.getElementById('contact-item');
		var rect = about.getBoundingClientRect();
		if (rect.top <= (window.innerHeight) / 2) {
			removeActive();
			aboutItem.className = 'active'
		} else {
			aboutItem.className = ''
		}
	}
	function removeActive() {
		var els = document.querySelectorAll('.active')
		for (let i = 0; i < els.length; i++) {
			els[i].classList.remove('active')
		}
	}
	header.addEventListener('click', function (event) {
		var targetId = event.target.dataset.targetId;
		targetElem = document.getElementById(targetId);
		window.scrollTo({
			behavior: 'smooth',
			left: 0,
			top: (targetElem.getBoundingClientRect().top + window.scrollY) - 76
		});
	});

})();