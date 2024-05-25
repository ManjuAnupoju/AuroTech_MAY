const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(item => {
            item.classList.remove('selected');
        });
        
        this.classList.add('selected');
    });
});
