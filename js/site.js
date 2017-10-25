
var draggableElement = document.getElementById('drag');
draggableElement.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('Draggable Content', event.target.id);
});

draggableElement.addEventListener('drag', function () {
    console.log('Stop dragging me...');
});

draggableElement.addEventListener('dragend', function () {
    console.log('Thank you');
});

var dropzone = document.getElementById('dropzone');
dropzone.addEventListener("dragover", dragDropHandler);
dropzone.addEventListener("drop", dragDropHandler);

var dropstatus = document.getElementById('dropstatus');

function dragDropHandler(event) {
    event.preventDefault();

    if(event.type == 'dragover') {
        dropstatus.innerHTML = "You are over the dropzone";
    } else if(event.type == 'drop') {
        dropstatus.innerHTML = "You dropped something";
    }
}