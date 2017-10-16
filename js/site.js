function doCheck(theimage) {
    if(document.getElementById("t1").value.length < 6) {
        document.getElementById("s1").innerHTML = "Password too short";
    } else {
        document.getElementById("s1").innerHTML = "Password length is good!"
    }
}


