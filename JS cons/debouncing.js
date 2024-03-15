// in debouncing what we have to do ...
// Fetch the results as the user types ...
// But this will result in mulitple network calls ! (for each letter)
// So we have to reduce the network call and still maintain the feature

/* 
    One way of doing it is to ... only request data when there is certain amount of pause 
    while typing !
*/

function saveInput(e) {
    console.log(e.target.value);
}
