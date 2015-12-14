<?php
/**
 * Created by PhpStorm.
 * User: Arman Jalalian
 * Date: 12/14/2015
 * Time: 3:49 PM
 */

require("config.php");

updateScore();

function updateScore()
{
    global $connect;

    $player = $_POST['Player'];
    $score = $_POST['Score'];
    $created = date('Y-m-d H:i:s');
    $updateQuery = "UPDATE highscore SET Player = '$player', Score = '$score', Created = '$created' WHERE Player = '$player'";

    if($updateQuery = mysqli_query($connect, $updateQuery))
    {
        echo "Success!";
    } else {
        echo mysqli_error($connect);
    }
}

?>