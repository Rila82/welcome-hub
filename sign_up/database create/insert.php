<?php
$servername = "localhost";
$username = "root";
$password = "200113302248Rila";
$dbname = "welcome-hub";

// Connect to MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Verify form data is set and not null
$fname = isset($_POST["cfname"]) ? $conn->real_escape_string($_POST["cfname"]) : "";
$lname = isset($_POST["clname"]) ? $conn->real_escape_string($_POST["clname"]) : "";
$emailOrPhone = isset($_POST["cemail"]) ? $conn->real_escape_string($_POST["cemail"]) : "";
$password = isset($_POST["password"]) ? $conn->real_escape_string($_POST["password"]) : "";
$address = isset($_POST["caddress"]) ? $conn->real_escape_string($_POST["caddress"]) : "";

// Check if required fields are not empty
if (empty($fname) || empty($lname) || empty($emailOrPhone) || empty($password)) {
    die("Please fill in all required fields.");
}

// Create table if it doesn't exist
$createCustomerTable = "
CREATE TABLE IF NOT EXISTS customerinfo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    f_name VARCHAR(100) NOT NULL,
    l_name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone_Number VARCHAR(100),
    cpassword VARCHAR(100),
    caddress VARCHAR(200)
)";
if ($conn->query($createCustomerTable) === TRUE) {
    echo "Table 'customerinfo' created successfully<br>";
} else {
    echo "Error creating table 'customerinfo': " . $conn->error . "<br>";
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO customerinfo (f_name, l_name, email, phone_Number, cpassword, caddress) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $fname, $lname, $emailOrPhone, $emailOrPhone, $password, $address);

// Execute the prepared statement
if ($stmt->execute()) {
    echo "Successfully inserted data!";
} else {
    echo "Error inserting data: " . $stmt->error . "<br>";
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
