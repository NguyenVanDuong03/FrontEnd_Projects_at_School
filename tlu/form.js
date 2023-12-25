function check(id, regex, message) {
    if($(id).val().trim() === '') {
        $(id).next('.form_message').text('Yêu cầu nhập đầy đủ thông tin!').show();
        return false;
    }else if(regex !== '0') {
        if(!regex.test($(id).val())) {
            $(id).next('.form_message').text(message).show();
            return false;
        }
    }
    $(id).next('.form_message').text('').show();
        return true;
}

function reset() {
    $('#name_').val('');
    $('#password_').val('');
}

$(document).ready( () => {
    $('#name_').on('input', () => {
        check($('#name_'), /^[a-zA-Z]+$/, 'Tên đăng nhập chỉ có thể chứa chữ!');
    })
    $('#password_').on('input', () => {
        check($('#password_'), /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/, 'Mật khẩu tối thiểu 8 ký tự, có ký tự hoa, có ký tự thường, có ký tự chữ số!');
    })

    $('#submit_').click( (e) => {
        e.preventDefault();

        const isname = check($('#name_'), /^[a-zA-Z]+$/, 'Tên đăng nhập chỉ có thể chứa chữ!');

        const ispassword = check($('#password_'), /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/, 'Mật khẩu tối thiểu 8 ký tự, có ký tự hoa, có ký tự thường, có ký tự chữ số!');

        if(isname && ispassword) {
            alert('Bạn đã đăng nhập thành công');
            reset();
        }
    })


})