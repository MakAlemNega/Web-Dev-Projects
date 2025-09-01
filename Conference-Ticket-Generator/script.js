const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("profilePicture");
const fileNameDisplay = document.getElementById("fileName");

dropZone.addEventListener("click", () => fileInput.click());

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.style.borderColor = "#000";
});

dropZone.addEventListener("dragleave", () => {
  dropZone.style.borderColor = "#ccc";
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.style.borderColor = "#ccc";
  const file = e.dataTransfer.files[0];
  handleFile(file);
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  handleFile(file);
});

function handleFile(file) {
  if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
    if (file.size <= 10 * 1024 * 1024) {
      fileNameDisplay.textContent = `Selected file: ${file.name}`;
    } else {
      fileNameDisplay.textContent = "File size exceeds 10MB limit.";
    }
  } else {
    fileNameDisplay.textContent =
      "Invalid file type. Please upload a JPG or PNG.";
  }
}
