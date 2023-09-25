// تحديد الأيقونات والهيئة الأساسية للصفحة
const darkModeIcon = document.getElementById("dark-mode");
const lightModeIcon = document.getElementById("light-mode");
const body = document.body;

// التبديل بين وضع الظلام ووضع النور
darkModeIcon.addEventListener("click", () => {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
});

lightModeIcon.addEventListener("click", () => {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
});
let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
event.addEventListener("click", () => {
	if (event.classList.contains("active")) {
	event.classList.remove("active");
	} else {
	event.classList.add("active");
	}
});
});

