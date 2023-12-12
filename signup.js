function validateForm(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Simple client-side validation
    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // In a real-world scenario, you would send this data to a server for validation and storage.
    // Here, we'll just show an alert with the user information.
    alert(`User successfully registered!\n\nUsername: ${username}\nEmail: ${email}`);
  }
  