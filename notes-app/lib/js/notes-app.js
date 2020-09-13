const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// Query and remove
const p = document.querySelector('p');
//p.remove();

// Query all and remove
const ps = document.querySelectorAll('p');
ps.forEach(function(index){
    //console.log( index.textContent );
    //index.remove();
});

let newParagraf = document.createElement('p');
newParagraf.textContent = 'New element from javascript';
newParagraf.setAttribute('class', 'list-group-item')
document.getElementById('list-notes').appendChild(newParagraf);


