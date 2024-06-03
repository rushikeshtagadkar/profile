// script.js
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert("Please fill in all fields.");
        return;
      }

      // Customize this URL based on your server-side script
      const submitUrl = "submit.php";

      // Send the form data to the server using fetch
      fetch(submitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(new FormData(contactForm)).toString(),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Form submitted successfully!");
          contactForm.reset();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }
});
