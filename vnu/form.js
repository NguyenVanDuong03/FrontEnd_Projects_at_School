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
    $('#password_').val('');
    $('#checkbox_').prop('checked', false);
}

$(document).ready( () => {
    $('#name_').on('input', () => {
        check($('#name_'), /^[a-zA-Z]+$/, 'Tên đăng nhập chỉ chứa chữ!');
    })
    $('#password_').on('input', () => {
        check($('#password_'), /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/, 'Mật khẩu tối thiểu 8 ký tự, có ký tự hoa, ký tự thường, có ký tự số!');
    })

    $('#submit_').click( (e) => {
        e.preventDefault();

        const isname = check($('#name_'), /^[a-zA-Z]+$/, 'Tên đăng nhập chỉ chứa chữ!');

        const ispassword = check($('#password_'), /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/, 'Mật khẩu tối thiểu 8 ký tự, có ký tự hoa, ký tự thường, có ký tự số!');

        if(isname && ispassword) {
            alert('Bạn đã đăng nhập thành công');
            reset();
        }
    })
})