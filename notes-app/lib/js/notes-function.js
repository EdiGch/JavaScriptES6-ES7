// Reading of existing data localStorage
const getSavedNotes = () => {
    const notesJSON =  localStorage.getItem('notes');
    try {
        return notesJSON ? JSON.parse(notesJSON) : [];
    }catch (e){
        console.log( 'Memory failed? :( I\'m so sad. It\'s hard, we\'ll put it back on track. ' + e.message)
        return [];
    }
}
// Save the notes to localStorage
const saveNotes = (notes) => { localStorage.setItem('notes', JSON.stringify(notes)) }
// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex( (note) => note.id === id );
    if(noteIndex > -1 ){
        notes.splice(noteIndex, 1);
    }
}

const generateDom = (note) => {
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

    button.addEventListener('click', () => {
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
const sortNotes = (notes, sortBy) =>{
    if(sortBy === 'byEdited'){
        return notes.sort( (a,b) => {
            if(a.updateAt > b.updateAt){
                return -1
            } else if( a.updateAt < b.updateAt){
                return 1
            } else{
                return 0;
            }
        });
    } else if(sortBy === 'byCreated'){
        let po = notes.sort( (a,b) => {
            if(a.createAt > b.createAt){
                return -1
            } else if( a.createAt < b.createAt){
                return 1
            } else{
                return 0;
            }
        });
        return  po
    } else if(sortBy === 'byAlphabetically'){
        return notes.sort( (a,b) => {
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

const renderNots = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy);

    const filteredNotes = notes.filter( (note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()) );
    document.querySelector('#list-notes').innerHTML = '';

    filteredNotes.forEach((note) =>{
        const element = generateDom(note)
        document.querySelector('#list-notes').appendChild(element);
    });

};


const generateLastEdited = (timestamp) => `The last edition was made: ${moment(timestamp).fromNow()}`;
