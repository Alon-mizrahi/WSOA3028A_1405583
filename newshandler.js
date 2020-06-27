//here is where i will handle news board api


//change mouse to load while searching

/*

(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();




var url = 'https://cors-anywhere.herokuapp.com/'+'https://newsapi.org/v2/top-headlines?' +
          'country=za&' +
          'apiKey=30b8521945da4357a5e2742bf5e89224';
var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })



let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Origin','http://localhost:5500');

fetch(req, {
    mode: 'cors',
    method: 'GET',
    headers: headers
})
.then(
    function(){
    console.log(response.json())
})
*/



//https://cors-anywhere.herokuapp.com/


const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const Url = "http://newsapi.org/v2/top-headlines?country=za&apiKey=30b8521945da4357a5e2742bf5e89224";


var theURL = new Request(proxyUrl+Url);


        fetch(theURL)
        .then(function(){   
                document.getElementById("wholepage").style.cursor = "wait";
            })
        .then(
            function(response){
                console.log(response.json());
                document.getElementById("wholepage").style.cursor = "default";
            })



    /* delete jqery if this workls--------------------------------------------*/
    /*
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
    
    
    */