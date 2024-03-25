import users from"./signup.js";
document.addEventListener('DOMContentLoaded', function () {

    const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const role = document.getElementById('login-role').value;

    // Find user in the users array based on email and password
    const foundUser = users.find(user => user.email === email && user.password === password && user.role === role);

    // Display user details or show an error message
    if (foundUser) {
        if (role === 'admin') {
            window.location.href = 'owner.html';
            signupForm.reset(); // Redirect to owner signup page
        } else if (role === 'user') {
            window.location.href = 'coworker.html';
            signupForm.reset(); // Redirect to coworker signup page
        }
    } else {
        alert('Login Failed!\nPlease check your credentials and role.');
    }

    // Clear form inputs after submission
    loginForm.reset();
});
});


