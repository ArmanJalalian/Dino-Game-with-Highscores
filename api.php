<?php
/**
 * Created by PhpStorm.
 * User: Arman Jalalian
 * Date: 12/11/2015
 * Time: 12:20 PM
 */

$db = 'dino';
$user = 'root';
$pw = '';
$host = 'localhost';


$connect =  mysqli_connect($host, $user, $pw, $db);

getAll();

function getAll()
{
    $query = "SELECT * FROM highscore ORDER BY Score DESC";
    $result = 

    echo $result;

    $scores = [];

    foreach ($result as $score) {
        $result['Player'] = $score['Player'];
    }



}

?>