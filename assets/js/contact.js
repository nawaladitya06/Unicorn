// --- GOOGLE SHEETS CONNECTION ---
// Your Deployed Web App URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbzWHZjqyQizlO_qlAtEculCap317A2oQAvwOCv8rKjeZZ7m0wyBVn8__H87gLBVAJ23/exec';

const form = document.forms['contact-form'];
const btn = document.getElementById('submit-btn');

form.addEventListener('submit', e => {
    e.preventDefault();

    // 1. Change Button to Loading State
    const originalText = btn.innerText;
    btn.innerText = "SENDING...";
    btn.disabled = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed');

    // 2. Send Data
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // 3. Success Handling
            alert("Thank you! Your message has been sent successfully.");
            form.reset(); // Clear the form

            // Reset Button
            btn.innerText = originalText;
            btn.disabled = false;
            btn.classList.remove('opacity-50', 'cursor-not-allowed');
        })
        .catch(error => {
            // 4. Error Handling
            console.error('Error!', error.message);
            alert("Something went wrong. Please check your connection and try again.");

            // Reset Button
            btn.innerText = originalText;
            btn.disabled = false;
            btn.classList.remove('opacity-50', 'cursor-not-allowed');
        });
});