// Get the elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const errorMsg = document.getElementById('error-msg');

// Add event listener to the login button
loginBtn.addEventListener('click', handleLogin);

// Define the handleLogin function
function handleLogin(e) {
  e.preventDefault();

  // Get the username and password values
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Check if the credentials are valid
  if (isValidCredentials(username, password)) {
    window.location.href = 'welcome.html';
  } else {
    displayError('Invalid username or password');
  }
}

// Define the isValidCredentials function
function isValidCredentials(username, password) {
  return username === 'kalicode' && password === '732002';
}

// Define the displayError function
function displayError(message) {
  errorMsg.textContent = message;
}