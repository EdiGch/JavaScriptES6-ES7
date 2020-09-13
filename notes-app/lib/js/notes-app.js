const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

document.querySelector("#create").addEventListener('click', function (e) {
    e.target.textContent = 'New value button after click';
});
// remove All
document.querySelector("#removeAllNotes").addEventListener('click', function () {
    notesElements = document.querySelectorAll('.list-group-item');
    notesElements.forEach(function (value){
        value.remove()
    })
});


