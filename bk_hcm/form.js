function check(id, regex, message) {
    if($(id).val().trim() === '') {
        $(id).next('.form_message').text('Yêu cầu nhập đầy đủ thông tin!').show();
        return false;
    }else if(regex != '0') {
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
    $('#email_').val('');
    $('#title_').val('');
    $('select').val(0);
    $('textarea').val('');
}

$(document).ready( () => {
    $('#name_').on('input', () => {
        check($('#name_'), /^[a-zA-Zà-Ỹ ]+$/, 'Tên của bạn không được chứa chữ số hoặc ký tự đặc biệt!');
    })
    $('#email_').on('input', () => {
        check($('#email_'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Yêu cầu nhập đúng định dạng Email! (e.g: Duongdepchai@gmail.com)');
    })
    $('#title_').on('input', () => {
        check($('#title_'), '0', '');
    })

    $('#submit_').click( (e) => {
        e.preventDefault();

        const isname = check($('#email_'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Yêu cầu nhập đúng định dạng Email! (e.g: Duongdepchai@gmail.com)');

        const isemail = check($('#email_'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Yêu cầu nhập đúng định dạng Email! (e.g: Duongdepchai@gmail.com)');

        const istitle = check($('#title_'), '0', '');

        if(isemail && isname && istitle) {
            alert('Bạn đã gửi liên hệ thành công. Chúng tôi sẽ sớm liên hệ lại với Bạn');
            reset();
        }
    })

})