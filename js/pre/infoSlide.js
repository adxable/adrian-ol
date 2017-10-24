var projectBox = document.querySelectorAll('.containerMid__project');

for (i = 0; i < projectBox.length; i++) {
	projectBox[i].addEventListener('click', function() {
		console.log('clicked');
		this.classList.toggle('containerMid__project--active');
	})
}