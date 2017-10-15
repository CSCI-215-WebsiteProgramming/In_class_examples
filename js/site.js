var divs = document.getElementsByClassName('mouseover');


// Demonstrates how to add anonymous functions
// for(var i=0; i<divs.length; i++) {
//     divs[i].onmouseover = function() {
//         this.style.color = '#FF0000';
//         this.style.backgroundColor = '#FFBBBB';
//     };
//     divs[i].onmouseout = function() {
//         this.style.color = '#000000';
//         this.style.backgroundColor ='#FFFFFF';
//     };
// }


// Demonstrates how to add named functions. Observe lack of ()
for(var i=0; i<divs.length; i++) {
    divs[i].onmouseover = change1;
    divs[i].onmouseout = change2;
}

function change1() {
    this.style.color = '#FF0000';
    this.style.backgroundColor = '#FFBBBB';
}
function change2() {
    this.style.color = '#000000';
    this.style.backgroundColor ='#FFFFFF';
}
