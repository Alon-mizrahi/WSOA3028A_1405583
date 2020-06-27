//here is where i will handle news board api

alert('wat');


//change mouse to load while searching

$(document).ready(function () {

    var url = "https://newsapi.org/v2/top-headlines?country=za&apiKey=49d1cde63e504a929606432ea8c113c4";

    console.log(url);


    $.ajax({
        url: url,
        method: "GET",
        datatype: "json",

        beforeSend: function () {
            document.getElementById("wholepage").style.cursor = "wait";
        },
        complete: function () {
            document.getElementById("wholepage").style.cursor = "default";
        },
        success: function (news) {
            console.log(news);
        },
        error: function () {
            console.log("Whoops, looks like there was a problem fetching news content:(");
        }




    });




});