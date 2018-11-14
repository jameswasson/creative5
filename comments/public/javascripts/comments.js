/*global $ jobj*/
$(document).ready(function() {
    $("#postComment").click(function() {
        var myobj = { Name: "", Comment: $("#comment").val() };
        jobj = JSON.stringify(myobj);
        var url = "comment";
        if (jobj.includes("."))
            return;
        $.ajax({
            url: url,
            type: "POST",
            data: jobj,
            contentType: "application/json; charset=utf-8",
            success: function(data, textStatus) {
                // $("#done").html(textStatus);
            }
        });
    });

    $("#getComments").click(function() {
        console.log("inGetComments");
        $.getJSON('comment', function(data) {
            var count = 0;
            var everything = "<h1><table>";
            for (var comment in data) {
                console.log(comment);
                if (count == 0)
                    everything += "<tr>";
                var com = data[Math.floor(Math.random()*data.length)];
                everything += "<td>" + com.Comment + "</td>";
                if (count == 5){
                    everything += "</tr>";
                    break;
                }
                if (count == 2)
                    everything += "</tr><tr>";
                count++;
            }
            everything += "</table></h1>";
            $("#comments").html(everything);
            console.log(everything);
        });
    });
});
