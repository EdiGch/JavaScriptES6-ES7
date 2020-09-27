const myAge = 24
let message;
// if(myAge >= 18){
//     message = 'You can vote!'
// } else{
//     message = 'You cannot vot!';
// }
//(myAge >= 18) ? message = 'You can vote!' :  message = 'You cannot vot!';
message = myAge >= 18 ? 'You can vote!' : 'You cannot vot!';
console.log( message );

const showPage = () => {
     return 'Showing the page'
}

const showErrorPage = () => {
    return 'Showing the error page'
}

message = myAge >= 21 ? showPage() : showErrorPage();
console.log( message );

const team = ['Tyler', 'Poter', 'Andrew', 'Ben', 'Mike'];

message = team.length <=4 ? `Team size: ${team.length}` : 'Too many people on your team';
console.log( message );