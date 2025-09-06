
// Quote form functionality
document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    const serviceCheckboxes = document.querySelectorAll('input[name="services"]');
    const detergentDetails = document.getElementById('detergent-details');
    const cleaningDetails = document.getElementById('cleaning-details');

    // Show/hide sections based on selected services
    function toggleSections() {
        const selectedServices = Array.from(serviceCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        // Show detergent section if detergent products selected
        if (selectedServices.includes('detergent-products')) {
            detergentDetails.style.display = 'block';
        } else {
            detergentDetails.style.display = 'none';
        }

        // Show cleaning section if any cleaning service selected
        const cleaningServices = ['old-people-homes', 'clinic-cleaning', 'commercial-cleaning'];
        const hasCleaningService = selectedServices.some(service => cleaningServices.includes(service));
        
        if (hasCleaningService) {
            cleaningDetails.style.display = 'block';
        } else {
            cleaningDetails.style.display = 'none';
        }
    }

    // Add event listeners to checkboxes
    serviceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', toggleSections);
    });

    // Handle form submission
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            
            // Process regular form fields
            for (let [key, value] of formData.entries()) {
                if (key === 'services') {
                    if (!data[key]) data[key] = [];
                    data[key].push(value);
                } else {
                    data[key] = value;
                }
            }

            // Validation
            if (!data.companyName || !data.contactName || !data.email || !data.phone || !data.address) {
                alert('Please fill in all required contact information.');
                return;
            }

            if (!data.services || data.services.length === 0) {
                alert('Please select at least one service.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Create detailed quote request
            let emailContent = generateQuoteEmail(data);
            
            // Create mailto link
            const subject = `Quote Request - ${data.companyName}`;
            const mailtoLink = `mailto:feschem22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your quote request! Your email client should open now. We will prepare a detailed quote and get back to you within 24 hours.');
            this.reset();
            toggleSections(); // Reset section visibility
        });
    }
});

function generateQuoteEmail(data) {
    let content = `QUOTE REQUEST - ${data.companyName}\n\n`;
    
    content += `CONTACT INFORMATION:\n`;
    content += `Company/Organization: ${data.companyName}\n`;
    content += `Contact Person: ${data.contactName}\n`;
    content += `Email: ${data.email}\n`;
    content += `Phone: ${data.phone}\n`;
    content += `Address: ${data.address}\n\n`;
    
    content += `REQUESTED SERVICES:\n`;
    if (data.services) {
        data.services.forEach(service => {
            switch(service) {
                case 'detergent-products':
                    content += `✓ Premium Detergent Products\n`;
                    break;
                case 'old-people-homes':
                    content += `✓ Old People Homes Cleaning Services\n`;
                    break;
                case 'clinic-cleaning':
                    content += `✓ Clinic/Medical Facility Cleaning\n`;
                    break;
                case 'commercial-cleaning':
                    content += `✓ Commercial Building Cleaning\n`;
                    break;
            }
        });
    }
    content += `\n`;

    if (data.services && data.services.includes('detergent-products')) {
        content += `DETERGENT REQUIREMENTS:\n`;
        if (data.detergentType) {
            content += `Product Types: ${data.detergentType}\n`;
        }
        if (data.quantity) {
            content += `Estimated Monthly Quantity: ${data.quantity} units\n`;
        }
        content += `\n`;
    }

    const cleaningServices = ['old-people-homes', 'clinic-cleaning', 'commercial-cleaning'];
    if (data.services && data.services.some(service => cleaningServices.includes(service))) {
        content += `CLEANING SERVICE REQUIREMENTS:\n`;
        if (data.facilitySize) {
            content += `Facility Size: ${data.facilitySize} sq ft\n`;
        }
        if (data.cleaningFrequency) {
            content += `Cleaning Frequency: ${data.cleaningFrequency}\n`;
        }
        if (data.roomsCount) {
            content += `Number of Rooms/Areas: ${data.roomsCount}\n`;
        }
        content += `\n`;
    }

    if (data.urgency) {
        content += `TIMELINE: ${data.urgency}\n\n`;
    }

    if (data.specialRequirements) {
        content += `SPECIAL REQUIREMENTS:\n${data.specialRequirements}\n\n`;
    }

    content += `Please provide a detailed quote including:\n`;
    content += `- Product/Service pricing\n`;
    content += `- Delivery terms (for products)\n`;
    content += `- Service schedules (for cleaning services)\n`;
    content += `- Payment terms\n`;
    content += `- Any applicable discounts\n\n`;
    
    content += `Thank you for considering Feschem (Pvt) Ltd for your cleaning needs.`;

    return content;
}

// Add scroll effect to navbar (same as other pages)
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
