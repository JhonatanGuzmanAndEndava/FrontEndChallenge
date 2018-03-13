function paintNav() {
    //document.getElementById("demo").innerHTML = "Paragraph changed.";

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("demo").innerHTML = myObj.pets;
        }
    };
    xmlhttp.open("GET", "json_demo.txt", true);
    xmlhttp.send();
    

 }