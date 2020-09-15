let notes = [];

const filters ={
    searchText: '',
    hideComplete: false
};

// Check for existing saved data
const notesJSON =  localStorage.getItem('notes');
if(notesJSON !== null){
    notes = JSON.parse(notesJSON);
}

const structureHtmlToDoList = function(notes, filters){
    let placeToCopy = document.getElementById('listToDo');

    let filteredNotes = notes.filter(function (note) {
        const searchTextMatch = note.title.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompleteMatch = !filters.hideComplete || !note.complete;
        return searchTextMatch && hideCompleteMatch;

        //return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    //filteredNotes = filteredNotes.filter(function (note) {
        //return !filters.hideComplete || !note.complete;
        // if(filters.hideComplete){
        //     return !note.complete
        // }else{
        //     return true;
        // }
    //});

    const incomplete = filteredNotes.filter(function (note) {
        return !note.complete;
    });
    document.querySelector('#listToDo').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incomplete.length} todo left`;
    placeToCopy.appendChild(summary);

    filteredNotes.forEach(function (note) {

        let aHref = document.createElement('a');
        aHref.setAttribute('class', 'list-group-item list-group-item-action');

        let divChild = document.createElement('div');
        divChild.setAttribute('class', 'd-flex w-100 justify-content-between');

        let title = document.createElement('h5');
        title.setAttribute('class', 'mb-1 title-todo');

        let small = document.createElement('small');
        let description = document.createElement('p');
        description.setAttribute('class', 'mb-1 description-todo');

        placeToCopy.appendChild(aHref);
        aHref.appendChild(divChild);


        if(note.title.length > 0){
            title.textContent = note.title;
        }else{
            title.textContent = 'Without title. System message.';
        }

        divChild.appendChild(title);
        small.textContent = note.complete;
        divChild.appendChild(small);
        aHref.appendChild(description);

    })

};

document.querySelector('#seach-notes').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    structureHtmlToDoList(notes, filters);
});

structureHtmlToDoList(notes, filters);

document.querySelector('#addNewElement').addEventListener('submit', function (e) {
    e.preventDefault();
    notes.push({
        title: e.target.elements.titleToDo.value,
        complete: e.target.elements.forFan.checked
    })
    localStorage.setItem('notes', JSON.stringify(notes));
    structureHtmlToDoList(notes, filters);
    e.target.elements.titleToDo.value = '';
    e.target.elements.forFan.checked = '';


})

document.querySelector('#hideCompleteInput').addEventListener('change', function (e) {
    filters.hideComplete = e.target.checked;
    structureHtmlToDoList(notes, filters);
})

