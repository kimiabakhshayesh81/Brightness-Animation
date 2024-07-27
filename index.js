let input = document.querySelector('#range')
let container = document.querySelector('.container')

function changeInput(event){

    container.style.filter = 'brightness('+event.target.value +'%)'
}

input.addEventListener('change' , changeInput)