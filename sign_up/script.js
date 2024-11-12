document.addEventListener("DOMContentLoaded", function () {
  populateDOBSelects();
});

function populateDOBSelects() {
  var dobYear = document.getElementById("dobYear");
  var dobMonth = document.getElementById("dobMonth");
  var dobDay = document.getElementById("dobDay");

  var currentYear = new Date().getFullYear();

  // Populate the year dropdown (100 years back from current year)
  for (var year = currentYear; year >= currentYear - 100; year--) {
    var option = document.createElement("option");
    option.value = year;
    option.text = year;
    dobYear.appendChild(option);
  }

  // Populate the month dropdown (1-12)
  for (var month = 1; month <= 12; month++) {
    var option = document.createElement("option");
    option.value = month < 10 ? "0" + month : month; // format with leading zero
    option.text = month < 10 ? "0" + month : month; // format with leading zero
    dobMonth.appendChild(option);
  }

  // Update day dropdown based on selected month and year
  dobYear.addEventListener("change", updateDays);
  dobMonth.addEventListener("change", updateDays);
}

// validation
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var emailOrPhone = document.getElementById("emailOrPhone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Determine if the input is a phone number or an email
    if (isPhoneNumber(emailOrPhone)) {
      alert("You've entered a phone number.");
    } else if (isEmail(emailOrPhone)) {
      alert("You've entered an email address.");
    } else {
      alert("Please enter a valid email or phone number.");
      return false;
    }

    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    alert("Form submitted successfully!");
    return true;
  });

function isPhoneNumber(input) {
  var phoneRegex = /^[0-9+\-\s]+$/;
  return phoneRegex.test(input);
}

function isEmail(input) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
}

function togglePasswordVisibility() {
  var passwordField = document.getElementById("password");
  var confirmPasswordField = document.getElementById("confirmPassword");
  var showPassword = document.getElementById("showPassword");

  if (showPassword.checked) {
    passwordField.type = "text";
    confirmPasswordField.type = "text";
  } else {
    passwordField.type = "password";
    confirmPasswordField.type = "password";
  }
}

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.addEventListener("DOMContentLoaded", function () {
      populateDOBSelects();
    });

    function populateDOBSelects() {
      var dobYear = document.getElementById("dobYear");
      var dobMonth = document.getElementById("dobMonth");
      var dobDay = document.getElementById("dobDay");

      var currentYear = new Date().getFullYear();

      // Populate the year dropdown (100 years back from current year)
      for (var year = currentYear; year >= currentYear - 100; year--) {
        var option = document.createElement("option");
        option.value = year;
        option.text = year;
        dobYear.appendChild(option);
      }

      // Populate the month dropdown (1-12)
      for (var month = 1; month <= 12; month++) {
        var option = document.createElement("option");
        option.value = month < 10 ? "0" + month : month; // format with leading zero
        option.text = month < 10 ? "0" + month : month; // format with leading zero
        dobMonth.appendChild(option);
      }

      // Populate the day dropdown (1-31)
      populateDays(dobDay, 31); // Initialize with 31 days

      // Update day dropdown based on selected month and year
      dobYear.addEventListener("change", updateDays);
      dobMonth.addEventListener("change", updateDays);
    }

    function populateDays(daySelect, numberOfDays) {
      daySelect.innerHTML = ""; // Clear existing options
      for (var day = 1; day <= numberOfDays; day++) {
        var option = document.createElement("option");
        option.value = day < 10 ? "0" + day : day; // format with leading zero
        option.text = day < 10 ? "0" + day : day; // format with leading zero
        daySelect.appendChild(option);
      }
    }

    function updateDays() {
      var dobYear = document.getElementById("dobYear");
      var dobMonth = document.getElementById("dobMonth");
      var dobDay = document.getElementById("dobDay");

      var year = parseInt(dobYear.value);
      var month = parseInt(dobMonth.value);

      // Determine the number of days in the selected month and year
      var daysInMonth = new Date(year, month, 0).getDate(); // The 0th day of the next month is the last day of the current month
      populateDays(dobDay, daysInMonth);
    }

    document
      .getElementById("signupForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        var emailOrPhone = document.getElementById("emailOrPhone").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        // Determine if the input is a phone number or an email
        if (isPhoneNumber(emailOrPhone)) {
          alert("You've entered a phone number.");
        } else if (isEmail(emailOrPhone)) {
          alert("You've entered an email address.");
        } else {
          alert("Please enter a valid email or phone number.");
          return false;
        }

        // Check if the password is at least 8 characters long
        if (password.length < 8) {
          alert("Password must be at least 8 characters long.");
          return false;
        }

        // Check if the passwords match
        if (password !== confirmPassword) {
          alert("Passwords do not match.");
          return false;
        }

        alert("Form submitted successfully!");
        return true;
      });

    function isPhoneNumber(input) {
      var phoneRegex = /^[0-9+\-\s]+$/;
      return phoneRegex.test(input);
    }

    function isEmail(input) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input);
    }

    function togglePasswordVisibility() {
      var passwordField = document.getElementById("password");
      var confirmPasswordField = document.getElementById("confirmPassword");
      var showPassword = document.getElementById("showPassword");

      if (showPassword.checked) {
        passwordField.type = "text";
        confirmPasswordField.type = "text";
      } else {
        passwordField.type = "password";
        confirmPasswordField.type = "password";
      }
    }

    var emailOrPhone = document.getElementById("emailOrPhone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Determine if the input is a phone number or an email
    if (isPhoneNumber(emailOrPhone)) {
      alert("You've entered a phone number.");
    } else if (isEmail(emailOrPhone)) {
      alert("You've entered an email address.");
    } else {
      alert("Please enter a valid email or phone number.");
      return false;
    }

    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    alert("Form submitted successfully!");
    return true;
  });

function isPhoneNumber(input) {
  var phoneRegex = /^[0-9+\-\s]+$/;
  return phoneRegex.test(input);
}

function isEmail(input) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
}

function togglePasswordVisibility() {
  var passwordField = document.getElementById("password");
  var confirmPasswordField = document.getElementById("confirmPassword");
  var showPassword = document.getElementById("showPassword");

  if (showPassword.checked) {
    passwordField.type = "text";
    confirmPasswordField.type = "text";
  } else {
    passwordField.type = "password";
    confirmPasswordField.type = "password";
  }
}
