
var draggableElement = document.getElementById('drag');
draggableElement.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('Draggable Content', event.target.id);
});

var numberOfDrags = 0;
draggableElement.addEventListener('drag', function () {
    event.preventDefault();
    console.log('Stop dragging me...');
    numberOfDrags++;
});

draggableElement.addEventListener('dragend', function () {
    console.log('Thank you');
    console.log('Number of drags: ' + numberOfDrags);
    numberOfDrags = 0;
});

var dropzone = document.getElementById('dropzone');

dropzone.addEventListener("dragover", dragDropHandler);
dropzone.addEventListener("drop", dragDropHandler);

dropzone.addEventListener("dragleave", dragDropHandler);

dropzone.addEventListener("dragleave", function () {
    console.log("I have left the dropzone. event.type was: " + event.type);
    dropstatus.innerHTML = "You have left the drop zone";
});

var dropstatus = document.getElementById('dropstatus');

function dragDropHandler(event) {
    event.preventDefault();

    // This also works
    if(event.type == 'dragleave') {
        console.log("I have left the dropzone. event.type was: " + event.type);
        dropstatus.innerHTML = "You have left the drop zone";
    } else if(event.type == 'dragover') {
        dropstatus.innerHTML = "You are over the dropzone";
    } else if(event.type == 'drop') {
        dropstatus.innerHTML = "You dropped something";
    }
}