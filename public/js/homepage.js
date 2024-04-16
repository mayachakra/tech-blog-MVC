//const { response } = require("express");
document.addEventListener('DOMContentLoaded', () => {
    const postLinks = document.querySelectorAll('.blog-post a');
    postLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const postID = event.target.closest('.blog-post').getAttribute('data-post-id');
            window.location.href = `/post/${postID}`;
        });
    });
    const logoutButton = document.querySelector('#logout');
    if(logoutButton){
        logoutButton.addEventListener('click', async () => {
            const response = await fetch('/api/users/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'}
            });
            if(response.ok){
                document.location.replace('/');
            }
            else{
                alert('Failed to log out');
            }
        });
    }
});