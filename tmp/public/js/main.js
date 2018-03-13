// JS Here!
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var myObj = JSON.parse(this.responseText);
        var embedhtml = "";
        
        for (index = 0; index < myObj.items.length; index++) {

            var label = myObj.items[index].label;
            var url = myObj.items[index].url;

            if(myObj.items[index].items.length>0) {
                embedhtml += "<div class=\"submenu\">"
                embedhtml += "<li onclick=\"showSubmenu()\"><a href="+ url +">"+ label +"</a>";
                embedhtml += "<ul>";
                for (j = 0; j < myObj.items[index].items.length; j++) {
                    label = myObj.items[index].items[j].label;
                    url = myObj.items[index].items[j].url;
                    embedhtml += "<li><a href="+ url +">"+ label +"</a></li>";
                }
                embedhtml += "</li></ul></div>";
            }else {
                embedhtml += "<li><a href="+ url +">"+ label +"</a></li>";
            }
        }

        document.getElementById("nav").innerHTML = embedhtml;
    }
};
xmlhttp.open("GET", "/data/nav.json", true);
xmlhttp.send();

var isOpenMenu = false;

function showSubmenu() {
    var myElement = document.querySelector('.submenu li ul');
    var bodyElement = document.querySelector('.container');
    if(!isOpenMenu) {
        myElement.style.display = "block";
        bodyElement.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,255,0.5)),url(\"/images/endava-bg.jpg\")";
        bodyElement.style.backgroundPosition = "center";
        bodyElement.style.backgroundSize = "cover";
        isOpenMenu = true;
    }else{   
        myElement.style.display = "none";
        bodyElement.style.background = "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(\"/images/endava-bg.jpg\")";
        bodyElement.style.backgroundPosition = "center";
        bodyElement.style.backgroundSize = "cover";
        isOpenMenu = false;
    }
}

var isShowingBar = false;

function showSearchBar() {
    var searchElement = document.querySelector('.menu input[type=text]');
    if(!isShowingBar) {
        document.getElementById("nav").style.display = "none";
        searchElement.style.display = "inline-block";
        isShowingBar = true;
    }else {
        searchElement.style.display = "none";
        document.getElementById("nav").style.display = "block";
        isShowingBar = false;
    }
}