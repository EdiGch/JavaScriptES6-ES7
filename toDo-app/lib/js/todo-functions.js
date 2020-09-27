// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('notes')
    return notesJSON !== null ? JSON.parse(notesJSON) : [];
}

// Save todos to localStorage
const saveTodos = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const removeToDo = (id) =>{
    const noteIndex = notes.findIndex( (note) => note.id === id );

    if(noteIndex > -1 ){
        notes.splice(noteIndex, 1);
    }
}

const toggleToDo = (id) => {
    const toDo = notes.find((key) => key.id === id );

    if(toDo !== undefined){
        toDo.complete = !toDo.complete
    }
}

// Render application todos based on filters
const structureHtmlToDoList = (notes, filters) => {
    const placeToCopy = document.getElementById('listToDo');

    let filteredNotes = notes.filter( (note) => {
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

    const incomplete = filteredNotes.filter( (note) => !note.complete );
    document.querySelector('#listToDo').innerHTML = '';
    placeToCopy.appendChild(generateSummaryDOM(incomplete));

    filteredNotes.forEach( (note) => {
        generateTodoDOM(note, placeToCopy)
    })

};

// Get the DOM elements for an individual note
const generateTodoDOM = (note, placeToCopy) => {
    let aHref = document.createElement('a');
    aHref.setAttribute('class', 'list-group-item list-group-item-action');

    let divChild = document.createElement('div');
    divChild.setAttribute('class', 'd-flex w-100 justify-content-between');

    let title = document.createElement('h5');
    title.setAttribute('class', 'mb-1 title-todo');

    let small = document.createElement('small');
    let description = document.createElement('p');
    description.setAttribute('class', 'mb-1 description-todo');

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-danger btn-sm float-right');
    button.textContent = 'remove';

    button.addEventListener('click', function () {
        removeToDo(note.id);
        saveTodos(notes);
        structureHtmlToDoList(notes, filters);
    })

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = note.complete;

    checkbox.addEventListener('change',() => {
        toggleToDo(note.id)
        saveTodos(notes);
        structureHtmlToDoList(notes, filters);
    });

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
    description.appendChild(button);
    description.appendChild(checkbox);
}

// Get the DOM elements for list summary
const generateSummaryDOM =  (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}