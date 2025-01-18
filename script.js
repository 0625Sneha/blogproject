const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slider-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });

    handleSlideButtons();
    updateScrollThumbPosition();
};

window.addEventListener("load", initSlider);


//sign in
document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Basic validation check
    if (email === "" || password === "") {
      alert("Please fill in both fields.");
    } else {
      // In a real-world application, you would send the data to the server here
      alert("Sign In Successful!");
      // Reset form after successful submission
      document.getElementById("signin-form").reset();
    }
  });
//signup

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    let hasError = false;

    // Validate name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        hasError = true;
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email.';
        hasError = true;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        hasError = true;
    }

    if (!hasError) {
        alert('Signup successful!');
        // You can submit the form data to the server here
    }
});  

    // Toggle menu on mobile
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('menu').classList.toggle('active');
    }); 
       document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.getElementById("menu-toggle");
        const menu = document.getElementById("menu");

        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    });

    
        // Mobile Menu Toggle
        const menuToggle = document.getElementById("menu-toggle");
        const menu = document.getElementById("menu");

        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });

        // Buttons' Event Handlers
        const signInButton = document.getElementById("signin-btn");
        const signUpButton = document.getElementById("signup-btn");

        signInButton.addEventListener("click", () => {
            alert("Sign In button clicked!");
        });

        signUpButton.addEventListener("click", () => {
            alert("Sign Up button clicked!");
        });
        document.addEventListener("DOMContentLoaded", () => {
            const dropdownToggle = document.querySelector(".dropdown-toggle");
        
            dropdownToggle.addEventListener("click", (e) => {
                e.preventDefault();
                const dropdownContent = dropdownToggle.nextElementSibling;
                const isVisible = dropdownContent.style.display === "block";
        
                dropdownContent.style.display = isVisible ? "none" : "block";
                dropdownContent.style.opacity = isVisible ? "0" : "1";
                dropdownContent.style.transform = isVisible ? "translateY(-10px)" : "translateY(0)";
            });
        });
        