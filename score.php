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
    if(isset($_POST['Score'])){
        $player = ($_POST['Player']);
        $score = ($_POST['Score']);
        $created = date('Y-m-d');
        $scoreQuery = "INSERT INTO highscore (Player, Score, Created) VALUES ('$player', '$score', '$created')";

        if($scoreQuery = mysqli_query($connect, $scoreQuery))
        {
            echo "Succes!";
        }
    }

}

?>