$(document).ready(function(){
    $('.slick-carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000, 
        dots: true, 
        arrows: true 
    });
});

$(document).ready(function() {
    function showSection(target) {
        $('.content').hide(); 
        $('#' + target).show(); 
    }

    $('.menu-link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        showSection(target);
    });

    showSection('home');
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



$('#cpf').on('input', function() {
    var inputValue = $(this).val();
    var formattedValue = inputValue.replace(/\D/g, ''); 
    if (formattedValue.length <= 11) {
        formattedValue = formattedValue.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
    } else {
        formattedValue = formattedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    formattedValue = formattedValue.replace(/(\d{2})$/, '-$1');

    $(this).val(formattedValue);
});

$('#numero').on('input', function() {
    var inputValue = $(this).val();
    var formattedValue = inputValue.replace(/\D/g, '');
    if (formattedValue.length >= 11) {
        formattedValue = formattedValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
        formattedValue = formattedValue.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    }
    $(this).val(formattedValue);
});
