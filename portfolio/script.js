window.addEventListener('scroll', () => {
    const skillBars = document.querySelectorAll('.skill-fill');

    skillBars.forEach(skillBar => {
        const skillTop = skillBar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the skill bar is within the viewport
        if (skillTop < windowHeight) {
            const skillLevel = skillBar.getAttribute('data-skill-level');
            skillBar.style.width = skillLevel + '%';
        }
    });
});