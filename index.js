

let a = document.getElementById("mybutton");
a.addEventListener('click', func);
function func() {
    alert("big PP");
}

function BackFunc() {
    window.history.back();
}



//Lizard people game-----------------------------------------

imagesAr =
    ["https://i.ytimg.com/vi/AZ2ZPmEfjvU/maxresdefault.jpg",
        "https://www.thesprucepets.com/thmb/wpN_ZunUaRQAc_WRdAQRxeTbyoc=/4231x2820/filters:fill(auto,1)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg",
        "https://cdn1-www.dogtime.com/assets/uploads/2019/07/PuppyEyes1.jpg",
        "https://www.readersdigest.ca/wp-content/uploads/sites/14/2019/02/shutterstock_673465372.jpg",
        "https://i2.wp.com/metro.co.uk/wp-content/uploads/2017/10/567892431.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1",
        "https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg"
    ];

let imagestack = document.getElementById("LizardGameStack");

let n = 0;
function Nextimage(imagesAr) {
    imagestack.src = imagestack[n];
    n++;
}

//-----------------------------------------------------------
