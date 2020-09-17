// Reading of existing data localStorage
const getSavedNotes = function (){
    const notesJSON =  localStorage.getItem('notes');
    if(notesJSON !== null){
        return JSON.parse(notesJSON)
    }else{
        return []
    }
}

const saveNotes = function(notes){
    localStorage.setItem('notes', JSON.stringify(notes));
}

const removeNote = function (id){
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id;
    });

    if(noteIndex > -1 ){
        notes.splice(noteIndex, 1);
    }


}

const generateDom = function(note){
    const element = document.createElement('p');
    element.setAttribute('class', 'list-group-item');
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-danger btn-sm float-right');
    button.textContent = 'remove';
    if(note.title.length > 0){
        element.textContent = note.title;
    }else{
        element.textContent = 'Without title. System message.';
    }

    button.addEventListener('click', function(){
       removeNote(note.id);
       saveNotes(notes);
       renderNots(notes, filters);
    });

    element.appendChild(button);
    return element;
}

const renderNots = function(notes, filters){
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector('#list-notes').innerHTML = '';

    filteredNotes.forEach(function(note){
        const element = generateDom(note)
        document.querySelector('#list-notes').appendChild(element);
    });

};
