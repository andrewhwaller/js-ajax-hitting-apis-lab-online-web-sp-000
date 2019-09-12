const rootURL = 'https://api.github.com';

function getRepositories() {
  const name = document.getElementById('username').value;
  const req = new XMLHttpRequest();
  xhr.addEventListener('load', showRepositories);
  xhr.open('GET', `https://api.github.com/users/${username}/repos`);
  xhr.send();
}
