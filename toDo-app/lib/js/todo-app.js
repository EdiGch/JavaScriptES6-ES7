let notes = getSavedTodos();

const filters ={
    searchText: '',
    hideComplete: false
};

document.querySelector('#seach-notes').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    structureHtmlToDoList(notes, filters);
});

structureHtmlToDoList(notes, filters);

document.querySelector('#addNewElement').addEventListener('submit', (e) => {
    e.preventDefault();
    notes.push({
        id: uuidv4(),
        title: e.target.elements.titleToDo.value,
        complete: e.target.elements.forFan.checked
    })
    saveTodos(notes)

    structureHtmlToDoList(notes, filters);
    e.target.elements.titleToDo.value = '';
    e.target.elements.forFan.checked = '';


})

document.querySelector('#hideCompleteInput').addEventListener('change', (e) => {
    filters.hideComplete = e.target.checked;
    structureHtmlToDoList(notes, filters);
})

