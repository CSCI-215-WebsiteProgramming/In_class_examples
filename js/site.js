function dowork(theimage) {
    var imageDiv = document.getElementById('imageDiv');
    imageDiv.innerHTML = "";
    imageDiv.innerHTML += "<img src=" + theimage + " height=400 width=600><br>";
    imageDiv.innerHTML += "<span style:'position: relative; left: 260px; top: " +
                    "-390px;'> <a href='javascript:dowork2()'>Close</a></span> ";

    imageDiv.style.visibility = "visible";
}

function dowork2(theImage) {
    var imageDiv =document.getElementById('imageDiv');
    imageDiv.innerHTML = "";
    imageDiv.style.visibility = "hidden";
}

