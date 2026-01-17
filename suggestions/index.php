<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {

?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pigeonator Suggestions</title>
    </head>

    <body>
        <h1>Welcome to Pigeonator Suggestions</h1>
        <p>Thanks for taking the time to give us some feedback on the program!</p>

        <form method="POST">
            <div>
                <label>Title:</label>
                <input type="text" name="title" required />
            </div>
            <div>
                <label>Suggestion: </label>
                <textarea name="suggestion" rows="4" cols="50" required></textarea>
            </div>
            <div>
                <label>Files (screenshots?): </label>
                <input type="file" name="files" multiple>
            </div>
            <hr>
            <div>
                <label>Name:</label>
                <input type="text" name="name" required />
            </div>
            <div>
                <label>Email (optional):</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label>Password (optional, to check your suggestions):</label>
                <input type="password" name="password" />
            </div>

            <div>
                <input type="submit" value="Send!" />
            </div>
        </form>


        <a href="/suggestions/login.php">Log In</a>
    </body>

    </html>

<?php
} else {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    // is POST

    // data validation
    $title = $suggestion = $name = $email = $password = "";
    $err = "";

    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    if (empty($_POST["title"])) {
        $err = $err . "title is required ";
    } else {
        $title = test_input($_POST["title"]);
    }
    if (empty($_POST["suggestion"])) {
        $err = $err . "suggestion is required ";
    } else {
        $suggestion = test_input($_POST["suggestion"]);
    }
    if (empty($_POST["name"])) {
        $err = $err . "Name is required ";
    } else {
        $name = test_input($_POST["name"]);
    }

    $email = test_input($_POST["email"]);
    $password = test_input($_POST["password"]);

    if ($err != "") {
        exit($err);
    }

    // check if user exists (by email if present)
    require_once("db.php");


    // insert




}
?>