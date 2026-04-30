const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}

function handleDemoForm(formId, messageId, messageBuilder) {
  const form = document.getElementById(formId);
  const message = document.getElementById(messageId);
  if (!form || !message) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = messageBuilder(new FormData(form));
    form.reset();
  });
}

handleDemoForm("loginForm", "loginMessage", () => "Login successful (demo)");
handleDemoForm("signupForm", "signupMessage", (data) => `Account created for ${data.get("signupUsername")} (demo).`);
handleDemoForm("donationForm", "donationMessage", (data) => `Thank you. Your $${data.get("donationAmount")} donation was recorded as a demo confirmation.`);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
