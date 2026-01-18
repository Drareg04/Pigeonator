<?php
// Start the session
session_start();

if ($_SESSION["admin"]) {
    header("Location: /suggestions/admin.php");
    exit();
}

if ($_SESSION["login"]) {
    header("Location: /suggestions/my.php");
    exit();
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suggestions Login</title>
</head>

<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] != "POST") {
    ?>
        <h1>Log in</h1>
        <p>Log in to view your suggestions</p>
        <form method="POST">
            <div>
                <label>email: </label>
                <input type="email" name="email" required />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" required />
            </div>
            <div>
                <input type="submit" value="Log-In!" />
            </div>
        </form>

    <?php
    } else {
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);


        function test_input($data)
        {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }

        $err = "";
        if (empty($_POST["email"])) {
            $err = $err . "email is required ";
        } else {
            $email = test_input($_POST["email"]);
        }
        if (empty($_POST["password"])) {
            $err = $err . "password is required ";
        } else {
            $password = test_input($_POST["password"]);
        }

        if ($err != "") {
            exit($err);
        }
        require_once("db.php");


        $stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if (mysqli_num_rows($result) == 0) {
            echo ("Invalid credentials");
        } else {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row["password"])) {
                $_SESSION["login"] = true;
                $_SESSION["user"] = $row["id"];

                if ($row["admin"] != "") {
                    $_SESSION["admin"] = true;
                    echo ('<meta http-equiv="refresh" content="0;url=/suggestions/admin.php">');
                } else {
                    $_SESSION["admin"] = false;
                    echo ('<meta http-equiv="refresh" content="0;url=/suggestions/my.php">');
                }
            } else {
                echo ("Invalid credentials");
            }
        }
    }
    ?>

    <a href="/suggestions">Back</a>
</body>

</html>