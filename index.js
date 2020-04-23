//pop up window joke-------------------------------------
//need geo location and send alert
/*window.onload = function geofind() {
    alert("the government is trying to track you!!");

    function success(position) {
        alert("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude + " We know where you are");
    }
    function error() {
        if (error.code == error.PERMISSION_DENIED) {
            alert("phew... were safe for now");
        }
    }

    navigator.geolocation.getCurrentPosition(success, error);
}*/

//back button function------------------------------------------
function BackFunc() {
    window.history.back();
}


//Lizard people game--------------------------------------------------------------------

let imagestack = document.getElementById("LizardGameStack");
let n = 1;
let Score = 0;
let isStart = false;
let hmnbtn = document.getElementById("hmnbtn");
let lzrdbtn = document.getElementById("lzrdbtn");
let cntnbtn = document.getElementById("cntnbtn");
let ortxt = document.getElementById("ortxt");
let scoretxt = document.getElementById("scoretxt");
scoretxt.style.display = 'none';   //might use this instead of disabled


lzrdbtn.disabled = true;
hmnbtn.disabled = true;
cntnbtn.disabled = true;
cntnbtn.style.display = "none";

let wrong = new Image().src = "https://media.giphy.com/media/3og0IvGtnDyPHCRaYU/giphy.gif";
let correct = new Image().src = "https://media.giphy.com/media/UtEvf4kHi1t2YonlWS/giphy.gif";

isHuman = [false, true, false, false, true, false, true]; //checks if image is of human or lizard

let imgArray = new Array(); //stack of images that change, after each button click go to next image
//array list of images| zille 0| pravin 1| jacob 0|julius 0|Steenhuisen 1|cyril 0|Mmusi 1 |
imgArray[0] = new Image();
imgArray[0].src = "https://image.iol.co.za/image/1/process/650x366?source=https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/image/104520439.JPG&operation=CROP&offset=0x117&resize=3543x1993";

imgArray[1] = new Image();
imgArray[1].src = "https://i0.wp.com/www.indianspice.co.za/wp-content/uploads/2017/02/3-5.jpg?resize=620%2C330&ssl=1";

imgArray[2] = new Image();
imgArray[2].src = "https://lh3.googleusercontent.com/Ep0ib9KuzYGimUYqbYaZ3FCwhGaNh7V8g7Oy52OTNVw-2lkFjPd2hqqbaKVlDbpV78MoksZ9hcrp7tHsxvFL_w=s512";

imgArray[3] = new Image();
imgArray[3].src = "https://citizen.co.za/wp-content/uploads/2016/07/malema-tshwane.jpg";

imgArray[4] = new Image();
imgArray[4].src = "https://www.capetownetc.com/wp-content/uploads/2019/10/John-Steenhuisen-1.jpg";

imgArray[5] = new Image();
imgArray[5].src = "https://lh3.googleusercontent.com/Ez4c6-8WmlAdJ-iGp-heaaLEvOzmCOoUSy0xkizW_i4MwYu-L-nma-XRwl7ZlDiWsw1_RrUHrIv_1kGPYKPk=s512";

imgArray[6] = new Image();
imgArray[6].src = "https://gcs.thesouthafrican.com/2019/09/0c16ba63-000_1ds1op-1200x858.jpg";

imagestack.addEventListener("click", playGame);

//initialise game
function playGame() {
    console.log("playing");
    cntnbtn.disabled = true;
    cntnbtn.style.display = "none";
    imagestack.removeEventListener("click", playGame);
    score = 0;
    imagestack.src = imgArray[0].src;
    isStart = true;
    lzrdbtn.disabled = false;
    lzrdbtn.style.display = "block";
    hmnbtn.disabled = false;
    hmnbtn.style.display = "block";
    scoretxt.style.display = "none";
    n = 0;
}



function HumanBtn(imgArray, imagestack) {
    if (isStart) {
        if (n != imgArray.length - 1) {
            cntnbtn.disabled = false;
            cntnbtn.style.display = "block";
        }
        lzrdbtn.disabled = true;
        lzrdbtn.style.display = "none";
        hmnbtn.disabled = true;
        hmnbtn.style.display = "none";
        ortxt.style.display = "none";
        //correct
        if (isHuman[n]) {
            score++;
            imagestack.src = correct;
        }

        //wrong
        if (isHuman[n] === false) {
            imagestack.src = wrong;
        }
        if (n === imgArray.length - 1) { EndOfGame(scoretxt, score); }
        n++;
    }

}

function LizardBtn(imgArray, imagestack) {
    if (isStart) {
        if (n != imgArray.length - 1) {
            cntnbtn.disabled = false;
            cntnbtn.style.display = "block";
        }
        lzrdbtn.disabled = true;
        lzrdbtn.style.display = "none";
        hmnbtn.disabled = true;
        hmnbtn.style.display = "none";
        ortxt.style.display = "none";
        //correct
        if (isHuman[n] === false) {
            score++;
            imagestack.src = correct;
        }
        //wrong
        if (isHuman[n]) {
            imagestack.src = wrong;
        }
        if (n === imgArray.length - 1) { EndOfGame(scoretxt, score); }
        n++;
    }
}


function continueBtn(imgArray, imagestack) {
    imagestack.src = imgArray[n].src;
    cntnbtn.disabled = true;
    cntnbtn.style.display = "none";
    lzrdbtn.disabled = false;
    lzrdbtn.style.display = "block";
    hmnbtn.disabled = false;
    hmnbtn.style.display = "block";
    ortxt.style.display = "block";
}
//end of game
function EndOfGame(scoretxt, score) {
    console.log("end of game");
    isStart = false;
    scoretxt.innerHTML = "Your Score: " + score;
    scoretxt.style.display = "block";
    cntnbtn.disabled = true;
    cntnbtn.style.display = "none";
    lzrdbtn.disabled = true;
    lzrdbtn.style.display = "none";
    hmnbtn.disabled = true;
    hmnbtn.style.display = "none";
    ortxt.style.display = "none";

    imagestack.addEventListener("click", playGame);

    imagestack.src = "https://media.giphy.com/media/coBIzlrDq93doYaA9U/giphy.gif";
}
//}
//--------------------------------------------------------------------------------------------------
