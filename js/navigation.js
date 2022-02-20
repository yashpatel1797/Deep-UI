const navHamburger = document.querySelector('.nav-hamburger');
const navBar = document.querySelector('.nav-bar');

navHamburger.addEventListener('click', () => {
	console.log("object");
	navBar.classList.toggle('active');
});
