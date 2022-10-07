function filterBtn(){
    const filterButtons = document.querySelectorAll('.filterItem')
    const mainList = document.querySelector('.cardUl')
  
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          mainList.innerHTML = ''
          const filter = button.innerText
    
          if(filter === 'Todos') {
            createCard(products)
          }
    
          const filteredCd = filterCard(filter)
    
          createCard(filteredCd)
        })
      })
}

function filterCard(text) {
    const cdFiltered = products.filter(item => item.category.includes(text))
  
    return cdFiltered
  }
  
filterBtn()