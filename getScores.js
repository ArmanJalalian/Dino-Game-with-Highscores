/**
 * Created by Arman Jalalian on 12/11/2015.
 */
$(document).ready(function(){

    window.onkeydown = function(e) {
        if(e.keyCode == 32 && e.target == document.body) {
            e.preventDefault();
            return false;
        }
    };

    getScores();

    $("#Submit").click(function(){

        postScores();
        $("#tbody").fadeOut();
        $("#tbody").empty();

        setTimeout(function(){

        }, 100);

        getScores();

    });

});

function postScores(){
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
    });
}

function getScores(){
    $.ajax({
        url: "getAll.php",
        dataType: "json",
        success: function(data){
            console.log(data);
            $.each(data,function(index,item){
                console.log(item);
                $("table #tbody").append('<tr><td>'+item['player']+'</td><td>'+item['highscore']+'</td><td>'+item['date']+'</td></tr>').fadeIn();
            });
        }
    });
}
