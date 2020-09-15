let notes = [];

const filters ={
    searchText: ''
}

// Check for existing saved data
const notesJSON =  localStorage.getItem('notes');
if(notesJSON !== null){
    notes = JSON.parse(notesJSON);
}

const renderNots = function(notes, filters){
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector('#list-notes').innerHTML = '';

    filteredNotes.forEach(function(note){
       let element = document.createElement('p');
       element.setAttribute('class', 'list-group-item');

       if(note.title.length > 0){
           element.textContent = note.title;
       }else{
           element.textContent = 'Without title. System message.';
       }

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
    console.log(e.target.elements.forFan.checked);
    notes.push({
        title: e.target.elements.titleNote.value,
        complete: e.target.elements.forFan.checked
    })
    console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNots(notes, filters);

    e.target.elements.titleNote.value = '';
    e.target.elements.forFan.checked = '';
});

document.querySelector('#filterBy').addEventListener('change', function (e) {
    console.log(e.target.value);
});




