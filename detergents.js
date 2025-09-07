// Category switching functionality
function showCategory(categoryId) {
    // Hide all categories
    const categories = document.querySelectorAll('.product-category');
    categories.forEach(category => {
        category.classList.remove('active');
    });
    
    // Show selected category
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.classList.add('active');
    }
    
    // Update category cards visual state
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selected state to clicked card
    event.currentTarget.classList.add('selected');
    
    // Smooth scroll to products section
    const productsSection = document.querySelector('.detailed-products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Order product functionality
function orderProduct(productName) {
    const message = `Hello! I would like to order ${productName}. Please provide me with more details about pricing and availability.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/263713213726?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Request sample functionality
function requestSample(productName) {
    const message = `Hello! I would like to request a sample of ${productName}. Please let me know how I can get one.`;
    const encodedMessage = encodeURIComponent(message);
    const email = 'info@feschem.lk';
    const subject = `Sample Request - ${productName}`;
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodedMessage}`;
    window.location.href = mailtoURL;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Show laundry category by default
    showCategory('laundry');
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navbar (same as main page)
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});