/**
 * Created by Arman Jalalian on 12/11/2015.
 */
$(document).ready(function(){

        $("#Submit").click(function(){
            var player = $("#Player").val();
            console.log(player);
            var highscore = $("#highscore").html();
            console.log(highscore);
            $.ajax({
                url: "score.php",
                method: "POST",
                data: {
                    Player: player,
                    Score: highscore
                },
                success: function(data){
                    console.log(data);
                }
            })
        });
});