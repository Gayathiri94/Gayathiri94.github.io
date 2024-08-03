document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Show the home section by default when the page loads
});

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}
