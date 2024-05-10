function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '') {
        alert('Please enter your name');
        return false;
    }

    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (message.trim() === '') {
        alert('Please enter your message');
        return false;
    }
    alert("Message has been sent")
    return true;
}