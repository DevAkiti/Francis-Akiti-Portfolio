const menu = document.querySelector("nav");

document.querySelector(".menu-bar").addEventListener('click', function () {
	menu.classList.toggle("dropdown-menu");
})

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
	link.addEventListener('click', function () {
		menu.classList.remove("dropdown-menu");
	});
	
});

// // Close menu when clicking outside
document.addEventListener('click', function (event) {
	if (!event.target.closest('nav')) {
		menu.classList.remove("dropdown-menu");
	}
});

const link = document.getElementById("resumeLink");

const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

if (isMobile) {
  link.target = "_blank";
  link.rel = "noopener noreferrer";
} else {
  link.setAttribute("download", "Francis_Akiti_CV.pdf");
}