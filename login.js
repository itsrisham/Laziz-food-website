
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get username and password from the login form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve registered users from localStorage (in a real scenario, this would be retrieved from a database)
    var registeredUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username and password match any registered user
    var foundUser = registeredUsers.find(function(user) {
        return user.username === username && user.password === password;
    });
    if (foundUser) {
        // Set isLoggedIn to true since the user is logged in
        isLoggedIn = true;
        // If user is registered, perform login action
        // Example: Redirect to home page
        window.location.href = 'Home.html';
    } else {
        // If user is not registered, display error message
        var errorMessage = document.createElement('p');
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.color = 'red';

        // Append the error message to the login container
        var loginContainer = document.querySelector('.login-container');
        loginContainer.appendChild(errorMessage);
    }
});
