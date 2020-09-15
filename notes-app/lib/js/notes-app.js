const notes = getSavedNotes();
const filters ={
    searchText: ''
}
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
    notes.push({
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




