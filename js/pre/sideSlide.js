var side = document.querySelector('.side-content');
var txt = document.querySelector('.txt-box');
var container = document.querySelector('.top-container')

side.addEventListener('click', function() {
	container.classList.toggle('side-expand');
	txt.classList.toggle('content-display');


});

