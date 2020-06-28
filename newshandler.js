//here is where i will handle news board api


//change mouse to load while searching
function execute() {


    console.log("loaded");


    const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20180101&end_date=20201212&q=south%20africa&sort=relevance&api-key=Q0A7WM3N9sNXfLZKXL5GkfQVgPc9IySg";




    fetch(url)
        .then((response1) =>
            response1.json()
            //document.getElementById("wholepage").style.cursor = "wait";       //loading cursor
        )
        .then((data) => {
            dataHandler(data);
            document.html.style.cursor = "wait";       //loading cursor
            //document.getElementById("wholepage").style.cursor = "default";   //change mouse back
        });


    const dataHandler = (info) => {
        console.log("2nd then func");
        const data1 = info.response.docs;

        let DIV = document.getElementById("newsbackground"); //this is the DIV all articles are in

        let err = "there was an issue retrieveing data from nytimes"
        if (data1.length === 0) {
            return err;
        } else {


            for (var i = 0; i < data1.length; i++) {//go through each article

                let article = document.createElement("article");//create article
                //article.setAttribute = ("id", "article" + i);         //article.id ="article1/2/3/..."
                article.className = "newspiece";

                let headline = document.createElement("h3");    //create h3 for heading
                headline.appendChild(document.createTextNode(data1[i].headline.main)); //putting headline text inside element

                let snippet = document.createElement("p"); //make <p> for snippet to go
                snippet.appendChild(document.createTextNode(data1[i].snippet));


                let link = document.createElement("a")
                let articleLink = data1[i].web_url;      //link article with url to nytimes     .web_url

                link.href = articleLink;
                link.target = "_blank"
                headline.className = "newshead";

                link.appendChild(headline);
                article.appendChild(link);
                article.appendChild(snippet);


                DIV.appendChild(article);
            }

            document.getElementsByName("html").style.cursor = "default"; //change mouse back
        }

    }
    console.log("done");


}



window.onload = execute();

