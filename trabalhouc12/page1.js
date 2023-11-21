$(document).ready(function(){
    $('.slick-carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000, 
        dots: true, 
        arrows: true 
    });
});
$(document).ready(function() {
    $('.menu-link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        $('.content').hide();
        $('#' + target).fadeIn(); 
    });
});
function validateForm() {
    var cpfPattern = /\d{3}\.\d{3}\.\d{3}-\d{2}/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var cpfInput = document.getElementById('cpf');
    var emailInput = document.getElementById('email');
    var cpfError = document.getElementById('cpfError');
    var emailError = document.getElementById('emailError');

   
    cpfError.textContent = '';
    emailError.textContent = '';

   
    if (!cpfPattern.test(cpfInput.value)) {
        cpfError.textContent = 'CPF inválido';
        return;
    }

    
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Email inválido';
        return;
    }

    document.getElementById('myForm').submit();
}


