document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.klik').classList.toggle('active');
});
function toggleAnswer(id) {
    var answer = document.getElementById('answer' + id);
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
}