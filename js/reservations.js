document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const reservationTabs = document.querySelectorAll('.reservation-tab');
    const reservationContents = document.querySelectorAll('.reservation-content');
    
    reservationTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabTarget = tab.getAttribute('data-tab');
            
            // Update active tab
            reservationTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active content
            reservationContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabTarget + '-reservation') {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Guest number functionality - only show large group form for more than 12 people
    const guestSelect = document.getElementById('guests');
    
    if (guestSelect) {
        guestSelect.addEventListener('change', function() {
            const guestCount = parseInt(this.value);
            
            if (guestCount > 12) {
                // Switch to large group tab
                reservationTabs.forEach(t => {
                    if (t.getAttribute('data-tab') === 'large-group') {
                        t.click();
                    }
                });
            }
        });
    }
    
    // Package selection
    const packageOptions = document.querySelectorAll('.package-option');
    
    packageOptions.forEach(option => {
        option.addEventListener('click', () => {
            packageOptions.forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
    
    // Special events selection
    const specialEventsSelect = document.getElementById('special-events');
    const birthdayOptions = document.querySelector('.birthday-options');
    
    if (specialEventsSelect && birthdayOptions) {
        specialEventsSelect.addEventListener('change', function() {
            if (this.value === 'birthday') {
                birthdayOptions.style.display = 'block';
            } else {
                birthdayOptions.style.display = 'none';
            }
        });
    }
    
    // Form submission
    const standardForm = document.getElementById('standard-form');
    const largeGroupForm = document.getElementById('large-group-form');
    
    if (standardForm) {
        standardForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your reservation has been submitted! We will contact you to confirm your booking.');
        });
    }
    
    if (largeGroupForm) {
        largeGroupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your large group booking request has been submitted! Our team will contact you within 24 hours to confirm your event details.');
        });
    }
});
