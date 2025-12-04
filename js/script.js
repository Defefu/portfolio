/* ===================== typing animation ====================*/
document.addEventListener("DOMContentLoaded", () => {
    var typed = new Typed(".typing", {
        strings: ["Web Designer", "Web Developer", "Graphics Designer", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "b5349544-a853-4bb9-87e0-3e3ecbb375a5");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});