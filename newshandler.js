//here is where i will handle news board api
var url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=49d1cde63e504a929606432ea8c113c4';
var req = new Request(url);
fetch(req)
    .then(function (response) {
        console.log(response.json());
    })

alert('wat');