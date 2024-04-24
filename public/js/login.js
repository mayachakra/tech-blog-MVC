const res = require("express/lib/response");

const loginFormHandler = async (event) =>{
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password){
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // If successful, redirect the browser to the profile page
            //document.location.replace('/profile');
            console.log('data.user',data.user);
            if (data){
                document.location.replace('/dashboard');
                res.redirect('/dashboard');
                console.log('success');
            } else{
                document.location.replace('/signup');
                console.log('signup!');
    
            }
    
          } else {
            alert(response.statusText);
            console.log('Not a user');
          }

        
    }

};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);