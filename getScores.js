/**
 * Created by Arman Jalalian on 12/11/2015.
 */
$(document).ready(function(){

    getScores();

    window.onkeydown = function(e) {
        if(e.keyCode == 32 && e.target == document.body) {
            e.preventDefault();
            return false;
        }
    };

    $("#Submit").click(function(){

        player = $("#Player").val();
        highscore = $("#highscore").html();


        form.fadeOut(500);
        if(checkNames(player) == true){
            updateScore();
        } else {
            postScore();
        }
        tableFade.fadeOut(500);
        tableEmpty.empty();

        setTimeout(function(){

        }, 100);

        getScores();

    });

});

var names = [];
var player = '';
var highscore = '';
var form = $('#form');
var tableFade = $("#tbody");
var tableEmpty = $("#tbody");

function getScores(){
    $.ajax({
        url: "getAll.php",
        dataType: "json",
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                $("table #tbody").append('<tr><td>'+(i + 1)+'</td><td>'+data[i]['player']+'</td><td>'+data[i]['highscore']+'</td><td>'+data[i]['date']+'</td></tr>').fadeIn();
            }
            $.each(data,function(index,item){
                names.push(item);
            });

            return names;
        }
    });
}

function postScore(){
    player = $("#Player").val();
    highscore = $("#highscore").html();
    $.ajax({
        url: "postScore.php",
        method: "POST",
        data: {
            Player: player,
            Score: highscore
        },
        success: function(data){
            console.log("Ik wordt gepost!");
        }
    });
}

function checkNames(player){
    for (var i = 0; i < names.length; i++) {
        if(names[i]['player'] == player) {
            /*form.fadeOut(500);
            updateScore();
            tableFade.fadeOut(500);
            tableEmpty.empty();*/
            return true;
        }
    }
    return false;
}

function updateScore(){
    player = $("#Player").val();
    highscore = $("#highscore").html();
    $.ajax({
        url: "updateScore.php",
        method: "POST",
        data: {
            Player: player,
            Score: highscore
        },
        success: function(data){
            console.log(data);
        }
    })
}


