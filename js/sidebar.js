const mySideBar = document.querySelector('#my-side-bar');
const sideBarButton = document.querySelector('.nav-opening-button');
const sideBarNavLinks = document.querySelectorAll('.nav-link-item');

const arrayOfClickableItemsToToggleSideBar = [
	sideBarButton,
	...sideBarNavLinks,
];
arrayOfClickableItemsToToggleSideBar.forEach((button) => {
	button.addEventListener('click', () => {
		mySideBar.classList.toggle('sidebar-active');
	});
});

sideBarNavLinks.forEach(item => {
	item.addEventListener("click", ()=> {
		const currentActive = document.querySelectorAll(".active");
		currentActive[0].classList.remove("active");
		item.classList.add("active");
	})
})
