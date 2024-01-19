document.addEventListener('DOMContentLoaded', function () {
    const hamIcon = document.querySelector('.ham');
    const crossIcon = document.querySelector('.cross');
    const sidebar = document.querySelector('.sidebar');

    hamIcon.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        toggleIcons();
    });

    crossIcon.addEventListener('click', function () {
        sidebar.classList.remove('open');
        toggleIcons();
    });

    function toggleIcons() {
        if (sidebar.classList.contains('open')) {
            hamIcon.style.display = 'none';
            crossIcon.style.display = 'block';
        } else {
            hamIcon.style.display = 'block';
            crossIcon.style.display = 'none';
        }
    }
});
