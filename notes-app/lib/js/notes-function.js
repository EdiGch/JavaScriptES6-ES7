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

const generateDom = function(note){
    const element = document.createElement('p');
    element.setAttribute('class', 'list-group-item');

    if(note.title.length > 0){
        element.textContent = note.title;
    }else{
        element.textContent = 'Without title. System message.';
    }
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
