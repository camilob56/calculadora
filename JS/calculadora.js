/**
 * Escuchamos con el Listener cuando carga el html
 * Declaramos contantes para buscar el display y otra los botones
 * Cuardamos los botones en un array
 */
window.addEventListener('load', () =>{
    const display = document.querySelector('.display');
    const keypadBtns = document.getElementsByClassName('keypad-boton');

    /* Declaramos otra constante para convertir el HTMLCollection a Array */
    const keypadBtnsArray = Array.from(keypadBtns);

    /* Iteramos por el array de los botones */
    keypadBtnsArray.forEach((button) => {
        /* A cada boton le agrego un listener que escuche el click */
        button.addEventListener('click', () =>{
            /*Cuando detecta el click ejecuta la funcion calculadora */
            calculadora(button, display);
        })
    })
});

function calculadora(button, display){
    /* Dependiendo el boton que presionemos ejecuta algun caso */
    /* Con el .iinerHTML sabremos que boton presionamos*/
    switch (button.innerHTML){
        /*En caso de c borrar | en caso de = calcular 
        resto de botones actualiza el texto deldisplay */
        case 'C': 
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display){
    /*Toma el string, resuelve y guardalo en el innerHTML del display*/
    display.innerHTML = eval(display.innerHTML); 
}

/**
 * Si el innerHTML es = 0 el contenido del display queda string vacio
 * de lo contrario sumamos en el display y el boton el innetHTML 
 * pondra en el display los botones que precionemos
 */
function actualizar(display, button){
    if(display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar (display){
    display.innerHTML = 0;
}