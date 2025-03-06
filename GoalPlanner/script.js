// DOM Elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignupLink = document.getElementById('showSignup');
const showLoginLink = document.getElementById('showLogin');
const authModalTitle = document.getElementById('authModalTitle');

// Toggle between login and signup forms
showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('d-none');
    signupForm.classList.remove('d-none');
    authModalTitle.textContent = 'Create Account';
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.add('d-none');
    loginForm.classList.remove('d-none');
    authModalTitle.textContent = 'Welcome Back!';
});

// Add animation classes when sections come into view
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeIn');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Task Management
document.querySelectorAll('.form-check-input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const taskItem = this.closest('.task-item');
        if (this.checked) {
            taskItem.style.opacity = '0.5';
            taskItem.style.textDecoration = 'line-through';
        } else {
            taskItem.style.opacity = '1';
            taskItem.style.textDecoration = 'none';
        }
    });
});

// Goal Management
document.querySelector('#goalModal .btn-outline-secondary').addEventListener('click', function() {
    const milestonesContainer = document.getElementById('milestones');
    const newMilestone = document.createElement('div');
    newMilestone.className = 'input-group mb-2';
    newMilestone.innerHTML = `
        <input type="text" class="form-control" placeholder="Milestone">
        <button class="btn btn-outline-danger" type="button">-</button>
    `;
    milestonesContainer.appendChild(newMilestone);

    newMilestone.querySelector('.btn-outline-danger').addEventListener('click', function() {
        newMilestone.remove();
    });
});

// Initialize Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});