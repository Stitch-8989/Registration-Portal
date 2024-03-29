// Get table element
const table = document.getElementById('user-table');

// Retrieve existing user data from local storage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Display existing user data in table
for (const user of users) {
  const { name, email, password, dob, terms } = user;
  const row = table.insertRow();
  row.insertCell().textContent = name;
  row.insertCell().textContent = email;
  row.insertCell().textContent = password;
  row.insertCell().textContent = dob;
  row.insertCell().textContent = terms ? 'Yes' : 'No';
}

// Handle form submit event
const form = document.getElementById('registration-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const terms = document.getElementById('terms').checked;

  // Validate date of birth
  const dobDate = new Date(dob);
  const now = new Date();
  const minDate = new Date(now.getFullYear() - 55, now.getMonth(), now.getDate());
  const maxDate = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate());
  if (dobDate < minDate || dobDate > maxDate) {
    alert('Please enter a valid date of birth between 18 and 55 years ago.');
    return;
  }

  // Add user to table and save to local storage
  const user = { name, email, password, dob, terms };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  const row = table.insertRow();
  row.insertCell().textContent = name;
  row.insertCell().textContent = email;
  row.insertCell().textContent = password;
  row.insertCell().textContent = dob;
  row.insertCell().textContent = terms ? 'Yes' : 'No';

  // Reset form
  form.reset();
});

