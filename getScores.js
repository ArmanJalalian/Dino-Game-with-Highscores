/**
 * Created by Arman Jalalian on 12/11/2015.
 */
$(document).ready(function(){

    $.ajax({
        url: "getAll.php",
        dataType: "json",
        success: function(data){
            console.log(data);
        }
    })

});
