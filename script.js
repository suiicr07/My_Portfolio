function sendMail(e) {
  e.preventDefault();

  const form = document.getElementById("contact-form");

  if (!form) {
    alert("Contact form not found.");
    return;
  }

  emailjs
    .sendForm("service_rxslhry", "template_jwca5xc", form, "J1RMAIeSC1g77lTGm")
    .then(
      () => {
        alert("Message sent!");
        form.reset();
      },
      (error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong... try again later.");
      },
    );
}
