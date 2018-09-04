(function(){

	var header = document.getElementsByClassName('header-area')[0];
	var home = document.getElementById('home');
	window.addEventListener('scroll', function () {
		var rect = home.getBoundingClientRect();
		if (rect.top < 0) {
			header.className = 'header-area sticky-menu';
		} else if (rect.top >= 0) {
			header.className = 'header-area';
		}
	});

})();