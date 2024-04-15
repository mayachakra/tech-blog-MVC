const logoutFormHandler = async () =>{
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            },
        });
        if(response.ok){
            localStorage.removeItem('token', token);
            document.location.replace('/');
        } else{
            alert('Failed to log out');
        }
};

document.querySelector('#logout').addEventListener('submit', logoutFormHandler);