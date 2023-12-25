function check(id, regex, message) {
    if($(id).val().trim() === '') {
        $(id).parent().next('.form_message').text('Yêu cầu nhập đầy đủ thông tin!').show();
        return false;
    }else if(regex != '0') {
        if(!regex.test($(id).val())) {
            $(id).parent().next('.form_message').text(message).show();
            return false;
        }
    }
    $(id).parent().next('.form_message').text('').show();
    return true;
}


function reset() {
    $('#email_').val('');
    $('#password_').val('');
    $('#checkbox_').prop('checked', false);
}

$(document).ready( () => {
    $('#email_').on('input', () => {
        check($('#email_'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Vui lòng nhập đúng định dạng Email!');
    })
    $('#password_').on('input', () => {
        check($('#password_'), /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/, ' Nhập đúng định dạng mật khẩu!');
    })

    $('#submit_').click( (e) => {
        e.preventDefault();

        const isemail = check($('#email_'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Vui lòng nhập đúng định dạng Email!');

        const ispassword = check($('#password_'), /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/, ' Nhập đúng định dạng mật khẩu!');

        if(isemail && ispassword) {
            alert('good chop!');
            reset();
        }
    })



})