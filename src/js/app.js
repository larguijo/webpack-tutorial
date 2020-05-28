var showSecret = false;

secretButton.addEventListener("click", toggleSecretState);
updateSecreteParagraph();

function toggleSecretState() {
  showSecret = !showSecret;
  updateSecretButton();
  updateSecreteParagraph();
}

function updateSecretButton() {
  if (showSecret) {
    secretButton.textContent = "Hide the Secret";
  } else {
    secretButton.textContent = "Show the Secret";
  }
}

function updateSecreteParagraph() {
  if (showSecret) {
    secretParagraph.style.display = "block";
  } else {
    secretParagraph.style.display = "none";
  }
}
