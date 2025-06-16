// -------------===============NAVBAR JS------------------============================================

const navbar = document.getElementById("navbar");
const navbarStartPos = navbar.offsetTop; // Initial position

window.addEventListener("scroll", function () {
    if (window.pageYOffset >= navbarStartPos) {
        navbar.classList.add("fixed"); // Top pe chipak jayega
    } else {
        navbar.classList.remove("fixed"); // Neeche wapas aa jayega
    }
});

function toggleMenu() {
    const navMenu = document.querySelector(".navbar ul");
    navMenu.classList.toggle("show");
}

// ---------------BANNER CONTAINER----------===========================

let index1 = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const totalSlides = slides.length;

// Clone the first slide and append it to the end
const firstClone = slides[0].cloneNode(true);
slider.appendChild(firstClone);

function slideImages() {
    index1++;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${index1 * 100}%)`;

    // Reset position when reaching the cloned slide
    setTimeout(() => {
        if (index1 === totalSlides) {
            index1 = 0;
            slider.style.transition = 'none'; // Remove transition to avoid jump
            slider.style.transform = `translateX(0)`;
        }
    }, 500); // Match the transition duration
}

setInterval(slideImages, 3000);

// =================WHY MORADABAD---------------===



// -----------------------=========================PRODUCT JS------------==========


function showGallery(event, category, element) {
    event.preventDefault(); // Prevent page from scrolling to top
    document.querySelectorAll('.gallery').forEach(g => g.style.display = 'none');
    document.querySelectorAll('.gallery1').forEach(g => g.style.display = 'none');
    document.querySelectorAll('.gallery2').forEach(g => g.style.display = 'none');
    document.querySelectorAll('.gallery3').forEach(g => g.style.display = 'none');
    document.querySelectorAll('.gallery4').forEach(g => g.style.display = 'none');
    document.getElementById(category).style.display = 'flex';

    document.querySelectorAll('.navbarproduct a').forEach(a => a.classList.remove('active'));
    element.classList.add('active');
}

function openModal(img) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Allow clicking outside modal to close it
document.getElementById("imageModal").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
});

// Ensure "All Products" is displayed on load
document.addEventListener("DOMContentLoaded", () => {
    showGallery(new Event("click"), 'all', document.querySelector('.navbarproduct a'));
});


// -------==============WHY CHOOSE US-----------------=========


document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");
    const options = {
        threshold: 0.5
    };
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);
    features.forEach(feature => {
        observer.observe(feature);
    });
});



// -----------------===================ENQUIRY FORM--------===========

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let firstname = document.getElementById('firstname').value.trim();
    let lastname = document.getElementById('lastname').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();
    let item = document.getElementById('item').value;

    if (firstname === "" || lastname === "" || phone === "" || email === "" || item === "") {
        alert("Please fill out all fields.");
        return;
    }

    if (!/^[a-zA-Z ]+$/.test(firstname) || !/^[a-zA-Z ]+$/.test(lastname)) {
        alert("First Name and Last Name should contain only letters and spaces.");
        return;
    }

    if (!/^[0-9]{10,15}$/.test(phone)) {
        alert("Phone number should be 10-15 digits long.");
        return;
    }

    alert("Form submitted successfully!");
    this.reset();
});