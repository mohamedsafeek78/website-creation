const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('Email:', email);
        console.log('Password:', password);

        // Here you would typically send the data to a server for authentication
        alert('Login functionality is not implemented yet. Check the console for the entered data.');
    });
}
