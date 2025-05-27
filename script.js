// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    // Top form submission
    const topForm = document.getElementById('signup-form-top');
    const topSuccessMessage = document.getElementById('success-message-top');
    
    topForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = topForm.querySelector('input[type="email"]').value;
        const firstName = topForm.querySelector('input[type="text"]').value;
        
        // In a real application, this would send data to a backend
        console.log('Form submitted:', { email, firstName });
        
        // Show success message
        topSuccessMessage.style.display = 'block';
        
        // Reset form
        topForm.reset();
        
        // Hide success message after 3 seconds
        setTimeout(function() {
            topSuccessMessage.style.display = 'none';
        }, 3000);
    });
    
    // Bottom form submission
    const bottomForm = document.getElementById('signup-form-bottom');
    const bottomSuccessMessage = document.getElementById('success-message-bottom');
    
    bottomForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = bottomForm.querySelector('input[type="email"]').value;
        const firstName = bottomForm.querySelector('input[type="text"]').value;
        
        // In a real application, this would send data to a backend
        console.log('Form submitted:', { email, firstName });
        
        // Show success message
        bottomSuccessMessage.style.display = 'block';
        
        // Reset form
        bottomForm.reset();
        
        // Hide success message after 3 seconds
        setTimeout(function() {
            bottomSuccessMessage.style.display = 'none';
        }, 3000);
    });
});
