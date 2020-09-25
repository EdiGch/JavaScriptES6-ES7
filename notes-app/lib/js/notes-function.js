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
    const element = document.createElement('div');
    element.setAttribute('class', 'list-group-item');

    const paragraphForString = document.createElement('p');
    const divForButton = document.createElement('div');

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-danger btn-sm float-right');
    button.textContent = 'remove';

    const editHref = document.createElement('a');
    editHref.setAttribute('class', 'btn btn-warning btn-sm float-right link-for-editing');
    editHref.setAttribute('href', `/edit.html#${note.id}`);
    editHref.setAttribute('id', note.id);
    editHref.setAttribute('style', 'margin-right: 5px');
    editHref.textContent = 'edit';

    if(note.title.length > 0){
        paragraphForString.textContent = note.title;
    }else{
        paragraphForString.textContent = 'Without title. System message.';
    }

    button.addEventListener('click', function(){
       removeNote(note.id);
       saveNotes(notes);
       renderNots(notes, filters);
    });

    element.appendChild(paragraphForString);
    element.appendChild(divForButton);

    divForButton.appendChild(button);
    divForButton.appendChild(editHref);
    return element;
}

// Sort your notes by one of three ways
const sortNotes = function(notes, sortBy){
    if(sortBy === 'byEdited'){
        return notes.sort(function (a,b) {
            if(a.updateAt > b.updateAt){
                return -1
            } else if( a.updateAt < b.updateAt){
                return 1
            } else{
                return 0;
            }
        });
    } else if(sortBy === 'byCreated'){
        console.log('Prawda')
        let po = notes.sort(function (a,b) {
            if(a.createAt > b.createAt){
                return -1
            } else if( a.createAt < b.createAt){
                return 1
            } else{
                return 0;
            }
        });
        console.log(po)
        return  po
    } else if(sortBy === 'byAlphabetically'){
        return notes.sort(function (a,b) {
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            } else if( a.title.toLowerCase() > b.title.toLowerCase() ){
                return 1
            } else{
                return 0;
            }
        });
    } else{
        return notes
    }
}

const renderNots = function(notes, filters){
    notes = sortNotes(notes, filters.sortBy);

    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector('#list-notes').innerHTML = '';

    filteredNotes.forEach(function(note){
        const element = generateDom(note)
        document.querySelector('#list-notes').appendChild(element);
    });

};


const generateLastEdited = function (timestamp){
    return `The last edition was made: ${moment(timestamp).fromNow()}`;
}
