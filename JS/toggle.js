const toggle = document.getElementById('toggle');
const calculadoraSkin = document.getElementById('calculadora');
toggle.onclick = function() {
    toggle.classList.toggle('active');
    calculadoraSkin.classList.toggle('active');

}