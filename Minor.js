//On clicking login on the navbar, the login form will pop up and then the sign up when clicked on create an account 
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});
// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());
// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});
// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});
document.getElementById("signup-button").addEventListener('click',function(){
    document.querySelector(".form-popup").computedStyleMap.display="flex";
})
const opensignup= document.querySelectorAll('[form-box signup]');
const closesignup= document.querySelectorAll('[close-btn material-symbols-rounded]');
const overlay= document.getElementById('overlay');


const stats = document.querySelectorAll('.about-us .last-text .text1, .about-us .last-text .text2');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => {
    observer.observe(stat);
});

//On clicking the get started button in Hero section users will be shown the sign up form as a pop-up
// Get the elements
const ctaButton = document.querySelector('.cta-button');  // The CTA button
const signupModal = document.querySelector('.form-popup');  // Correct class for modal
const closeBtn = document.querySelector('.close-btn');  // Close button inside modal

// When the CTA button is clicked, show the sign-up modal
ctaButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    signupModal.style.display = 'block'; // Show the sign-up modal
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    signupModal.style.display = 'none'; // Hide the sign-up modal
});
