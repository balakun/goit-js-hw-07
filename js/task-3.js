const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  if (trimmedValue) {
    nameOutput.textContent = trimmedValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
