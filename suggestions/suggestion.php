<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Start the session
session_start();


if (!$_SESSION["login"]) {
    header("Location: /suggestions/login.php");
    exit();
}

require_once("db.php");


$stmt = $conn->prepare("SELECT s.id, s.title, s.description,u.id as uid, u.name, u.email, u.password, a.attachment
                        FROM suggestions s
                        INNER JOIN users u ON s.user_id=u.id 
                        LEFT JOIN attachments a ON s.id = a.thing_id
                        WHERE s.id=?");
$stmt->bind_param("i", $_GET['id']);
$stmt->execute();
$result = $stmt->get_result();


if ($result->num_rows == 0) {
    exit("Issue does not exist");
}

$row = $result->fetch_assoc();

if (!$_SESSION["admin"] && $row["uid"] != $_SESSION["user"]) {
    header("HTTP/1.1 401 Unauthorized");
    exit("HTTP/1.1 401 Unauthorized");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    if (empty($_POST["suggestion"])) {
        $err = $err . "suggestion is required ";
    } else {
        $suggestion = test_input($_POST["suggestion"]);
    }

    // insert
    $stmt = $conn->prepare("INSERT INTO comments (user_id, suggestion_id, comment) VALUES (?, ?, ?)");
    $stmt->bind_param("iis", $_SESSION["user"], $row["id"], $suggestion);
    $stmt->execute();


    header("Refresh:0");
} else {

?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Suggestion View</title>
        <link href="/suggestions/bootstrap-5.3.8-dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="/suggestions/bootstrap-5.3.8-dist/js/bootstrap.bundle.min.js"></script>
    </head>

    <body data-bs-theme="dark">
        <h1>Suggestion <?= $row["id"] ?></h1>
        <h3>Title: <?= $row["title"] ?></h3>
        <h5>By <?= $row["name"] ?> <?= $row["email"] ?></h5>
        <hr>
        <p><?= $row["description"] ?></p>
        <img src="<?= $row["attachment"] ?>" />
        <hr>
        <h5>Comments:</h5>
        <?php
        $stmt = $conn->prepare("SELECT c.id, c.comment, u.name
                        FROM comments c
                        INNER JOIN users u ON c.user_id=u.id 
                        WHERE c.suggestion_id=?
                        ORDER BY c.id DESC");
        $stmt->bind_param("i", $row["id"]);
        $stmt->execute();
        $result = $stmt->get_result();

        while ($row = $result->fetch_assoc()) {
        ?>
            <p><?= $row["name"] ?>: <?= $row["comment"] ?></p>
        <?php
        }

        ?>
        <hr>
        <h5>Add comment:</h5>
        <form method="POST">
            <div>
                <label>Comment: </label>
                <textarea name="suggestion" rows="4" cols="50" required></textarea>
            </div>

            <!-- <div>
                <label>Files (screenshots?): </label>
                <input type="file" name="files" multiple>
            </div> -->

            <div>
                <input type="submit" value="Post" />
            </div>
        </form>

        <hr>

        <button onclick="history.back()">Go Back</button>
    </body>

    </html>

<?php
}
?>