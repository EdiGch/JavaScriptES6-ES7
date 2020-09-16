const notes = getSavedNotes();
const filters ={
    searchText: ''
}
renderNots(notes, filters);

document.querySelector('#seach-notes').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNots(notes, filters);
})

document.querySelector('#addElement').addEventListener('submit', function (e) {
    e.preventDefault();
    notes.push({
        id: uuidv4(),
        title: e.target.elements.titleNote.value,
        complete: e.target.elements.forFan.checked
    });
    saveNotes(notes);
    renderNots(notes, filters);
    e.target.elements.titleNote.value = '';
    e.target.elements.forFan.checked = '';
});

document.querySelector('#filterBy').addEventListener('change', function (e) {
    console.log(e.target.value);
});




