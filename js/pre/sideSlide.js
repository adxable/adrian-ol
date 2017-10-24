var side = document.querySelector('.containerTop__sideContent');
var txt = document.querySelector('.sideContent__txtBox');
var container = document.querySelector('.containerTop')

side.addEventListener('click', function() {
	container.classList.toggle('containerTop--active');
	txt.classList.toggle('sideContent__txtBox--active');


});

