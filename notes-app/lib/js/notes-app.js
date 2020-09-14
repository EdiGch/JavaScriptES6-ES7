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

const filters ={
    searchText: ''
}

const renderNots = function(notes, filters){
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    // let removeListNotes = document.querySelectorAll('.list-group-item');
    // removeListNotes.forEach(function (note, index) {
    //     note.remove();
    // });
    document.querySelector('#list-notes').innerHTML = '';

    filteredNotes.forEach(function(note){
       let element = document.createElement('p');
       element.setAttribute('class', 'list-group-item');
       element.textContent = note.title;
       document.querySelector('#list-notes').appendChild(element);
    });

};

renderNots(notes, filters);

document.querySelector('#seach-notes').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNots(notes, filters);
})

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


