// Get user from github using username
export function getUser(username, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            callback(JSON.parse(xhr.responseText));
        }
    }
    xhr.open('GET', `https://api.github.com/users/${username}`, true);
    xhr.send(null);
}
// get user's repo from github using username
export function getRepos(username, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            callback(JSON.parse(xhr.responseText));
        }
    }
    xhr.open('GET', `https://api.github.com/users/${username}/repos`, true);
    xhr.send(null);
}