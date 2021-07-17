const form = document.getElementById("contactForm");
const feedback = document.getElementById("sentMessageFeedbackDiv");
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
        feedback.innerHTML = text;
        if (text.charAt(1) == 'e') { // 'Sent! ...'
            feedback.classList.add('successMessageFeedback');
        } else { //'Something ...'
            feedback.classList.add('failedMessageFeedback');
        }

    }).catch(function(error) {
        console.error(error);
    })
})