var projectBox = document.querySelectorAll('.project-box');

for (i = 0; i < projectBox.length; i++) {
	projectBox[i].addEventListener('click', function() {
		console.log('clicked');
		this.classList.toggle('project-slide');
	})
}