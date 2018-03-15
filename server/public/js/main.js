var isOpenMenu = false;

function showSubmenu() {
    var myElement = document.querySelector('.submenu li ul');
    var bodyElement = document.querySelector('.container');
    var el1 = document.querySelectorAll('.menu li');
    var el2 = document.querySelectorAll('.menu li a');
    if(!isOpenMenu) {
        myElement.style.display = "block";
        bodyElement.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,255,0.5)),url(\"/images/endava-bg.jpg\")";
        bodyElement.style.backgroundPosition = "center";
        bodyElement.style.backgroundSize = "cover";
        isOpenMenu = true;

        el1[2].classList.add('press');
        el2[2].classList.remove('whitecolor'); 
        el2[2].classList.add('orangecolor');

    }else{   
        myElement.style.display = "none";
        bodyElement.style.background = "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(\"/images/endava-bg.jpg\")";
        bodyElement.style.backgroundPosition = "center";
        bodyElement.style.backgroundSize = "cover";
        isOpenMenu = false;
    }
}

window.addEventListener('mouseup', function(event){
    var myElement = document.querySelector('.submenu li ul');
    var bodyElement = document.querySelector('.container');
    var el1 = document.querySelectorAll('.menu li');
    var el2 = document.querySelectorAll('.menu li a');
	if (event.target != myElement && event.target.parentNode != myElement){
        myElement.style.display = "none";
        bodyElement.style.background = "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(\"/images/endava-bg.jpg\")";
        bodyElement.style.backgroundPosition = "center";
        bodyElement.style.backgroundSize = "cover";
        isOpenMenu = false;

        el1[2].classList.remove('press');
        el2[2].classList.add('whitecolor');
        el2[2].classList.remove('orangecolor'); 
    }
});

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var myObj = JSON.parse(this.responseText);
        var embedhtml = "";
        embedhtml += "<ul>";
        for (index = 0; index < myObj.items.length; index++) {

            var label = myObj.items[index].label;
            var url = myObj.items[index].url;

            if(myObj.items[index].items.length>0) {
                embedhtml += "<div class=\"submenu\">"
                embedhtml += "<li onclick=\"showSubmenu()\"><a class=\"whitecolor\" href="+ url +">"+ label +"</a>";
                embedhtml += "<ul>";
                for (j = 0; j < myObj.items[index].items.length; j++) {
                    label = myObj.items[index].items[j].label;
                    url = myObj.items[index].items[j].url;
                    embedhtml += "<li><a href="+ url +">"+ label +"</a></li>";
                }
                embedhtml += "</li></ul></div>";
            }else {
                embedhtml += "<li><a class=\"whitecolor\" href="+ url +">"+ label +"</a></li>";
            }
        }
        embedhtml += "</ul>";
        document.getElementById("nav").innerHTML = embedhtml;
    }
};
xmlhttp.open("GET", "/data/nav.json", true);
xmlhttp.send();

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