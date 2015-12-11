<?php
/**
 * Created by PhpStorm.
 * User: Arman Jalalian
 * Date: 12/11/2015
 * Time: 12:20 PM
 */

require("config.php");

getAll();

function getAll()
{
    global $connect;
    $sql = "SELECT * FROM highscore ORDER BY Score DESC";
    $query = mysqli_query($connect,$sql);
    $highscore_array = [];

    while($row = mysqli_fetch_assoc($query)){
        $highscore_array[] = array(
            'Player' => $row['Player'],
            'Highscore' => $row['Score'],
            'Date' => $row['Created']
        );

    }

    echo json_encode($highscore_array);

}

?>