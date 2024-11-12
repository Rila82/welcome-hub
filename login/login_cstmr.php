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
                    <p>all your needs under one roof</p>
                </div>
            </div>
        </div>
    
        <div class="right-panel">
            <h1>Login</h1>
            <form id="signupForm">
                
                
                <div class="input-group">
                    <label for="email/phone">Email or Mobile No</label>
                    <input type="text" id="emailOrPhone" name="email" required>
                </div>
                   <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                    </div>
                
                
               
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>