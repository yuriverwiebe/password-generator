const input = document.querySelector('.input');
const btn = document.querySelector('a');


function generator() {
    const inputSize = parseInt(document.querySelector('.inputSize').value, 10);
    let randomString = Math.random().toString(36).slice(-inputSize);
    input.value = randomString;
    console.log(inputSize)
}

function copy() {
    navigator.clipboard.writeText(input.value);
    btn.classList.add('active');
    setTimeout(function(){
        btn.classList.remove('active');

    }, 2000)
}