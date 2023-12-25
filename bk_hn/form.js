function check(id, regex, message = '') {
    if($(id).val().trim() === '') {
        $(id).parent().next('.form_message').text('Vui lòng nhập đầy đủ thông tin!').show();
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
    $('#title_').val('');
    $('#name_').val('');
    $('#email_').val('');
}

$(document).ready( () => {
    $('#title_').on('input', () => {
        check($('#title_'), '0', '');
    })
    
    $('#name_').on('input', () => {
        check($('#name_'), /^[a-zA-Zà-Ỹ ]+$/, 'Tên không hợp lệ!');
    })
    $('#email_').on('input', () => {
        check($('#email_'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email không hợp lệ');
    })

    $('#submit_').click( (e) => {
        e.preventDefault();

        const istitle = check($('#title_'), /^[a-zA-Zà-Ỹ0-9 ]+$/, 'Tiêu đề không hợp lệ!');
        const isname = check($('#name_'), /^[a-zA-Zà-Ỹ ]+$/, 'Tên không hợp lệ!');
        const isemail = check($('#email_'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email không hợp lệ');

        if(istitle && isname && isemail) {
            alert('Bạn đã liên hệ thành công');
            reset();
        }
    } )

})



