const toggleButton = document.getElementById("toggle-btn");
const titleText = document.getElementById("title-text");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("switch-color");
});

titleText.addEventListener('mouseover', () => {
    console.log(titleText.textContent)
})