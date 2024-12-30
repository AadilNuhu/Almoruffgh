 // WhatsApp Function
 function sendToWhatsApp(productName, productDescription, productPrice) {
    const phoneNumber = "0245829714";
    const message = `Hello, I am interested in the following product:\n\nProduct Name: ${productName}\nDescription: ${productDescription}\nPrice: GHS ${productPrice}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Popup Functions
function showPopup(imageSrc) {
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    popupImage.src = imageSrc;
    popup.style.display = "flex";
}

function hidePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

function showDetails(name, description, price) {
// Populate modal content
document.getElementById("modalProductName").textContent = name;
document.getElementById("modalProductDescription").textContent = description;
document.getElementById("modalProductPrice").textContent = `Price: GHS ${price}`;

// Add functionality to "Buy Now" button
const buyNowButton = document.getElementById("buyNowButton");
buyNowButton.onclick = function() {
const phoneNumber = "+233277475146";
const message = `Hello, I am interested in purchasing the following product:\n\nProduct Name: ${name}\nDescription: ${description}`;
const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
window.open(url, "_blank");
};

// Show modal
document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
// Hide modal
document.getElementById("productModal").style.display = "none";
}

function openProductPopup(productName, productDescription, productImage, productPrice) {
    const popup = document.getElementById('product-popup');
    const popupContent = document.getElementById('product-popup-content');
    const popupImage = document.getElementById('product-popup-image');
    const popupTitle = document.getElementById('product-popup-title');
    const popupDescription = document.getElementById('product-popup-description');
    const popupPrice = document.getElementById('product-popup-price');
    const buyNowButton = document.getElementById('product-popup-buy');

    popupImage.src = productImage;
    popupTitle.textContent = productName;
    popupDescription.textContent = productDescription;
    popupPrice.textContent = productPrice;

    buyNowButton.onclick = function () {
        const phoneNumber = "+233277475146";
        const message = `Hello, I am interested in the following product:\n\nProduct Name: ${productName}\nDescription: ${productDescription}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    popup.style.display = 'flex';

    popup.onclick = function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    };
}

document.getElementById('product-popup-close').onclick = function () {
    document.getElementById('product-popup').style.display = 'none';
};


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Change the icon between hamburger and X
        if (menuToggle.textContent === '\u2630') { // Hamburger icon
            menuToggle.textContent = '\u2715'; // X icon
        } else {
            menuToggle.textContent = '\u2630'; // Back to hamburger icon
        }
    });
});