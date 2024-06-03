window.addEventListener('scroll', function() {
    var content = document.querySelector('.content');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        content.classList.add('scrolled');
    } else {
        content.classList.remove('scrolled');
    }
});
