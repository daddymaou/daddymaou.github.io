// Typing animation for hero subtitle
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.getElementById('typing-text');
    const cursor = document.querySelector('.cursor');
    
    const phrases = [
        "Creative Developer",
        "UI/UX Designer",
        "Design Engineer",
        "Problem Solver"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseDuration = 2000;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                cursor.style.animationPlayState = 'running';
                setTimeout(type, 500);
                return;
            }
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentPhrase.length) {
                cursor.style.animationPlayState = 'paused';
                cursor.style.opacity = '1';
                setTimeout(() => {
                    cursor.style.animationPlayState = 'running';
                    isDeleting = true;
                    setTimeout(type, 500);
                }, pauseDuration);
                return;
            }
        }
        
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, speed);
    }
    
    setTimeout(type, 1000);
});
