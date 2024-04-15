const loginFormHandler = async (event) =>{
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password){
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            const {token} = await response.json(); //, this token could be a JSON Web Token (JWT) or a session ID that is stored in the database and associated with the user.
            localStorage.setItem('token', token);
            document.location.replace('/dashboard');
        } else{
            alert('Failed to log in');
        }
    }

};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);