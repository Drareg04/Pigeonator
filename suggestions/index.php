    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pigeonator Suggestions</title>

        <link href="/suggestions/bootstrap-5.3.8-dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="/suggestions/bootstrap-5.3.8-dist/js/bootstrap.bundle.min.js"></script>

        <style>
            body {
                background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20%20width%3D'100'%20height%3D'100'%20viewBox%3D'0%200%20200%20200'%3E%3Crect%20fill%3D'%239FC3D8'%20width%3D'200'%20height%3D'200'%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D'a'%20gradientUnits%3D'userSpaceOnUse'%20x1%3D'100'%20y1%3D'33'%20x2%3D'100'%20y2%3D'-3'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%23000'%20stop-opacity%3D'0'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%23000'%20stop-opacity%3D'1'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D'b'%20gradientUnits%3D'userSpaceOnUse'%20x1%3D'100'%20y1%3D'135'%20x2%3D'100'%20y2%3D'97'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%23000'%20stop-opacity%3D'0'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%23000'%20stop-opacity%3D'1'%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20%20fill%3D'%2380a4b8'%20fill-opacity%3D'0.6'%3E%3Crect%20x%3D'100'%20%20width%3D'100'%20height%3D'100'%2F%3E%3Crect%20y%3D'100'%20%20width%3D'100'%20height%3D'100'%2F%3E%3C%2Fg%3E%3Cg%20fill-opacity%3D'0.5'%3E%3Cpolygon%20fill%3D'url(%23a)'%20points%3D'100%2030%200%200%20200%200'%2F%3E%3Cpolygon%20fill%3D'url(%23b)'%20points%3D'100%20100%200%20130%200%20100%20200%20100%20200%20130'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
            }
        </style>
    </head>

    <body data-bs-theme="dark">


        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 col-md-12 col-sm-12">
                    <div class="card shadow-lg">
                        <div class="card-body">
                            <h3 class="card-title text-center mb-4">Pigeonator Suggestions</h3>
                            <?php
                            if ($_SERVER["REQUEST_METHOD"] != "POST") {
                            ?>
                                <p>Thanks for taking the time to give us some feedback on the program!</p>

                                <form method="POST" enctype="multipart/form-data" class="row g-3">

                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="title" name="title" placeholder="" required>
                                        <label for="title">Title</label>
                                    </div>

                                    <div>
                                        <label for="suggestion" class="form-label">Suggestion</label>
                                        <textarea
                                            class="form-control"
                                            id="suggestion"
                                            name="suggestion"
                                            rows="4" cols="50"
                                            placeholder="Blah Blah Blah"
                                            required></textarea>
                                    </div>

                                    <div>
                                        <label for="files" class="form-label">Files (screenshots?):</label>
                                        <input class="form-control" type="file" name="files" id="files" accept="image/png, image/gif, image/jpeg">
                                    </div>

                                    <hr>

                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" name="name" placeholder="" required>
                                        <label for="name">Name</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="">
                                        <label for="email">Email (optional):</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="password" class="form-control" id="password" name="password" placeholder="">
                                        <label for="password">Password (optional, to check your suggestions):</label>
                                    </div>

                                    <div class="mb-3">
                                        <button type="submit" class="btn btn-primary">Send!</button>
                                    </div>
                                </form>


                            <?php
                            } else {
                                // ini_set('display_errors', 1);
                                // ini_set('display_startup_errors', 1);
                                // error_reporting(E_ALL);
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


                                if (!($_FILES['files']['error'] == 4 || ($_FILES['files']['size'] == 0 && $_FILES['files']['error'] == 0))) {
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
                                if (!($_FILES['files']['error'] == 4 || ($_FILES['files']['size'] == 0 && $_FILES['files']['error'] == 0))) {

                                    echo ("File uploaded!");

                                    $lastId = $stmt->insert_id;

                                    $type = pathinfo($file_tmp, PATHINFO_EXTENSION);
                                    $data = file_get_contents($file_tmp);
                                    $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);

                                    $thingType = "suggestions";
                                    $stmt = $conn->prepare("INSERT INTO attachments (attachment, thing_id, thing_type) VALUES (?, ?, ?)");
                                    $stmt->bind_param("ssi", $base64, $lastId, $thingType);
                                    $stmt->execute();
                                }

                                echo ("<h1>Thanks for your feedback!</h1>");
                            }
                            ?>


                            <div class="d-flex justify-content-between">
                                <div>
                                    <a href="/suggestions/login.php">Log In</a>
                                </div>
                                <div>
                                    <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">Background by SVGBackgrounds.com</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    </html>