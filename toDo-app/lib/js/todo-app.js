const titleToDo = document.getElementsByClassName('title-todo');
const searchWord = 'the';

var titlesToDoArray = Array.from(titleToDo);

const findInTitel = function(titlesArray, searchString ){

    titlesArray.forEach(function (value, index) {
        let parent = value.parentElement;
        parent = parent.parentElement

        if(value.textContent.match(searchString) ){
            parent.remove();
        }
    });
};



console.log( findInTitel(titlesToDoArray, searchWord) );