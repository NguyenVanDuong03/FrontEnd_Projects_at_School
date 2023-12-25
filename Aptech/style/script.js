// Bài tập tạo form, khi ấn vào nút Tạo hóa đơn thì hiển thị hóa đơn với nội dung nhập trong form

const khachhang = document.getElementById('khachhang');
const sdt = document.getElementById('sdt');
const diachi = document.getElementById('diachi');
const tensp = document.getElementById('tensp');
const hangsx = document.getElementsByName('hangsx');
const dongia = document.getElementById('dongia');
const soluong = document.getElementById('soluong');
const button = document.getElementById('button');
const form = document.querySelector('.form');

let namekh = document.getElementById('name-kh');
let phone = document.getElementById('phone');
let address = document.getElementById('address');

button.addEventListener('click', (e) => {
  e.preventDefault();
  check();
});

function check() {
  const khachHangValue = khachhang.value.trim();
  const sdtValue = sdt.value.trim();
  const diachiValue = diachi.value.trim();
  const tenspValue = tensp.value.trim();
  const selectedHangsx = document.querySelector('input[name="hangsx"]:checked');
  const dongiaValue = dongia.value.trim();
  const soluongValue = soluong.value.trim();

  if (
      khachHangValue === '' ||
      sdtValue === '' ||
      diachiValue === '' ||
      tenspValue === '' ||
      selectedHangsx === null ||
      dongiaValue === '' ||
      soluongValue === ''
  ) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
  }

    namekh.textContent = khachHangValue;
    phone.textContent = sdtValue;
    address.textContent = diachiValue;
    document.querySelector('.name-produt').textContent = tenspValue;
    document.querySelector('.quantity').textContent = soluongValue;
    document.querySelector('.bill').textContent = dongiaValue;

    form.reset();
}




