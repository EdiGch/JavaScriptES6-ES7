const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-title-textarea1');
const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function (note) {
    return note.id === noteId;
})

if(note === undefined){
    location.assign('/index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value;
    saveNotes(notes)
});

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value;
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