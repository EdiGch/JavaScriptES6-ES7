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
}]

// const titleToDo = document.getElementsByClassName('title-todo');
// const searchWord = 'the';
// var titlesToDoArray = Array.from(titleToDo);
//
// const findInTitel = function(titlesArray, searchString ){
//
//     titlesArray.forEach(function (value, index) {
//         let parent = value.parentElement;
//         parent = parent.parentElement
//
//         if(value.textContent.match(searchString) ){
//             parent.remove();
//         }
//     });
// };
//
// console.log( findInTitel(titlesToDoArray, searchWord) );


let placeToCopy = document.getElementById('listToDo');

pastElement(notes);

document.querySelector("#create").addEventListener('click', function (e) {
   let dateNow = new Date();
    e.target.textContent = 'Czas: ' + dateNow.getDate() + '-' + dateNow.getMonth() + '-'+ dateNow.getFullYear() + ' houer: ' + dateNow.getHours();
})

document.querySelector('#seach-notes').addEventListener('input', function (e) {
    console.log(e.target.value)
})

function getCopyelement(){
    let element = document.getElementsByClassName('list-group-item');
    return element[1].cloneNode(true);
}

function pastElement(notes){

    notes.forEach(function(value){
        let clonElement = getCopyelement();
        let clonElementTitle = clonElement.children[0].children[0];
        clonElementTitle.textContent = value.title;
        placeToCopy.appendChild( clonElement );
    })
}


