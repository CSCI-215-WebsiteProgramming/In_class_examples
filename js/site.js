
// Add click listener with our preferred way to execute the doCheck() function
document.getElementById('myButton').addEventListener("click", doCheck);

// We can add the same function as an event handler to a different element with a different event
document.body.addEventListener("keypress", doCheck);


function doCheck(myEventNameDoesNotMatter) {
    console.log(myEventNameDoesNotMatter.target.nodeName);

    if(myEventNameDoesNotMatter.type == 'click') {
        console.log(myEventNameDoesNotMatter.type);
    }

    if(myEventNameDoesNotMatter.type == 'keypress') {
        console.log(myEventNameDoesNotMatter.charCode);
        console.log(myEventNameDoesNotMatter.keyCode);
    }

}

// // Initialize Mario Object
// var Mario = {
//     x: 100,
//     y: 280,
//     w: 100,
//     h: 160,
//     Image: (function() {
//         var temp = new Image();
//         temp.src = "mario1.png";
//         return temp;
//     })()
// };
//
// var canvas;
// var ctx;
//
// window.onload = function() {
//     canvas = document.getElementById("myCanvas");
//     ctx = canvas.getContext("2d");
//     ctx.drawImage(Mario.Image, Mario.x, Mario.y, Mario.w, Mario.h);
// };
//
// document.body.addEventListener("keyup", function (event) {
//     ctx.clearRect(0,0,800,800);
//
//     if(event.keyCode == '37') {
//         console.log('Turning Mario left');
//         Mario.Image.src = "marioturnsleft.png";
//         ctx.drawImage(Mario.Image, Mario.x, Mario.y, Mario.w, Mario.h);
//     } else if(event.keyCode == '38') {
//         console.log('Mario jumping');
//         Mario.Image.src = "mario2.png";
//         ctx.drawImage(Mario.Image, Mario.x, Mario.y-100, Mario.w, Mario.h);
//     } else if(event.keyCode == '39') {
//
//     } else if(event.keyCode == '40') {
//         event.preventDefault();
//     }
// });





