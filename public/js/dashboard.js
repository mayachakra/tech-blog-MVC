const newPostBTN = document.getElementById('newpost-btn');
const modal = document.getElementById('newpost-modal');
const closeBTN = document.querySelector('.close-button');
const newPostForm = document.getElementById('newpost-form');

newPostBTN.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBTN.addEventListener('click', () => {
    modal.style.display = 'none';
});

newPostForm.addEventListener('submit', async(event) => {
    event.preventDefault();
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    try{
        const reponse = await fetch('/api/posts', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, content}),
        });
        if (reponse.ok){
            const newPost = await reponse.json();
            updatePostList(newPost); //can i get this from dashboard routes
            modal.style.display = 'none';
        } else{
            console.error('Error', response.status);
        }
    }catch(err){
        console.error('Error', err);
    }
});