<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Form</title>
    <link rel="stylesheet" href="styles_signup.css">
</head>
<body>
    <div class="container">
        <div class="left-panel">
            <div class="tagline">
                <h2>Your Shopping, Simplified Today.</h2>
                <div class="logo">
                    <img src="wfc.png" alt="Welcome Food City">
                    <p>All your needs under one roof</p>
                </div>
            </div>
        </div>
    
        <div class="right-panel">
            <h1>SIGN UP</h1>
            <form id="signupForm" method="POST" action="insert.php">
                <div class="input-group">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="cfname" required>
                </div>
                <div class="input-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" name="clname" required>
                </div>
                <div class="input-group">
                    <label for="emailOrPhone">Email or Mobile No</label>
                    <input type="text" id="emailOrPhone" name="cemailOrPhone" required>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="cpassword" required>
                </div>
                <div class="input-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" required>
                </div>
                <button type="submit">SIGN UP</button>
            </form>
        </div>
    </div>
    <script>
        // Populate the year dropdown for Date of Birth
        document.addEventListener("DOMContentLoaded", function () {
            const dobYear = document.getElementById("dobYear");
            const currentYear = new Date().getFullYear();

            for (let year = currentYear; year >= currentYear - 100; year--) {
                const option = document.createElement("option");
                option.value = year;
                option.textContent = year;
                dobYear.appendChild(option);
            }
        });

        // Validation for email/phone and passwords
        document.getElementById("signupForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const emailOrPhone = document.getElementById("emailOrPhone").value;
            const password = document.getElementById("cpassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (!isEmail(emailOrPhone) && !isPhoneNumber(emailOrPhone)) {
                alert("Please enter a valid email or phone number.");
                return;
            }

            if (password.length < 8) {
                alert("Password must be at least 8 characters long.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            alert("Form submitted successfully!");
            this.submit();
        });

        function isPhoneNumber(input) {
            const phoneRegex = /^[0-9+\-\s]+$/;
            return phoneRegex.test(input);
        }

        function isEmail(input) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(input);
        }
    </script>
</body>
</html>
