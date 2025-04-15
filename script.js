function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function shuffleItemHolders() {
	const gallery = document.querySelector("div.gallery");
	const itemHolders = Array.from(gallery.children);

	shuffleArray(itemHolders);

	itemHolders.forEach((itemHolder) => {
		gallery.appendChild(itemHolder);
	});
}

document.addEventListener("DOMContentLoaded", shuffleItemHolders);

function submitGoogleForm(imageUrl) {
	const formUrl =
		"https://docs.google.com/forms/d/e/1FAIpQLSfCVNYZApxTlLvDSP5KO5qhLQFvjO_E29-iUWts9msbgneCDw/formResponse";
	const formData = new FormData();

	formData.append("entry.205283593", imageUrl);

	fetch(formUrl, {
		method: "POST",
		mode: "no-cors",
		body: formData
	});
}

document.querySelectorAll(".heart").forEach((heart) => {
	heart.addEventListener("click", (event) => {
		event.stopPropagation();

		const imageUrl = event.target.closest(".item-holder").querySelector("img")
			.src;
		submitGoogleForm(imageUrl);

		// Add "clicked" class to change the color of the heart icon
		event.target.classList.add("clicked");

		// Display "Liked" message
		const likedMessage = document.createElement("span");
		likedMessage.textContent = "Liked";
		likedMessage.style.position = "absolute";
		likedMessage.style.top = "10px";
		likedMessage.style.right = "50px";
		likedMessage.style.fontSize = "14px";
		likedMessage.style.color = "whitesmoke";
		event.target.parentNode.appendChild(likedMessage);
	});
});