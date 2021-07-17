const form = document.getElementById("contactForm");
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('./mail.php',{
        method: 'post',
        body: formData
    }).then(function(response) {
        return response.text();
    }).then(function(text) {
        console.log(text);
    }).catch(function(error) {
        console.error(error);
    })
})