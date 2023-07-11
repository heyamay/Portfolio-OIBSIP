// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
  
    for (const link of links) {
      link.addEventListener("click", smoothScroll);
    }
  });
  
  function smoothScroll(event) {
    event.preventDefault();
  
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let start = null;
  
    window.requestAnimationFrame(step);
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  
    function easeInOutCubic(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
    }
  }
  
  // Form submission
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact_Form");
    form.addEventListener("submit", handleFormSubmit);
  });
  
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const message = event.target.message.value;
  
    // Send the form data to the server using AJAX or fetch
  
    // Example using fetch API
    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };
  
    fetch("submit-form-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        // Form submitted successfully
        // You can show a success message or redirect the user to a thank you page
      } else {
        // Form submission failed
        // You can show an error message to the user
      }
    })
    .catch(error => {
      // Handle any errors that occur during form submission
      console.error(error);
    });
  }
  