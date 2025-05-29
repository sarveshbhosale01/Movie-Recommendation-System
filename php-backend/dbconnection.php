<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight request
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit();
}

// Database credentials
$host = "localhost";
$user = "root";
$password = "";
$dbname = "usersdata";

// Connect to MySQL
$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed: " . $conn->connect_error]));
}

// Get JSON input
$jsonData = file_get_contents("php://input");
$data = json_decode($jsonData, true);

// Debugging - Log received data
file_put_contents("debug_log.txt", "Received JSON: " . json_encode($data) . "\n", FILE_APPEND);

// Validate data
if (!$data || !isset($data["username"], $data["email"], $data["genre"], $data["suggestion"])) {
    echo json_encode(["status" => "error", "message" => "Invalid request data"]);
    exit();
}

// Sanitize inputs
$username = $conn->real_escape_string($data["username"]);
$email = $conn->real_escape_string($data["email"]);
$genre = implode(", ", $data["genre"]);  // Convert array to string
$suggestion = $conn->real_escape_string($data["suggestion"]);

// Insert into database
$sql = "INSERT INTO feedback (username, email, genre, suggestion) VALUES ('$username', '$email', '$genre', '$suggestion')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success", "message" => "Data submitted successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
}

$conn->close();
?>
