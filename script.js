document.addEventListener('DOMContentLoaded', () => {
    const ham = document.querySelector('.ham');
    const menuBox = document.querySelector('.menu-box');
    const body = document.body;

    ham.addEventListener('click', () => {
        toggleMenuBox();
    });

    // Close menu box when any anchor tag inside it is clicked
    menuBox.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            toggleMenuBox();
        }
    });

    // Close menu box when clicked outside of it
    document.addEventListener('click', (event) => {
        if (!menuBox.contains(event.target) && event.target !== ham) {
            menuBox.classList.remove('active');
            ham.classList.remove('active');
            body.classList.remove('menu-open'); // Remove class from body
        }
    });

    function toggleMenuBox() {
        if (menuBox.classList.contains('active')) {
            menuBox.classList.remove('active');
            body.classList.remove('menu-open'); // Remove class from body
            ham.classList.remove('active');

        } else {
            menuBox.classList.add('active');
            ham.classList.add('active');
            body.classList.add('menu-open'); // Add class to body
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const locationsContainer = document.querySelector('.locations-present');
    const locations = Array.from(locationsContainer.querySelectorAll('a'));
    
    locations.sort((a, b) => a.textContent.localeCompare(b.textContent));

    locations.forEach(location => {
        locationsContainer.appendChild(location);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const locationSelector = document.querySelector('.location-selector p');
    const locationDropdown = document.querySelector('.location-dropdown');
    const overlay = document.querySelector('.overlay2');
    const mobLocation = document.querySelector('.mob-location'); // Select the mobile location link
    const mobCloseSearch = document.querySelector('.mob-close-search');
    // Toggle location dropdown when location selector is clicked
    const toggleDropdown = () => {
        locationDropdown.classList.toggle('active');
        overlay.classList.toggle('active');
    };

    locationSelector.addEventListener('click', toggleDropdown);
    mobLocation.addEventListener('click', toggleDropdown); // Add event listener for mobile location link

    // Close location dropdown when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!locationDropdown.contains(event.target) && event.target !== locationSelector && event.target !== mobLocation) {
            locationDropdown.classList.remove('active');
            overlay.classList.remove('active');

        }
    });
    // Close location dropdown when the close button is clicked
    mobCloseSearch.addEventListener('click', () => {
        locationDropdown.classList.remove('active');
        overlay.classList.remove('active');
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.login-mob input');
    const termsPolicy = document.querySelector('.terms-policy');

    inputField.addEventListener('focus', () => {
        termsPolicy.style.display = 'none';
    });

    inputField.addEventListener('blur', () => {
        termsPolicy.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.signup-btn button');
    const loginOptions = document.querySelector('.login-options');
    const closeLoginBtn = document.querySelector('.close-login');
    const overlay = document.querySelector('.overlay3'); 

    loginBtn.addEventListener('click', () => {
        loginOptions.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    closeLoginBtn.addEventListener('click', () => {
        loginOptions.classList.remove('active');
        overlay.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const emailBtn = document.getElementById('emailBtn');
    const loginMob = document.querySelector('.login-mob');
    const emailLogin = document.querySelector('.email-login');
    const closeLogin2 = document.querySelector('.close-login2');

    emailBtn.addEventListener('click', () => {
        loginMob.style.display = 'none';
        emailLogin.style.display = 'block';
    });

    closeLogin2.addEventListener('click', () => {
        loginMob.style.display = 'flex';
        emailLogin.style.display = 'none';
    });
});


let currentSlide = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll('.dot');

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = index === n ? "block" : "none";
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === n);
  });
}

document.addEventListener("DOMContentLoaded", () => init(currentSlide));

const showSlide = (n) => {
  currentSlide = (n + slides.length) % slides.length; // Ensure index stays within bounds
  init(currentSlide);
}

const next = () => showSlide(currentSlide + 1);
const prev = () => showSlide(currentSlide - 1);

document.querySelector(".next").addEventListener('click', next);
document.querySelector(".prev").addEventListener('click', prev);

setInterval(next, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});


document.addEventListener("DOMContentLoaded", function() {
    const rateButton = document.querySelector('.rate-venue');
    const ratingForm = document.querySelector('.rating-form');
    const cancelButton = ratingForm.querySelector('.btn-group button:last-child');
    const ratingInput = ratingForm.querySelector('input[name="rating"]');
    const opinionTextarea = ratingForm.querySelector('textarea[name="opinion"]');
    const stars = ratingForm.querySelectorAll('.fa-star');

    rateButton.addEventListener('click', function() {
        rateButton.style.display = 'none';
        ratingForm.classList.add('active');
    });

    cancelButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Clear the form fields
        ratingInput.value = '';
        opinionTextarea.value = '';
        // Reset the stars
        stars.forEach(star => {
            star.classList.remove('bxs-star');
            star.classList.add('bx-star');
            star.classList.remove('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const shareButton = document.querySelector('.share-link');
    
    shareButton.addEventListener('click', function() {
        const currentUrl = window.location.href;
        
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: 'I found this interesting, have a look!',
                url: currentUrl,
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        } else {
            alert('Share not supported on this browser, please copy the link manually.');
        }
    });
});

