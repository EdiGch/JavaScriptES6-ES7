const notes = [{
    title: 'Wash the car',
    complete: false
}, {
    title: 'Make an appointment with a hairdresser',
    complete: true
}, {
    title: 'Do your shopping for the whole week',
    complete: false
}, {
    title: 'Put the car up for sale',
    complete: true
}];

const filters ={
    searchText: ''
};

const structureHtmlToDoList = function(notes, filters){
    let placeToCopy = document.getElementById('listToDo');

    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    const incomplete = filteredNotes.filter(function (note) {
        return !note.complete;
    })
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
        title.textContent = note.title;
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
        complete: false
    });
    structureHtmlToDoList(notes, filters);
    e.target.elements.titleToDo.value = '';
})


