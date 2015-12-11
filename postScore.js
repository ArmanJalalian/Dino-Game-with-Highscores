/**
 * Created by Arman Jalalian on 12/11/2015.
 */
$(document).ready(function(){

    var highscore = $("#highscore").val();

    console.log(highscore);

    $.ajax({
        type: "POST",
        url: "score.php",
        data: {
            Player: Player,
            Score: Score,
            Created: Created
        }
    })
});