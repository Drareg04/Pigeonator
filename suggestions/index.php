    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pigeonator Suggestions</title>
    </head>

    <body>

        <?php
        if ($_SERVER["REQUEST_METHOD"] != "POST") {
        ?>

            <h1>Welcome to Pigeonator Suggestions</h1>
            <p>Thanks for taking the time to give us some feedback on the program!</p>

            <form method="POST" enctype="multipart/form-data">
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
                    <!-- <input type="file" name="files" accept="image/png, image/gif, image/jpeg" multiple> -->
                    <input type="file" name="files" accept="image/png, image/gif, image/jpeg">
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

            if ($_POST["password"] != "") {
                $password = password_hash(test_input($_POST["password"]), PASSWORD_DEFAULT);
            }

            if ($err != "") {
                exit($err);
            }




            if (!empty($_FILES)) {
                // File checks
                $errors = array();
                $allowed_ext = array('jpg', 'jpeg', 'png', 'gif');
                $file_name = $_FILES['files']['name'];
                //   $file_name =$_FILES['image']['tmp_name'];
                $file_ext = strtolower(end(explode('.', $file_name)));

                $file_size = $_FILES['files']['size'];
                $file_tmp = $_FILES['files']['tmp_name'];

                if (in_array($file_ext, $allowed_ext) === false) {
                    exit('Extension not allowed');
                }

                if ($file_size > 2097152) {
                    exit('File size must be under 2mb');
                }
            }


            // check if user exists (by email if present)
            require_once("db.php");

            $sql = "SELECT * from users";
            $results = $conn->query($sql);


            if ($results->num_rows > 0) {
                // output data of each row
                while ($row = $results->fetch_assoc()) {
                    // echo "id: " . $row["id"] . " - Name: " . $row["firstname"] . " " . $row["lastname"] . "<br>";
                }
            }

            if (!isset($userId)) {
                $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
                $stmt->bind_param("sss", $name, $email, $password);
                $stmt->execute();

                $userId = $stmt->insert_id;
            }


            // insert
            $stmt = $conn->prepare("INSERT INTO suggestions (user_id, title, description) VALUES (?, ?, ?)");
            $stmt->bind_param("iss", $userId, $title, $suggestion);
            $stmt->execute();

            // files
            if (!empty($_FILES)) {

                echo("File uploaded!");

                $lastId = $stmt->insert_id;

                $type = pathinfo($file_tmp, PATHINFO_EXTENSION);
                $data = file_get_contents($file_tmp);
                $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);

                $thingType = "suggestions";
                $stmt = $conn->prepare("INSERT INTO attachments (attachment, thing_id, thing_type) VALUES (?, ?, ?)");
                $stmt->bind_param("ssi", $base64, $lastId, $thingType);
                $stmt->execute();
            }


        ?>
            <h1>Thanks for your feedback!</h1>
        <?php
        }
        ?>
        <a href="/suggestions/login.php">Log In</a>
    </body>

    </html>