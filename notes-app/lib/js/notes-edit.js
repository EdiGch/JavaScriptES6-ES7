const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-title-textarea1');
const dateElement = document.querySelector('#last-edied');
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let  note = notes.find( (note) => note.id === noteId );

if(note === undefined){
    location.assign('/index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updateAt);

titleElement.addEventListener('input',  (e) => {
    note.title = e.target.value;
    note.updateAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updateAt);
    saveNotes(notes)
});

bodyElement.addEventListener('input',  (e) => {
    note.body = e.target.value;
    note.updateAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updateAt);
    saveNotes(notes)
});

document.querySelector('#removeNote').addEventListener('click', function () {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html');
})
document.querySelector('#cancel').addEventListener('click', function () {
    location.assign('/index.html');
})

window.addEventListener('storage',  (e) => {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue);

        note = notes.find( (note) => note.id === noteId );

        if(note === undefined){
            location.assign('/index.html');
        }

        titleElement.value = note.title;
        bodyElement.value = note.body;
        dateElement.textContent = generateLastEdited(note.updateAt);
    }
})