// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');
    const continueFacebookButton = document.getElementById('continueFacebook');
    const continueEmailButton = document.getElementById('continueEmail');

    // Event listeners
    loginButton.addEventListener('click', handleLogin);
    signupButton.addEventListener('click', handleSignup);
    continueFacebookButton.addEventListener('click', continueWithFacebook);
    continueEmailButton.addEventListener('click', continueWithEmail);

    // Functions
    function handleLogin() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Basic validation
        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        // Replace this with your actual authentication logic
        // For example, you can make an API request to authenticate the user
        alert(`Logging in with username: ${username}`);
    }

    function handleSignup() {
        // Redirect to the signup page or perform signup logic
        alert('Redirecting to the signup page.');
    }

    function continueWithFacebook() {
        // Implement Facebook login logic
        alert('Continuing with Facebook.');
    }

    function continueWithEmail() {
        // Implement Email login logic
        alert('Continuing with Email.');
    }
});
