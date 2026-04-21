// Typing animation for hero subtitle
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.getElementById('typing-text');
    const cursor = document.querySelector('.cursor');
    
    // Array of phrases to type
    const phrases = [
        "Creative Developer",
        "UI/UX Designer",
        "Design Engineer",
        "Problem Solver"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseDuration = 2000;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Deleting text
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
                return;
            }
        } else {
            // Typing text
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentPhrase.length) {
                isPaused = true;
                setTimeout(() => {
                    isPaused = false;
                    isDeleting = true;
                    setTimeout(type, 500);
                }, pauseDuration);
                return;
            }
        }
        
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, speed);
    }
    
    // Start typing animation after a short delay
    setTimeout(type, 1000);
    
    // Blinking cursor animation
    setInterval(() => {
        if (!isPaused) {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }
    }, 500);
});