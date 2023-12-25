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
    $('#email_').val('');
    $('#content_').val('');
}

$(document).ready( () => {
    $('#name_').on('input', () => {
        check($('#name_'), /^[a-zA-Zà-Ỹ ]+$/, 'Họ và tên chỉ chứa chữ!');
    })
    $('#email_').on('input', () => {
        check($('#email_'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Yêu cầu nhập đúng định dạng Email!');
    })

    $('#submit_').click( (e) => {
        e.preventDefault();

        const isname = check($('#name_'), /^[a-zA-Zà-Ỹ ]+$/, 'Họ và tên chỉ chứa chữ!');

        const isemail = check($('#email_'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Yêu cầu nhập đúng định dạng Email!');

        if(isname && isemail) {
            alert('Bạn đã liên hệ thành công. Chúng tôi sẽ sớm liên hệ lại với Bạn');
            reset();
        }
    })
})