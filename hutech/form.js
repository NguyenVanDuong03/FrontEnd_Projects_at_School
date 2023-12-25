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
    $('#phone_').val('');
    $('#email_').val('');
    $('#title_').val('');
    $('#select_').val(0);
    $('#textarea_').val('');
}

$(document).ready( () => {
    $('#name_').on('input', () => {
        check($('#name_'), /^[a-zA-Zà-Ỹ ]+$/, 'Họ và tên chỉ chứa chữ!');
    })
    $('#phone_').on('input', () => {
        check($('#phone_'), /^0\d{9,12}$/, 'Số điện thoại bắt đầu bằng số 0 và độ dài từ 10 đến 12 số!');
    })
    $('#email_').on('input', () => {
        check($('#email_'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Nhập đúng định dạng Email!');
    })
    $('#title_').on('input', () => {
        check($('#title_'), '0', '');
    })

    $('#submit_').click( (e) => {
        e.preventDefault();

        const isname = check($('#name_'), /^[a-zA-Zà-Ỹ ]+$/, 'Họ và tên chỉ chứa chữ!');

        const isphone = check($('#phone_'), /^0\d{10,12}$/, 'Số điện thoại bắt đầu bằng số 0 và độ dài từ 10 đến 12 số!');

        const isemail = check($('#email_'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Nhập đúng định dạng Email!');

        const istitle = check($('#title_'), '0', '');

        if(isname && isphone && isemail && istitle) {
            alert('Bạn đã gửi liên hệ thành công. Chúng tôi sẽ sớm liên hệ lại với Bạn');
            reset();
        }
    })
})