let users = [];

// Load users data from Local Storage if available
if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
}

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.querySelector('.signup-form');
console.log(users);
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;
        const role = document.getElementById('role').value;

        // Create user object
        const user = {
            username: username,
            email: email,
            password: password,
            phone: phone,
            role: role
        };

        // Add user object to the array
        users.push(user);

        // Save updated users array to Local Storage
        localStorage.setItem('users', JSON.stringify(users));

        // Redirect based on the role
        if (role === 'admin') {
            window.location.href = 'owner.html'; // Redirect to owner signup page
        } else if (role === 'user') {
            window.location.href = 'coworker.html'; // Redirect to coworker signup page
        }

        // Clear form inputs after submission
        signupForm.reset();
    });
});

export default users;



