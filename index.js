// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const loginButton = document.getElementById('login-btn');

    // Event listener
    loginButton.addEventListener('click', handleLogin);

    // Function
    function handleLogin() {
        // Replace this with your login logic or navigation
        alert('Redirecting to the login page.');
    }
});
