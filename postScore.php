<?php
/**
 * Created by PhpStorm.
 * User: Arman Jalalian
 * Date: 12/11/2015
 * Time: 12:56 PM
 */

require("config.php");

postScore();

function postScore()
{
    global $connect;

    $player = ($_POST['Player']);
    $score = ($_POST['Score']);
    $created = date('Y-m-d H:i:s');
    $postQuery = "INSERT INTO `Highscore`(`Player`, `Score`, `Created`) VALUES ('$player', '$score', '$created')";

    if($scoreQuery = mysqli_query($connect, $postQuery))
    {
        echo "Succes!";
    }

}

?>