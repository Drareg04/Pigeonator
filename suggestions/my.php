<?php

// Start the session
session_start();


if (!$_SESSION["login"]) {
    header("Location: /suggestions/login.php");
    exit();
}

if ($_SESSION["admin"]) {
    header("Location: /suggestions/admin.php");
    exit();
}

require_once("db.php");

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Suggestions</title>

    <style>
        table,
        th,
        td {
            border: 1px solid black;
        }
    </style>
</head>

<body>

    <h1>Your suggestions</h1>
    <?php

    $stmt = $conn->prepare("SELECT s.id, s.title 
                        FROM suggestions s
                        INNER JOIN users u ON s.user_id=u.id 
                        WHERE s.user_id=?");
    $stmt->bind_param("i", $_SESSION["user"]);
    $stmt->execute();
    $results = $stmt->get_result();


    if ($results->num_rows > 0) {
    ?>
        <table>
            <tr>
                <th>Title</th>
                <th>Link</th>
            </tr>
            <?php
            // output data of each row
            while ($row = $results->fetch_assoc()) {
            ?>
                <tr>
                    <td><?= $row["title"] ?></td>
                    <td><a href="/suggestions/suggestion.php?id=<?= $row["id"] ?>">Click!</a></td>
                </tr>
            <?php
            }

            ?>

        </table>
    <?php
    } else {
        echo ("No suggestions?");
    }
    ?>

</body>

</html>