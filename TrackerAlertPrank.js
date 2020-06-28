function myFunction() {
    var myVar = setTimeout(showPage, 1000);
}

function showPage() {
    //pop up window joke-------------------------------------
    //need geo location and send alert
    window.onload = function geofind() {
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
    }
}
if (!localStorage.getItem("visted")) {
    myFunction();
    localStorage.setItem("visted", true);
}


//this joke only works the first time a user loads the index.html page, as to not irritate users. 
//to have the popups come up again clear cookies and cache
//also reset default permissions for the site.
//ie: location -> ask by default