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

document.querySelector('#addElement').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e.target.elements.titleNote.value);
    e.target.elements.titleNote.value = '';
})


