// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the file input and the image preview element
  const profilePictureInput = document.getElementById("profilePicture");
  const previewImage = document.createElement("img"); // Create an image element for preview
  previewImage.style.maxWidth = "150px"; // Set max width for the preview
  previewImage.style.maxHeight = "150px"; // Set max height for the preview
  previewImage.style.display = "block"; // Ensure the image is displayed

  // Append the preview image to the DOM (for example, after the input field)
  profilePictureInput.insertAdjacentElement("afterend", previewImage);

  // Add an event listener to handle file input changes
  profilePictureInput.addEventListener("change", function (event) {
    const file = event.target.files[0]; // Get the selected file

    if (file) {
      const reader = new FileReader();

      // When the file is read, set the preview image source
      reader.onload = function (e) {
        previewImage.src = e.target.result; // Set the image source to the file data
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    } else {
      // If no file is selected, clear the preview
      previewImage.src = "";
    }
  });
});
// Hide the upload box and center the profile picture
profilePictureInput.style.display = "none"; // Hide the input box
previewImage.style.margin = "0 auto"; // Center the image horizontally
previewImage.style.display = "block"; // Ensure the image is displayed as a block element

document
  .getElementById("ticketForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;

    // Redirect to ticket.html with query parameters
    const url = `ticket.html?name=${encodeURIComponent(
      name
    )}&email=${encodeURIComponent(email)}&username=${encodeURIComponent(
      username
    )}`;
    window.location.href = url;
  });
