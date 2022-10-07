const buttons = document.querySelector('.btnCategory')


function renderBtn(array){
    for(let i = 0; i< array.length; i++){
        const button = document.createElement('button')
        button.innerText = array[i];
        button.classList.add('filterItem')
        buttons.append(button)
    }
}
renderBtn(categories);