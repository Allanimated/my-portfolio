document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#home-button').addEventListener('click', load_home);
    document.querySelector('#About-button').addEventListener('click', load_about);
    load_home ();
})


function load_home() {
  document.querySelector('#home').style.display = 'flex';
  document.querySelector('#aboutme').style.display = 'none';
}

function load_about() {
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#aboutme').style.display = 'block';
}