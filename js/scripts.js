$('form#submitform').submit(function () {
    var name = $('#name').val();
    var email = $('#email').val();
    var text = $('#text').val();
    alert("Hey " + name + " Thank you for reaching out to us.We have received your details!");
});