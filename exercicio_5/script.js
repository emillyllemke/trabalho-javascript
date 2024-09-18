function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');

    sidebar.classList.toggle('open');
    content.classList.toggle('shift');
}
