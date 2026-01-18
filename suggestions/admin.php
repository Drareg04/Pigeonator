<?php

// Start the session
session_start();


if (!$_SESSION["login"]) {
    header("Location: /suggestions/login.php");
    exit();
}

if (!$_SESSION["admin"]) {
    header("Location: /suggestions/my.php");
    exit();
}

require_once("db.php");

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suggestions Admin</title>

    <style>
        table,
        th,
        td {
            border: 1px solid black;
        }
    </style>
</head>

<body>

    <h1>List of suggestions</h1>
    <?php

    $sql = "SELECT s.id, s.title, u.name, u.email, u.password 
            FROM suggestions s
            INNER JOIN users u ON s.user_id = u.id 
    ";
    $results = $conn->query($sql);


    if ($results->num_rows > 0) {
    ?>
        <table>
            <tr>
                <th>Title</th>
                <th>User</th>
                <th>Email</th>
                <th>Account?</th>
                <th>Link</th>
            </tr>
            <?php
            // output data of each row
            while ($row = $results->fetch_assoc()) {
            ?>
                <tr>
                    <td><?= $row["title"] ?></td>
                    <td><?= $row["name"] ?></td>
                    <td><?= $row["email"] ?></td>
                    <td><?= $row["password"]=="" ? "no" : "yes" ?></td>
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