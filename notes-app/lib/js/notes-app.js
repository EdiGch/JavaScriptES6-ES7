let notes = getSavedNotes();
const filters ={
    searchText: '',
    sortBy: 'byEdited'
}
renderNots(notes, filters);

document.querySelector('#seach-notes').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNots(notes, filters);
})

document.querySelector('#addElement').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = uuidv4();
    const timestamp = moment().valueOf();
    notes.push({
        id: id,
        title: e.target.elements.titleNote.value,
        complete: e.target.elements.forFan.checked,
        createdAt: timestamp,
        updateAt: timestamp
    });
    saveNotes(notes);
    renderNots(notes, filters);
    e.target.elements.titleNote.value = '';
    e.target.elements.forFan.checked = '';
});

document.querySelector('#filterBy').addEventListener('change', function (e) {
    console.log(e.target.value);
    filters.sortBy = e.target.value;
    renderNots(notes, filters);
});

window.addEventListener('storage', function (e) {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue);
        renderNots(notes, filters);
    }
});
