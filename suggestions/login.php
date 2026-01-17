<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suggestions login</title>
</head>

<body>
    <h1>Log in</h1>
    <p>Log in to view your suggestions</p>
    <form method="POST">
        <div>
            <label>Username: </label>
            <input type="text" name="username" required />
        </div>
        <div>
            <label>Password: </label>
            <input type="password" name="password" required />
        </div>
        <div>
            <input type="submit" value="Log-In!" />
        </div>
    </form>
    <a href="/suggestions">Back</a>
</body>

</html>