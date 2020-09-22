let notes = getSavedNotes();
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
    const id = uuidv4();
    notes.push({
        id: id,
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

window.addEventListener('storage', function (e) {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue);
        renderNots(notes, filters);
    }
});

const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
//console.log(myDate.getFullYear());

const dateOne = new Date('September 26 2020 12:00:00');
const dateTwo = new Date();
const dateOneTimestamp = dateOne.getTime();
const dateDwoTimestamp = dateTwo.getTime();

if(dateOneTimestamp < dateDwoTimestamp ){
    console.log(dateOne.toString());
}else if(dateDwoTimestamp < dateOneTimestamp){
    console.log(dateTwo.toString());
}




