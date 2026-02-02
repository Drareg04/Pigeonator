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
    <link href="/suggestions/bootstrap-5.3.8-dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="/suggestions/bootstrap-5.3.8-dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="d-flex align-items-center justify-content-center" data-bs-theme="dark">



    <div class="card shadow-lg w-100" style="max-width: 480px;">
        <div class="card-body">
            <div class="text-center">
                <h1 class="card-title h3">Log in</h1>
                <p class="card-text text-muted">Log in to view your suggestions</p>
            </div>
            <div class="mt-4">

                <?php
                if ($_SERVER["REQUEST_METHOD"] != "POST") {
                ?>

                    <form method="POST">
                        <div class="mb-4">
                            <label for="email" class="form-label text-muted">Email Address</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Email Address" required>
                        </div>
                        <div class="mb-4">
                            <label for="password" class="form-label text-muted">Password</label>
                            <input type="password" class="form-control" id="password" name="password" placeholder="Password" required>
                        </div>
                        <div class="d-grid mb-3">
                            <button type="submit" class="btn btn-primary btn-lg">Sign in</button>
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
                        echo ('<a href="/suggestions/login.php">Try again</a>');
                        echo('<p>'.$err.'</p>');
                        exit();
                    }
                    require_once("db.php");


                    $stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
                    $stmt->bind_param("s", $email);
                    $stmt->execute();
                    $result = $stmt->get_result();

                    if (mysqli_num_rows($result) == 0) {
                        echo ("<p>Invalid credentials</p>");
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
                            echo ("<p>Invalid credentials</p>");
                        }
                    }
                    echo ('<a href="/suggestions/login.php">Try again</a>');
                }
                ?>


                <a href="/suggestions">Back</a>

            </div>
        </div>
    </div>
</body>

</html>