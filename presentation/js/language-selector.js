// Language selector functionality
document.addEventListener('DOMContentLoaded', function() {
    // Default language is English
    let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
    
    // Apply the saved language preference
    applyLanguage(currentLanguage);
    
    // Set up language selector buttons
    const languageButtons = document.querySelectorAll('.language-btn');
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const language = this.getAttribute('data-lang');
            applyLanguage(language);
            localStorage.setItem('preferredLanguage', language);
        });
        
        // Highlight the current language button
        if (button.getAttribute('data-lang') === currentLanguage) {
            button.classList.add('active');
        }
    });
    
    // Function to apply the selected language
    function applyLanguage(language) {
        // Hide all language content
        document.querySelectorAll('[lang]').forEach(element => {
            element.style.display = 'none';
        });
        
        // Show content for the selected language
        document.querySelectorAll(`[lang="${language}"]`).forEach(element => {
            element.style.display = 'block';
        });
        
        // Update active state on language buttons
        document.querySelectorAll('.language-btn').forEach(button => {
            if (button.getAttribute('data-lang') === language) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
});
