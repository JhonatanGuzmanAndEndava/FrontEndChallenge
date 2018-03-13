// JS Here!
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var myObj = JSON.parse(this.responseText);
        //document.getElementById("demo").innerHTML = myObj.items[1].label;   
        
        for (index = 0; index < myObj.items.length; index++) {

            var label = myObj.items[index].label;
            var url = myObj.items[index].url;

            document.getElementById("demo").innerHTML = myObj.items[index].label;   
        }
    }
};
xmlhttp.open("GET", "/data/nav.json", true);
xmlhttp.send();