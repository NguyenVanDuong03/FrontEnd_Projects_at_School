function check(id, regex, message) {
    if($(id).val().trim() === '') {
        $(id).parent().next('.form_message').text('Yêu cầu nhập đầy đủ thông tin!').show();
        return false;
    }else if(regex !== '0') {
        if(!regex.test($(id).val())) {
            $(id).parent().next('.form_message').text(message).show();
        return false;
        }
    }
    $(id).parent().next('.form_message').text('').show();
        return true;
}

function reset() {
    $('#name_').val('');
    $('#email_').val('');
    $('#phone_').val('');
    $('select').val(0);
    $('#address_').val('');
    $('#textarea_').val('');
    $('#title_').val('');
    $('.form_message').text('');
}

$(document).ready( () => {
    $('#name_').on('input', () => {
        check($('#name_'), /^[A-Z][a-zA-Zà-Ỹ ]+$/, 'Họ và tên viết hoa theo quy định văn bản!');
    })
    $('#email_').on('input', () => {
        check($('#email_'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Yêu cầu nhập đúng định dạng Email!');
    })
    $('#title_').on('input', () => {
        check($('#title_'), /^[A-Z][a-zA-Zà-Ỹ ]+$/, 'Yêu cầu ký tự đầu tiên viết hoa!');
    })
    $('#address_').on('input', () => {
        check($('#address_'), /^[A-Z][a-zA-Zà-Ỹ ]+$/, 'Yêu cầu ký tự đầu tiên viết hoa!');
    })
    $('#phone_').on('input', () => {
        check($('#phone_'), /^0\d{9,12}$/, 'Số điện thoại tối đa 11 số!');
    })
    $('#textarea_').on('input', () => {
        check($('#textarea_'), '0', '');
    })

    

    $('#submit_').click( (e) => {
        e.preventDefault();

        const isname = check($('#name_'), /^[A-Z][a-zA-Zà-Ỹ ]+$/, 'Họ và tên viết hoa theo quy định văn bản!');

        const isemail = check($('#email_'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Yêu cầu nhập đúng định dạng Email!');

        const istitle = check($('#title_'), /^[A-Z][a-zA-Zà-Ỹ ]+$/, 'Yêu cầu ký tự đầu tiên viết hoa!');

        const istextarea = check($('#textarea_'), '0', '');
        
        const isphone = check($('#phone_'), /^0\d{9,12}$/, 'Số điện thoại tối đa 11 số!');

        const isaddress = check($('#address_'), /^[A-Z][a-zA-Zà-Ỹ ]+$/, 'Yêu cầu ký tự đầu tiên viết hoa!');

        if(isname && isemail && istitle && istextarea && isaddress && isphone) {
            alert('Bạn đã liên hệ thành công. Chúng tôi sẽ sớm liên hệ lại với Bạn');
            reset();
        }
    })

    $('#reset').click( (e) => {
        e.preventDefault();
        reset();
    })
})