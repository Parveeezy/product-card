const form = document.getElementById("subscribe");
const inputElement = document.querySelector(".input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log({
    email: inputElement.value,
  });
});
