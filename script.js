// Accordion Functionality
document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });

    // Hover Animation
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.02)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Typing Animation for Skills
const skills = ["Data Science", "Machine Learning", "Engineering", "Designing", "developing", "Deep Learning", "UI/UX"];
let currentSkillIndex = 0;
const skillElement = document.querySelector('.skill-highlight');

function typeSkill() {
    skillElement.textContent = skills[currentSkillIndex];
    skillElement.style.animation = 'typing 1.5s steps(20, end) forwards';

    setTimeout(() => {
        skillElement.style.animation = 'retyping 1s steps(20, end) forwards';
        setTimeout(() => {
            currentSkillIndex = (currentSkillIndex + 1) % skills.length;
            typeSkill();
        }, 1000); // Wait for retyping to finish
    }, 1500); // Wait for typing to finish
}

if (skillElement) {
    typeSkill();
}

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = '🌞 Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
});
