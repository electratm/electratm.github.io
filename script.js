var username;

function askName() {
    username = prompt("enter a username to use in electra™", "Elon Musk");
    if (username == "") {
        askName();
    }

    else {
        localStorage.setItem('username', username);
        console.log(localStorage.getItem('username'));
    }
}